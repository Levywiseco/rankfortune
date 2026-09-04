import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Example AI Visibility Audit Report - RankFortune",
  description:
    "See what a RankFortune AI visibility audit report looks like: layer scores, pass/fail signals, prioritized gaps, a seven-day fix plan, and copy suggestions.",
  alternates: { canonical: "/sample-report" },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Example AI visibility audit report",
  url: "https://rankfortune.com/sample-report",
  dateModified: "2026-09-05",
  description:
    "A fictional example of a RankFortune audit report showing scores, signals, gaps, a seven-day plan, and copy suggestions.",
  isPartOf: { "@type": "WebSite", name: "RankFortune", url: "https://rankfortune.com/" },
};

const layerScores = [
  { label: "Technical foundations", score: 7, max: 10, note: "Crawlable, indexable, canonical in place; structured data missing." },
  { label: "Content clarity", score: 6, max: 10, note: "Category is implied but never stated in plain language." },
  { label: "Answer readiness", score: 4, max: 10, note: "No FAQ, no comparison content, no question-shaped blocks to quote." },
  { label: "Authority and citations", score: 3, max: 10, note: "No external proof pages, no alternatives content, no review presence." },
];

const signals = [
  { label: "Clear title", passed: true, detail: "Title names the product and category in 58 characters." },
  { label: "Useful meta description", passed: true, detail: "Description states who the product is for and what it does." },
  { label: "Single clear H1", passed: true, detail: "One H1 that matches the title intent." },
  { label: "Canonical URL", passed: true, detail: "Self-referencing canonical on the homepage." },
  { label: "Indexable page", passed: true, detail: "No noindex, X-Robots-Tag is clean." },
  { label: "robots.txt", passed: true, detail: "robots.txt exists and references the sitemap." },
  { label: "Sitemap discoverability", passed: true, detail: "XML sitemap found with 12 URLs." },
  { label: "Structured data", passed: false, detail: "No Organization, Product, or FAQPage schema detected." },
  { label: "Pricing signal", passed: false, detail: "No pricing page or price mention an AI can quote." },
  { label: "Question-answer content", passed: false, detail: "No FAQ block answering buyer questions directly." },
  { label: "Use-case pages", passed: false, detail: "No pages targeting specific user scenarios." },
  { label: "Comparison pages", passed: false, detail: "No vs/alternatives content for buyers comparing options." },
];

const gaps = [
  { title: "Add Organization and Product schema to the homepage", priority: "High", effort: "Small", detail: "Give AI engines a machine-readable statement of what the product is, who makes it, and what it costs." },
  { title: "Publish a pricing page", priority: "High", effort: "Small", detail: "AI assistants frequently answer 'how much does X cost'. Without a pricing page, the answer is a guess or a competitor's claim." },
  { title: "Add a buyer-intent FAQ block", priority: "High", effort: "Medium", detail: "Five to eight direct question-answer pairs give answer engines quotable units." },
  { title: "Publish one honest comparison page", priority: "Medium", effort: "Medium", detail: "A 'Northstar Notes vs alternatives' page captures comparison prompts that already happen in AI chats." },
  { title: "Create two use-case pages", priority: "Medium", effort: "Large", detail: "One page per core persona, each with concrete workflows and proof." },
];

const plan = [
  "Day 1: Ship Organization + Product + FAQPage schema and validate it.",
  "Day 2: Publish the pricing page and link it from the main navigation.",
  "Day 3: Write the FAQ block from the five questions buyers actually ask.",
  "Day 4: Draft the comparison page against the two most-mentioned alternatives.",
  "Day 5: Publish the first use-case page for the primary persona.",
  "Day 6: Add internal links from the homepage to pricing, FAQ, comparison, and use-case pages.",
  "Day 7: Re-run the audit and confirm the score and signal changes.",
];

export default function SampleReportPage() {
  return (
    <main className="min-h-screen bg-[#09111f] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-[8px] bg-cyan-300 text-sm font-bold text-slate-950">RF</div>
            <span className="font-semibold">RankFortune</span>
          </Link>
          <Link
            href="/"
            className="rounded-[8px] bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Run your own audit
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100">
          Example report
        </p>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
          What a RankFortune audit report looks like
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          This is a fictional audit of an invented product, &ldquo;Northstar Notes&rdquo;
          (northstar.example). The company, pages, and scores are illustrative —
          they show the structure and depth of a real report, not a customer
          story. Reviewed September 5, 2026.
        </p>
      </section>

      <section className="border-t border-white/10 bg-slate-950/40 py-14">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-semibold">Overall score: 58 / 100</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            Technically crawlable, but hard for AI engines to quote, cite, or
            recommend. Most lost points are in answer readiness and authority.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {layerScores.map((layer) => (
              <article key={layer.label} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{layer.label}</h3>
                  <span className="text-cyan-200">{layer.score}/{layer.max}</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-white/10">
                  <div
                    className="h-2 rounded-full bg-cyan-300"
                    style={{ width: `${(layer.score / layer.max) * 100}%` }}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{layer.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-14">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-semibold">Signal checks</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            Each signal is a verifiable observation about the homepage and
            crawlable files, weighted by how much it affects AI visibility.
          </p>
          <div className="mt-8 overflow-hidden rounded-[8px] border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/[0.06] text-slate-200">
                <tr>
                  <th className="px-4 py-3 font-medium">Signal</th>
                  <th className="px-4 py-3 font-medium">Result</th>
                  <th className="px-4 py-3 font-medium">Evidence</th>
                </tr>
              </thead>
              <tbody>
                {signals.map((signal) => (
                  <tr key={signal.label} className="border-t border-white/10">
                    <td className="px-4 py-3 font-medium text-white">{signal.label}</td>
                    <td className={`px-4 py-3 ${signal.passed ? "text-emerald-300" : "text-rose-300"}`}>
                      {signal.passed ? "Pass" : "Missing"}
                    </td>
                    <td className="px-4 py-3 text-slate-300">{signal.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-950/40 py-14">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-semibold">Biggest gaps, prioritized</h2>
          <div className="mt-8 grid gap-4">
            {gaps.map((gap) => (
              <article key={gap.title} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold">{gap.title}</h3>
                  <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-2 py-0.5 text-xs text-cyan-100">
                    {gap.priority} priority · {gap.effort} effort
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-300">{gap.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-14">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-semibold">The seven-day plan</h2>
          <ol className="mt-6 list-decimal space-y-3 pl-6 text-slate-200">
            {plan.map((item) => (
              <li key={item} className="leading-7">{item}</li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl text-slate-300">
            Reports also include copy suggestions — a rewritten title, meta
            description, draft FAQ answers, and the schema types to add — plus
            an evidence appendix listing every URL checked, its HTTP status, and
            what could not be verified.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-950/40 py-14">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <h2 className="text-3xl font-semibold">Audit your own site</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            The first audit is free and takes about a minute. You get the same
            structure as this example, built from your actual pages.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-[8px] bg-cyan-300 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Run a free audit
          </Link>
        </div>
      </section>
    </main>
  );
}
