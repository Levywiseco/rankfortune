import type { MetadataRoute } from "next";
import { landingPages } from "@/lib/landing-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: "https://rankfortune.com/methodology", changeFrequency: "monthly", priority: 0.7 },
    {
      url: "https://rankfortune.com/",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://rankfortune.com/ai-visibility-audit-tools",
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: "https://rankfortune.com/privacy",
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: "https://rankfortune.com/sample-report",
      changeFrequency: "monthly",
      priority: 0.7,    },
  ];

  const seoLandingPages: MetadataRoute.Sitemap = landingPages.map((page) => ({
    url: `https://rankfortune.com/${page.slug}`,
    changeFrequency: "weekly",
    priority: 0.82,
  }));

  return [...staticPages, ...seoLandingPages];
}
