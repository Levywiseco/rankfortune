import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Competitor Visibility Tracker - RankFortune",
  description:
    "Track where AI engines recommend competitors instead of you. Use RankFortune to audit competitor share of voice, citation gaps, and missing buyer-intent pages.",
  alternates: {
    canonical: "/ai-competitor-visibility-tracker",
  },
  openGraph: {
    title: "AI Competitor Visibility Tracker - RankFortune",
    description:
      "Track where AI engines recommend competitors instead of you. Audit share of voice, citation gaps, and missing buyer-intent content.",
    url: "https://rankfortune.com/ai-competitor-visibility-tracker",
    siteName: "RankFortune",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Competitor Visibility Tracker - RankFortune",
    description:
      "See which competitors AI engines recommend, which sources support them, and what content you need to publish next.",
  },
};

const checks = [
  "Which competitors appear across ChatGPT, Perplexity, Gemini, Claude, and AI Overviews-style prompts",
  "Which buyer-intent prompts mention rivals while your brand stays absent",
  "Which source pages, citations, and proof assets seem to support competitor recommendations",
  "Which comparison, FAQ, use-case, and proof pages you still need to publish",
];

const outcomes = [
  "A competitor visibility baseline for your category",
  "A shortlist of prompts where you lose recommendation share",
  "A fix plan for owned pages, proof blocks, and future monitoring",
];

const sections = [
  {
    title: "Competitor visibility is more than brand mentions",
    body:
      "The useful question is not only whether AI mentions a rival. It is whether answer engines recommend them for the buyer prompts that matter to your category, what evidence supports that recommendation, and whether your site gives AI enough reasons to choose you instead.",
  },
  {
    title: "The best tools combine prompts, citations, and source gaps",
    body:
      "Strong competitors now show prompt coverage, competitor comparisons, cited sources, and missing content patterns in one workflow. RankFortune is built for the earlier step: identify where competitors win, see what pages make them easier to recommend, and turn that gap into a practical publishing plan.",
  },
  {
    title: "Start with the gap before paying for heavy monitoring",
    body:
      "If your homepage positioning is weak and you still lack FAQ, alternatives, and use-case pages, weekly tracking mostly tells you the same bad news. A baseline audit helps you fix the pages that deserve monitoring later.",
  },
];

const faqs = [
  {
    question: "What is an AI competitor visibility tracker?",
    answer:
      "It is a workflow for checking which competitors appear in AI recommendations, which prompts they win, and what source pages or proof assets make them easier for answer engines to cite.",
  },
  {
    question: "Does RankFortune monitor live rankings every day?",
    answer:
      "RankFortune starts with an audit-first approach. The first step is understanding the competitor gap, your missing content, and the sources AI appears to trust before moving into repeated monitoring.",
  },
  {
    question: "What should I fix first if competitors keep appearing?",
    answer:
      "Usually the first wins come from clearer category positioning, stronger FAQ and comparison pages, proof-heavy use-case pages, and technical signals like sitemap, canonical tags, and structured data.",
  },
  {
    question: "Is this different from traditional SEO competitor analysis?",
    answer:
      "Yes. Traditional SEO analysis focuses on rankings and keywords. AI competitor visibility focuses on prompts, recommendations, citations, share of voice, and whether your pages provide answer-ready evidence.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "RankFortune",
      item: "https://rankfortune.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "AI competitor visibility tracker",
      item: "https://rankfortune.com/ai-competitor-visibility-tracker",
    },
  ],
};

export default function AICompetitorVisibilityTrackerPage() {
  return (
    <main className="min-h-screen bg-[#09111f] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <Link className="flex items-center gap-3" href="/">
            <div className="grid size-9 place-items-center rounded-[8px] bg-cyan-300 text-sm font-bold text-slate-950">
              RF
            </div>
            <span className="font-semibold">RankFortune</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <Link className="hover:text-white" href="/#audit">
              Run audit
            </Link>
            <Link className="hover:text-white" href="/ai-visibility-audit-tools">
              Compare tools
            </Link>
          </nav>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100">
              AI competitor visibility tracker
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] text-white md:text-7xl">
              See where AI engines recommend competitors instead of you.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              RankFortune helps you audit competitor share of voice across buyer-intent
              prompts, spot citation and source gaps, and decide which pages to publish
              before you invest in heavier monitoring.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="flex h-12 items-center justify-center rounded-[8px] bg-cyan-300 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                href="/#audit"
              >
                Run free audit
              </Link>
              <Link
                className="flex h-12 items-center justify-center rounded-[8px] border border-white/10 px-5 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/50 hover:text-white"
                href="/ai-visibility-audit-tools"
              >
                Compare tools
              </Link>
            </div>
          </div>

          <aside className="rounded-[8px] border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200">
              Best fit
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              Best for SaaS founders, SEO teams, and agencies that need a first-pass
              answer to three questions: who AI recommends now, why rivals win those
              prompts, and which source pages you need to close the gap.
            </p>
          </aside>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-950/40 py-14">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 lg:grid-cols-2">
          <div className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-2xl font-semibold text-white">What RankFortune checks</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
              {checks.map((item) => (
                <li className="flex gap-3" key={item}>
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-2xl font-semibold text-white">What you get back</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
              {outcomes.map((item) => (
                <li className="flex gap-3" key={item}>
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {sections.map((section) => (
            <article
              className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5"
              key={section.title}
            >
              <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-950/40 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_420px]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200">
              FAQ
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-white">
              Questions this audit answers
            </h2>
            <div className="mt-8 space-y-4">
              {faqs.map((item) => (
                <article
                  className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5"
                  key={item.question}
                >
                  <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-[8px] border border-cyan-300/20 bg-cyan-300/[0.05] p-6">
            <h2 className="text-2xl font-semibold text-white">
              Start with the competitor gap before buying a monitoring stack.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Run a free scan to see whether your category pages, FAQ answers,
              comparisons, and proof assets are strong enough for AI engines to
              recommend you. Then decide whether weekly tracking is worth adding.
            </p>
            <Link
              className="mt-6 flex h-12 items-center justify-center rounded-[8px] bg-cyan-300 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              href="/#audit"
            >
              Run RankFortune scan
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
