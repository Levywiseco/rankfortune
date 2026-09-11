import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const siteUrl = "https://rankfortune.com";
const gaMeasurementId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ??
  (process.env.VERCEL_ENV === "production" ? "G-32J57FBCL7" : undefined);

export const metadata: Metadata = {
  title: "RankFortune - AI Visibility Audit for Websites",
  description:
    "Inspect public-page search readiness with versioned evidence, scoped issues and unknown states. Actual AI citations and traffic require separate measurement.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "RankFortune - AI Visibility Audit for Websites",
    description:
      "Inspect public-page search readiness with versioned evidence, scoped issues and unknown states. Actual AI citations and traffic require separate measurement.",
    url: siteUrl,
    siteName: "RankFortune",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "RankFortune AI visibility audit preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RankFortune - AI Visibility Audit for Websites",
    description:
      "Inspect public-page search readiness with versioned evidence, scoped issues and unknown states. Actual AI citations and traffic require separate measurement.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        {gaMeasurementId ? <GoogleAnalytics gaId={gaMeasurementId} /> : null}
      </body>
    </html>
  );
}
