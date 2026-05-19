export type AuditInput = {
  url: string;
  productName?: string;
  competitors?: string[];
};

export type AuditSignal = {
  key: string;
  label: string;
  passed: boolean;
  detail: string;
  weight: number;
};

export type AuditScore = {
  label: string;
  score: number;
  maxScore: number;
  summary: string;
};

export type PageSnapshot = {
  finalUrl: string;
  host: string;
  title: string;
  description: string;
  h1: string[];
  h2: string[];
  canonical: string;
  robotsIndexable: string;
  schemaTypes: string[];
  internalLinks: string[];
  detectedPages: {
    pricing: boolean;
    blog: boolean;
    docs: boolean;
    faq: boolean;
    alternatives: boolean;
    useCases: boolean;
    about: boolean;
  };
  wordCount: number;
  textSample: string;
  robotsTxt: {
    exists: boolean;
    sitemapUrls: string[];
  };
  sitemap: {
    exists: boolean;
    urlCount: number;
  };
};

export type FixItem = {
  title: string;
  priority: "High" | "Medium" | "Low";
  effort: "Small" | "Medium" | "Large";
  detail: string;
};

export type AuditReport = {
  input: AuditInput;
  snapshot: PageSnapshot;
  overallScore: number;
  scores: AuditScore[];
  signals: AuditSignal[];
  biggestGaps: FixItem[];
  sevenDayPlan: FixItem[];
  copySuggestions: {
    title: string;
    description: string;
    faq: string[];
    schemaTypes: string[];
  };
  aiReport: {
    enabled: boolean;
    summary: string;
    positioning: string;
    recommendations: string[];
  };
};
