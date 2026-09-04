import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Retired thin landing pages consolidated into pillar pages (2026-09-05).
      { source: "/agent-readiness-checker", destination: "/ai-visibility-audit", permanent: true },
      { source: "/agentic-engineering-visibility-audit", destination: "/ai-visibility-audit", permanent: true },
      { source: "/ai-marketing-audit", destination: "/ai-visibility-audit", permanent: true },
      { source: "/ai-content-engine-audit", destination: "/ai-visibility-audit", permanent: true },
      { source: "/ai-prompt-portfolio-audit", destination: "/ai-visibility-audit", permanent: true },
      { source: "/ai-redirect-mapping-audit", destination: "/ai-visibility-audit", permanent: true },
      { source: "/ai-visibility-evidence-log-audit", destination: "/ai-visibility-audit", permanent: true },
      { source: "/ai-marketing-agent-guardrails-audit", destination: "/ai-visibility-audit", permanent: true },
      { source: "/ai-ugc-ad-creative-audit", destination: "/ai-visibility-audit", permanent: true },
      { source: "/ai-marketing-root-cause-audit", destination: "/ai-visibility-audit", permanent: true },
      { source: "/ai-topic-cluster-audit", destination: "/ai-visibility-audit", permanent: true },
      { source: "/ai-landing-page-conversion-audit", destination: "/ai-visibility-audit", permanent: true },
      { source: "/ai-detector-benchmark-audit", destination: "/ai-visibility-audit", permanent: true },
      { source: "/ai-design-system-audit", destination: "/ai-visibility-audit", permanent: true },
      { source: "/ai-search-monitoring", destination: "/ai-search-visibility-checker", permanent: true },
      { source: "/answer-engine-optimization-audit", destination: "/geo-audit-tool", permanent: true },
      { source: "/ai-citation-gap-audit", destination: "/geo-audit-tool", permanent: true },
      { source: "/geo-growth-score-audit", destination: "/geo-audit-tool", permanent: true },
      { source: "/ai-competitor-visibility-tracker", destination: "/ai-visibility-audit-tools", permanent: true },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "ai-visibility-audit-beige.vercel.app",
          },
        ],
        destination: "https://rankfortune.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
