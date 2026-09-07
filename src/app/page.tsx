import { AuditForm } from "@/components/audit-form";
import { LandingMotion } from "@/components/landing-motion";
import { landingPages } from "@/lib/landing-pages";
import Link from "next/link";

const faqItems = [
  {
    "question": "What does the free scan actually check?",
    "answer": "It reads one public URL, robots.txt and one sitemap candidate. It reports raw-HTML metadata, JSON-LD, links and named crawler preferences, with scoped evidence and unknown states."
  },
  {
    "question": "Does this measure real AI citations?",
    "answer": "No. The free scan does not query AI answers, crawl competitors or connect analytics. Actual mentions, citations and business outcomes require separate observations."
  },
  {
    "question": "What do I receive?",
    "answer": "Four separate evidence tracks, observed issues, unresolved checks, sources and verification steps. There is no combined GEO score or automatic requirement to publish FAQ, comparison or pricing pages."
  },
  {
    "question": "Should I allow training crawlers to improve search?",
    "answer": "Search, training and user-triggered access are separate purposes. RankFortune does not penalize training opt-outs or change your robots rules."
  },
  {
    "question": "Do I have to finish an audit before measuring citations?",
    "answer": "No. Technical diagnostics and actual AI observations can be collected independently. Keep their scope, dates and meanings separate."
  }
];

const proofMetrics = [
  [
    "1 URL",
    "defined scan scope"
  ],
  [
    "4",
    "evidence tracks"
  ],
  [
    "No score",
    "no invented certainty"
  ],
  [
    "Versioned",
    "repeatable checks"
  ]
];

const audienceFit = [
  [
    "Indie SaaS",
    "Understand public-page observations and the evidence still needed."
  ],
  [
    "SEO teams",
    "Review engine-specific rules without confusing training and search."
  ],
  [
    "Agencies",
    "Deliver scoped findings, limitations and verifiable implementation steps."
  ]
];

const auditLayers = [
  {
    "title": "Technical observations",
    "detail": "Inspect raw HTML, canonical declarations, page directives, robots preferences and one sitemap candidate. Actual indexing and bot access remain separate checks."
  },
  {
    "title": "Content and claim evidence",
    "detail": "Extract metadata and content candidates. Task completeness, factual claims, expertise and sources require independent review."
  },
  {
    "title": "Actual AI visibility",
    "detail": "The free scan marks this not measured. Target-product queries and visible source records are required before reporting mentions or citations."
  },
  {
    "title": "Business outcomes",
    "detail": "The free scan marks this not measured. Attributable referrals and conversions need first-party data, not a readiness score."
  }
];

const platformSteps = [
  [
    "Scan",
    "Read one public URL and scoped supporting files."
  ],
  [
    "Inspect",
    "Separate observations, issues and unknown evidence."
  ],
  [
    "Act",
    "Choose justified changes; preserve intentional exclusions and training preferences."
  ],
  [
    "Retest",
    "Compare the same final URL and rule version. Changed checks do not prove citation or traffic gains."
  ]
];

const visibilitySignals = [
  [
    "Query research",
    "Candidate questions for a future test, not measured citation gaps."
  ],
  [
    "Claim evidence",
    "Review whether the stated source supports the exact product claim."
  ],
  [
    "Competitor context",
    "Domains are recorded only; the free scan does not crawl or compare them."
  ],
  [
    "Measurement plan",
    "Record target product, market, query, date and visible sources before making comparisons."
  ]
];

const comparisonCards = [
  [
    "Page diagnostics",
    "Useful for scoped HTTP and HTML observations."
  ],
  [
    "Answer observations",
    "Useful for actual mentions and visible citations under recorded conditions."
  ],
  [
    "First-party analytics",
    "Useful for attributable visits and business events."
  ]
];

const competitorTakeaways = [
  {
    "tool": "Public-page scan",
    "emphasis": "One URL and supporting files.",
    "gap": "Cannot establish real indexing or AI citations.",
    "rankfortune": "RankFortune records sources, states and limits for each finding."
  },
  {
    "tool": "Target AI observations",
    "emphasis": "Actual answers and displayed source URLs.",
    "gap": "Not collected by this free scan.",
    "rankfortune": "Collect separately; a model-generated narrative is not this evidence."
  },
  {
    "tool": "Business measurement",
    "emphasis": "Attributable referrals and defined conversion events.",
    "gap": "Requires first-party data and comparable windows.",
    "rankfortune": "Do not infer business impact from a changed metadata check."
  }
];

const reportDeliverables = [
  "Four independent evidence tracks, without a combined GEO score",
  "Scope, timestamps and sources for the scan",
  "Observed issues and unresolved checks kept separate",
  "Verification steps for justified changes",
  "Observed metadata to review, not invented publish-ready claims"
];

const plans = [
  {
    "name": "Free Snapshot",
    "price": "$0",
    "detail": "One-URL evidence review, not a citation measurement.",
    "features": [
      "No login for first scan",
      "Versioned observations",
      "Search and training separated"
    ],
    "href": "#audit",
    "cta": "Run free scan"
  },
  {
    "name": "Full Report",
    "price": "$19",
    "detail": "The captured evidence in an emailed report.",
    "features": [
      "HTML and Markdown report",
      "Scoped issues and limitations",
      "Verification checklist"
    ],
    "href": "#audit",
    "cta": "Run scan first"
  },
  {
    "name": "Monitor",
    "price": "$39/mo",
    "detail": "Planned service. New subscriptions are not open; scheduled monitoring is not currently delivered.",
    "features": [
      "Planned: scheduled observations",
      "Planned: comparable history",
      "No live citation tracking promised"
    ],
    "href": "#audit",
    "cta": "Not open for purchase"
  }
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
    "Evidence-based public-page readiness review with separate technical, content, AI-observation and business-data tracks.",
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
              SEO + GEO evidence review for SaaS and indie tools
            </p>
            <h1 className="rf-reveal mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] text-white md:text-7xl">
              See the evidence behind your website’s search readiness.
            </h1>
            <p className="rf-reveal mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Inspect one public page, its HTML and crawler preferences.
              Separate observed issues from missing evidence. Actual AI mentions,
              citations and business outcomes are not measured by this scan.
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
                See evidence method
              </a>
            </div>
            <p className="rf-reveal mt-5 text-sm text-slate-400">
              Free scan &middot; No signup &middot; First snapshot in about 60 seconds
            </p>
            <p className="rf-reveal mt-3 text-sm text-slate-400">
              Want to see the output first?{" "}
              <Link className="text-cyan-200 underline decoration-cyan-300/40 underline-offset-4 hover:text-white" href="/sample-report">
                View an example audit report
              </Link>
            </p>
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
              Every finding includes its scope and rule version. Unknown access,
              indexing, factual support and AI visibility remain unknown.
              Fixes require observed evidence and a verification step.
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
              Keep technical observations, content evidence, actual AI visibility
              and business outcomes separate. The free scan measures only a limited
              part of this framework; the remaining checks are explicitly unresolved.
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
              Evidence you can inspect.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Inspect scoped findings, choose justified changes and retest the
              same final URL with the same rules. Competitor experiments,
              prompt monitoring and attribution need separate evidence collection.
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
            Compare SEO + GEO evidence review tools
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
              Separate observations from research questions.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              RankFortune records public-page evidence and unresolved checks.
              Actual AI answers, competitor comparisons and business outcomes
              require separate observations. Read the <Link href="/methodology" className="text-cyan-200 underline">methodology</Link> before interpreting a report.
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
                Start free, upgrade for the full report.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-400">
              Start with a free scan, then upgrade for the full evidence report
              and export. Monitor is planned and not open for new subscriptions.
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
              Direct answers about what RankFortune checks, who it is for, and
              what you get from the free scan and the full report.
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
