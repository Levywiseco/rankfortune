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
    slug: "reddit-ai-visibility-checker",
    title: "Reddit AI Visibility Checker for UGC Citation Gaps - RankFortune",
    description:
      "Check whether your brand has the Reddit, forum, and community signals that AI engines often cite for buyer-intent recommendations.",
    eyebrow: "Reddit AI visibility checker",
    h1: "See whether AI engines find enough Reddit and community proof to cite your brand.",
    intro:
      "When AI search results mention competitors instead of your product, the missing signal is often not another landing page. It is the lack of crawlable community proof, honest comparisons, and discussion pages that buyers already trust.",
    audience:
      "Best for SaaS founders, SEO teams, and agencies that want to understand how Reddit, forums, and UGC shape AI recommendations for commercial prompts.",
    checks: [
      "Whether the site links to comparison, alternatives, docs, and proof pages buyers can discuss",
      "Whether public pages answer the objections that often surface in Reddit threads and forum recommendations",
      "Whether the brand has enough crawlable entity clarity for AI engines to connect site claims with community mentions",
      "Whether the content plan includes pages that can earn citations beyond the homepage",
    ],
    outcomes: [
      "A Reddit and UGC citation-readiness baseline",
      "A list of missing proof, comparison, and buyer-question pages",
      "A practical roadmap for making community mentions easier for AI engines to trust and reuse",
    ],
    sections: [
      {
        title: "AI recommendations often borrow community evidence",
        body:
          "For high-intent prompts, answer engines frequently lean on Reddit, forums, and review-style discussions because they contain candid buyer language. If your site lacks matching proof pages, AI systems have little first-party evidence to connect with those mentions.",
      },
      {
        title: "Reddit visibility is really a page-coverage problem",
        body:
          "Teams often assume they need more prompt tracking, but the earlier win is publishing comparison, alternatives, use-case, FAQ, and proof pages that mirror the objections and workflows discussed in community threads.",
      },
      {
        title: "RankFortune turns UGC signals into site fixes",
        body:
          "The audit highlights where the site is too thin for AI engines to reconcile buyer discussions with official product claims, then recommends the next pages and proof blocks to publish.",
      },
    ],
    faqs: [
      {
        question: "Why does Reddit matter for AI visibility?",
        answer:
          "Reddit and other forums often rank well and contain authentic buyer language. AI engines can use those discussions as evidence, especially when a brand's own site does not answer the same questions clearly.",
      },
      {
        question: "Can RankFortune check my Reddit mentions directly?",
        answer:
          "The current audit focuses on readiness: whether your site has the pages, proof, and entity clarity needed to benefit from community citations and recommendation prompts.",
      },
      {
        question: "What should I publish first if competitors win on Reddit-style prompts?",
        answer:
          "Usually comparison pages, alternatives pages, strong FAQ blocks, and proof-heavy use-case pages are the first assets to publish because they match how buyers discuss tools in community threads.",
      },
    ],
  },
  {
    slug: "agent-readiness-checker",
    title: "Agent Readiness Checker for Websites - RankFortune",
    description:
      "Check whether your website is ready for AI agents to crawl, understand, and act on with clear metadata, schema, robots rules, and answer-ready pages.",
    eyebrow: "Agent readiness checker",
    h1: "Check whether your website is ready for AI agents.",
    intro:
      "An agent-ready website does more than rank. It gives AI crawlers and task-oriented agents the structure they need to discover key pages, understand what the product does, and trust the next action.",
    audience:
      "Best for SaaS founders, SEO teams, and agencies that want to diagnose whether a site is machine-readable enough for AI agents, answer engines, and automated buying research workflows.",
    checks: [
      "Robots, sitemap, canonical, and indexability signals that expose the right pages to crawlers",
      "Metadata, schema, pricing, docs, and FAQ blocks that help agents explain the product correctly",
      "Page coverage for buyer tasks such as comparisons, use cases, support, and proof",
      "Whether the site gives enough structured clues for AI agents to choose the next action confidently",
    ],
    outcomes: [
      "An agent-readiness baseline for technical and content gaps",
      "A shortlist of missing pages or proof blocks that make the site hard for agents to use",
      "A practical fix plan for improving machine readability before heavier monitoring",
    ],
    sections: [
      {
        title: "Agent readiness starts with machine-readable basics",
        body:
          "AI agents need the same fundamentals as answer engines: crawlable pages, clear canonicals, useful metadata, and public content that explains what the product is, who it serves, and what action to take next.",
      },
      {
        title: "The missing signal is often page coverage",
        body:
          "If a site only has a homepage and pricing page, an agent has little evidence for comparisons, implementation questions, trust checks, or workflow-specific recommendations. Agent readiness usually improves when those pages exist and interlink clearly.",
      },
      {
        title: "RankFortune turns agent-readiness checks into shipping work",
        body:
          "The audit highlights which technical signals are weak, which buyer-intent pages are missing, and what to publish next so your site becomes easier for AI systems to crawl, summarize, and recommend.",
      },
    ],
    faqs: [
      {
        question: "What does agent readiness mean for a website?",
        answer:
          "It means AI agents can access the important pages, understand the product and category, and find enough structured evidence to recommend, compare, or act on the site reliably.",
      },
      {
        question: "Does agent readiness only mean adding llms.txt?",
        answer:
          "No. An llms.txt file can help, but the larger issue is whether the site already exposes clear metadata, schema, pricing, docs, FAQ answers, and task-specific pages that agents can use.",
      },
      {
        question: "What should I fix first if my site is not agent-ready?",
        answer:
          "Usually the first wins come from healthy crawl signals, stronger category positioning, and publishing FAQ, comparison, use-case, and proof pages that reduce ambiguity for AI systems.",
      },
    ],
  },
  {
    slug: "ai-agent-observability-audit",
    title: "AI Agent Observability Audit for Website Signals - RankFortune",
    description:
      "Audit whether your AI agent product site explains observability, tracing, integrations, and outcome metrics clearly enough for buyers and answer engines.",
    eyebrow: "AI agent observability audit",
    h1: "Audit whether buyers and AI engines understand your agent observability story.",
    intro:
      "AI agent analytics tools sell trust, debugging, and measurable improvement. RankFortune checks whether the public site exposes enough integrations, workflow proof, event metrics, and answer-ready pages for AI engines to recommend it accurately.",
    audience:
      "Best for AI agent analytics, monitoring, evaluation, and automation platforms that need clearer public proof before investing in heavier prompt tracking.",
    checks: [
      "Whether the homepage explains agent tracing, event capture, resolution metrics, and optimization outcomes",
      "Whether SDK, framework, security, and data-ownership signals are easy for buyers and AI engines to find",
      "Whether pricing, use cases, dashboards, and team workflows are framed as business outcomes instead of raw telemetry",
      "Whether FAQ and comparison pages answer buyer questions about OpenAI, Anthropic, Gemini, LangChain, CrewAI, and Vercel AI SDK support",
    ],
    outcomes: [
      "A readiness baseline for AI agent observability positioning",
      "Missing proof blocks for SDK onboarding, dashboards, metrics, and team adoption",
      "A practical roadmap for making the site easier for answer engines to cite in agent monitoring recommendations",
    ],
    sections: [
      {
        title: "Agent observability needs more than a dashboard claim",
        body:
          "The strongest pages make the path from SDK install to event timeline to outcome metrics obvious. If that story is buried, AI engines have little evidence for why the product belongs in monitoring and analytics recommendations.",
      },
      {
        title: "Integration proof reduces buyer risk",
        body:
          "Public support for major models, orchestration frameworks, and TypeScript or Python SDKs gives answer engines concrete facts to reuse when buyers ask which tools fit their stack.",
      },
      {
        title: "RankFortune turns observability positioning into site fixes",
        body:
          "The audit identifies missing metadata, FAQ answers, integration pages, pricing clarity, and proof sections so the site communicates trust before a prospect reaches a demo.",
      },
    ],
    faqs: [
      {
        question: "What is an AI agent observability audit?",
        answer:
          "It is a review of whether a site clearly explains agent monitoring, traces, integrations, outcome metrics, pricing, and trust signals in ways buyers and answer engines can understand.",
      },
      {
        question: "Why does this matter for AI visibility?",
        answer:
          "Agent analytics is a technical category. AI engines need specific public evidence about SDKs, supported frameworks, dashboards, security, and use cases before they can recommend a product confidently.",
      },
      {
        question: "What should an agent observability site publish first?",
        answer:
          "Start with SDK onboarding, supported framework pages, dashboard examples, pricing clarity, security answers, and comparison content for common monitoring alternatives.",
      },
    ],
  },
  {
    slug: "agentic-engineering-visibility-audit",
    title: "Agentic Engineering Visibility Audit - RankFortune",
    description:
      "Audit whether an agentic engineering, coding agent, or AI developer tool site has the public proof AI answer engines need to recommend it.",
    eyebrow: "Agentic engineering visibility audit",
    h1: "Audit whether AI engines understand your agentic engineering product.",
    intro:
      "Developer AI tools now compete on agents, IDE workflows, CLI commands, worker execution, model choice, and review quality. RankFortune checks whether those signals are clear enough for buyers and AI answer engines to trust.",
    audience:
      "Best for coding agent, AI IDE, code review, developer automation, and agentic engineering platforms that need stronger public positioning before heavier prompt tracking.",
    checks: [
      "Whether the site explains CLI, IDE, browser, worker-agent, and code-review workflows in plain buyer language",
      "Whether docs, install commands, examples, model support, and security boundaries are easy for AI engines to find",
      "Whether pricing, benchmarks, integrations, and proof blocks support developer-tool recommendation prompts",
      "Whether FAQ, alternatives, and comparison pages answer questions about vibe coding, agentic engineering, and AI software development",
    ],
    outcomes: [
      "A readiness baseline for agentic engineering category visibility",
      "Missing proof blocks for install, workflows, benchmarks, pricing, and trust",
      "A practical roadmap for making the site easier to cite in AI developer-tool recommendations",
    ],
    sections: [
      {
        title: "Agentic engineering pages need concrete workflow proof",
        body:
          "AI answer engines need more than a claim that a tool writes code. They need public evidence of how the product moves from prompt to plan, edit, review, test, and deployment.",
      },
      {
        title: "Developer conversion signals double as AI evidence",
        body:
          "Install commands, docs, supported IDEs, model routing, security notes, benchmarks, and pricing tiers are useful to buyers and also give answer engines specific facts to reuse.",
      },
      {
        title: "RankFortune turns category ambiguity into page tasks",
        body:
          "The audit identifies where the site is too vague for agentic engineering prompts, then recommends the comparison, FAQ, docs, and proof sections to publish next.",
      },
    ],
    faqs: [
      {
        question: "What is an agentic engineering visibility audit?",
        answer:
          "It is a review of whether an AI developer-tool site clearly explains agents, workflows, docs, pricing, integrations, benchmarks, and trust signals for buyers and answer engines.",
      },
      {
        question: "Why does this matter for coding agent products?",
        answer:
          "Coding agent categories are crowded and technical. AI engines need concrete public evidence before they can recommend one product over another for developer workflows.",
      },
      {
        question: "What should an agentic engineering site publish first?",
        answer:
          "Start with install and docs pages, workflow examples, model and IDE support, security answers, pricing clarity, benchmarks, and comparison pages for common alternatives.",
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
  {
    slug: "ai-marketing-audit",
    title: "AI Marketing Audit for SEO, AEO, and Competitor Gaps - RankFortune",
    description:
      "Run an AI marketing audit that checks SEO foundations, answer-engine readiness, competitor page gaps, and the next fixes to publish.",
    eyebrow: "AI marketing audit",
    h1: "Turn a website URL into an AI marketing fix list.",
    intro:
      "RankFortune gives marketers a focused audit path: scan a public URL, check SEO and AEO basics, compare competitor-ready page signals, and turn the gaps into a shareable report.",
    audience:
      "Best for founders, lean marketers, and agencies that want chat-style marketing insights without buying a broad campaign suite first.",
    checks: [
      "SEO crawl basics, metadata, sitemap, robots, canonical, and indexability",
      "AEO and GEO signals such as FAQ, schema, answer blocks, and entity clarity",
      "Competitor page gaps across alternatives, comparisons, use cases, pricing, and proof",
      "Shareable recommendations for the next pages, headings, FAQ items, and schema updates",
    ],
    outcomes: [
      "Marketing audit score with technical, clarity, and answer-readiness layers",
      "Competitor-informed content gaps that explain what to publish next",
      "Copy-ready actions for SEO, AEO, and AI visibility improvement",
    ],
    sections: [
      {
        title: "Why AI marketing audits need structure",
        body:
          "Chat-first marketing tools are useful when they produce decisions, not generic advice. RankFortune narrows the workflow to public website evidence, competitor page gaps, and fixes that can be shipped quickly.",
      },
      {
        title: "Where SEO meets AEO",
        body:
          "Traditional SEO checks still matter, but answer engines also need direct answers, product entities, comparison context, and proof content. The audit connects both layers in one report.",
      },
      {
        title: "Built for a first marketing deliverable",
        body:
          "The output is designed to be shared with a founder, client, or content team: score the site, show the missing pages, and recommend the next copy and schema changes.",
      },
    ],
    faqs: [
      {
        question: "What is an AI marketing audit?",
        answer:
          "It is a website audit that combines SEO health, answer-engine readiness, competitor content gaps, and practical recommendations for improving AI-era marketing visibility.",
      },
      {
        question: "How is this different from a full marketing platform?",
        answer:
          "RankFortune focuses on the first decision: what should be fixed or published next. Broader platforms add campaign creation, social workflows, and ongoing analytics after the audit is clear.",
      },
      {
        question: "Can agencies use this as a client report?",
        answer:
          "Yes. The paid report is designed to summarize the score, competitor gaps, recommended pages, metadata, FAQ, and schema changes in a format that can be shared.",
      },
    ],
  },
  {
    slug: "ai-search-monitoring",
    title: "AI Search Monitoring Readiness Audit - RankFortune",
    description:
      "Audit whether your website is ready for AI search monitoring across prompts, competitors, model-level visibility, and citation sources.",
    eyebrow: "AI search monitoring",
    h1: "Check whether your site is ready for AI search monitoring.",
    intro:
      "AI search monitoring is only useful when the prompts, competitors, citations, and model-level gaps are grounded in a site that AI engines can already crawl and understand. RankFortune turns the first scan into a monitoring-ready roadmap.",
    audience:
      "Best for SaaS founders, SEO teams, and agencies comparing AI visibility trackers before committing to weekly monitoring or enterprise GEO dashboards.",
    checks: [
      "Prompt groups for ChatGPT, Perplexity, Gemini, Claude, AI Overviews, and buyer-intent search",
      "Competitor visibility signals such as share of voice, position, mention rate, and displaced prompts",
      "Citation source readiness across first-party pages, comparison content, UGC, reviews, and authority mentions",
      "Whether the site has enough answer-ready pages to make weekly monitoring actionable instead of repetitive",
    ],
    outcomes: [
      "Monitoring-readiness baseline before buying a tracker",
      "Prompt and competitor gap map for AI search visibility",
      "Prioritized fixes for citations, entity clarity, and pages to publish before weekly reporting",
    ],
    sections: [
      {
        title: "Monitoring needs a stable prompt set",
        body:
          "Strong AI visibility trackers group prompts by buyer job, product category, competitor alternatives, and model behavior. RankFortune checks whether the site has enough category clarity to build that prompt set without guessing.",
      },
      {
        title: "Competitor share of voice must connect to fixes",
        body:
          "Seeing that competitors appear more often is useful only when the report explains why. The audit looks for missing comparison pages, proof blocks, FAQ answers, and citation sources that can be improved before weekly tracking starts.",
      },
      {
        title: "Citation sources are the bridge between audit and monitoring",
        body:
          "AI engines cite different sources across models. RankFortune highlights whether first-party pages, community proof, reviews, docs, and authority mentions are strong enough to support ongoing AI search visibility work.",
      },
    ],
    faqs: [
      {
        question: "What is AI search monitoring?",
        answer:
          "It is the ongoing tracking of how AI systems mention, rank, cite, and compare a brand across category prompts, competitor prompts, and model-specific answers.",
      },
      {
        question: "Should I audit before buying a monitoring platform?",
        answer:
          "Usually yes. If the site lacks crawlable pages, clear entities, comparison content, or citation-ready proof, monitoring will mostly repeat the same gaps until those fixes ship.",
      },
      {
        question: "What signals should AI search monitoring include?",
        answer:
          "Useful monitoring includes prompt groups, model-level visibility, competitor share of voice, citation sources, sentiment, displaced prompts, and a fix list tied to pages you can actually publish.",
      },
    ],
  },
  {
    slug: "ai-citation-gap-audit",
    title: "AI Citation Gap Audit for AI Search Visibility - RankFortune",
    description:
      "Audit the citation, source, prompt, and competitor gaps that keep ChatGPT, Perplexity, Gemini, and Claude from citing or recommending your brand.",
    eyebrow: "AI citation gap audit",
    h1: "Find the source gaps behind weak AI citations.",
    intro:
      "AI visibility trackers show where competitors get mentioned. RankFortune handles the earlier diagnostic step: which prompts, source pages, proof blocks, and third-party citations are missing before a brand can improve share of voice.",
    audience:
      "Best for SaaS founders, SEO teams, and agencies comparing AI visibility tools but needing a practical source-gap roadmap before weekly monitoring.",
    checks: [
      "Prompt groups for ChatGPT, Perplexity, Gemini, Claude, AI Overviews, and buyer recommendation queries",
      "Citation source coverage across first-party pages, comparison content, docs, proof pages, reviews, directories, and community mentions",
      "Competitor share of voice signals that explain which brands AI engines cite instead and why",
      "Missing source pages, schema, FAQ blocks, and internal links that make the brand harder to cite with confidence",
    ],
    outcomes: [
      "Citation-gap snapshot organized by prompt, source type, model, and competitor",
      "Prioritized source and page fixes before investing in broader AI search monitoring",
      "Action list for improving mention rate, source quality, and AI-ready proof coverage",
    ],
    sections: [
      {
        title: "Citation gaps explain weak share of voice",
        body:
          "When AI engines recommend competitors, the problem is often not the prompt tracker. It is missing evidence: no comparison page, weak proof content, thin docs, or too few third-party sources that confirm the brand's category and use case.",
      },
      {
        title: "Source quality matters across models",
        body:
          "ChatGPT, Perplexity, Gemini, and Claude can surface different sources for the same buyer question. A useful audit groups gaps by model and source type so teams know whether to strengthen first-party pages, external listings, reviews, or community proof.",
      },
      {
        title: "RankFortune turns monitoring data into publishable fixes",
        body:
          "Instead of stopping at citation counts, the report maps missing sources to concrete pages, FAQ answers, schema blocks, internal links, and outreach targets that can raise future AI visibility metrics.",
      },
    ],
    faqs: [
      {
        question: "What is an AI citation gap audit?",
        answer:
          "It is a review of the prompts, source pages, competitor mentions, and proof signals that explain why AI search engines cite competitors more often than your brand.",
      },
      {
        question: "How is this different from AI search monitoring?",
        answer:
          "Monitoring tracks movement over time. A citation gap audit identifies the missing sources and pages that should be fixed first so monitoring can lead to action instead of repeated reports.",
      },
      {
        question: "Which source gaps should teams fix first?",
        answer:
          "Start with first-party FAQ, comparison, use-case, docs, pricing, and proof pages, then add credible third-party listings, reviews, and community mentions where AI engines already find competitors.",
      },
    ],
  },
  {
    slug: "ai-content-engine-audit",
    title: "AI Content Engine Audit for GEO Briefs - RankFortune",
    description:
      "Audit whether your website has the keyword, entity, competitor, and answer-ready signals needed to produce GEO content briefs.",
    eyebrow: "AI content engine audit",
    h1: "Turn GEO content ideas into a fixable brief.",
    intro:
      "AI content engines work best when they start from real site evidence. RankFortune checks whether a website has the keyword intent, entity clarity, competitor gaps, and answer-ready pages needed to produce useful GEO briefs.",
    audience:
      "Best for founders, content marketers, and agencies comparing AI content engines before building a broader SEO and GEO workflow.",
    checks: [
      "Keyword, category, and buyer-intent signals that explain what the site should rank or be cited for",
      "Entity clarity across title, description, headings, schema, pricing, proof, and internal links",
      "Competitor page gaps across use cases, alternatives, comparisons, FAQ, and content hubs",
      "Brief-ready recommendations for pages, answer blocks, headings, schema, and refresh priorities",
    ],
    outcomes: [
      "GEO content brief baseline for one website",
      "Prioritized content gaps that explain what to publish next",
      "Copy-ready outline ideas for AI search, ChatGPT, Perplexity, and Google visibility",
    ],
    sections: [
      {
        title: "Content engines still need a diagnosis",
        body:
          "Generating more pages is risky when the site has unclear positioning or missing proof. A useful AI content engine first identifies which buyer questions, entities, and comparison gaps deserve new pages.",
      },
      {
        title: "GEO briefs connect search and answer engines",
        body:
          "The strongest briefs cover classic SEO intent and AI answer readiness at the same time: direct answers, schema, competitor context, citations, internal links, and proof sections.",
      },
      {
        title: "RankFortune keeps the first step practical",
        body:
          "Instead of trying to become a full campaign suite, the audit turns a URL into a short content brief: the next pages to publish, the headings to add, and the answer blocks worth writing first.",
      },
    ],
    faqs: [
      {
        question: "What is an AI content engine audit?",
        answer:
          "It is a review of whether a website has enough keyword intent, entity clarity, competitor context, and answer-ready structure to generate useful GEO content briefs.",
      },
      {
        question: "How is this different from AI article generation?",
        answer:
          "RankFortune focuses on the decision before generation: which pages and answer blocks are missing. Article generation can come later once the brief is grounded in real site gaps.",
      },
      {
        question: "What does the content brief recommend?",
        answer:
          "It recommends page ideas, headings, FAQ questions, schema opportunities, competitor gaps, and refresh priorities that can improve SEO, AEO, and AI visibility.",
      },
    ],
  },
  {
    slug: "ai-prompt-portfolio-audit",
    title: "AI Prompt Portfolio Audit for GEO Teams - RankFortune",
    description:
      "Audit whether your website has the prompt coverage, competitor context, citation sources, and answer-ready pages needed before AI search tracking.",
    eyebrow: "AI prompt portfolio audit",
    h1: "Build the prompt portfolio before tracking AI visibility.",
    intro:
      "AI visibility tools are only as useful as the prompts and source gaps they monitor. RankFortune checks whether your site has the buyer questions, competitor context, and citation-ready pages needed for a useful prompt portfolio.",
    audience:
      "Best for SaaS founders, SEO teams, and agencies preparing for ChatGPT, Perplexity, Gemini, and AI Overview tracking without buying a full monitoring suite first.",
    checks: [
      "Buyer-intent prompt groups for category, alternatives, comparisons, use cases, pricing, and implementation questions",
      "Competitor and brand context that explains which companies should appear in each prompt set",
      "Citation-source readiness across FAQ, docs, pricing, comparison, proof, review, and community-style pages",
      "Model and market segmentation ideas for teams that later want weekly AI search visibility tracking",
    ],
    outcomes: [
      "A prompt portfolio brief organized by buyer intent and visibility risk",
      "Missing source and page gaps that make competitors easier for AI engines to cite",
      "A practical tracking plan for visibility, position, sentiment, and source-citation metrics",
    ],
    sections: [
      {
        title: "Prompt portfolios need buyer intent",
        body:
          "Generic brand prompts rarely explain why competitors win AI recommendations. A useful portfolio groups real buyer questions by category, alternatives, comparison, use case, pricing, and implementation intent.",
      },
      {
        title: "Source gaps come before dashboards",
        body:
          "Tools like Peec emphasize visibility, position, sentiment, prompts, sources, models, and reports. RankFortune handles the earlier step: finding which pages and citation sources are missing before those metrics become weekly charts.",
      },
      {
        title: "RankFortune turns tracking ideas into site tasks",
        body:
          "The audit converts prompt groups into publishable fixes: FAQ blocks, comparison pages, proof sections, schema opportunities, and internal links that make future AI search tracking more meaningful.",
      },
    ],
    faqs: [
      {
        question: "What is an AI prompt portfolio?",
        answer:
          "It is a structured set of buyer-intent prompts used to test where a brand, competitors, and citation sources appear across AI search and answer engines.",
      },
      {
        question: "Why audit prompts before buying monitoring software?",
        answer:
          "Monitoring works better after teams know which prompts matter, which competitors belong in each group, and which site pages need to exist before AI engines can cite the brand confidently.",
      },
      {
        question: "Which metrics should a prompt portfolio support?",
        answer:
          "Useful metrics include brand visibility, average position, sentiment, source citations, competitor share of voice, model-level differences, and weekly movement by prompt group.",
      },
    ],
  },
  {
    slug: "ai-redirect-mapping-audit",
    title: "AI Redirect Mapping Audit for Website Migrations - RankFortune",
    description:
      "Audit website migration redirect readiness with AI-assisted URL matching, sitemap checks, export planning, and SEO risk prioritization.",
    eyebrow: "AI redirect mapping audit",
    h1: "Map migration redirects before rankings disappear.",
    intro:
      "Website migrations fail when old URLs, new destinations, and content intent are matched too late. RankFortune helps teams audit redirect mapping readiness before a relaunch, rebrand, or CMS move.",
    audience:
      "Best for SEO consultants, agencies, and SaaS teams planning a site migration who need a focused redirect plan before implementation.",
    checks: [
      "Old URL discovery from sitemap exports, crawls, analytics lists, and known high-value landing pages",
      "Semantic URL matching signals across path, title, heading, category, and page intent",
      "Redirect export planning for CSV, Webflow, WordPress, Apache, Nginx, Netlify, and Vercel routes",
      "Priority flags for revenue pages, AI-visible pages, backlinks, traffic pages, and content that should not be collapsed",
    ],
    outcomes: [
      "Migration risk snapshot for old and new URL sets",
      "Redirect mapping brief with match confidence and review notes",
      "Implementation checklist for 301 rules, canonical tags, sitemap refresh, and post-launch verification",
    ],
    sections: [
      {
        title: "Redirect mapping is a relevance problem",
        body:
          "Matching URLs only by path creates mistakes when content was renamed, consolidated, or moved to a new taxonomy. AI-assisted review should compare meaning, buyer intent, and page role before a 301 rule is shipped.",
      },
      {
        title: "Migration SEO needs export-ready decisions",
        body:
          "A useful redirect plan should not end with a spreadsheet of guesses. Teams need confidence labels, review queues, and export formats that match the CMS, edge platform, or server where redirects will actually live.",
      },
      {
        title: "RankFortune ties redirects to AI visibility",
        body:
          "Pages that AI engines cite or summarize should be protected during a migration. The audit highlights answer-ready pages, comparison pages, and proof content that deserve careful mapping instead of broad homepage redirects.",
      },
    ],
    faqs: [
      {
        question: "What is an AI redirect mapping audit?",
        answer:
          "It is a migration readiness review that compares old and new URLs by meaning, page intent, and SEO value so teams can prepare safer 301 redirects before launch.",
      },
      {
        question: "Does this replace a technical SEO migration plan?",
        answer:
          "No. It supports the redirect-mapping layer of a migration plan, then pairs it with checks for canonical tags, sitemap updates, and post-launch verification.",
      },
      {
        question: "Which redirect formats should teams prepare?",
        answer:
          "Common exports include generic CSV, Webflow CSV, WordPress redirection imports, Apache .htaccess, Nginx rules, Netlify redirects, and Vercel route configuration.",
      },
    ],
  },
  {
    slug: "ai-visibility-evidence-log-audit",
    title: "AI Visibility Evidence Log Audit - RankFortune",
    description:
      "Audit whether your AI visibility work has a clear evidence log for prompts, citations, competitor mentions, source pages, and decisions.",
    eyebrow: "AI visibility evidence log",
    h1: "Turn scattered AI visibility signals into an evidence log.",
    intro:
      "AI visibility programs get messy when prompts, citations, competitor answers, page changes, and client notes live in separate tools. RankFortune checks whether the site has enough traceable evidence to support repeatable AI search fixes.",
    audience:
      "Best for SaaS founders, SEO teams, and agencies that need a cleaner handoff between one-off AI audits, prompt tracking, competitor research, and future monitoring workflows.",
    checks: [
      "Prompt, model, date, source, competitor, and answer-change fields needed for a useful audit log",
      "Citation evidence across first-party pages, FAQ, docs, comparisons, review pages, UGC, and authority sources",
      "Decision traceability for why a page, schema block, prompt group, or source gap was prioritized",
      "Whether audit findings can be turned into docs, client reports, and weekly monitoring inputs without losing context",
    ],
    outcomes: [
      "Evidence-log brief for AI visibility audits and reruns",
      "Missing citation and decision fields that make reports hard to trust",
      "Operating checklist for turning scattered findings into a repeatable GEO workflow",
    ],
    sections: [
      {
        title: "AI visibility needs memory",
        body:
          "One scan is useful, but teams need to remember which prompts were tested, which sources were cited, which competitors appeared, and why a fix was chosen. Without that log, each rerun becomes another disconnected snapshot.",
      },
      {
        title: "Traceability improves client reports",
        body:
          "The strongest knowledge tools keep answers grounded in source material and decision history. RankFortune applies that lesson to GEO work by mapping audit findings back to prompts, pages, citations, and recommended changes.",
      },
      {
        title: "Start smaller than a full knowledge base",
        body:
          "Teams do not need to deploy a full internal memory platform before improving AI search readiness. A practical evidence log can capture the core fields needed for prompt portfolios, competitor reviews, and weekly monitoring.",
      },
    ],
    faqs: [
      {
        question: "What is an AI visibility evidence log?",
        answer:
          "It is a structured record of prompts, answers, cited sources, competitor mentions, page gaps, decisions, and follow-up fixes used to make AI visibility work repeatable.",
      },
      {
        question: "How is this different from prompt monitoring?",
        answer:
          "Prompt monitoring tracks movement over time. An evidence log explains the context behind the movement, including which sources were found, which pages were missing, and which decisions were made.",
      },
      {
        question: "Who should keep an evidence log?",
        answer:
          "Founders, SEO teams, and agencies should keep one when they run repeated AI visibility audits, compare competitors, or need to explain why a GEO fix was prioritized.",
      },
    ],
  },
  {
    slug: "ai-marketing-agent-guardrails-audit",
    title: "AI Marketing Agent Guardrails Audit - RankFortune",
    description:
      "Audit whether your website is ready for AI marketing agents, approval workflows, paid-media diagnostics, outbound evidence, and answer-engine visibility.",
    eyebrow: "AI marketing agent guardrails audit",
    h1: "Prepare your marketing site before AI agents touch campaigns.",
    intro:
      "Autonomous growth tools now promise AI search visibility, paid-media audits, outbound, landing pages, and lead qualification. RankFortune checks the safer public-site layer first: whether the website has the evidence, guardrails, and conversion paths an agentic marketing workflow would need.",
    audience:
      "Best for SaaS founders, agencies, and lean marketing teams evaluating AI growth agents before connecting ad accounts, outbound systems, or private analytics.",
    checks: [
      "Public proof that supports AI search visibility, paid-media claims, outbound positioning, and landing-page recommendations",
      "Approval-ready workflows for read-only audits, suggested changes, review queues, and human sign-off before campaign updates",
      "Guardrail language for ads, SEO, outbound, pricing, privacy, and lead-qualification claims that should not be over-automated",
      "Conversion paths that move from free audit to report, checklist, call, or monitored backlog without requiring risky integrations first",
    ],
    outcomes: [
      "Agent-readiness brief for marketing, SEO, AEO, and paid-media workflows",
      "Approval and guardrail checklist for AI-generated recommendations",
      "Public-site fixes that make future AI growth tools easier to trust and verify",
    ],
    sections: [
      {
        title: "Agentic growth still needs a public evidence layer",
        body:
          "Tools inspired by AI growth agents often connect search visibility, landing pages, ads, outbound, and lead scoring. Before a team grants access to private accounts, the website should already explain the category, prove the offer, and expose answer-ready pages that an agent can cite.",
      },
      {
        title: "Approval flows reduce campaign risk",
        body:
          "The safest AI marketing workflows start read-only, show wasted-spend or content-gap findings, then require a human to approve negative keywords, landing-page edits, outbound copy, or budget changes. RankFortune audits whether those decision points are clear enough to sell.",
      },
      {
        title: "RankFortune keeps the first step integration-light",
        body:
          "Instead of asking for ad, CRM, or inbox access on the first visit, the audit turns public URL evidence into a guardrail checklist, AI visibility fixes, and a conversion path for teams that may later adopt deeper marketing agents.",
      },
    ],
    faqs: [
      {
        question: "What is an AI marketing agent guardrails audit?",
        answer:
          "It is a website-first review of whether a team has the public evidence, approval language, campaign boundaries, and conversion steps needed before using AI agents for SEO, ads, outbound, or lead qualification.",
      },
      {
        question: "Does RankFortune connect to Google Ads, Meta Ads, or outbound tools?",
        answer:
          "No. This page focuses on the safer first layer: public website evidence and approval readiness. Private integrations can come later after the team knows what should and should not be automated.",
      },
      {
        question: "Which competitor signals inspired this audit?",
        answer:
          "Recent AI growth tools emphasize AI search visibility, read-only ad audits, approval-gated changes, outbound workflows, landing-page generation, lead qualification, audit logs, and per-seat or agency pricing.",
      },
    ],
  },
  {
    slug: "ai-marketing-root-cause-audit",
    title: "AI Marketing Root Cause Audit - RankFortune",
    description:
      "Audit whether your website can turn AI search, SEO, ad, and content symptoms into root-cause findings and a practical marketing action plan.",
    eyebrow: "AI marketing root cause audit",
    h1: "Find the root cause behind AI visibility and marketing drops.",
    intro:
      "Marketing teams often see the symptom first: lower visibility, fewer qualified clicks, weaker content performance, or competitors appearing in AI answers. RankFortune checks whether the public website has the evidence needed to explain the cause and turn it into a focused action plan.",
    audience:
      "Best for founders, SEO teams, and agencies that want a diagnostic bridge between AI visibility audits, marketing performance reviews, and the next content or campaign fixes.",
    checks: [
      "Whether crawl, metadata, schema, and internal-link signals explain technical visibility blockers",
      "Which buyer-intent prompts, search topics, and competitor pages reveal demand or positioning gaps",
      "Whether the site has enough FAQ, comparison, pricing, proof, and use-case content to support action recommendations",
      "How audit findings can become weekly recaps, campaign backlog items, content briefs, and owner-ready next steps",
    ],
    outcomes: [
      "Root-cause brief for AI visibility, SEO, and content symptoms",
      "Prioritized marketing fixes grouped by technical, positioning, and content evidence",
      "Action-plan checklist for the next pages, schema blocks, and internal links to ship",
    ],
    sections: [
      {
        title: "Symptoms need evidence before advice",
        body:
          "AI marketing agents can answer questions across ads, analytics, SEO, and ecommerce data. A public-site audit should start with the safer baseline: what evidence exists on the website, what is missing, and which gaps plausibly explain weak AI visibility.",
      },
      {
        title: "Root cause turns reports into backlog",
        body:
          "A useful diagnosis separates crawl issues, unclear positioning, missing buyer answers, thin competitor context, and weak proof. Each finding should map to a concrete page, schema, FAQ, or internal-link task instead of another generic recommendation.",
      },
      {
        title: "RankFortune keeps the workflow lightweight",
        body:
          "Instead of requiring read-only ad or analytics integrations, the audit uses the public URL first, then turns the strongest visible gaps into a weekly recap, campaign backlog, or content brief a lean team can execute.",
      },
    ],
    faqs: [
      {
        question: "What is an AI marketing root cause audit?",
        answer:
          "It is a website-first review that connects visibility symptoms to likely technical, positioning, competitor, and content causes, then turns those causes into practical marketing fixes.",
      },
      {
        question: "Does this connect to my ad accounts or analytics tools?",
        answer:
          "No. RankFortune starts with public website evidence, crawl signals, and AI-ready content gaps. Teams can add private performance data later if they want a deeper marketing ops workflow.",
      },
      {
        question: "What does the action plan include?",
        answer:
          "The plan can include metadata fixes, schema blocks, FAQ additions, comparison or use-case pages, internal links, content briefs, and weekly recap items tied to the root cause.",
      },
    ],
  },
  {
    slug: "ai-topic-cluster-audit",
    title: "AI Topic Cluster Audit for SEO and AEO - RankFortune",
    description:
      "Audit whether your website has the keyword clusters, topical authority, competitor gaps, and answer-ready content plan needed for AI search visibility.",
    eyebrow: "AI topic cluster audit",
    h1: "Turn scattered keywords into an AI-ready topic cluster plan.",
    intro:
      "Modern SEO and answer-engine visibility depend on more than publishing isolated articles. RankFortune checks whether a site has a clear cluster map, buyer-intent coverage, competitor gaps, and publishable briefs for AI-visible content.",
    audience:
      "Best for SaaS founders, SEO teams, and agencies that need to turn keyword research, competitor content, and GEO findings into a practical content roadmap.",
    checks: [
      "Anchor keyword, product category, buyer intent, and audience signals for a useful cluster map",
      "Existing pillar, comparison, alternatives, FAQ, use-case, and proof pages that support topical authority",
      "Competitor content gaps across ranking pages, answer-ready pages, and AI-citable source material",
      "Refresh cadence, content calendar, internal-link plan, and briefs that can move from audit to publishing",
    ],
    outcomes: [
      "Topic-cluster readiness snapshot for SEO, GEO, and AEO work",
      "Priority clusters with missing pillar pages, support pages, and FAQ coverage",
      "Content brief checklist for turning audit findings into publishable pages",
    ],
    sections: [
      {
        title: "Topic clusters connect SEO to AI visibility",
        body:
          "Keyword lists are not enough when AI engines need a coherent picture of what the brand does, which problems it solves, and how it compares with alternatives. A cluster audit groups buyer questions into publishable page sets.",
      },
      {
        title: "Competitor gaps should become briefs",
        body:
          "Tools that cluster keywords and research competitors are useful because they point to missing pages. RankFortune applies that idea to AI visibility by translating gaps into titles, FAQ angles, schema needs, and internal-link targets.",
      },
      {
        title: "Start before full content automation",
        body:
          "All-in-one content engines can research, write, design, and publish at scale. Lean teams usually need the safer first step: decide which clusters deserve pages, what evidence those pages need, and how to verify the next update.",
      },
    ],
    faqs: [
      {
        question: "What is an AI topic cluster audit?",
        answer:
          "It is a review of whether a site has the pillar pages, support pages, FAQs, comparisons, internal links, and proof content needed to cover a topic clearly for search engines and AI answer engines.",
      },
      {
        question: "How is this different from keyword clustering?",
        answer:
          "Keyword clustering groups related search terms. An AI topic cluster audit connects those groups to page gaps, entity clarity, answer-ready content, schema, and competitor visibility.",
      },
      {
        question: "Does RankFortune publish the articles for me?",
        answer:
          "No. RankFortune focuses on the audit and roadmap: which clusters to prioritize, which pages to publish, and what each brief should include before a team writes or automates content.",
      },
    ],
  },
  {
    slug: "geo-growth-score-audit",
    title: "GEO Growth Score Audit - RankFortune",
    description:
      "Audit whether your website has the AI search visibility, citation evidence, competitor benchmarks, and growth checklist needed for generative engine optimization.",
    eyebrow: "GEO growth score audit",
    h1: "Score the public signals that make AI engines recommend your brand.",
    intro:
      "New GEO tools package AI visibility, citation tracking, competitor monitoring, and content recommendations into growth dashboards. RankFortune turns that pattern into a website-first audit: a free baseline score, the source gaps behind it, and a practical checklist your team can ship before paying for ongoing monitoring.",
    audience:
      "Best for SaaS founders, SEO teams, and agencies comparing AI search visibility platforms or building the first GEO growth plan for a lean website.",
    checks: [
      "Whether the homepage, use-case pages, FAQ, comparisons, and proof pages give AI engines enough public evidence to explain the brand",
      "Whether prompts, buyer questions, and competitor categories are mapped to citeable pages instead of scattered recommendations",
      "Whether source gaps, citation gaps, and share-of-voice signals can be scored without claiming private model access or guaranteed rankings",
      "Whether the next fixes can become a growth checklist, content brief, monitoring backlog, and conversion path from free scan to paid report",
    ],
    outcomes: [
      "GEO growth score across visibility, citation, competitor, and content-readiness layers",
      "Ranked checklist of public-site fixes for AI search and answer-engine recommendations",
      "Monitoring-ready brief that explains which prompts, competitors, sources, and pages to track next",
    ],
    sections: [
      {
        title: "GEO growth needs a score before a dashboard",
        body:
          "AI visibility platforms are strongest when they connect prompts, competitor mentions, cited sources, and recommendations. Lean teams still need a simpler first step: a public-site score that shows which missing pages and proof signals explain weak AI search visibility.",
      },
      {
        title: "Citation gaps should lead to growth tasks",
        body:
          "A useful GEO report does not stop at saying a competitor appears more often. It should identify the source pages, FAQ answers, comparison angles, internal links, and evidence blocks that make the next improvement concrete.",
      },
      {
        title: "RankFortune keeps the claim verifiable",
        body:
          "The audit focuses on signals visible from a public URL: crawl access, metadata, schema, answer-ready copy, competitor context, and citeable proof. That keeps the workflow useful without overclaiming live AI ranking guarantees.",
      },
    ],
    faqs: [
      {
        question: "What is a GEO growth score?",
        answer:
          "It is a practical score for generative engine optimization that reviews whether a site has the public evidence, answer-ready pages, citation signals, and competitor context needed for AI search recommendations.",
      },
      {
        question: "How is this different from citation-gap tracking?",
        answer:
          "Citation-gap tracking focuses on where AI engines cite competitors or sources. A GEO growth score connects that evidence to a wider checklist: content gaps, prompt coverage, internal links, schema, and the next pages to publish.",
      },
      {
        question: "Does RankFortune guarantee AI search rankings?",
        answer:
          "No. RankFortune gives a public-site baseline and growth checklist. Ongoing prompt monitoring and model-level tracking are useful after the website has stronger citeable evidence.",
      },
    ],
  },
];

export function getLandingPage(slug: string) {
  return landingPages.find((page) => page.slug === slug);
}
