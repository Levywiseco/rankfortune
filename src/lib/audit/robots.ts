import type { AiCrawlerAccess } from "./types";

type RobotsRule = {
  directive: "allow" | "disallow";
  path: string;
};

type RobotsGroup = {
  userAgents: string[];
  rules: RobotsRule[];
};

const AI_CRAWLERS = [
  { userAgent: "OAI-SearchBot", provider: "OpenAI search" },
  { userAgent: "ChatGPT-User", provider: "ChatGPT user fetch" },
  { userAgent: "GPTBot", provider: "OpenAI training" },
  { userAgent: "Google-Extended", provider: "Google AI training" },
  { userAgent: "Googlebot", provider: "Google Search / AI" },
  { userAgent: "PerplexityBot", provider: "Perplexity search" },
  { userAgent: "Perplexity-User", provider: "Perplexity user fetch" },
  { userAgent: "Claude-SearchBot", provider: "Claude search" },
  { userAgent: "Claude-User", provider: "Claude user fetch" },
  { userAgent: "ClaudeBot", provider: "Anthropic training" },
] as const;

function parseRobotsGroups(robotsText: string) {
  const groups: RobotsGroup[] = [];
  let current: RobotsGroup | null = null;

  for (const rawLine of robotsText.split(/\r?\n/)) {
    const line = rawLine.replace(/#.*$/, "").trim();
    if (!line) continue;

    const separator = line.indexOf(":");
    if (separator < 0) continue;

    const directive = line.slice(0, separator).trim().toLowerCase();
    const value = line.slice(separator + 1).trim();

    if (directive === "user-agent") {
      if (!current || current.rules.length > 0) {
        current = { userAgents: [], rules: [] };
        groups.push(current);
      }
      if (value) current.userAgents.push(value.toLowerCase());
      continue;
    }

    if (
      current &&
      (directive === "allow" || directive === "disallow")
    ) {
      current.rules.push({ directive, path: value });
    }
  }

  return groups;
}

function robotsPatternMatches(pattern: string, path: string) {
  if (!pattern) return false;

  const endAnchored = pattern.endsWith("$");
  const source = (endAnchored ? pattern.slice(0, -1) : pattern)
    .replace(/[.+?^${}()|[\]\\]/g, "\\$&")
    .replace(/\*/g, ".*");
  const expression = new RegExp(`^${source}${endAnchored ? "$" : ""}`);
  return expression.test(path);
}

function evaluateRules(rules: RobotsRule[], path: string) {
  const matches = rules
    .filter((rule) => robotsPatternMatches(rule.path, path))
    .map((rule) => ({
      ...rule,
      specificity: rule.path.replace(/[\*$]/g, "").length,
    }))
    .sort((left, right) => {
      if (right.specificity !== left.specificity) {
        return right.specificity - left.specificity;
      }
      return left.directive === "allow" ? -1 : 1;
    });

  return matches[0] ?? null;
}

export function analyzeAiCrawlerAccess(
  robotsText: string,
  path = "/",
): AiCrawlerAccess[] {
  const groups = parseRobotsGroups(robotsText);

  return AI_CRAWLERS.map((crawler) => {
    const token = crawler.userAgent.toLowerCase();
    const specificGroups = groups.filter((group) =>
      group.userAgents.includes(token),
    );
    const wildcardGroups = groups.filter((group) =>
      group.userAgents.includes("*"),
    );
    const selectedGroups = specificGroups.length
      ? specificGroups
      : wildcardGroups;
    const rule = evaluateRules(
      selectedGroups.flatMap((group) => group.rules),
      path,
    );
    const allowed = !rule || rule.directive === "allow";

    return {
      ...crawler,
      allowed,
      detail: rule
        ? `${rule.directive === "allow" ? "Allowed" : "Blocked"} by ${rule.directive}: ${rule.path}`
        : specificGroups.length
          ? `Allowed by ${crawler.userAgent} group default`
          : wildcardGroups.length
            ? "Allowed by wildcard group default"
            : "Allowed by robots.txt default",
    };
  });
}
