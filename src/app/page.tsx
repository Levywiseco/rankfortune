import { AuditForm } from "@/components/audit-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09111f] text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-[8px] bg-cyan-300 text-sm font-bold text-slate-950">
              AV
            </div>
            <span className="font-semibold">AI Visibility Audit</span>
          </div>
          <a
            className="rounded-[8px] border border-white/10 px-4 py-2 text-sm text-slate-200 hover:border-cyan-300/50 hover:text-white"
            href="#audit"
          >
            Run audit
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_430px] lg:items-end">
          <div>
            <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100">
              SEO + AEO + LLM readiness
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] text-white md:text-7xl">
              Check whether AI search can understand and recommend your site.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Run a practical visibility audit for ChatGPT, Perplexity, AI
              Overviews, and other answer engines. Get technical blockers,
              content gaps, and copy-ready fixes.
            </p>
          </div>

          <div className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
            <div className="grid grid-cols-3 gap-3">
              {[
                ["60s", "audit"],
                ["15", "signals"],
                ["7 day", "fix plan"],
              ].map(([metric, label]) => (
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
              First version focuses on deterministic website signals. Connect
              an OpenAI key later to generate richer narrative reports.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16" id="audit">
        <AuditForm />
      </section>
    </main>
  );
}
