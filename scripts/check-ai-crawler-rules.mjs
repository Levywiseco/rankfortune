import assert from "node:assert/strict";
import { analyzeAiCrawlerAccess } from "../src/lib/audit/robots.ts";

function accessFor(robotsText, userAgent) {
  const access = analyzeAiCrawlerAccess(robotsText).find(
    (entry) => entry.userAgent === userAgent,
  );
  assert(access, `Expected ${userAgent} to be included.`);
  return access;
}

assert.equal(
  analyzeAiCrawlerAccess("").every((entry) => entry.allowed),
  true,
  "Missing rules should allow crawlers by default.",
);

const wildcardBlock = `
User-agent: *
Disallow: /
`;
assert.equal(
  analyzeAiCrawlerAccess(wildcardBlock).every((entry) => !entry.allowed),
  true,
  "A wildcard root block should block every crawler.",
);

const specificAllow = `
User-agent: *
Disallow: /

User-agent: OAI-SearchBot
Allow: /
`;
assert.equal(accessFor(specificAllow, "OAI-SearchBot").allowed, true);
assert.equal(accessFor(specificAllow, "GPTBot").allowed, false);

const specificBlock = `
User-agent: *
Allow: /

User-agent: GPTBot
Disallow: /
`;
assert.equal(accessFor(specificBlock, "GPTBot").allowed, false);
assert.equal(accessFor(specificBlock, "ClaudeBot").allowed, true);

const allowWinsTie = `
User-agent: PerplexityBot
Disallow: /
Allow: /
`;
assert.equal(accessFor(allowWinsTie, "PerplexityBot").allowed, true);

const privateOnly = `
User-agent: *
Disallow: /private
`;
assert.equal(
  analyzeAiCrawlerAccess(privateOnly).every((entry) => entry.allowed),
  true,
  "A private-path rule should not block the homepage.",
);

console.log("AI crawler robots rules validated.");
