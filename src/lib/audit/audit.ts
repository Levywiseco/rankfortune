import * as cheerio from "cheerio";
import type { AnyNode } from "domhandler";
import type {
  AuditInput,
  AuditReport,
  AuditScore,
  AuditSignal,
  FixItem,
  PageSnapshot,
} from "./types";
import { analyzeAiCrawlerAccess } from "./robots";

const REQUEST_TIMEOUT_MS = 9000;
const MAX_HTML_BYTES = 1_000_000;

function normalizeUrl(rawUrl: string) {
  const trimmed = rawUrl.trim();
  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;
  const url = new URL(withProtocol);

  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error("Only HTTP and HTTPS URLs are supported.");
  }

  return url;
}

async function fetchText(url: string, timeoutMs = REQUEST_TIMEOUT_MS) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      headers: {
        "user-agent":
          "AIVisibilityAuditBot/0.1 (+https://example.com/bot; site audit preview)",
        accept: "text/html,application/xhtml+xml,text/plain;q=0.9,*/*;q=0.8",
      },
      redirect: "follow",
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Request failed with HTTP ${response.status}.`);
    }

    const text = await response.text();
    return text.slice(0, MAX_HTML_BYTES);
  } finally {
    clearTimeout(timeout);
  }
}

function unique(values: string[]) {
  return Array.from(new Set(values.filter(Boolean)));
}

function compactText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function elementText($: cheerio.CheerioAPI, element: AnyNode) {
  return compactText(
    $(element)
      .contents()
      .map((_, child) => compactText($(child).text()))
      .get()
      .join(" "),
  );
}

function cleanHeadline(value: string) {
  const compacted = compactText(value);
  const firstWord = compacted.split(/\s+/)[0];

  if (firstWord && compacted.indexOf(firstWord) !== compacted.lastIndexOf(firstWord)) {
    return compactText(compacted.slice(compacted.lastIndexOf(firstWord)));
  }

  return compacted;
}

function scoreFromSignals(signals: AuditSignal[], keys: string[]): AuditScore {
  const relevant = signals.filter((signal) => keys.includes(signal.key));
  const maxScore = relevant.reduce((sum, signal) => sum + signal.weight, 0);
  const score = relevant.reduce(
    (sum, signal) => sum + (signal.passed ? signal.weight : 0),
    0,
  );

  return {
    label: "",
    score,
    maxScore,
    summary: "",
  };
}

function toPercent(score: AuditScore) {
  return Math.round((score.score / Math.max(score.maxScore, 1)) * 100);
}

function parseSchemaTypes($: cheerio.CheerioAPI) {
  const types: string[] = [];

  $("script[type='application/ld+json']").each((_, element) => {
    const raw = $(element).contents().text();
    if (!raw) return;

    try {
      const json = JSON.parse(raw);
      const candidates = Array.isArray(json) ? json : [json];
      for (const item of candidates) {
        if (item && typeof item === "object") {
          const type = (item as { "@type"?: unknown })["@type"];
          if (typeof type === "string") types.push(type);
          if (Array.isArray(type)) {
            types.push(...type.filter((entry) => typeof entry === "string"));
          }
        }
      }
    } catch {
      types.push("Invalid JSON-LD");
    }
  });

  return unique(types);
}

function detectPages(baseUrl: URL, internalLinks: string[]) {
  const joined = internalLinks
    .map((href) => {
      try {
        return new URL(href, baseUrl).pathname.toLowerCase();
      } catch {
        return "";
      }
    })
    .join(" ");

  return {
    pricing: /pricing|plans|price/.test(joined),
    blog: /blog|resources|articles|guides/.test(joined),
    docs: /docs|documentation|help|support/.test(joined),
    faq: /faq|questions/.test(joined),
    alternatives: /alternatives|compare|comparison|versus|vs/.test(joined),
    useCases: /use-cases|solutions|customers|industries/.test(joined),
    about: /about|company|team/.test(joined),
  };
}

async function fetchRobotsAndSitemap(origin: string) {
  const robotsUrl = `${origin}/robots.txt`;
  let robotsText = "";

  try {
    robotsText = await fetchText(robotsUrl, 5000);
  } catch {
    return {
      robotsTxt: {
        exists: false,
        sitemapUrls: [],
        aiCrawlers: analyzeAiCrawlerAccess(""),
      },
      sitemap: { exists: false, urlCount: 0 },
    };
  }

  const sitemapUrls = unique(
    robotsText
      .split("\n")
      .map((line) => line.match(/^sitemap:\s*(.+)$/i)?.[1]?.trim() ?? ""),
  );

  const sitemapUrl = sitemapUrls[0] ?? `${origin}/sitemap.xml`;
  let sitemapText = "";
  try {
    sitemapText = await fetchText(sitemapUrl, 5000);
  } catch {
    return {
      robotsTxt: {
        exists: true,
        sitemapUrls,
        aiCrawlers: analyzeAiCrawlerAccess(robotsText),
      },
      sitemap: { exists: false, urlCount: 0 },
    };
  }

  return {
    robotsTxt: {
      exists: true,
      sitemapUrls,
      aiCrawlers: analyzeAiCrawlerAccess(robotsText),
    },
    sitemap: {
      exists: true,
      urlCount: (sitemapText.match(/<loc>/g) ?? []).length,
    },
  };
}

function buildSignals(snapshot: PageSnapshot): AuditSignal[] {
  const titleLength = snapshot.title.length;
  const descriptionLength = snapshot.description.length;
  const pageCount =
    Number(snapshot.detectedPages.pricing) +
    Number(snapshot.detectedPages.blog) +
    Number(snapshot.detectedPages.docs) +
    Number(snapshot.detectedPages.faq) +
    Number(snapshot.detectedPages.alternatives) +
    Number(snapshot.detectedPages.useCases) +
    Number(snapshot.detectedPages.about);
  const allowedAiCrawlers = snapshot.robotsTxt.aiCrawlers.filter(
    (crawler) => crawler.allowed,
  ).length;

  return [
    {
      key: "title",
      label: "Clear title",
      passed: titleLength >= 25 && titleLength <= 70,
      detail: snapshot.title
        ? `${titleLength} characters`
        : "No title tag found",
      weight: 8,
    },
    {
      key: "description",
      label: "Useful meta description",
      passed: descriptionLength >= 70 && descriptionLength <= 170,
      detail: snapshot.description
        ? `${descriptionLength} characters`
        : "No meta description found",
      weight: 8,
    },
    {
      key: "h1",
      label: "Single clear H1",
      passed: snapshot.h1.length === 1 && snapshot.h1[0].length >= 12,
      detail: `${snapshot.h1.length} H1 found`,
      weight: 8,
    },
    {
      key: "canonical",
      label: "Canonical URL",
      passed: Boolean(snapshot.canonical),
      detail: snapshot.canonical || "No canonical tag found",
      weight: 6,
    },
    {
      key: "robots",
      label: "Indexable page",
      passed: !/noindex/i.test(snapshot.robotsIndexable),
      detail: snapshot.robotsIndexable || "No robots noindex detected",
      weight: 8,
    },
    {
      key: "schema",
      label: "Structured data",
      passed: snapshot.schemaTypes.length > 0 && !snapshot.schemaTypes.includes("Invalid JSON-LD"),
      detail: snapshot.schemaTypes.length
        ? snapshot.schemaTypes.join(", ")
        : "No JSON-LD schema found",
      weight: 10,
    },
    {
      key: "robotsTxt",
      label: "robots.txt",
      passed: snapshot.robotsTxt.exists,
      detail: snapshot.robotsTxt.exists
        ? "robots.txt found"
        : "robots.txt not found",
      weight: 6,
    },
    {
      key: "aiCrawlerAccess",
      label: "AI crawler access",
      passed: allowedAiCrawlers === snapshot.robotsTxt.aiCrawlers.length,
      detail: `${allowedAiCrawlers}/${snapshot.robotsTxt.aiCrawlers.length} named AI crawlers allowed at /`,
      weight: 8,
    },
    {
      key: "sitemap",
      label: "Sitemap discoverability",
      passed: snapshot.sitemap.exists && snapshot.sitemap.urlCount > 0,
      detail: snapshot.sitemap.exists
        ? `${snapshot.sitemap.urlCount} sitemap URLs found`
        : "No sitemap found",
      weight: 8,
    },
    {
      key: "pricing",
      label: "Pricing signal",
      passed: snapshot.detectedPages.pricing,
      detail: snapshot.detectedPages.pricing
        ? "Pricing/plans page detected"
        : "No pricing/plans page detected",
      weight: 6,
    },
    {
      key: "faq",
      label: "Question-answer content",
      passed: snapshot.detectedPages.faq || snapshot.schemaTypes.includes("FAQPage"),
      detail:
        snapshot.detectedPages.faq || snapshot.schemaTypes.includes("FAQPage")
          ? "FAQ signal detected"
          : "No FAQ signal detected",
      weight: 8,
    },
    {
      key: "useCases",
      label: "Use-case pages",
      passed: snapshot.detectedPages.useCases,
      detail: snapshot.detectedPages.useCases
        ? "Solutions/use-cases signal detected"
        : "No use-case page signal detected",
      weight: 8,
    },
    {
      key: "alternatives",
      label: "Comparison pages",
      passed: snapshot.detectedPages.alternatives,
      detail: snapshot.detectedPages.alternatives
        ? "Comparison/alternatives signal detected"
        : "No alternatives/comparison page signal detected",
      weight: 8,
    },
    {
      key: "contentDepth",
      label: "Crawlable homepage copy",
      passed: snapshot.wordCount >= 350,
      detail: `${snapshot.wordCount} visible words found`,
      weight: 8,
    },
    {
      key: "internalLinks",
      label: "Internal link graph",
      passed: snapshot.internalLinks.length >= 8,
      detail: `${snapshot.internalLinks.length} internal links found`,
      weight: 6,
    },
    {
      key: "entityCoverage",
      label: "Entity coverage",
      passed: pageCount >= 4,
      detail: `${pageCount}/7 core entity pages detected`,
      weight: 8,
    },
  ];
}

function buildScores(signals: AuditSignal[]) {
  const technical = scoreFromSignals(signals, [
    "canonical",
    "robots",
    "robotsTxt",
    "aiCrawlerAccess",
    "sitemap",
    "internalLinks",
  ]);
  technical.label = "Technical Discoverability";
  technical.summary = "Can crawlers find, index, and understand the site basics?";

  const messaging = scoreFromSignals(signals, [
    "title",
    "description",
    "h1",
    "contentDepth",
  ]);
  messaging.label = "Brand Clarity";
  messaging.summary = "Can an AI system quickly explain what the product does?";

  const answerEngine = scoreFromSignals(signals, [
    "schema",
    "faq",
    "useCases",
    "alternatives",
    "entityCoverage",
  ]);
  answerEngine.label = "AI Answer Readiness";
  answerEngine.summary = "Does the site provide structured answers and comparison signals?";

  return [technical, messaging, answerEngine];
}

function addFix(
  fixes: FixItem[],
  condition: boolean,
  item: FixItem,
) {
  if (condition) fixes.push(item);
}

function buildFixes(snapshot: PageSnapshot, signals: AuditSignal[]) {
  const failed = new Set(
    signals.filter((signal) => !signal.passed).map((signal) => signal.key),
  );
  const fixes: FixItem[] = [];

  addFix(fixes, failed.has("description"), {
    title: "Rewrite the meta description around a clear job-to-be-done",
    priority: "High",
    effort: "Small",
    detail:
      "Describe the user, the problem, and the outcome in one sentence. This helps search engines and AI answer engines classify the product.",
  });
  addFix(fixes, failed.has("schema"), {
    title: "Add SoftwareApplication and FAQPage JSON-LD",
    priority: "High",
    effort: "Small",
    detail:
      "Structured data gives AI crawlers explicit product, category, pricing, and question-answer signals.",
  });
  addFix(fixes, failed.has("sitemap"), {
    title: "Expose a sitemap from robots.txt",
    priority: "High",
    effort: "Small",
    detail:
      "Add a sitemap.xml and reference it in robots.txt so crawlers can discover every important page.",
  });
  addFix(fixes, failed.has("aiCrawlerAccess"), {
    title: "Unblock AI search crawlers in robots.txt",
    priority: "High",
    effort: "Small",
    detail: `Review the rules blocking ${snapshot.robotsTxt.aiCrawlers
      .filter((crawler) => !crawler.allowed)
      .map((crawler) => crawler.userAgent)
      .join(", ")}. Allow the search and user-fetch bots you want to surface your public pages.`,
  });
  addFix(fixes, failed.has("faq"), {
    title: "Create an FAQ block with buyer-intent questions",
    priority: "High",
    effort: "Small",
    detail:
      "Answer pricing, use case, data safety, alternatives, and setup questions in short, citeable paragraphs.",
  });
  addFix(fixes, failed.has("alternatives"), {
    title: "Publish one comparison or alternatives page",
    priority: "Medium",
    effort: "Medium",
    detail:
      "AI answers often recommend products through comparison-style prompts. Add a page that honestly compares your product with the most searched alternatives.",
  });
  addFix(fixes, failed.has("useCases"), {
    title: "Add use-case pages for the top 2-3 customer jobs",
    priority: "Medium",
    effort: "Medium",
    detail:
      "Separate pages for concrete use cases improve entity coverage and give answer engines more specific retrieval targets.",
  });
  addFix(fixes, failed.has("contentDepth"), {
    title: "Expand crawlable homepage copy",
    priority: "Medium",
    effort: "Small",
    detail:
      "Add plain HTML sections for who it is for, how it works, output examples, and common objections.",
  });

  if (fixes.length < 3 && snapshot.detectedPages.blog) {
    fixes.push({
      title: "Turn existing blog content into answer-style pages",
      priority: "Low",
      effort: "Medium",
      detail:
        "Rewrite the strongest posts as direct answers to buyer questions, then interlink them from the homepage and product pages.",
    });
  }

  return fixes;
}

function buildCopySuggestions(snapshot: PageSnapshot, input: AuditInput) {
  const titleCore = compactText(
    snapshot.title.replace(/\s*[|–—-]\s*.+$/, ""),
  );
  const product = input.productName?.trim() || titleCore || snapshot.host;
  const headlineCore = cleanHeadline(
    snapshot.h1[0]?.replace(/\s*[|–—-]\s*.+$/, "") ?? "",
  );
  const proposition =
    [titleCore, headlineCore].find(
      (value) =>
        value &&
        value.length >= 12 &&
        value.length <= 80 &&
        value.toLowerCase() !== product.toLowerCase(),
    ) ?? "software that solves a specific customer workflow";

  return {
    title: `${product} - ${proposition}`,
    description: `${product} helps buyers understand ${proposition.toLowerCase()} with clear use cases, pricing, FAQs, and comparison content built for search and AI answer engines.`,
    faq: [
      `What does ${product} do?`,
      `Who is ${product} best for?`,
      `How is ${product} different from alternatives?`,
      `How much does ${product} cost?`,
      `Can ${product} be used by small teams?`,
    ],
    schemaTypes: ["SoftwareApplication", "FAQPage", "Organization"],
  };
}

function parseAiJson(text: string) {
  try {
    return JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("AI response did not include JSON");
    return JSON.parse(match[0]);
  }
}

async function requestAiJson(
  input: AuditInput,
  snapshot: PageSnapshot,
  baseUrl: string,
) {
  const payload = {
    input,
    page: {
      host: snapshot.host,
      title: snapshot.title,
      description: snapshot.description,
      h1: snapshot.h1,
      h2: snapshot.h2.slice(0, 10),
      schemaTypes: snapshot.schemaTypes,
      detectedPages: snapshot.detectedPages,
      aiCrawlers: snapshot.robotsTxt.aiCrawlers,
      textSample: snapshot.textSample,
    },
    requiredShape: {
      summary: "one sentence",
      positioning: "one sentence",
      recommendations: ["3 concise recommendations"],
    },
  };

  if (baseUrl.includes("api.kimi.com/coding")) {
    const response = await fetch(`${baseUrl}/v1/messages`, {
      method: "POST",
      headers: {
        "x-api-key": process.env.OPENAI_API_KEY ?? "",
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
        "user-agent": "claude-code/0.1.0",
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || process.env.AI_MODEL || "kimi-k2.6",
        max_tokens: 700,
        system:
          "You are an SEO and AI search visibility auditor. Return concise JSON only. Do not use markdown.",
        messages: [
          {
            role: "user",
            content: JSON.stringify(payload),
          },
        ],
      }),
    });

    if (!response.ok) throw new Error(`AI request failed ${response.status}`);
    const json = await response.json();
    const text = (json.content ?? [])
      .map((content: { text?: string }) => content.text ?? "")
      .join("");
    if (!text) throw new Error("AI response did not include content");
    return parseAiJson(text);
  }

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || process.env.AI_MODEL || "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content:
            "You are an SEO and AI search visibility auditor. Return concise JSON only.",
        },
        {
          role: "user",
          content: JSON.stringify(payload),
        },
      ],
      response_format: { type: "json_object" },
      temperature: 0.2,
    }),
  });

  if (!response.ok) throw new Error(`AI request failed ${response.status}`);
  const json = await response.json();
  const text = json.choices?.[0]?.message?.content;
  if (!text) throw new Error("AI response did not include content");
  return parseAiJson(text);
}

async function buildOptionalAiReport(
  input: AuditInput,
  snapshot: PageSnapshot,
  fixes: FixItem[],
) {
  if (!process.env.OPENAI_API_KEY) {
    return {
      enabled: false,
      summary:
        "AI report generation is not connected yet. Add OPENAI_API_KEY to generate a richer narrative report.",
      positioning:
        cleanHeadline(snapshot.h1[0] ?? "") ||
        `${snapshot.host} needs clearer product positioning for AI answer engines.`,
      recommendations: fixes.slice(0, 3).map((fix) => fix.title),
    };
  }

  try {
    const baseUrl =
      process.env.OPENAI_BASE_URL?.replace(/\/$/, "") ||
      "https://api.openai.com/v1";
    const parsed = await requestAiJson(input, snapshot, baseUrl);

    return {
      enabled: true,
      summary: String(parsed.summary ?? ""),
      positioning: String(parsed.positioning ?? ""),
      recommendations: Array.isArray(parsed.recommendations)
        ? parsed.recommendations.slice(0, 3).map(String)
        : fixes.slice(0, 3).map((fix) => fix.title),
    };
  } catch {
    return {
      enabled: false,
      summary:
        "AI report generation failed, so this report is using deterministic audit rules.",
      positioning:
        cleanHeadline(snapshot.h1[0] ?? "") ||
        `${snapshot.host} needs clearer product positioning for AI answer engines.`,
      recommendations: fixes.slice(0, 3).map((fix) => fix.title),
    };
  }
}

async function snapshotPage(inputUrl: string): Promise<PageSnapshot> {
  const url = normalizeUrl(inputUrl);
  const html = await fetchText(url.toString());
  const $ = cheerio.load(html);
  const finalUrl = url.toString();
  const title = compactText($("title").first().text());
  const description = compactText(
    $("meta[name='description']").attr("content") ?? "",
  );
  const h1 = unique(
    $("h1")
      .map((_, element) => elementText($, element))
      .get(),
  ).slice(0, 6);
  const h2 = unique(
    $("h2")
      .map((_, element) => elementText($, element))
      .get(),
  ).slice(0, 24);
  const canonical = $("link[rel='canonical']").attr("href") ?? "";
  const robotsIndexable = $("meta[name='robots']").attr("content") ?? "";
  const schemaTypes = parseSchemaTypes($);
  const internalLinks = unique(
    $("a[href]")
      .map((_, element) => {
        const href = $(element).attr("href");
        if (!href) return "";
        try {
          const target = new URL(href, url);
          return target.host === url.host ? target.pathname : "";
        } catch {
          return "";
        }
      })
      .get(),
  ).slice(0, 80);
  const text = compactText($("body").text());
  const wordCount = text ? text.split(/\s+/).length : 0;
  const robotsAndSitemap = await fetchRobotsAndSitemap(url.origin);

  return {
    finalUrl,
    host: url.host,
    title,
    description,
    h1,
    h2,
    canonical,
    robotsIndexable,
    schemaTypes,
    internalLinks,
    detectedPages: detectPages(url, internalLinks),
    wordCount,
    textSample: text.slice(0, 1600),
    ...robotsAndSitemap,
  };
}

export async function runAudit(input: AuditInput): Promise<AuditReport> {
  const snapshot = await snapshotPage(input.url);
  const signals = buildSignals(snapshot);
  const scores = buildScores(signals);
  const biggestGaps = buildFixes(snapshot, signals).slice(0, 5);
  const sevenDayPlan = biggestGaps.slice(0, 4);
  const overallScore = Math.round(
    scores.reduce((sum, score) => sum + toPercent(score), 0) / scores.length,
  );
  const aiReport = await buildOptionalAiReport(input, snapshot, biggestGaps);

  return {
    auditedAt: new Date().toISOString(),
    input,
    snapshot,
    overallScore,
    scores,
    signals,
    biggestGaps,
    sevenDayPlan,
    copySuggestions: buildCopySuggestions(snapshot, input),
    aiReport,
  };
}
