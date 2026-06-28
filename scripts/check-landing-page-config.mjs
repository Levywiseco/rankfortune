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
