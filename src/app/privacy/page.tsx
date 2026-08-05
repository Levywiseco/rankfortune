import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy - RankFortune",
  description: "How RankFortune handles audit inputs and privacy-friendly usage events.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-16 text-slate-200">
      <article className="mx-auto max-w-3xl rounded-[8px] border border-white/10 bg-white/[0.04] p-6 sm:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200">
          Privacy
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-white">
          Clear inputs, minimal usage measurement.
        </h1>
        <p className="mt-5 text-sm leading-7 text-slate-300">
          RankFortune receives the public website URL and optional product and
          competitor details you submit so it can generate the audit shown to
          you. A work email is only required when you choose to buy a delivered
          report.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-white">Tool usage events</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            When a free audit starts or returns a result, RankFortune writes a
            small usage event to its application logs. That event contains only
            the event name and the fixed tool name. Verification checks may also
            include the source label &quot;verification&quot;.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            The event payload we write does not add the audited URL, email
            address, competitor names, IP address, session identifier,
            submitted inputs, or report contents. Our hosting provider may
            process standard request metadata, such as an IP address, for site
            delivery and security. We do not use these events to create a
            customer profile.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-white">Questions</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            If you have a privacy or report-delivery question, contact
            support@rankfortune.com.
          </p>
        </section>

        <Link
          className="mt-10 inline-flex text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
          href="/"
        >
          Back to RankFortune
        </Link>
      </article>
    </main>
  );
}
