export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const status = Array.isArray(params.status) ? params.status[0] : params.status;
  const email = Array.isArray(params.email) ? params.email[0] : params.email;

  return (
    <main className="min-h-screen bg-[#09111f] px-5 py-16 text-white">
      <section className="mx-auto max-w-2xl rounded-[8px] border border-white/10 bg-white/[0.04] p-8">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200">
          RankFortune checkout
        </p>
        <h1 className="mt-4 text-3xl font-semibold">
          {status === "succeeded" ? "Payment received" : "Checkout complete"}
        </h1>
        <p className="mt-4 leading-7 text-slate-300">
          If you bought from a scan result, RankFortune will generate the full
          AI visibility report and email it to
          {email ? ` ${email}` : " your checkout email"}.
        </p>
        <p className="mt-3 leading-7 text-slate-400">
          The report is generated after Dodo confirms the payment webhook. It
          can take a minute if the target website is slow to crawl.
        </p>
        <a
          className="mt-8 inline-flex h-11 items-center rounded-[8px] bg-cyan-300 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          href="/"
        >
          Back to RankFortune
        </a>
      </section>
    </main>
  );
}
