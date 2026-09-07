import type { Metadata } from "next";
import Link from "next/link";
import { RULE_VERSION } from "@/lib/audit/version";

export const metadata: Metadata = {
  title: "Example Evidence-Based Audit Report - RankFortune",
  description: "A clearly fictional report showing scoped observations, unknown checks and verification steps without a combined GEO score.",
  alternates: { canonical: "/sample-report" },
};

const observations = [
  ["Title", "observed", "A title is present in this fictional HTML sample. No character-count pass mark."],
  ["JSON-LD", "observed", "Organization found inside @graph. This is syntax/type detection, not feature eligibility."],
  ["Pricing candidate", "observed", "An in-page #pricing anchor is detected. It is not an independent claim about price correctness."],
  ["OAI-SearchBot at /private", "issue", "The example rule disallows this path. Confirm whether exclusion is intentional."],
  ["GPTBot training preference", "observed", "Training is disallowed. This is not a search failure and generates no unblock action."],
  ["Search Console settings", "unknown", "Account evidence not supplied; effective Google AI inclusion and actual indexing are unknown."],
  ["Actual AI citations", "not measured", "No target AI answers queried. A missing observation is not zero citations."],
  ["Referrals and conversions", "not measured", "No first-party analytics supplied; no revenue or traffic inference."],
];

export default function SampleReportPage() {
  return (
    <main className="min-h-screen bg-[#09111f] px-5 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <nav className="flex flex-wrap gap-6 text-cyan-200"><Link href="/">RankFortune</Link><Link href="/methodology">Methodology</Link></nav>
        <p className="mt-12 text-sm uppercase tracking-widest text-cyan-200">Fictional example · {RULE_VERSION}</p>
        <h1 className="mt-4 text-4xl font-semibold">A report that shows what is known — and what is not.</h1>
        <p className="mt-5 max-w-3xl leading-8 text-slate-300">This is a deliberately invented fixture at northstar.example, not a customer story, live scan or measured outcome. It illustrates the current report contract. There is no overall GEO score.</p>
        <section className="mt-10 grid gap-4 md:grid-cols-2" aria-label="Evidence tracks">
          {[
            ["Technical observations", "Partial", "One URL and sampled supporting files, not a full-site or real-bot audit."],
            ["Content evidence", "Partial", "HTML patterns inspected; factual support needs source review."],
            ["Actual AI visibility", "Not measured", "No observed answers, mentions or displayed citations."],
            ["Business outcomes", "Not measured", "No attributable referrals or conversions supplied."],
          ].map(([title, state, detail]) => (
            <article key={title} className="rounded-lg border border-white/15 p-5">
              <h2 className="text-xl font-semibold">{title}</h2><p className="mt-2 text-cyan-200">{state}</p><p className="mt-3 leading-7 text-slate-300">{detail}</p>
            </article>
          ))}
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Illustrative observations</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <caption className="mb-3 text-left text-slate-400">States describe this fixture only; they are not actual website findings.</caption>
              <thead><tr><th className="p-3">Check</th><th className="p-3">State</th><th className="p-3">Evidence and boundary</th></tr></thead>
              <tbody>{observations.map(([label, state, detail]) => <tr className="border-t border-white/10" key={label}><th className="p-3 align-top font-medium">{label}</th><td className="p-3 align-top text-cyan-200">{state}</td><td className="p-3 leading-6 text-slate-300">{detail}</td></tr>)}</tbody>
            </table>
          </div>
        </section>
        <section className="mt-12 rounded-lg border border-cyan-300/30 p-6">
          <h2 className="text-2xl font-semibold">One justified next step, not a mandatory seven-day plan</h2>
          <p className="mt-4 leading-7 text-slate-300">P1 — Confirm whether OAI-SearchBot should access northstar.example/private. If the page is intentionally private, keep the rule. If public search is intended, authorize a narrowly scoped change while retaining the training preference.</p>
          <p className="mt-3 leading-7 text-slate-300">Verification: rerun the exact path and rule version, then inspect authentic bot logs and relevant account evidence. A robots-rule change alone does not demonstrate an AI citation.</p>
        </section>
        <p className="mt-10"><Link href="/#audit" className="inline-block rounded-lg bg-cyan-300 px-5 py-3 font-semibold text-slate-950">Run a real readiness scan</Link></p>
      </div>
    </main>
  );
}
