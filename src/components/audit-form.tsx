"use client";

import { FormEvent, useMemo, useState } from "react";
import type { AuditReport } from "@/lib/audit/types";

type Status = "idle" | "loading" | "ready" | "error";

function percent(score: number, maxScore: number) {
  return Math.round((score / Math.max(maxScore, 1)) * 100);
}

function priorityClass(priority: string) {
  if (priority === "High") return "border-rose-400/60 bg-rose-500/10 text-rose-100";
  if (priority === "Medium")
    return "border-amber-400/60 bg-amber-500/10 text-amber-100";
  return "border-emerald-400/60 bg-emerald-500/10 text-emerald-100";
}

const sampleScores = [
  ["Technical Discoverability", "92", "Sitemap, robots, canonical, and indexability are healthy."],
  ["Brand Clarity", "78", "The homepage explains the core job, but the category could be sharper."],
  ["AI Answer Readiness", "46", "Missing FAQ, comparison, and use-case pages limit answer-engine coverage."],
];

const sampleGaps = [
  {
    title: "Create an FAQ block with buyer-intent questions",
    priority: "High",
    detail:
      "Add short answers for pricing, use cases, security, alternatives, and setup so AI answers have citeable content.",
  },
  {
    title: "Publish one alternatives page",
    priority: "Medium",
    detail:
      "Comparison-style pages help AI systems recommend your product for high-intent prompts.",
  },
  {
    title: "Add use-case pages for the top customer jobs",
    priority: "Medium",
    detail:
      "Separate pages for concrete workflows improve entity coverage and retrieval quality.",
  },
];

const samplePromptChecks = [
  {
    prompt: "Best AI workflow automation tools for small teams",
    model: "ChatGPT",
    status: "Not cited",
    action: "Create a comparison page with clear category positioning.",
  },
  {
    prompt: "Sample SaaS alternatives for founders",
    model: "Perplexity",
    status: "Competitors cited",
    action: "Publish alternatives and use-case pages with answer-first copy.",
  },
  {
    prompt: "Is Sample SaaS good for secure team workflows?",
    model: "Gemini",
    status: "Weak evidence",
    action: "Add security, pricing, FAQ, and proof sections to the homepage.",
  },
];

export function AuditForm() {
  const [url, setUrl] = useState("pdf-everything.com");
  const [productName, setProductName] = useState("");
  const [competitors, setCompetitors] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [report, setReport] = useState<AuditReport | null>(null);

  const scoreLabel = useMemo(() => {
    if (!report) return "Ready";
    if (report.overallScore >= 80) return "Strong";
    if (report.overallScore >= 60) return "Fixable";
    return "Needs work";
  }, [report]);

  const hasLeadEmail = email.trim().length > 3;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");
    setReport(null);

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          url,
          productName,
          competitors: competitors
            .split(",")
            .map((value) => value.trim())
            .filter(Boolean),
        }),
      });

      const json = await response.json();
      if (!response.ok) throw new Error(json.error ?? "Audit failed.");

      setReport(json as AuditReport);
      setStatus("ready");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Audit failed.");
      setStatus("error");
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
      <section className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
              Free audit
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white">
              Run a RankFortune scan
            </h2>
          </div>
          <div className="rounded-[8px] border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-sm text-cyan-100">
            {scoreLabel}
          </div>
        </div>

        <form className="space-y-4" onSubmit={submit}>
          <label className="block">
            <span className="text-sm font-medium text-slate-200">
              Website URL
            </span>
            <input
              className="mt-2 h-12 w-full rounded-[8px] border border-white/10 bg-slate-950 px-4 text-base text-white outline-none ring-cyan-300/40 transition focus:border-cyan-300 focus:ring-4"
              onChange={(event) => setUrl(event.target.value)}
              placeholder="example.com"
              required
              value={url}
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-200">
              Product name
            </span>
            <input
              className="mt-2 h-11 w-full rounded-[8px] border border-white/10 bg-slate-950 px-4 text-sm text-white outline-none ring-cyan-300/40 transition focus:border-cyan-300 focus:ring-4"
              onChange={(event) => setProductName(event.target.value)}
              placeholder="Optional"
              value={productName}
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-200">
              Competitors
            </span>
            <input
              className="mt-2 h-11 w-full rounded-[8px] border border-white/10 bg-slate-950 px-4 text-sm text-white outline-none ring-cyan-300/40 transition focus:border-cyan-300 focus:ring-4"
              onChange={(event) => setCompetitors(event.target.value)}
              placeholder="competitor.com, another.com"
              value={competitors}
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-200">
              Work email for full report
            </span>
            <input
              className="mt-2 h-11 w-full rounded-[8px] border border-white/10 bg-slate-950 px-4 text-sm text-white outline-none ring-cyan-300/40 transition focus:border-cyan-300 focus:ring-4"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@company.com"
              type="email"
              value={email}
            />
          </label>

          <button
            className="flex h-12 w-full items-center justify-center rounded-[8px] bg-cyan-300 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:bg-slate-600 disabled:text-slate-300"
            disabled={status === "loading"}
            type="submit"
          >
            {status === "loading" ? "Running audit..." : "Run free audit"}
          </button>
        </form>

        {status === "error" ? (
          <div className="mt-4 rounded-[8px] border border-rose-400/40 bg-rose-500/10 p-3 text-sm text-rose-100">
            {error}
          </div>
        ) : null}

        <div className="mt-6 grid grid-cols-3 gap-2 text-center text-xs text-slate-300">
          <div className="rounded-[8px] bg-white/[0.04] p-3">
            Crawl
            <strong className="mt-1 block text-white">HTML</strong>
          </div>
          <div className="rounded-[8px] bg-white/[0.04] p-3">
            Check
            <strong className="mt-1 block text-white">AEO</strong>
          </div>
          <div className="rounded-[8px] bg-white/[0.04] p-3">
            Report
            <strong className="mt-1 block text-white">JSON</strong>
          </div>
        </div>

        <p className="mt-4 text-xs leading-5 text-slate-500">
          Free scan runs immediately. Add an email if you want the full report,
          export, and weekly monitoring offer after the score is ready.
        </p>
      </section>

      <section className="min-h-[560px] rounded-[8px] border border-white/10 bg-slate-950/70 p-5">
        {!report ? (
          <div className="space-y-6">
            <div className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200">
                  Example report
                </p>
                <p className="mt-3 text-sm text-slate-400">
                  sample-saas.com
                </p>
                <h3 className="mt-2 text-3xl font-semibold text-white">
                  AI visibility score
                </h3>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-6xl font-semibold text-cyan-200">
                  72
                </span>
                <span className="pb-2 text-sm text-slate-400">/100</span>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {sampleScores.map(([title, score, detail]) => (
                <div
                  className="rounded-[8px] border border-white/10 bg-white/[0.04] p-4"
                  key={title}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-sm font-semibold text-white">
                      {title}
                    </h4>
                    <span className="font-mono text-lg text-cyan-200">
                      {score}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-[8px] border border-white/10 bg-white/[0.03] p-4">
              <h4 className="font-semibold text-white">Sample gaps</h4>
              <div className="mt-4 space-y-3">
                {sampleGaps.map((gap) => (
                  <div
                    className="rounded-[8px] border border-white/10 bg-slate-950 p-4"
                    key={gap.title}
                  >
                    <span
                      className={`rounded-full border px-2.5 py-1 text-xs ${priorityClass(
                        gap.priority,
                      )}`}
                    >
                      {gap.priority}
                    </span>
                    <h5 className="mt-3 font-semibold text-white">
                      {gap.title}
                    </h5>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {gap.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[8px] border border-cyan-300/20 bg-cyan-300/[0.05] p-4">
              <div className="flex items-center justify-between gap-3">
                <h4 className="font-semibold text-white">Copy-ready fixes</h4>
                <span className="rounded-full border border-cyan-300/30 px-2.5 py-1 text-xs text-cyan-100">
                  Preview
                </span>
              </div>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-slate-500">Suggested title</dt>
                  <dd className="mt-1 text-slate-200">
                    Sample SaaS - AI workflow automation for small teams
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500">Suggested FAQ</dt>
                  <dd className="mt-1 text-slate-200">
                    What does Sample SaaS do, who is it for, and how is it
                    different from alternatives?
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-[8px] border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center justify-between gap-3">
                <h4 className="font-semibold text-white">
                  Prompt visibility preview
                </h4>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300">
                  Full report
                </span>
              </div>
              <div className="mt-4 space-y-3">
                {samplePromptChecks.map((check) => (
                  <div
                    className="rounded-[8px] border border-white/10 bg-slate-950 p-4"
                    key={check.prompt}
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="rounded-full border border-cyan-300/30 px-2.5 py-1 text-cyan-100">
                        {check.model}
                      </span>
                      <span className="rounded-full border border-rose-400/40 px-2.5 py-1 text-rose-100">
                        {check.status}
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-medium text-white">
                      {check.prompt}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {check.action}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm text-slate-400">{report.snapshot.host}</p>
                <h3 className="mt-2 text-3xl font-semibold text-white">
                  AI visibility score
                </h3>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-6xl font-semibold text-cyan-200">
                  {report.overallScore}
                </span>
                <span className="pb-2 text-sm text-slate-400">/100</span>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {report.scores.map((score) => (
                <div
                  className="rounded-[8px] border border-white/10 bg-white/[0.04] p-4"
                  key={score.label}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-sm font-semibold text-white">
                      {score.label}
                    </h4>
                    <span className="font-mono text-lg text-cyan-200">
                      {percent(score.score, score.maxScore)}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {score.summary}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
              <div className="rounded-[8px] border border-white/10 bg-white/[0.03] p-4">
                <h4 className="font-semibold text-white">Biggest gaps</h4>
                <div className="mt-4 space-y-3">
                  {report.biggestGaps.map((gap) => (
                    <div
                      className="rounded-[8px] border border-white/10 bg-slate-950 p-4"
                      key={gap.title}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`rounded-full border px-2.5 py-1 text-xs ${priorityClass(
                            gap.priority,
                          )}`}
                        >
                          {gap.priority}
                        </span>
                        <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300">
                          {gap.effort} effort
                        </span>
                      </div>
                      <h5 className="mt-3 font-semibold text-white">
                        {gap.title}
                      </h5>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {gap.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <aside className="rounded-[8px] border border-white/10 bg-white/[0.03] p-4">
                <h4 className="font-semibold text-white">Detected signals</h4>
                <div className="mt-4 space-y-2">
                  {report.signals.slice(0, 10).map((signal) => (
                    <div
                      className="flex items-start justify-between gap-3 rounded-[8px] bg-slate-950 px-3 py-2"
                      key={signal.key}
                    >
                      <div>
                        <p className="text-sm font-medium text-white">
                          {signal.label}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          {signal.detail}
                        </p>
                      </div>
                      <span
                        className={
                          signal.passed ? "text-emerald-300" : "text-rose-300"
                        }
                      >
                        {signal.passed ? "Pass" : "Fix"}
                      </span>
                    </div>
                  ))}
                </div>
              </aside>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-[8px] border border-white/10 bg-white/[0.03] p-4">
                <h4 className="font-semibold text-white">Copy suggestions</h4>
                <dl className="mt-4 space-y-4 text-sm">
                  <div>
                    <dt className="text-slate-500">Title</dt>
                    <dd className="mt-1 text-slate-200">
                      {report.copySuggestions.title}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Description</dt>
                    <dd className="mt-1 text-slate-200">
                      {report.copySuggestions.description}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-[8px] border border-cyan-300/20 bg-cyan-300/[0.05] p-4">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="font-semibold text-white">AI report</h4>
                  <span className="rounded-full border border-cyan-300/30 px-2.5 py-1 text-xs text-cyan-100">
                    {report.aiReport.enabled ? "Connected" : "Rule fallback"}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {report.aiReport.summary}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {report.aiReport.positioning}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {report.aiReport.recommendations.map((recommendation) => (
                    <li key={recommendation}>• {recommendation}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-[8px] border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200">
                    Next step
                  </p>
                  <h4 className="mt-2 text-xl font-semibold text-white">
                    Turn this scan into a full report.
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {hasLeadEmail
                      ? `Ready to prepare delivery for ${email.trim()}.`
                      : "Add a work email in the form, then rerun the scan when you want report delivery."}
                  </p>
                </div>
                <a
                  className="flex h-11 shrink-0 items-center justify-center rounded-[8px] bg-cyan-300 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                  href="#pricing"
                >
                  See paid options
                </a>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
