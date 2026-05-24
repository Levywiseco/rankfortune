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
    slug: "ai-visibility-audit",
    title: "AI Visibility Audit for Websites - RankFortune",
    description:
      "Run an AI visibility audit to see whether ChatGPT, Perplexity, Gemini, and AI search engines can understand, cite, and recommend your website.",
    eyebrow: "AI visibility audit",
    h1: "Audit whether AI engines can understand and recommend your website.",
    intro:
      "RankFortune checks the technical, content, and answer-engine signals that make a site easier for AI systems to crawl, summarize, cite, and recommend.",
    audience:
      "Best for founders, SaaS marketers, and agencies that need a fast baseline before investing in a full AI visibility platform.",
    checks: [
      "Crawl access, robots.txt, sitemap, canonical, and indexability",
      "Title, description, H1, internal links, and structured data",
      "FAQ, comparison, use-case, pricing, and proof content signals",
      "Copy-ready fixes for metadata, schema, and answer-first content",
    ],
    outcomes: [
      "Visibility score with three diagnostic layers",
      "Prioritized blockers that explain why AI engines may skip the site",
      "7-day execution plan for improving AI answer readiness",
    ],
    sections: [
      {
        title: "What an AI visibility audit measures",
        body:
          "A normal SEO audit often stops at crawlability and rankings. An AI visibility audit adds entity clarity, answer structure, citation readiness, and whether the site gives models enough evidence to mention the product confidently.",
      },
      {
        title: "Why this matters before monitoring",
        body:
          "Prompt tracking is useful after the site has enough citeable pages. If the homepage has weak positioning, missing FAQ content, or no comparison pages, monitoring only confirms the same gap every week.",
      },
      {
        title: "How RankFortune turns findings into fixes",
        body:
          "The report groups problems into technical discovery, brand clarity, and answer readiness, then turns the biggest gaps into concrete copy, schema, and page recommendations.",
      },
    ],
    faqs: [
      {
        question: "What is an AI visibility audit?",
        answer:
          "It is a review of whether AI assistants and answer engines can crawl, understand, cite, and recommend a website for relevant buyer prompts.",
      },
      {
        question: "How is this different from SEO?",
        answer:
          "SEO focuses on search rankings and crawl health. AI visibility adds answer-ready pages, entity clarity, citation proof, and prompt-level recommendation gaps.",
      },
      {
        question: "Can I run the audit before paying?",
        answer:
          "Yes. RankFortune provides a free first scan, then the paid report turns the findings into a fuller deliverable.",
      },
    ],
  },
  {
    slug: "ai-search-visibility-checker",
    title: "AI Search Visibility Checker - RankFortune",
    description:
      "Check whether your website is ready to appear in AI search results, AI Overviews, Perplexity answers, and ChatGPT-style recommendations.",
    eyebrow: "AI search visibility checker",
    h1: "Check if your website is ready for AI search results.",
    intro:
      "AI search visibility depends on more than ranking pages. Your site needs clear entities, direct answers, structured proof, and pages AI engines can cite.",
    audience:
      "Best for teams that want to understand why AI search engines mention competitors but not their own product.",
    checks: [
      "Homepage clarity and category positioning",
      "Structured data and metadata quality",
      "Answer-ready FAQ, use-case, and comparison content",
      "Sitemap, robots, canonical, and crawl signals",
    ],
    outcomes: [
      "A practical AI search readiness score",
      "Specific missing content types to publish next",
      "Copy suggestions for metadata and answer blocks",
    ],
    sections: [
      {
        title: "AI search needs citeable evidence",
        body:
          "AI search engines prefer pages that answer direct questions, define the product category, and support claims with clear public content. Thin homepages make recommendations harder.",
      },
      {
        title: "The checker looks for missing page types",
        body:
          "RankFortune checks whether the site exposes pricing, FAQ, comparisons, alternatives, use cases, docs, and proof signals that make answers easier to generate.",
      },
      {
        title: "The output is built for action",
        body:
          "Instead of giving a raw crawl report, RankFortune highlights the fixes most likely to improve AI search visibility for a lean team.",
      },
    ],
    faqs: [
      {
        question: "What is AI search visibility?",
        answer:
          "It is the likelihood that AI search engines can find, understand, and cite your brand when users ask relevant questions.",
      },
      {
        question: "Which AI search engines does this help with?",
        answer:
          "The audit is designed around readiness signals useful for ChatGPT, Perplexity, Gemini, AI Overviews, and other answer engines.",
      },
      {
        question: "Do I need historical tracking first?",
        answer:
          "Usually no. Start with a baseline audit, fix obvious blockers, then add monitoring once the site has stronger answer-ready content.",
      },
    ],
  },
  {
    slug: "chatgpt-visibility-checker",
    title: "ChatGPT Visibility Checker for SaaS Websites - RankFortune",
    description:
      "Check whether your website gives ChatGPT enough public information to understand, explain, and recommend your product.",
    eyebrow: "ChatGPT visibility checker",
    h1: "Find out why ChatGPT may not recommend your product.",
    intro:
      "When ChatGPT does not mention a product, the reason is often weak public evidence: unclear positioning, thin comparison content, missing FAQ answers, or poor crawl signals.",
    audience:
      "Best for SaaS founders and marketers who want a first-pass diagnosis before building a larger GEO program.",
    checks: [
      "Whether the homepage explains the product category clearly",
      "FAQ and buyer-intent answer coverage",
      "Comparison, alternatives, and use-case page signals",
      "Metadata, schema, and internal links",
    ],
    outcomes: [
      "ChatGPT readiness score",
      "Prompts and page gaps to address first",
      "Recommended copy blocks for better entity clarity",
    ],
    sections: [
      {
        title: "ChatGPT visibility starts with public clarity",
        body:
          "Models need enough public text to explain what a product is, who it is for, and how it differs from alternatives. If that evidence is missing, even good products are easy to overlook.",
      },
      {
        title: "Comparison content helps recommendation prompts",
        body:
          "Queries like best tools, alternatives, and software for a specific workflow depend on category and competitor context. RankFortune checks whether those pages exist.",
      },
      {
        title: "The report gives copy-ready next steps",
        body:
          "You get practical fixes for title tags, descriptions, FAQ questions, schema types, and the next pages to publish.",
      },
    ],
    faqs: [
      {
        question: "Can this guarantee ChatGPT will mention my site?",
        answer:
          "No tool can guarantee mentions, but the audit identifies the public signals and content gaps that often prevent a site from being recommended.",
      },
      {
        question: "What should I publish first?",
        answer:
          "Usually FAQ, use-case, and comparison pages are the first useful pages because they match buyer questions and recommendation prompts.",
      },
      {
        question: "Is this useful for new websites?",
        answer:
          "Yes. New sites benefit from a baseline because they can build AI-ready structure before waiting months to discover missing content.",
      },
    ],
  },
  {
    slug: "perplexity-visibility-checker",
    title: "Perplexity Visibility Checker - RankFortune",
    description:
      "Check whether your website has the crawl, citation, and answer-ready signals needed to appear in Perplexity-style AI search results.",
    eyebrow: "Perplexity visibility checker",
    h1: "Check if Perplexity can cite and explain your website.",
    intro:
      "Perplexity-style search depends heavily on pages that are easy to crawl, quote, and connect to a clear entity. RankFortune checks those signals.",
    audience:
      "Best for teams that care about citations, source quality, and whether AI search results can use their site as evidence.",
    checks: [
      "Indexable pages and sitemap exposure",
      "Clear title, description, headings, and schema",
      "Citation-ready FAQ and answer sections",
      "Internal links to proof, pricing, docs, and comparison pages",
    ],
    outcomes: [
      "Perplexity-style citation readiness score",
      "Missing source and proof signals",
      "Fix list for pages that should be easier to cite",
    ],
    sections: [
      {
        title: "Citation readiness is a content problem",
        body:
          "If a page does not answer direct questions or make claims easy to verify, AI search engines have less reason to use it as a source.",
      },
      {
        title: "Technical access still matters",
        body:
          "Blocked crawlers, missing sitemap references, weak canonical tags, and thin metadata can all reduce the chance that answer engines use the site.",
      },
      {
        title: "RankFortune prioritizes the next source pages",
        body:
          "The audit recommends whether to publish FAQ, comparison, use-case, docs, or proof pages before investing in ongoing visibility tracking.",
      },
    ],
    faqs: [
      {
        question: "What makes a page easier for Perplexity to cite?",
        answer:
          "Clear answers, descriptive headings, source-like details, structured data, and crawlable pages all improve citation readiness.",
      },
      {
        question: "Does this check live Perplexity rankings?",
        answer:
          "RankFortune focuses on readiness and fix recommendations. Live prompt tracking can be added after the site has a credible baseline.",
      },
      {
        question: "Should I optimize my homepage or create new pages?",
        answer:
          "Both can matter, but many teams need new answer-ready FAQ, comparison, and use-case pages because homepages cannot cover every buyer question.",
      },
    ],
  },
  {
    slug: "answer-engine-optimization-audit",
    title: "Answer Engine Optimization Audit - RankFortune",
    description:
      "Run an answer engine optimization audit to find the technical and content gaps that keep AI answer engines from citing your website.",
    eyebrow: "Answer engine optimization audit",
    h1: "Turn answer engine optimization from a buzzword into a fix list.",
    intro:
      "AEO works when your site has direct answers, clear entities, structured data, and content that AI engines can confidently quote.",
    audience:
      "Best for SEO teams and agencies turning classic SEO pages into AI answer-ready assets.",
    checks: [
      "Question-and-answer coverage for buyer intent",
      "Structured data and page hierarchy",
      "Category, competitor, and use-case clarity",
      "Technical crawl and indexability signals",
    ],
    outcomes: [
      "AEO readiness score",
      "Prioritized answer blocks and schema ideas",
      "Roadmap for turning pages into citeable assets",
    ],
    sections: [
      {
        title: "AEO is not only FAQ markup",
        body:
          "FAQ schema can help, but answer engines also need clear claims, category definitions, internal context, and pages that map to real user questions.",
      },
      {
        title: "The audit separates content from technical blockers",
        body:
          "RankFortune shows whether the main issue is crawl access, weak metadata, missing answer sections, absent comparison pages, or poor entity clarity.",
      },
      {
        title: "The result is a practical publishing plan",
        body:
          "The report recommends the next pages and copy blocks to add, so the audit becomes a shipping plan rather than another abstract checklist.",
      },
    ],
    faqs: [
      {
        question: "What is answer engine optimization?",
        answer:
          "It is the practice of making pages easier for AI answer engines to understand, cite, and use when answering user questions.",
      },
      {
        question: "Is AEO different from GEO?",
        answer:
          "The terms overlap. AEO focuses on answer engines and answer blocks, while GEO is often used for broader generative engine visibility.",
      },
      {
        question: "What does the RankFortune audit produce?",
        answer:
          "It produces a score, diagnostic gaps, copy suggestions, schema ideas, and a short execution plan.",
      },
    ],
  },
  {
    slug: "llm-visibility-audit",
    title: "LLM Visibility Audit for Websites - RankFortune",
    description:
      "Run an LLM visibility audit to understand whether large language models can identify, explain, and recommend your website.",
    eyebrow: "LLM visibility audit",
    h1: "Audit whether LLMs have enough evidence to recommend your product.",
    intro:
      "LLM visibility depends on public content, crawlability, entity clarity, and whether the site answers the questions buyers and models ask.",
    audience:
      "Best for early teams that want a practical LLM-readiness baseline without buying an enterprise monitoring platform first.",
    checks: [
      "Entity and product positioning clarity",
      "Crawlable public pages and internal links",
      "FAQ, alternatives, use-case, and pricing signals",
      "Structured data and copy-ready recommendation gaps",
    ],
    outcomes: [
      "LLM readiness score",
      "Content gaps that weaken recommendation prompts",
      "Next-page recommendations for better model understanding",
    ],
    sections: [
      {
        title: "LLMs need more than a homepage",
        body:
          "A homepage can introduce a product, but LLMs need supporting pages that answer who it is for, how it works, what it costs, and how it compares.",
      },
      {
        title: "Your public web footprint is the input",
        body:
          "RankFortune audits the public signals available to crawlers and answer engines, then points out what is missing or hard to interpret.",
      },
      {
        title: "The audit helps you prioritize",
        body:
          "Instead of trying to optimize for every model at once, start with fixes that make the site easier for any LLM-driven search or answer system to understand.",
      },
    ],
    faqs: [
      {
        question: "What does LLM visibility mean?",
        answer:
          "It means a large language model can recognize your brand, understand what it does, and use public evidence to recommend or cite it.",
      },
      {
        question: "Can I improve LLM visibility with website changes?",
        answer:
          "Yes. Clearer metadata, schema, FAQ, comparison pages, use cases, and proof content can all improve the signals available to LLM-driven systems.",
      },
      {
        question: "Does this replace SEO?",
        answer:
          "No. It builds on SEO foundations while adding answer-readiness and entity clarity for generative systems.",
      },
    ],
  },
  {
    slug: "ai-overviews-visibility-checker",
    title: "AI Overviews Visibility Checker - RankFortune",
    description:
      "Check whether your website has the answer-ready structure and crawl signals needed for Google AI Overviews-style visibility.",
    eyebrow: "AI Overviews visibility checker",
    h1: "Check whether your pages are ready for AI Overviews-style answers.",
    intro:
      "AI Overviews-style visibility depends on clear answers, crawlable pages, entity signals, and content that can support generated summaries.",
    audience:
      "Best for SEO teams that want to adapt existing pages for AI-generated search experiences.",
    checks: [
      "Direct answer coverage and heading structure",
      "Canonical, robots, sitemap, and metadata health",
      "Schema and FAQ readiness",
      "Internal links to proof, use cases, and comparison content",
    ],
    outcomes: [
      "AI Overviews readiness baseline",
      "Recommended answer sections and schema",
      "Fix list for technical and content blockers",
    ],
    sections: [
      {
        title: "Generated answers need source-like pages",
        body:
          "Pages that define the problem, answer common questions, and provide concise proof are easier for AI search experiences to summarize.",
      },
      {
        title: "Technical SEO still supports AI visibility",
        body:
          "If a page is blocked, poorly canonicalized, or missing from the sitemap, answer systems have less reliable access to the content.",
      },
      {
        title: "RankFortune connects checks to publishing work",
        body:
          "The audit turns readiness gaps into concrete page and copy tasks that can be shipped quickly by a lean team.",
      },
    ],
    faqs: [
      {
        question: "Can this guarantee AI Overviews placement?",
        answer:
          "No. The audit focuses on readiness signals and fix opportunities, not guaranteed placement.",
      },
      {
        question: "Which pages should I optimize first?",
        answer:
          "Start with pages that answer high-intent buyer questions, compare alternatives, or explain concrete use cases.",
      },
      {
        question: "Do schema and FAQ still matter?",
        answer:
          "They can help clarify page structure, but they work best when paired with genuinely useful answer-first content.",
      },
    ],
  },
  {
    slug: "geo-audit-tool",
    title: "GEO Audit Tool for Generative Engine Optimization - RankFortune",
    description:
      "Use RankFortune as a GEO audit tool to find generative engine optimization gaps across crawlability, entity clarity, and answer-ready content.",
    eyebrow: "GEO audit tool",
    h1: "Find the GEO gaps that keep generative engines from citing you.",
    intro:
      "Generative engine optimization is easiest to start with a baseline: what can models crawl, what can they understand, and what evidence can they cite?",
    audience:
      "Best for founders, SEO consultants, and agencies packaging AI visibility work into a clear first deliverable.",
    checks: [
      "Generative engine crawl and index readiness",
      "Entity and category clarity",
      "Citation-ready proof, FAQ, and comparison pages",
      "Action plan for content and technical fixes",
    ],
    outcomes: [
      "GEO baseline score",
      "High-priority fixes for better generative visibility",
      "Report-ready output for founders, marketers, or clients",
    ],
    sections: [
      {
        title: "GEO starts with visible evidence",
        body:
          "If a website does not expose clear public evidence, generative engines have little to work with. RankFortune identifies those missing signals.",
      },
      {
        title: "Audit before monitoring",
        body:
          "Monitoring share of voice is useful, but the first step is making sure the site has crawlable, understandable, and citeable pages.",
      },
      {
        title: "Use the report as a first client deliverable",
        body:
          "The paid report is formatted so agencies and consultants can share a concise roadmap with clients before deeper implementation work.",
      },
    ],
    faqs: [
      {
        question: "What is GEO?",
        answer:
          "GEO stands for generative engine optimization: improving the signals that help AI and answer engines understand, cite, and recommend a brand.",
      },
      {
        question: "What does a GEO audit include?",
        answer:
          "It includes crawl checks, entity clarity, structured data, answer-ready content, competitor page gaps, and a prioritized fix roadmap.",
      },
      {
        question: "Who should use a GEO audit tool?",
        answer:
          "Founders, SEO teams, and agencies can use it to decide what to fix before investing in ongoing tracking or broader authority work.",
      },
    ],
  },
];

export function getLandingPage(slug: string) {
  return landingPages.find((page) => page.slug === slug);
}
