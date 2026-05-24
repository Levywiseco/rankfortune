export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const status = Array.isArray(params.status) ? params.status[0] : params.status;
  const email = Array.isArray(params.email) ? params.email[0] : params.email;
  const steps = [
    ["Payment confirmed", "Dodo sends the secure payment event to RankFortune."],
    ["Report generated", "RankFortune reruns the AI visibility audit for the purchased URL."],
    ["Email delivered", "The formatted report and Markdown appendix are sent to the checkout email."],
  ];

  return (
    <main className="min-h-screen bg-[#09111f] px-5 py-12 text-white md:py-16">
      <section className="mx-auto max-w-4xl overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.04]">
        <div className="border-b border-white/10 bg-cyan-300/[0.06] px-6 py-8 md:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200">
            RankFortune checkout
          </p>
          <div className="mt-5 grid gap-6 md:grid-cols-[1fr_220px] md:items-end">
            <div>
              <h1 className="text-3xl font-semibold md:text-4xl">
                {status === "succeeded" ? "Payment received" : "Checkout complete"}
              </h1>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                RankFortune will generate the full AI visibility report and email
                it to{email ? ` ${email}` : " your checkout email"} after the
                payment webhook is confirmed.
              </p>
            </div>
            <div className="rounded-[8px] border border-cyan-300/20 bg-slate-950/70 p-4">
              <div className="text-4xl font-semibold text-cyan-200">3</div>
              <p className="mt-2 text-sm text-slate-400">delivery steps</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 p-6 md:grid-cols-[1fr_280px] md:p-8">
          <div className="space-y-3">
            {steps.map(([title, detail], index) => (
              <div
                className="rounded-[8px] border border-white/10 bg-slate-950/70 p-4"
                key={title}
              >
                <div className="flex gap-4">
                  <div className="grid size-9 shrink-0 place-items-center rounded-[8px] bg-cyan-300 text-sm font-bold text-slate-950">
                    {index + 1}
                  </div>
                  <div>
                    <h2 className="font-semibold text-white">{title}</h2>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="rounded-[8px] border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
            <h2 className="text-lg font-semibold">What arrives by email</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              <li>AI summary and positioning diagnosis</li>
              <li>Three score layers with plain-language notes</li>
              <li>Prioritized gaps and 7-day action plan</li>
              <li>Copy-ready title, description, FAQ, and schema ideas</li>
              <li>Markdown appendix for sharing with a team</li>
            </ul>
          </aside>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="text-sm text-slate-400">
            Delivery usually takes less than a minute if the audited site is reachable.
          </p>
          <a
            className="inline-flex h-11 items-center justify-center rounded-[8px] bg-cyan-300 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            href="/"
          >
            Back to RankFortune
          </a>
        </div>
      </section>
    </main>
  );
}
