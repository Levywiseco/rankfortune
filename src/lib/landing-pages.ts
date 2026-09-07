export type LandingPage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  audience: string;
  checks: string[];
  outcomes: string[];
  sections: Array<{
    title: string;
    body: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export const landingPages: LandingPage[] = [
  {
    "slug": "ai-visibility-audit",
    "title": "AI Visibility Audit for Websites - RankFortune",
    "description": "A one-URL diagnostic for founders and agencies, with technical observations kept separate from actual AI visibility.",
    "eyebrow": "AI Visibility Audit for Websites",
    "h1": "Review search readiness with inspectable evidence.",
    "intro": "A one-URL diagnostic for founders and agencies, with technical observations kept separate from actual AI visibility.",
    "audience": "For site owners and teams who need a scoped, source-backed review rather than a result guarantee.",
    "checks": [
      "Raw HTML metadata and declared canonical",
      "Generic and matching-agent indexing directives",
      "Named search, training and user-fetch robots preferences",
      "One sitemap candidate, internal links and JSON-LD syntax"
    ],
    "outcomes": [
      "Observed issues and unknown checks, kept separate",
      "Sources, timestamps, scope and versioned rules",
      "Verification steps; actual citations and conversions remain not measured"
    ],
    "sections": [
      {
        "title": "Decide what this scan can establish",
        "body": "The free scan reads the submitted page and sampled supporting files. It cannot establish why a model chose or omitted a brand."
      },
      {
        "title": "Choose a real user task",
        "body": "Review whether the page helps its intended reader and whether important claims have current supporting sources. Candidate headings are not proof of completeness."
      },
      {
        "title": "What happens after the scan",
        "body": "Review justified actions against the actual page goal. Add only truthful, applicable content or markup. The free scan does not crawl competitors, connect analytics or query target AI products; independent review and observations can proceed alongside it."
      }
    ],
    "faqs": [
      {
        "question": "Does this scan measure actual AI visibility?",
        "answer": "No. It is a public-page readiness review. The report marks actual AI mentions, citations and business outcomes as not measured."
      },
      {
        "question": "Are FAQ, pricing and comparison pages mandatory?",
        "answer": "No. They are only candidate content patterns. Their absence is not a failure or a reason to publish low-value variations."
      },
      {
        "question": "Can I compare two scans?",
        "answer": "Compare the same final URL and rule version, with the same intended scope. Preserve unknown states and confirm important changes with the appropriate external evidence."
      }
    ]
  },
  {
    "slug": "ai-search-visibility-checker",
    "title": "AI Search Visibility Checker - RankFortune",
    "description": "Review public-page evidence before choosing any engine-specific change.",
    "eyebrow": "AI Search Visibility Checker",
    "h1": "Inspect AI-search preparation, not an invented visibility score.",
    "intro": "Review public-page evidence before choosing any engine-specific change.",
    "audience": "For site owners and teams who need a scoped, source-backed review rather than a result guarantee.",
    "checks": [
      "Raw HTML metadata and declared canonical",
      "Generic and matching-agent indexing directives",
      "Named search, training and user-fetch robots preferences",
      "One sitemap candidate, internal links and JSON-LD syntax"
    ],
    "outcomes": [
      "Observed issues and unknown checks, kept separate",
      "Sources, timestamps, scope and versioned rules",
      "Verification steps; actual citations and conversions remain not measured"
    ],
    "sections": [
      {
        "title": "Keep engine surfaces distinct",
        "body": "A Google Search observation is not automatically evidence for ChatGPT, Perplexity or Claude. Record the engine, URL and date for every claim."
      },
      {
        "title": "Combine diagnostics and observations carefully",
        "body": "You can record actual citations while some technical checks remain unknown. Neither track needs to be falsely marked complete before the other can begin."
      },
      {
        "title": "What happens after the scan",
        "body": "Review justified actions against the actual page goal. Add only truthful, applicable content or markup. The free scan does not crawl competitors, connect analytics or query target AI products; independent review and observations can proceed alongside it."
      }
    ],
    "faqs": [
      {
        "question": "Does this scan measure actual AI visibility?",
        "answer": "No. It is a public-page readiness review. The report marks actual AI mentions, citations and business outcomes as not measured."
      },
      {
        "question": "Are FAQ, pricing and comparison pages mandatory?",
        "answer": "No. They are only candidate content patterns. Their absence is not a failure or a reason to publish low-value variations."
      },
      {
        "question": "Can I compare two scans?",
        "answer": "Compare the same final URL and rule version, with the same intended scope. Preserve unknown states and confirm important changes with the appropriate external evidence."
      }
    ]
  },
  {
    "slug": "chatgpt-visibility-checker",
    "title": "ChatGPT Visibility Checker - RankFortune",
    "description": "This checker inspects website evidence; it does not query ChatGPT or explain an unobserved omission.",
    "eyebrow": "ChatGPT Visibility Checker",
    "h1": "Review public-page readiness for ChatGPT Search.",
    "intro": "This checker inspects website evidence; it does not query ChatGPT or explain an unobserved omission.",
    "audience": "For site owners and teams who need a scoped, source-backed review rather than a result guarantee.",
    "checks": [
      "Raw HTML metadata and declared canonical",
      "Generic and matching-agent indexing directives",
      "Named search, training and user-fetch robots preferences",
      "One sitemap candidate, internal links and JSON-LD syntax"
    ],
    "outcomes": [
      "Observed issues and unknown checks, kept separate",
      "Sources, timestamps, scope and versioned rules",
      "Verification steps; actual citations and conversions remain not measured"
    ],
    "sections": [
      {
        "title": "Separate the OpenAI purposes",
        "body": "OAI-SearchBot is a search crawler. GPTBot and ChatGPT-User serve different purposes. A training opt-out does not by itself demonstrate a search block."
      },
      {
        "title": "Collect an actual ChatGPT Search observation",
        "body": "Keep the query, market, date, product mode, visible answer and displayed source URL. A brand name in prose without a displayed source is a mention, not a citation."
      },
      {
        "title": "What happens after the scan",
        "body": "Review justified actions against the actual page goal. Add only truthful, applicable content or markup. The free scan does not crawl competitors, connect analytics or query target AI products; independent review and observations can proceed alongside it."
      }
    ],
    "faqs": [
      {
        "question": "Does this scan measure actual AI visibility?",
        "answer": "No. It is a public-page readiness review. The report marks actual AI mentions, citations and business outcomes as not measured."
      },
      {
        "question": "Are FAQ, pricing and comparison pages mandatory?",
        "answer": "No. They are only candidate content patterns. Their absence is not a failure or a reason to publish low-value variations."
      },
      {
        "question": "Can I compare two scans?",
        "answer": "Compare the same final URL and rule version, with the same intended scope. Preserve unknown states and confirm important changes with the appropriate external evidence."
      }
    ]
  },
  {
    "slug": "perplexity-visibility-checker",
    "title": "Perplexity Visibility Checker - RankFortune",
    "description": "The free scan reads PerplexityBot preferences, not live Perplexity answers or rankings.",
    "eyebrow": "Perplexity Visibility Checker",
    "h1": "Inspect Perplexity search-rule evidence for one URL.",
    "intro": "The free scan reads PerplexityBot preferences, not live Perplexity answers or rankings.",
    "audience": "For site owners and teams who need a scoped, source-backed review rather than a result guarantee.",
    "checks": [
      "Raw HTML metadata and declared canonical",
      "Generic and matching-agent indexing directives",
      "Named search, training and user-fetch robots preferences",
      "One sitemap candidate, internal links and JSON-LD syntax"
    ],
    "outcomes": [
      "Observed issues and unknown checks, kept separate",
      "Sources, timestamps, scope and versioned rules",
      "Verification steps; actual citations and conversions remain not measured"
    ],
    "sections": [
      {
        "title": "Inspect the submitted path",
        "body": "A homepage allow rule does not establish access to a restricted subpage. Record the exact URL and keep network failures unknown."
      },
      {
        "title": "Review visible sources separately",
        "body": "PerplexityBot and user-triggered fetching should not be treated as interchangeable. Record actual source cards and verify that the cited page supports the answer."
      },
      {
        "title": "What happens after the scan",
        "body": "Review justified actions against the actual page goal. Add only truthful, applicable content or markup. The free scan does not crawl competitors, connect analytics or query target AI products; independent review and observations can proceed alongside it."
      }
    ],
    "faqs": [
      {
        "question": "Does this scan measure actual AI visibility?",
        "answer": "No. It is a public-page readiness review. The report marks actual AI mentions, citations and business outcomes as not measured."
      },
      {
        "question": "Are FAQ, pricing and comparison pages mandatory?",
        "answer": "No. They are only candidate content patterns. Their absence is not a failure or a reason to publish low-value variations."
      },
      {
        "question": "Can I compare two scans?",
        "answer": "Compare the same final URL and rule version, with the same intended scope. Preserve unknown states and confirm important changes with the appropriate external evidence."
      }
    ]
  },
  {
    "slug": "reddit-ai-visibility-checker",
    "title": "Reddit and Community Evidence Review - RankFortune",
    "description": "This scan does not search Reddit, count community mentions or measure Reddit-derived AI citations.",
    "eyebrow": "Reddit and Community Evidence Review",
    "h1": "Plan an honest community-source review.",
    "intro": "This scan does not search Reddit, count community mentions or measure Reddit-derived AI citations.",
    "audience": "For site owners and teams who need a scoped, source-backed review rather than a result guarantee.",
    "checks": [
      "Raw HTML metadata and declared canonical",
      "Generic and matching-agent indexing directives",
      "Named search, training and user-fetch robots preferences",
      "One sitemap candidate, internal links and JSON-LD syntax"
    ],
    "outcomes": [
      "Observed issues and unknown checks, kept separate",
      "Sources, timestamps, scope and versioned rules",
      "Verification steps; actual citations and conversions remain not measured"
    ],
    "sections": [
      {
        "title": "Use real discussions, not manufactured mentions",
        "body": "When independently reviewing a public thread, retain its date, context, actual author statements and any affiliation disclosure. Do not create fake reviews or concealed promotion."
      },
      {
        "title": "Check whether the discussion supports the claim",
        "body": "A reachable thread or a mention of the brand does not establish that the product recommendation is supported. Compare the exact claim, quoted context and product version."
      },
      {
        "title": "What happens after the scan",
        "body": "Review justified actions against the actual page goal. Add only truthful, applicable content or markup. The free scan does not crawl competitors, connect analytics or query target AI products; independent review and observations can proceed alongside it."
      }
    ],
    "faqs": [
      {
        "question": "Does this scan measure actual AI visibility?",
        "answer": "No. It is a public-page readiness review. The report marks actual AI mentions, citations and business outcomes as not measured."
      },
      {
        "question": "Are FAQ, pricing and comparison pages mandatory?",
        "answer": "No. They are only candidate content patterns. Their absence is not a failure or a reason to publish low-value variations."
      },
      {
        "question": "Can I compare two scans?",
        "answer": "Compare the same final URL and rule version, with the same intended scope. Preserve unknown states and confirm important changes with the appropriate external evidence."
      }
    ]
  },
  {
    "slug": "ai-agent-observability-audit",
    "title": "AI Agent Observability Website Review - RankFortune",
    "description": "Use the scan for public HTML observations; review traces, integrations and outcome claims separately.",
    "eyebrow": "AI Agent Observability Website Review",
    "h1": "Review the public evidence for your agent-observability product.",
    "intro": "Use the scan for public HTML observations; review traces, integrations and outcome claims separately.",
    "audience": "For site owners and teams who need a scoped, source-backed review rather than a result guarantee.",
    "checks": [
      "Raw HTML metadata and declared canonical",
      "Generic and matching-agent indexing directives",
      "Named search, training and user-fetch robots preferences",
      "One sitemap candidate, internal links and JSON-LD syntax"
    ],
    "outcomes": [
      "Observed issues and unknown checks, kept separate",
      "Sources, timestamps, scope and versioned rules",
      "Verification steps; actual citations and conversions remain not measured"
    ],
    "sections": [
      {
        "title": "Make a workflow reproducible",
        "body": "A useful real example identifies the SDK version, input event, trace, result and failure boundary. A dashboard screenshot alone does not establish a measured outcome."
      },
      {
        "title": "Do not turn integration names into proof",
        "body": "Document the versions and behaviors actually supported. Distinguish tested functionality, planned integrations and user-supplied examples; do not imply this scan ran the SDK."
      },
      {
        "title": "What happens after the scan",
        "body": "Review justified actions against the actual page goal. Add only truthful, applicable content or markup. The free scan does not crawl competitors, connect analytics or query target AI products; independent review and observations can proceed alongside it."
      }
    ],
    "faqs": [
      {
        "question": "Does this scan measure actual AI visibility?",
        "answer": "No. It is a public-page readiness review. The report marks actual AI mentions, citations and business outcomes as not measured."
      },
      {
        "question": "Are FAQ, pricing and comparison pages mandatory?",
        "answer": "No. They are only candidate content patterns. Their absence is not a failure or a reason to publish low-value variations."
      },
      {
        "question": "Can I compare two scans?",
        "answer": "Compare the same final URL and rule version, with the same intended scope. Preserve unknown states and confirm important changes with the appropriate external evidence."
      }
    ]
  },
  {
    "slug": "llm-visibility-audit",
    "title": "LLM Visibility Audit - RankFortune",
    "description": "The free scan checks public HTML; it does not measure what every language model knows about your brand.",
    "eyebrow": "LLM Visibility Audit",
    "h1": "Separate model knowledge from search evidence.",
    "intro": "The free scan checks public HTML; it does not measure what every language model knows about your brand.",
    "audience": "For site owners and teams who need a scoped, source-backed review rather than a result guarantee.",
    "checks": [
      "Raw HTML metadata and declared canonical",
      "Generic and matching-agent indexing directives",
      "Named search, training and user-fetch robots preferences",
      "One sitemap candidate, internal links and JSON-LD syntax"
    ],
    "outcomes": [
      "Observed issues and unknown checks, kept separate",
      "Sources, timestamps, scope and versioned rules",
      "Verification steps; actual citations and conversions remain not measured"
    ],
    "sections": [
      {
        "title": "Name the product being observed",
        "body": "A model API completion is not automatically equivalent to a consumer product with web search. Record model version when exposed; otherwise mark it unknown."
      },
      {
        "title": "Avoid universal prescriptions",
        "body": "Useful source-backed content matters to readers, but there is no universal word count, FAQ quota or set of page types that proves an LLM will recommend it."
      },
      {
        "title": "What happens after the scan",
        "body": "Review justified actions against the actual page goal. Add only truthful, applicable content or markup. The free scan does not crawl competitors, connect analytics or query target AI products; independent review and observations can proceed alongside it."
      }
    ],
    "faqs": [
      {
        "question": "Does this scan measure actual AI visibility?",
        "answer": "No. It is a public-page readiness review. The report marks actual AI mentions, citations and business outcomes as not measured."
      },
      {
        "question": "Are FAQ, pricing and comparison pages mandatory?",
        "answer": "No. They are only candidate content patterns. Their absence is not a failure or a reason to publish low-value variations."
      },
      {
        "question": "Can I compare two scans?",
        "answer": "Compare the same final URL and rule version, with the same intended scope. Preserve unknown states and confirm important changes with the appropriate external evidence."
      }
    ]
  },
  {
    "slug": "ai-overviews-visibility-checker",
    "title": "AI Overviews Visibility Checker - RankFortune",
    "description": "Inspect the public URL, then verify actual Google indexing and effective Search generative AI settings with account evidence.",
    "eyebrow": "AI Overviews Visibility Checker",
    "h1": "Review Google AI search prerequisites and unknowns.",
    "intro": "Inspect the public URL, then verify actual Google indexing and effective Search generative AI settings with account evidence.",
    "audience": "For site owners and teams who need a scoped, source-backed review rather than a result guarantee.",
    "checks": [
      "Raw HTML metadata and declared canonical",
      "Generic and matching-agent indexing directives",
      "Named search, training and user-fetch robots preferences",
      "One sitemap candidate, internal links and JSON-LD syntax"
    ],
    "outcomes": [
      "Observed issues and unknown checks, kept separate",
      "Sources, timestamps, scope and versioned rules",
      "Verification steps; actual citations and conversions remain not measured"
    ],
    "sections": [
      {
        "title": "Verify the effective Google control",
        "body": "Record Include, Exclude or Inherit and its effective inherited setting in Search Console. Keep this separate from ordinary Search and Google-Extended training preferences."
      },
      {
        "title": "Use the real report definition",
        "body": "The current Google Generative AI report exposes impressions and page, country, date and device dimensions. Do not invent query-level clicks, citation counts or rankings; a missing report is not zero."
      },
      {
        "title": "What happens after the scan",
        "body": "Review justified actions against the actual page goal. Add only truthful, applicable content or markup. The free scan does not crawl competitors, connect analytics or query target AI products; independent review and observations can proceed alongside it."
      }
    ],
    "faqs": [
      {
        "question": "Does this scan measure actual AI visibility?",
        "answer": "No. It is a public-page readiness review. The report marks actual AI mentions, citations and business outcomes as not measured."
      },
      {
        "question": "Are FAQ, pricing and comparison pages mandatory?",
        "answer": "No. They are only candidate content patterns. Their absence is not a failure or a reason to publish low-value variations."
      },
      {
        "question": "Can I compare two scans?",
        "answer": "Compare the same final URL and rule version, with the same intended scope. Preserve unknown states and confirm important changes with the appropriate external evidence."
      }
    ]
  },
  {
    "slug": "geo-audit-tool",
    "title": "GEO Audit Tool - RankFortune",
    "description": "A versioned diagnostic for technical observations, content evidence, actual AI answers and business results.",
    "eyebrow": "GEO Audit Tool",
    "h1": "Turn SEO + GEO evidence into scoped actions.",
    "intro": "A versioned diagnostic for technical observations, content evidence, actual AI answers and business results.",
    "audience": "For site owners and teams who need a scoped, source-backed review rather than a result guarantee.",
    "checks": [
      "Raw HTML metadata and declared canonical",
      "Generic and matching-agent indexing directives",
      "Named search, training and user-fetch robots preferences",
      "One sitemap candidate, internal links and JSON-LD syntax"
    ],
    "outcomes": [
      "Observed issues and unknown checks, kept separate",
      "Sources, timestamps, scope and versioned rules",
      "Verification steps; actual citations and conversions remain not measured"
    ],
    "sections": [
      {
        "title": "Define the evidence unit",
        "body": "Use an engine surface and exact URL for access observations, a claim-source pair for factual support, and a recorded run for actual citations."
      },
      {
        "title": "Retest comparable conditions",
        "body": "Keep final URL, rule version, query set, market, product mode and counting definitions comparable. A changed check is not a causal estimate of business impact."
      },
      {
        "title": "What happens after the scan",
        "body": "Review justified actions against the actual page goal. Add only truthful, applicable content or markup. The free scan does not crawl competitors, connect analytics or query target AI products; independent review and observations can proceed alongside it."
      }
    ],
    "faqs": [
      {
        "question": "Does this scan measure actual AI visibility?",
        "answer": "No. It is a public-page readiness review. The report marks actual AI mentions, citations and business outcomes as not measured."
      },
      {
        "question": "Are FAQ, pricing and comparison pages mandatory?",
        "answer": "No. They are only candidate content patterns. Their absence is not a failure or a reason to publish low-value variations."
      },
      {
        "question": "Can I compare two scans?",
        "answer": "Compare the same final URL and rule version, with the same intended scope. Preserve unknown states and confirm important changes with the appropriate external evidence."
      }
    ]
  }
];

export function getLandingPage(slug: string) {
  return landingPages.find((page) => page.slug === slug);
}
