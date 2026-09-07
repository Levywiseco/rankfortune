import type { Metadata } from "next";
import Link from "next/link";
import { RULE_VERSION } from "@/lib/audit/version";

export const metadata: Metadata = {
  title: "SEO + GEO Evidence Methodology - RankFortune",
  description: "How RankFortune distinguishes technical observations, claim evidence, actual AI citations and business results, including what its free scan cannot establish.",
  alternates: { canonical: "/methodology" },
};

export default function MethodologyPage() {
  return (
    <main className="min-h-screen bg-[#09111f] px-5 py-10 text-white">
      <article className="mx-auto max-w-4xl space-y-9 [&_h2]:text-2xl [&_h2]:font-semibold [&_p]:mt-3 [&_p]:leading-8 [&_p]:text-slate-300 [&_a]:text-cyan-200 [&_a]:underline">
        <nav><Link href="/">RankFortune</Link> · <Link href="/sample-report">Example report</Link></nav>
        <header>
          <p className="text-sm uppercase tracking-widest">Methodology · {RULE_VERSION} · 7 September 2026</p>
          <h1 className="mt-4 text-4xl font-semibold">Evidence before a visibility claim.</h1>
          <p>RankFortune is a scoped public-page diagnostic, not a platform ranking or citation predictor. Our current rules adapt the SEO+GEO v8 evidence contract. This is our own versioned implementation, not an official engine certification or the SEO-17 scoring rubric.</p>
        </header>
        <section><h2>What the free scan actually does</h2>
          <p>We fetch one submitted URL, its final-origin robots.txt and one sitemap candidate. We inspect raw HTML, metadata, JSON-LD, up to 80 internal link/anchor candidates and named robots preferences at the final path. A sitemap index is recorded as child-file references, not as a list of indexed pages.</p>
          <p>We do not render the page, run tools on it, crawl linked pages or competitors, verify authors or sources, query consumer AI products, read webmaster accounts, identify real crawler requests or connect business analytics. CSS-hidden text may remain in the raw-HTML sample.</p>
        </section>
        <section><h2>Four separate evidence tracks</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Technical observations: the engine, exact URL, response, rules and unknown account/log evidence.</li>
            <li>Content evidence: the user task, entity consistency and exact claim-to-source support. Candidate text is not factual verification.</li>
            <li>Actual AI visibility: recorded answers, brand mentions and visible source citations under specified conditions.</li>
            <li>Business outcomes: identifiable referrals and defined conversion events from first-party data.</li>
          </ol>
          <p>These tracks are independent. A real citation can be recorded even when a technical check is unknown. A passed technical check cannot establish a citation, visit or sale.</p>
        </section>
        <section><h2>States, priorities and comparisons</h2>
          <p>Observed means the stated item was seen in this sample; it does not certify overall quality. Issue means a specific observed condition warrants review against the intended goal. Unknown means the evidence is unavailable or insufficient. Not applicable requires a reason; it is never a substitute for missing access.</p>
          <p>The current scan has no combined GEO score, weighted completeness score, letter grade or result probability. It does not penalize missing FAQ, pricing, comparison pages, fixed lengths or link quotas. Actions use P1/P2, name their URL/engine scope and include verification. No fixes are added simply to fill a quota.</p>
          <p>Retest the same final URL and rule version. A rules or scope change requires a new baseline; changed observations do not establish causation for traffic or revenue.</p>
        </section>
        <section><h2>Search is not training</h2>
          <p>OpenAI documents search, training and user-triggered fetching separately. We preserve this distinction in the report; a training opt-out does not generate a search-unblock recommendation. The displayed robots preference is not proof of actual fetching. <a href="https://developers.openai.com/api/docs/bots">OpenAI crawler definitions</a>.</p>
          <p>Google Search generative AI Include/Exclude/Inherit must be checked with effective account evidence, independently of ordinary Search and training controls. The free scan leaves this unknown. <a href="https://support.google.com/webmasters/answer/16908024?hl=en">Google control</a>.</p>
          <p>Google does not require a special GEO schema, llms.txt or fixed content chunks. Structured data should match visible, applicable content and the intended supported feature. <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide">Google guidance</a>.</p>
        </section>
        <section><h2>How a real citation study should be counted</h2>
          <p>Record run ID, exact query, target product/mode, market/language, account/device conditions, date/timezone, execution status, answer-trigger state, mention state, visible source URLs and the original evidence record. Unknown fields stay unknown; API text is not automatically a consumer search-product observation.</p>
          <p>With complete fields: N is successful eligible queries (including normal non-triggered answers), A is queries generating an AI answer, and C is queries visibly citing the target, at most once per run. Report A/N, C/A and C/N separately with their denominators. Errors are separate, zero denominators are N/A, and unknown fields prevent a falsely precise point estimate.</p>
          <p>The free scan collects none of these answer runs. Google and Bing account data must retain their original metric definitions; neither can be relabeled as conversion or ranking evidence. <a href="https://support.google.com/webmasters/answer/16984139">Google report definitions</a> · <a href="https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview">Bing AI Performance</a>.</p>
        </section>
        <section><h2>Editorial and model boundaries</h2>
          <p>Optional model narrative is unverified assistance and cannot overwrite deterministic evidence or create new actionable fixes. Webpage content is untrusted data, not instructions. No fabricated expertise, tests, citations, customer results or dates are acceptable. High-risk financial, medical or legal content needs appropriately qualified human review.</p>
          <p>Regression coverage includes graph schemas, in-page pricing, failed and missing robots, target paths, training opt-outs, agent-specific headers, sitemap indexes and truthful report/email states. This is not a measured live error rate. Monitor delivery and availability must be confirmed separately; this scan does not imply active scheduled citation monitoring.</p>
        </section>
      </article>
    </main>
  );
}
