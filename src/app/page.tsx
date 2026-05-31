import { AuditForm } from "@/components/audit-form";
import { LandingMotion } from "@/components/landing-motion";
import { landingPages } from "@/lib/landing-pages";
import Link from "next/link";

const faqItems = [
  {
    question: "What does RankFortune check in the free audit?",
    answer:
      "The free audit reviews crawl access, metadata clarity, structured data, internal linking, and whether your homepage gives AI engines enough evidence to explain and recommend the product.",
  },
  {
    question: "Who is RankFortune for?",
    answer:
      "RankFortune is built for indie SaaS founders, SEO teams, and agencies that need a fast way to spot why ChatGPT, Perplexity, Gemini, and AI search results are not citing a site yet.",
  },
  {
    question: "What do I get after the first scan?",
    answer:
      "You get a visibility score, the biggest technical and content gaps, copy-ready title and description ideas, and the next pages or proof assets that are most worth publishing.",
  },
  {
    question: "How is RankFortune different from a normal SEO audit?",
    answer:
      "A normal SEO audit often stops at crawlability and rankings. RankFortune adds answer-engine readiness, competitor citation gaps, and fixes designed for AI discovery and recommendation prompts.",
  },
  {
    question: "Should I use RankFortune before an AI visibility monitoring platform?",
    answer:
      "Yes, if you do not yet know what to fix. Monitoring platforms are more useful after the site has clear crawl signals, comparison pages, FAQ answers, pricing context, and proof content that AI systems can cite.",
  },
];

const proofMetrics = [
  ["15", "readiness signals"],
  ["3", "score layers"],
  ["7 day", "fix roadmap"],
  ["60s", "first snapshot"],
];

const audienceFit = [
  ["Indie SaaS", "Find the pages and proof AI engines need before recommending your tool."],
  ["SEO teams", "Turn technical crawl checks into answer-engine content priorities."],
  ["Agencies", "Use a quick audit as a lead magnet before selling deeper GEO work."],
];

const auditLayers = [
  {
    title: "Technical discovery",
    detail:
      "Checks sitemap, robots, canonical tags, indexability, internal links, and whether crawlers can reach the important parts of the site.",
  },
  {
    title: "Entity clarity",
    detail:
      "Reviews title, meta description, H1, schema, pricing signals, and whether an AI model can explain what the product does.",
  },
  {
    title: "Answer readiness",
    detail:
      "Looks for FAQ, use-case, alternatives, comparison, and structured answer content that AI engines can cite directly.",
  },
  {
    title: "Fix roadmap",
    detail:
      "Turns the audit into prioritized actions for founders, marketers, and developers instead of stopping at a raw score.",
  },
];

const platformSteps = [
  ["Scan", "Drop in a public URL and RankFortune crawls the page, robots.txt, sitemap, metadata, and structured data."],
  ["Score", "The report separates technical discoverability, brand clarity, and answer-engine readiness so the weakness is obvious."],
  ["Fix", "You get copy-ready titles, FAQ ideas, schema recommendations, and the next pages to publish."],
  ["Verify", "The next layer will store audit history so you can rerun and prove whether visibility readiness improved."],
];

const visibilitySignals = [
  ["Prompt coverage", "Buyer-intent prompts where the brand should appear but does not."],
  ["Citation readiness", "Pages with direct answers, clear entities, and structured proof that AI engines can quote."],
  ["Competitor gap", "The pages competitors have that make them easier to recommend."],
  ["Tracking path", "A repeatable baseline for future weekly monitoring and share-of-voice checks."],
];

const comparisonCards = [
  [
    "Audit-first tools",
    "Best when you need the first roadmap before paying for a bigger monitoring platform.",
  ],
  [
    "Prompt trackers",
    "Useful when you already know your category and want repeated mention checks across AI engines.",
  ],
  [
    "Authority suites",
    "Worth it when your team also needs citation, backlink, and wider brand-signal workflows.",
  ],
];

const competitorTakeaways = [
  {
    tool: "Profound-style platforms",
    emphasis: "Full-stack AI search workflows with agents, prompt demand, and crawler analytics.",
    gap: "Strong after a team already has enough pages, proof, and budget to operate a program.",
    rankfortune:
      "RankFortune starts earlier: it finds the missing crawl, entity, FAQ, comparison, and proof signals before weekly monitoring.",
  },
  {
    tool: "Peec-style trackers",
    emphasis: "Visibility, position, and sentiment tracking across AI search prompts and markets.",
    gap: "Useful for trend reporting, but the first blocker is often missing answer-ready content.",
    rankfortune:
      "RankFortune turns that blocker into a 7-day fix plan with copy-ready title, FAQ, schema, and page recommendations.",
  },
  {
    tool: "SEO authority suites",
    emphasis: "Broad brand, search, and authority workflows that sit beside traditional SEO operations.",
    gap: "Too heavy when an indie SaaS or agency lead only needs to decide what to publish next.",
    rankfortune:
      "RankFortune keeps the first step small: scan a public URL, explain the gaps, then upgrade only when the report is useful.",
  },
];

const reportDeliverables = [
  "Visibility score with technical, clarity, and answer-readiness layers",
  "Prompt gap examples for ChatGPT, Perplexity, Gemini, and AI Overviews",
  "Competitor page gaps and the next pages to publish",
  "Copy-ready title, description, FAQ, and schema recommendations",
  "7-day fix roadmap that a founder or marketer can execute",
];

const plans = [
  {
    name: "Free Snapshot",
    price: "$0",
    detail: "One-page audit with score, blockers, and top fixes.",
    features: ["No login for first scan", "15 readiness signals", "Sample copy suggestions"],
    href: "#audit",
    cta: "Run free scan",
  },
  {
    name: "Full Report",
    price: "$19",
    detail: "A founder-ready report for one website.",
    features: ["Full AI narrative report", "PDF/Markdown export", "7-day execution checklist"],
    href: "#audit",
    cta: "Run scan first",
  },
  {
    name: "Monitor",
    price: "$39/mo",
    detail: "Weekly reruns and competitor tracking.",
    features: ["Audit history", "Competitor comparison", "Email alerts for score drops"],
    href: "#audit",
    cta: "Run scan first",
  },
];

const seoPages = landingPages;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "RankFortune",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://rankfortune.com/",
  description:
    "AI visibility audit for websites that checks technical discoverability, entity clarity, and answer-engine readiness.",
  offers: [
    {
      "@type": "Offer",
      name: "Free Snapshot",
      price: "0",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "Full Report",
      price: "19",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "Monitor",
      price: "39",
      priceCurrency: "USD",
      billingDuration: "P1M",
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#09111f] text-white">
      <LandingMotion />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-[8px] bg-cyan-300 text-sm font-bold text-slate-950">
              RF
            </div>
            <span className="font-semibold">RankFortune</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a className="hover:text-white" href="#methodology">
              Methodology
            </a>
            <a className="hover:text-white" href="#pricing">
              Pricing
            </a>
            <a
              className="rounded-[8px] border border-white/10 px-4 py-2 text-sm text-slate-200 hover:border-cyan-300/50 hover:text-white"
              href="#audit"
            >
              Run audit
            </a>
          </nav>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 py-12 md:py-16">
        <div className="pointer-events-none absolute inset-x-5 top-4 z-0 h-[520px] overflow-hidden rounded-[8px] border border-white/5 bg-[linear-gradient(115deg,rgba(34,211,238,0.08),rgba(15,23,42,0.04)_38%,rgba(16,185,129,0.08))] opacity-90">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:52px_52px]" />
          <div className="rf-scan-line absolute left-0 top-0 h-16 w-full bg-[linear-gradient(180deg,transparent,rgba(34,211,238,0.18),transparent)]" />
          <div className="rf-signal-line absolute left-[-12%] top-24 h-px w-2/3 bg-cyan-300/35" />
          <div className="rf-signal-line absolute left-[18%] top-52 h-px w-3/5 bg-emerald-300/25" />
          <div className="rf-signal-line absolute left-[-8%] top-80 h-px w-1/2 bg-white/20" />
        </div>

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_460px] lg:items-end">
          <div>
            <p className="rf-reveal inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100 backdrop-blur">
              AI visibility audit for SaaS and indie tools
            </p>
            <h1 className="rf-reveal mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] text-white md:text-7xl">
              See what keeps AI engines from recommending your website.
            </h1>
            <p className="rf-reveal mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              RankFortune checks whether your website is discoverable,
              understandable, and citeable for ChatGPT, Perplexity, Gemini, AI
              Overviews, and answer engines. Start with a free snapshot, then
              upgrade to a full report when the gaps are worth fixing.
            </p>
            <div className="rf-reveal mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="flex h-12 items-center justify-center rounded-[8px] bg-cyan-300 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                href="#audit"
              >
                Run free audit
              </a>
              <a
                className="flex h-12 items-center justify-center rounded-[8px] border border-white/10 px-5 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/50 hover:text-white"
                href="#methodology"
              >
                See scoring method
              </a>
            </div>
          </div>

          <div className="rf-float rounded-[8px] border border-white/10 bg-slate-950/70 p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur">
            <div className="grid grid-cols-2 gap-3">
              {proofMetrics.map(([metric, label]) => (
                <div
                  className="rf-card rounded-[8px] bg-white/[0.05] p-4 text-center"
                  key={label}
                >
                  <div className="text-2xl font-semibold text-cyan-200">
                    {metric}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-500">
                    {label}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Inspired by the strongest GEO tools: first diagnose your site
              readiness, then add prompt monitoring and competitor visibility
              once the baseline is credible.
            </p>
          </div>
        </div>
      </section>

      <section className="rf-section mx-auto max-w-7xl px-5 pb-16" id="audit">
        <AuditForm />
      </section>

      <section
        className="rf-section border-t border-white/10 bg-slate-950/40 py-16"
        id="methodology"
      >
        <div className="mx-auto max-w-7xl px-5">
          <div className="rf-rise max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200">
              Methodology
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-white">
              Built around audit, evidence, and execution.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Competitors win trust by showing exactly what they measure.
              RankFortune makes the scoring model visible: technical access,
              entity clarity, answer-ready content, and the roadmap to improve.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {auditLayers.map((layer) => (
              <article
                className="rf-rise rounded-[8px] border border-white/10 bg-white/[0.04] p-5"
                key={layer.title}
              >
                <h3 className="font-semibold text-white">{layer.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {layer.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rf-section mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-8 lg:grid-cols-[360px_1fr] lg:items-start">
          <div className="rf-rise">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200">
              Workflow
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-white">
              More than a score.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              The first version is a fast readiness audit. The product path is
              clear: save reports, compare competitors, and monitor AI prompts
              over time.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {platformSteps.map(([title, detail], index) => (
              <article
                className="rf-rise rounded-[8px] border border-white/10 bg-white/[0.04] p-5"
                key={title}
              >
                <div className="font-mono text-sm text-cyan-200">
                  0{index + 1}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rf-section border-t border-white/10 bg-slate-950/40 py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="rf-rise max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200">
              Compare tools
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-white">
              Not every AI visibility tool solves the same problem.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Some products are built for a first audit. Others are built for
              continuous monitoring and wider authority workflows. Use the
              comparison guide to choose the right next step for your team.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {comparisonCards.map(([title, detail]) => (
              <article
                className="rf-rise rounded-[8px] border border-white/10 bg-white/[0.04] p-5"
                key={title}
              >
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {detail}
                </p>
              </article>
            ))}
          </div>

          <Link
            className="rf-rise mt-8 inline-flex h-12 items-center justify-center rounded-[8px] border border-cyan-300/30 px-5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950"
            href="/ai-visibility-audit-tools"
          >
            Compare AI visibility audit tools
          </Link>

          <div className="rf-rise mt-10 overflow-hidden rounded-[8px] border border-white/10">
            <div className="grid bg-white/[0.04] text-sm font-semibold text-slate-300 md:grid-cols-[220px_1fr_1fr_1fr]">
              <div className="border-b border-white/10 p-4 md:border-b-0 md:border-r">
                Tool category
              </div>
              <div className="border-b border-white/10 p-4 md:border-b-0 md:border-r">
                What competitors emphasize
              </div>
              <div className="border-b border-white/10 p-4 md:border-b-0 md:border-r">
                Where teams get stuck
              </div>
              <div className="p-4">RankFortune angle</div>
            </div>
            {competitorTakeaways.map((takeaway) => (
              <article
                className="grid border-t border-white/10 text-sm leading-6 text-slate-300 md:grid-cols-[220px_1fr_1fr_1fr]"
                key={takeaway.tool}
              >
                <h3 className="border-b border-white/10 p-4 font-semibold text-white md:border-b-0 md:border-r">
                  {takeaway.tool}
                </h3>
                <p className="border-b border-white/10 p-4 md:border-b-0 md:border-r">
                  {takeaway.emphasis}
                </p>
                <p className="border-b border-white/10 p-4 md:border-b-0 md:border-r">
                  {takeaway.gap}
                </p>
                <p className="p-4 text-cyan-100">{takeaway.rankfortune}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rf-section border-t border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="rf-rise flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200">
                AI search pages
              </p>
              <h2 className="mt-3 text-4xl font-semibold text-white">
                Start with the audit page that matches the buyer question.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-400">
              These focused pages cover the main search intents around AI
              visibility, answer engine optimization, GEO, and model-specific
              readiness checks.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {seoPages.map((page) => (
              <Link
                className="rf-rise rounded-[8px] border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300/40 hover:bg-cyan-300/[0.06]"
                href={`/${page.slug}`}
                key={page.slug}
              >
                <p className="text-sm font-medium text-cyan-200">
                  {page.eyebrow}
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  {page.h1}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="rf-section border-t border-white/10 bg-slate-950/40 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_520px] lg:items-start">
          <div className="rf-rise">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200">
              Visibility preview
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-white">
              Show the missing recommendation path.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              RankFortune starts with the reasons your site is not ready to be
              cited, then turns that into the prompts, pages, and proof assets
              to build next.
            </p>
          </div>

          <div className="rf-rise rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              {visibilitySignals.map(([title, detail]) => (
                <div className="rounded-[8px] bg-slate-950 p-4" key={title}>
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="rf-section border-t border-white/10 bg-slate-950/40 py-16"
        id="pricing"
      >
        <div className="mx-auto max-w-7xl px-5">
          <div className="rf-rise flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200">
                Pricing path
              </p>
              <h2 className="mt-3 text-4xl font-semibold text-white">
                Start free, charge for proof.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-400">
              Start with a free scan, then upgrade when you need the deeper
              report, export, and monitoring workflow.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                className="rf-rise rounded-[8px] border border-white/10 bg-white/[0.04] p-5"
                key={plan.name}
              >
                <h3 className="text-xl font-semibold text-white">
                  {plan.name}
                </h3>
                <div className="mt-4 text-4xl font-semibold text-cyan-200">
                  {plan.price}
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {plan.detail}
                </p>
                <ul className="mt-5 space-y-3 text-sm text-slate-300">
                  {plan.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>
                <a
                  className="mt-6 flex h-11 items-center justify-center rounded-[8px] border border-cyan-300/30 px-4 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950"
                  href={plan.href}
                  rel={plan.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  target={plan.href.startsWith("http") ? "_blank" : undefined}
                >
                  {plan.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rf-section border-t border-white/10 bg-slate-950/40 py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="rf-rise max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200">
              FAQ
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-white">
              Answer the questions AI engines and buyers both ask.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              The homepage now includes direct answers that can be quoted in AI
              results, comparison prompts, and buyer research flows.
            </p>
          </div>

          <div className="mt-8 grid gap-4">
            {faqItems.map((item) => (
              <article
                className="rf-rise rounded-[8px] border border-white/10 bg-white/[0.04] p-5"
                key={item.question}
              >
                <h3 className="text-xl font-semibold text-white">
                  {item.question}
                </h3>
                <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rf-section border-t border-white/10 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[420px_1fr] lg:items-start">
          <div className="rf-rise">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200">
              Buyer fit
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-white">
              Built for people who need an answer this week.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Get a fast, credible audit that shows what to fix before you
              invest in heavier AI visibility monitoring.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {audienceFit.map(([title, detail]) => (
              <article
                className="rf-rise rounded-[8px] border border-white/10 bg-white/[0.04] p-5"
                key={title}
              >
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rf-section border-t border-white/10 bg-slate-950/40 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_460px] lg:items-start">
          <div className="rf-rise">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200">
              Full report
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-white">
              Know exactly what the full report includes.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              The free scan gives you the first diagnosis. The full report turns
              that diagnosis into exportable recommendations and a fix plan.
            </p>
          </div>

          <div className="rf-rise rounded-[8px] border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
            <h3 className="text-xl font-semibold text-white">
              What the $19 report includes
            </h3>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              {reportDeliverables.map((deliverable) => (
                <li className="flex gap-3" key={deliverable}>
                  <span className="mt-1 size-2 shrink-0 rounded-full bg-cyan-300" />
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
            <a
              className="mt-6 flex h-11 items-center justify-center rounded-[8px] bg-cyan-300 px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              href="#audit"
            >
              Run scan first
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
