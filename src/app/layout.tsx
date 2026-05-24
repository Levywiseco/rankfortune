import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://rankfortune.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RankFortune - AI Visibility Audit for Websites",
  description:
    "Check whether ChatGPT, Perplexity, Gemini, and AI search engines can understand, cite, and recommend your website.",
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
      "Check whether ChatGPT, Perplexity, Gemini, and AI search engines can understand, cite, and recommend your website.",
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
      "Check whether ChatGPT, Perplexity, Gemini, and AI search engines can understand, cite, and recommend your website.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
