import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best AI Visibility Audit Tools for Indie SaaS Teams",
  description:
    "Compare audit-first AI visibility tools, monitoring platforms, and competitor-tracking workflows. See where RankFortune fits for indie SaaS, agencies, and lean teams.",
  alternates: {
    canonical: "/ai-visibility-audit-tools",
  },
};

const comparedTools = [
  {
    name: "RankFortune",
    bestFor: "Indie SaaS teams that need a fast audit before buying a bigger platform.",
    strengths: [
      "Free first scan with clear technical, brand, and answer-readiness layers",
      "Copy-ready fixes for FAQ, title, metadata, and comparison content",
      "Simple pricing path for one-off reports and lightweight monitoring",
    ],
    caution:
      "Built around audit-first workflows today, so deep historical tracking is still a lighter layer than larger suites.",
  },
  {
    name: "Who's Ranking",
    bestFor: "Teams that want a quick visibility score based on repeated buyer prompts.",
    strengths: [
      "Prompt-based audit across major AI assistants",
      "Competitor mentions and fix-plan framing",
      "Clear low-friction entry pricing",
    ],
    caution:
      "More focused on prompt visibility scoring than broad technical and citation workflows.",
  },
  {
    name: "AnswerMonk",
    bestFor: "Brands and agencies that want AI share-of-voice and citation-source analysis.",
    strengths: [
      "Category-specific prompt network and share-of-voice framing",
      "Citation source analysis for directories and publications",
      "Audit-first positioning instead of dashboard-first positioning",
    ],
    caution:
      "Leans more toward category visibility and authority-source research than lightweight founder self-serve fixes.",
  },
  {
    name: "Rankscale",
    bestFor: "Larger teams that want broad engine coverage, dashboards, and historical tracking.",
    strengths: [
      "Wide AI engine coverage and multi-region tracking",
      "Dedicated modules for prompts, citations, sentiment, and competitor analysis",
      "Stronger enterprise proof and agency positioning",
    ],
    caution:
      "The fuller platform can be heavier than early-stage teams need when they mostly need the first roadmap.",
  },
  {
    name: "BrandCrux",
    bestFor: "Teams that want AI visibility plus wider authority, search, backlink, and analytics signals.",
    strengths: [
      "Multi-channel authority model beyond AI answers alone",
      "Weekly re-measurement loop and competitor benchmarks",
      "Higher-end automation and publishing direction",
    ],
    caution:
      "A broader system with a wider scope, which can be more than a lean SaaS team needs for a first audit.",
  },
];

const decisionRules = [
  {
    title: "Start with an audit-first tool",
    detail:
      "If you still do not know whether the problem is crawlability, weak positioning, missing citations, or absent comparison content, the first win is diagnosis.",
  },
  {
    title: "Upgrade to monitoring after the baseline is credible",
    detail:
      "Weekly tracking matters after the homepage, FAQ, schema, and category pages are already strong enough to be cited.",
  },
  {
    title: "Match the tool to your team shape",
    detail:
      "Founders usually need a short fix roadmap. Agencies need exports and repeatable deliverables. Bigger SEO teams can justify heavier dashboards.",
  },
];

const faqItems = [
  {
    question: "What is an AI visibility audit tool?",
    answer:
      "It checks whether AI assistants and answer engines can understand, cite, and recommend your website. The best tools explain both the visibility gap and the next fixes to ship.",
  },
  {
    question: "When should I choose an audit-first tool instead of a monitoring platform?",
    answer:
      "Choose audit-first when you need to identify the first blockers quickly. Monitoring becomes more valuable after your core pages, metadata, schema, and competitor coverage are already in place.",
  },
  {
    question: "What should an indie SaaS founder care about most?",
    answer:
      "Clear category positioning, buyer-intent FAQ content, comparison pages, citation-ready proof, and a realistic plan for what to publish next week.",
  },
];

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

export default function AiVisibilityAuditToolsPage() {
  return (
    <main className="min-h-screen bg-[#09111f] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100">
            AI visibility audit tools
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] text-white md:text-7xl">
            Which AI visibility audit tool fits your team right now?
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Some teams need a fast audit and a fix list. Others need ongoing
            monitoring, competitor tracking, and wider authority signals. This
            page compares the most common tool shapes so you can pick the right
            next step instead of buying too much software too early.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="flex h-12 items-center justify-center rounded-[8px] bg-cyan-300 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              href="/#audit"
            >
              Run RankFortune free audit
            </Link>
            <Link
              className="flex h-12 items-center justify-center rounded-[8px] border border-white/10 px-5 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/50 hover:text-white"
              href="/#pricing"
            >
              Compare pricing paths
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {decisionRules.map((rule) => (
            <article
              className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5"
              key={rule.title}
            >
              <h2 className="text-xl font-semibold text-white">{rule.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {rule.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-950/40 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200">
              Comparison
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-white">
              Five common tool shapes in the market
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              The important question is not just features. It is whether the
              tool helps you ship the next useful fix with enough evidence.
            </p>
          </div>

          <div className="mt-8 grid gap-4">
            {comparedTools.map((tool) => (
              <article
                className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5"
                key={tool.name}
              >
                <div className="flex flex-col gap-4 border-b border-white/10 pb-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {tool.name}
                    </h3>
                    <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-300">
                      Best for: {tool.bestFor}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-[1fr_320px]">
                  <ul className="space-y-3 text-sm leading-7 text-slate-200">
                    {tool.strengths.map((strength) => (
                      <li key={strength}>✓ {strength}</li>
                    ))}
                  </ul>
                  <div className="rounded-[8px] border border-amber-400/25 bg-amber-500/10 p-4">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-amber-100">
                      Watch for
                    </p>
                    <p className="mt-3 text-sm leading-7 text-amber-50">
                      {tool.caution}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-[8px] border border-cyan-300/20 bg-cyan-300/[0.05] p-6">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200">
            Why RankFortune exists
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            The gap between no audit and a full platform is real.
          </h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-200">
            Many founders do not need a giant dashboard first. They need a
            believable answer to simpler questions: Can AI engines crawl the
            site? Is the category clear? Do buyers and models see proof,
            alternatives, and FAQ content? RankFortune is designed for that
            first decision point.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-950/40 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200">
            FAQ
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-white">
            What founders usually ask before picking a tool
          </h2>
          <div className="mt-8 grid gap-4">
            {faqItems.map((item) => (
              <article
                className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5"
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
    </main>
  );
}
