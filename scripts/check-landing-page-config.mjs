import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import vm from "node:vm";

const require = createRequire(import.meta.url);
const ts = require("typescript");
const source = readFileSync(new URL("../src/lib/landing-pages.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
});
const sandbox = { exports: {} };
vm.runInNewContext(outputText, sandbox);
const { getLandingPage, landingPages } = sandbox.exports;

// Match the nine routes present in the deployed baseline, not abandoned draft slugs.
const expected = [
  "ai-visibility-audit", "ai-search-visibility-checker", "chatgpt-visibility-checker",
  "perplexity-visibility-checker", "reddit-ai-visibility-checker", "ai-agent-observability-audit",
  "llm-visibility-audit", "ai-overviews-visibility-checker", "geo-audit-tool",
];
assert.equal(landingPages.length, expected.length);
assert.equal(new Set(landingPages.map((page) => page.slug)).size, expected.length);
for (const slug of expected) {
  const page = getLandingPage(slug);
  assert(page, "Preserve existing route: " + slug);
  assert(page.title && page.description && page.h1);
  assert(page.checks.length >= 4 && page.outcomes.length >= 3);
  const copy = JSON.stringify(page).toLowerCase();
  assert(copy.includes("not measured"));
  assert(copy.includes("does not") || copy.includes("do not"));
  assert(!copy.includes("readiness score"));
  assert(!copy.includes("why chatgpt may not recommend"));
  assert(!copy.includes("should appear but does not"));
}
assert(getLandingPage("chatgpt-visibility-checker").sections[0].body.includes("OAI-SearchBot"));
assert(getLandingPage("ai-overviews-visibility-checker").sections[0].body.includes("Inherit"));
assert(getLandingPage("reddit-ai-visibility-checker").intro.includes("does not search Reddit"));
console.log("Nine existing landing routes and evidence boundaries validated.");
