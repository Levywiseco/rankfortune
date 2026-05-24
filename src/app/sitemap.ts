import type { MetadataRoute } from "next";
import { landingPages } from "@/lib/landing-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: "https://rankfortune.com/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://rankfortune.com/ai-visibility-audit-tools",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];

  const seoLandingPages: MetadataRoute.Sitemap = landingPages.map((page) => ({
    url: `https://rankfortune.com/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.82,
  }));

  return [...staticPages, ...seoLandingPages];
}
