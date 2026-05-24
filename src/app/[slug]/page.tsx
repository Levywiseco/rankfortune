import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLandingPage, landingPages } from "@/lib/landing-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `/${page.slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://rankfortune.com/${page.slug}`,
      siteName: "RankFortune",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export default async function LandingPageRoute({ params }: PageProps) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "RankFortune",
        item: "https://rankfortune.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.eyebrow,
        item: `https://rankfortune.com/${page.slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#09111f] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <Link className="flex items-center gap-3" href="/">
            <div className="grid size-9 place-items-center rounded-[8px] bg-cyan-300 text-sm font-bold text-slate-950">
              RF
            </div>
            <span className="font-semibold">RankFortune</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <Link className="hover:text-white" href="/#audit">
              Run audit
            </Link>
            <Link className="hover:text-white" href="/ai-visibility-audit-tools">
              Compare tools
            </Link>
          </nav>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100">
              {page.eyebrow}
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] text-white md:text-7xl">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {page.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="flex h-12 items-center justify-center rounded-[8px] bg-cyan-300 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                href="/#audit"
              >
                Run free audit
              </Link>
              <Link
                className="flex h-12 items-center justify-center rounded-[8px] border border-white/10 px-5 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/50 hover:text-white"
                href="/ai-visibility-audit-tools"
              >
                Compare tools
              </Link>
            </div>
          </div>

          <aside className="rounded-[8px] border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200">
              Best fit
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-200">{page.audience}</p>
          </aside>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-950/40 py-14">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 lg:grid-cols-2">
          <div className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-2xl font-semibold text-white">What RankFortune checks</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
              {page.checks.map((item) => (
                <li className="flex gap-3" key={item}>
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-2xl font-semibold text-white">What you get back</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
              {page.outcomes.map((item) => (
                <li className="flex gap-3" key={item}>
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {page.sections.map((section) => (
            <article
              className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5"
              key={section.title}
            >
              <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-950/40 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_420px]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200">
              FAQ
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-white">
              Questions this audit answers
            </h2>
            <div className="mt-8 space-y-4">
              {page.faqs.map((item) => (
                <article
                  className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5"
                  key={item.question}
                >
                  <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-[8px] border border-cyan-300/20 bg-cyan-300/[0.05] p-6">
            <h2 className="text-2xl font-semibold text-white">
              Get the first score before building a bigger program.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Run a free scan, then buy the full report only if the gaps are worth
              fixing. The paid report includes the AI narrative, prioritized fixes,
              and Markdown appendix.
            </p>
            <Link
              className="mt-6 flex h-12 items-center justify-center rounded-[8px] bg-cyan-300 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              href="/#audit"
            >
              Run RankFortune scan
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
