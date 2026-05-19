import { AuditForm } from "@/components/audit-form";

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
  },
  {
    name: "Full Report",
    price: "$19",
    detail: "A founder-ready report for one website.",
    features: ["Full AI narrative report", "PDF/Markdown export", "7-day execution checklist"],
  },
  {
    name: "Monitor",
    price: "$39/mo",
    detail: "Weekly reruns and competitor tracking.",
    features: ["Audit history", "Competitor comparison", "Email alerts for score drops"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09111f] text-white">
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

      <section className="mx-auto max-w-7xl px-5 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_460px] lg:items-end">
          <div>
            <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100">
              AI visibility audit for SaaS and indie tools
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] text-white md:text-7xl">
              See what keeps AI engines from recommending your website.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              RankFortune checks whether your website is discoverable,
              understandable, and citeable for ChatGPT, Perplexity, Gemini, AI
              Overviews, and answer engines. Start with a free snapshot, then
              upgrade to a full report when the gaps are worth fixing.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

          <div className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
            <div className="grid grid-cols-2 gap-3">
              {proofMetrics.map(([metric, label]) => (
                <div
                  className="rounded-[8px] bg-slate-950 p-4 text-center"
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

      <section className="mx-auto max-w-7xl px-5 pb-16" id="audit">
        <AuditForm />
      </section>

      <section
        className="border-t border-white/10 bg-slate-950/40 py-16"
        id="methodology"
      >
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-3xl">
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
                className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5"
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

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-8 lg:grid-cols-[360px_1fr] lg:items-start">
          <div>
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
                className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5"
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

      <section className="border-t border-white/10 bg-slate-950/40 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_520px] lg:items-start">
          <div>
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

          <div className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
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
        className="border-t border-white/10 bg-slate-950/40 py-16"
        id="pricing"
      >
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
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
                className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5"
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
                  href="#audit"
                >
                  {plan.name === "Free Snapshot"
                    ? "Run free scan"
                    : "Start with audit"}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[420px_1fr] lg:items-start">
          <div>
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
                className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5"
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

      <section className="border-t border-white/10 bg-slate-950/40 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_460px] lg:items-start">
          <div>
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

          <div className="rounded-[8px] border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
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
              Run the free scan first
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
