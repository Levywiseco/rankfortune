import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import vm from "node:vm";

const require = createRequire(import.meta.url);
const ts = require("typescript");

const sourcePath = new URL("../src/lib/landing-pages.ts", import.meta.url);
const source = readFileSync(sourcePath, "utf8");
const { outputText } = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2022,
  },
});

const sandbox = {
  exports: {},
};

vm.runInNewContext(outputText, sandbox, {
  filename: sourcePath.pathname,
});

const { getLandingPage, landingPages } = sandbox.exports;

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const slugs = landingPages.map((page) => page.slug);
assert(new Set(slugs).size === slugs.length, "Landing page slugs must be unique.");

const page = getLandingPage("ai-citation-gap-audit");
assert(page, "Expected ai-citation-gap-audit landing page to exist.");
assert(page.title.includes("AI Citation Gap Audit"), "Title should name the audit.");
assert(page.description.toLowerCase().includes("citation"), "Description should include citation intent.");
assert(page.checks.length >= 4, "Citation gap page should define at least four checks.");
assert(page.outcomes.length >= 3, "Citation gap page should define at least three outcomes.");
assert(page.sections.length === 3, "Citation gap page should define three narrative sections.");
assert(page.faqs.length === 3, "Citation gap page should define three FAQ entries.");

const pageText = JSON.stringify(page).toLowerCase();
for (const expected of [
  "chatgpt",
  "perplexity",
  "gemini",
  "claude",
  "citation",
  "source",
  "competitor",
  "share of voice",
  "prompt",
]) {
  assert(pageText.includes(expected), `Citation gap page should mention ${expected}.`);
}

const guardrailsPage = getLandingPage("ai-marketing-agent-guardrails-audit");
assert(guardrailsPage, "Expected ai-marketing-agent-guardrails-audit landing page to exist.");
assert(
  guardrailsPage.title.includes("AI Marketing Agent Guardrails Audit"),
  "Guardrails page title should name the audit.",
);
assert(
  guardrailsPage.description.toLowerCase().includes("approval"),
  "Guardrails page description should include approval intent.",
);
assert(guardrailsPage.checks.length >= 4, "Guardrails page should define at least four checks.");
assert(
  guardrailsPage.outcomes.length >= 3,
  "Guardrails page should define at least three outcomes.",
);
assert(
  guardrailsPage.sections.length === 3,
  "Guardrails page should define three narrative sections.",
);
assert(guardrailsPage.faqs.length === 3, "Guardrails page should define three FAQ entries.");

const guardrailsPageText = JSON.stringify(guardrailsPage).toLowerCase();
for (const expected of [
  "agent",
  "approval",
  "guardrail",
  "ads",
  "outbound",
  "ai search visibility",
  "landing",
  "lead",
  "read-only",
]) {
  assert(
    guardrailsPageText.includes(expected),
    `Guardrails page should mention ${expected}.`,
  );
}

const ugcAdPage = getLandingPage("ai-ugc-ad-creative-audit");
assert(ugcAdPage, "Expected ai-ugc-ad-creative-audit landing page to exist.");
assert(
  ugcAdPage.title.includes("AI UGC Ad Creative Audit"),
  "UGC ad creative page title should name the audit.",
);
assert(
  ugcAdPage.description.toLowerCase().includes("product url"),
  "UGC ad creative page description should include product URL intent.",
);
assert(ugcAdPage.checks.length >= 4, "UGC ad creative page should define at least four checks.");
assert(
  ugcAdPage.outcomes.length >= 3,
  "UGC ad creative page should define at least three outcomes.",
);
assert(
  ugcAdPage.sections.length === 3,
  "UGC ad creative page should define three narrative sections.",
);
assert(ugcAdPage.faqs.length === 3, "UGC ad creative page should define three FAQ entries.");

const ugcAdPageText = JSON.stringify(ugcAdPage).toLowerCase();
for (const expected of [
  "ugc",
  "product url",
  "tiktok",
  "meta",
  "hook",
  "storyboard",
  "claim",
  "creative",
  "landing",
  "guardrail",
]) {
  assert(
    ugcAdPageText.includes(expected),
    `UGC ad creative page should mention ${expected}.`,
  );
}

const geoGrowthPage = getLandingPage("geo-growth-score-audit");
assert(geoGrowthPage, "Expected geo-growth-score-audit landing page to exist.");
assert(
  geoGrowthPage.title.includes("GEO Growth Score Audit"),
  "GEO growth score page title should name the audit.",
);
assert(
  geoGrowthPage.description.toLowerCase().includes("growth checklist"),
  "GEO growth score page description should include checklist intent.",
);
assert(geoGrowthPage.checks.length >= 4, "GEO growth score page should define at least four checks.");
assert(
  geoGrowthPage.outcomes.length >= 3,
  "GEO growth score page should define at least three outcomes.",
);
assert(
  geoGrowthPage.sections.length === 3,
  "GEO growth score page should define three narrative sections.",
);
assert(geoGrowthPage.faqs.length === 3, "GEO growth score page should define three FAQ entries.");

const geoGrowthPageText = JSON.stringify(geoGrowthPage).toLowerCase();
for (const expected of [
  "geo",
  "ai search",
  "citation",
  "source",
  "competitor",
  "growth checklist",
  "score",
  "monitoring",
  "prompt",
  "free scan",
]) {
  assert(
    geoGrowthPageText.includes(expected),
    `GEO growth score page should mention ${expected}.`,
  );
}

const landingPageConversionPage = getLandingPage("ai-landing-page-conversion-audit");
assert(
  landingPageConversionPage,
  "Expected ai-landing-page-conversion-audit landing page to exist.",
);
assert(
  landingPageConversionPage.title.includes("AI Landing Page Conversion Audit"),
  "Landing page conversion page title should name the audit.",
);
assert(
  landingPageConversionPage.description.toLowerCase().includes("lead forms"),
  "Landing page conversion page description should include lead form intent.",
);
assert(
  landingPageConversionPage.checks.length >= 4,
  "Landing page conversion page should define at least four checks.",
);
assert(
  landingPageConversionPage.outcomes.length >= 3,
  "Landing page conversion page should define at least three outcomes.",
);
assert(
  landingPageConversionPage.sections.length === 3,
  "Landing page conversion page should define three narrative sections.",
);
assert(
  landingPageConversionPage.faqs.length === 3,
  "Landing page conversion page should define three FAQ entries.",
);

const landingPageConversionText = JSON.stringify(landingPageConversionPage).toLowerCase();
for (const expected of [
  "landing page",
  "seo",
  "geo",
  "form",
  "lead",
  "conversion",
  "schema",
  "publishing",
  "github",
  "vercel",
]) {
  assert(
    landingPageConversionText.includes(expected),
    `Landing page conversion page should mention ${expected}.`,
  );
}

const detectorBenchmarkPage = getLandingPage("ai-detector-benchmark-audit");
assert(
  detectorBenchmarkPage,
  "Expected ai-detector-benchmark-audit landing page to exist.",
);
assert(
  detectorBenchmarkPage.title.includes("AI Detector Benchmark Audit"),
  "Detector benchmark page title should name the audit.",
);
assert(
  detectorBenchmarkPage.description.toLowerCase().includes("benchmark"),
  "Detector benchmark page description should include benchmark intent.",
);
assert(
  detectorBenchmarkPage.checks.length >= 4,
  "Detector benchmark page should define at least four checks.",
);
assert(
  detectorBenchmarkPage.outcomes.length >= 3,
  "Detector benchmark page should define at least three outcomes.",
);
assert(
  detectorBenchmarkPage.sections.length === 3,
  "Detector benchmark page should define three narrative sections.",
);
assert(
  detectorBenchmarkPage.faqs.length === 3,
  "Detector benchmark page should define three FAQ entries.",
);

const detectorBenchmarkText = JSON.stringify(detectorBenchmarkPage).toLowerCase();
for (const expected of [
  "benchmark",
  "detector",
  "humanizer",
  "methodology",
  "false positive",
  "gptzero",
  "originality",
  "winston",
  "sample",
  "rankfortune",
]) {
  assert(
    detectorBenchmarkText.includes(expected),
    `Detector benchmark page should mention ${expected}.`,
  );
}
