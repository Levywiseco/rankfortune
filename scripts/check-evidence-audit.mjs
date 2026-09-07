import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const ts = require("typescript");
const cheerio = require("cheerio");
const cache = new Map();
let fetchImpl = async () => { throw new Error("Unexpected network call"); };
function load(relative) {
  const file = resolve(root, relative);
  if (cache.has(file)) return cache.get(file);
  const exports = {};
  cache.set(file, exports);
  const source = readFileSync(file, "utf8");
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } });
  const localRequire = (name) => {
    if (name.startsWith(".")) return load(resolve(dirname(file), name) + ".ts");
    if (name.startsWith("@/")) return load("src/" + name.slice(2) + ".ts");
    return require(name);
  };
  vm.runInNewContext(outputText, { exports, require: localRequire, URL, Headers, Response, TextDecoder,
    AbortController, AbortSignal, setTimeout, clearTimeout, console, process: { env: {} },
    fetch: (...args) => fetchImpl(...args) }, { filename: file });
  return exports;
}
const audit = load("src/lib/audit/audit.ts");
const email = load("src/lib/report-email.ts");
const base = "https://fixture.example";
const html = '<html><head><title>工具</title><meta name="description" content="本地工具"><link rel="canonical" href="/"></head><body><h1>工具</h1><section id="pricing"><h2>Pricing</h2><p>$5 or free</p></section><a href="#pricing">Plans</a><script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"WebApplication","author":{"@type":"Organization"}}]}</script></body></html>';
const xml = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>' + base + '/</loc></url></urlset>';
let calls = [];
function network({ page = html, robots = "User-agent: *\nAllow: /", robotsStatus = 200, robotsError = false, sitemap = xml, sitemapStatus = 200, headers = {} } = {}) {
  calls = [];
  fetchImpl = async (url) => {
    calls.push(String(url));
    const parsed = new URL(url);
    if (parsed.pathname === "/robots.txt") {
      if (robotsError) throw new Error("Simulated timeout");
      return new Response(robots, { status: robotsStatus });
    }
    if (parsed.pathname === "/sitemap.xml") return new Response(sitemap, { status: sitemapStatus });
    return new Response(page, { headers: { "content-type": "text/html", ...headers } });
  };
}
const results = [];
async function check(name, fn) { await fn(); results.push(name); console.log("PASS " + name); }
const state = (report, key) => report.signals.find((item) => item.key === key)?.state;

await check("recursive graph, nested objects, type arrays and invalid JSON-LD", () => {
  const types = audit.parseSchemaTypes(cheerio.load(html));
  assert(types.includes("WebApplication") && types.includes("Organization"));
  const array = audit.parseSchemaTypes(cheerio.load('<script type="application/ld+json">[{"@type":["Product","Thing"]}]</script>'));
  assert(array.includes("Product") && array.includes("Thing"));
  assert(audit.parseSchemaTypes(cheerio.load('<script type="application/ld+json">{bad}</script>')).includes("Invalid JSON-LD"));
});
await check("in-page anchors and actual pricing text are candidates", () => {
  assert(audit.detectPages(new URL(base), ["/#pricing"]).pricing);
  assert(audit.detectPages(new URL(base), [], "USD 12").pricing);
});
await check("robots timeout is unknown and does not suppress sitemap fetch", async () => {
  network({ robotsError: true });
  const report = await audit.runAudit({ url: base });
  assert.equal(report.snapshot.robotsTxt.exists, null);
  assert(report.snapshot.robotsTxt.aiCrawlers.every((item) => item.allowed === null));
  assert.equal(state(report, "robotsTxt"), "unknown");
  assert.equal(report.snapshot.sitemap.exists, true);
  assert(calls.includes(base + "/sitemap.xml"));
});
await check("missing robots is not a false search failure or verified access", async () => {
  network({ robotsStatus: 404 });
  const report = await audit.runAudit({ url: base });
  assert.equal(report.snapshot.robotsTxt.exists, false);
  assert(report.snapshot.robotsTxt.aiCrawlers.every((item) => item.allowed === null));
  assert.equal(state(report, "robotsTxt"), "observed");
});
await check("final URL path and query are supplied to robots evaluation", async () => {
  network({ robots: "User-agent: *\nDisallow: /private\nAllow: /private/public" });
  const report = await audit.runAudit({ url: base + "/private?test=1" });
  assert.equal(report.snapshot.robotsTxt.checkedPath, "/private?test=1");
  assert.equal(state(report, "crawler:OAI-SearchBot"), "issue");
  network({ robots: "User-agent: *\nDisallow: /private\nAllow: /private/public" });
  const allowed = await audit.runAudit({ url: base + "/private/public" });
  assert.equal(state(allowed, "crawler:OAI-SearchBot"), "observed");
});
await check("training opt-out creates no search issue or unblock task", async () => {
  network({ robots: "User-agent: *\nAllow: /\nUser-agent: GPTBot\nDisallow: /" });
  const report = await audit.runAudit({ url: base });
  assert.equal(state(report, "crawler:OAI-SearchBot"), "observed");
  assert.equal(report.snapshot.robotsTxt.aiCrawlers.find((item) => item.userAgent === "GPTBot").allowed, false);
  assert(!report.biggestGaps.some((item) => item.signalKey.includes("GPTBot")));
});
await check("named X-Robots-Tag noindex does not become a global exclusion", async () => {
  network({ headers: { "x-robots-tag": "googlebot: noindex, nofollow, bingbot: nofollow" } });
  const report = await audit.runAudit({ url: base });
  assert.equal(state(report, "indexing:googlebot"), "issue");
  assert.equal(state(report, "indexing:bingbot"), "observed");
  assert.equal(state(report, "indexing:oai-searchbot"), "observed");
});
await check("generic and uppercase agent meta noindex/none are detected", async () => {
  network({ page: html.replace("</head>", '<meta name="Googlebot" content="none"></head>') });
  const report = await audit.runAudit({ url: base });
  assert.equal(state(report, "indexing:googlebot"), "issue");
  network({ headers: { "x-robots-tag": "noindex" } });
  const global = await audit.runAudit({ url: base });
  assert.equal(state(global, "indexing:oai-searchbot"), "issue");
});
await check("cross-domain canonical is observed, not automatically rewritten", async () => {
  network({ page: html.replace('rel="canonical" href="/"', 'rel="canonical" href="https://syndication.example/article"') });
  const report = await audit.runAudit({ url: base });
  assert.equal(state(report, "canonical"), "observed");
  assert(!report.biggestGaps.some((item) => item.signalKey === "canonical"));
});
await check("sitemap index references are not called indexed pages", async () => {
  network({ sitemap: '<sitemapindex><sitemap><loc>' + base + '/child.xml</loc></sitemap></sitemapindex>' });
  const report = await audit.runAudit({ url: base });
  assert.equal(report.snapshot.sitemap.kind, "sitemapindex");
  assert(report.evidence.sources.find((item) => item.label === "Sitemap sample").detail.includes("child sitemap"));
});
await check("non-XML sitemap and robots HTML stay unknown", async () => {
  network({ sitemap: "<html>Not a sitemap</html>", robots: "<html>challenge</html>" });
  const report = await audit.runAudit({ url: base });
  assert.equal(report.snapshot.sitemap.exists, null);
  assert(report.snapshot.robotsTxt.aiCrawlers.every((item) => item.allowed === null));
});
await check("no fixed lengths, page quotas or hidden overall scoring", async () => {
  network({ page: '<html><head><title>工具</title></head><body><h1>工具</h1><p>完成任务。</p></body></html>' });
  const report = await audit.runAudit({ url: base });
  assert.equal(state(report, "title"), "observed");
  assert.equal(state(report, "h1"), "observed");
  assert.equal(state(report, "pricing"), "observed");
  assert(!("overallScore" in report) && !("scores" in report));
  assert(!report.biggestGaps.some((item) => ["faq", "pricing", "alternatives", "useCases"].includes(item.signalKey)));
  assert.equal(report.tracks.find((track) => track.id === "visibility").state, "not-measured");
});
await check("report and email preserve evidence, unknowns and the no-score contract", async () => {
  network({ robotsError: true });
  const report = await audit.runAudit({ url: base, competitors: ["https://competitor.example"] });
  const markdown = email.buildMarkdownReport(report);
  const htmlEmail = email.buildReportEmailHtml(report, markdown);
  assert(markdown.includes("[unknown]"));
  assert(markdown.includes("Competitor context") && markdown.includes("not-checked"));
  assert(markdown.includes(report.ruleVersion));
  assert(!markdown.includes("/100") && !htmlEmail.includes("/100"));
  assert.equal(typeof email.sendReportEmail, "function");
});
await check("HTML beyond the inspection limit is not silently treated as complete", async () => {
  network({ page: html + "x".repeat(1_000_001) });
  await assert.rejects(() => audit.runAudit({ url: base }), /1 MB scan limit/);
});
console.log(JSON.stringify({ passed: results.length, network: "mocked", paidCalls: 0, ruleVersion: audit.RULE_VERSION }));
