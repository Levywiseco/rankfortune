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

export type AuditEvidenceSource = {
  label: string;
  url: string;
  status: number | null;
  outcome: "verified" | "missing" | "unavailable" | "not-checked";
  detail: string;
};

export type AuditEvidence = {
  observedAt: string;
  method: string;
  sources: AuditEvidenceSource[];
  limitations: string[];
};

export type AuditScore = {
  label: string;
  score: number;
  maxScore: number;
  summary: string;
};

export type AiCrawlerAccess = {
  userAgent: string;
  provider: string;
  allowed: boolean;
  detail: string;
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
    aiCrawlers: AiCrawlerAccess[];
  };
  sitemap: {
    exists: boolean;
    urlCount: number;
  };
};

export type FixItem = {
  signalKey: string;
  title: string;
  priority: "High" | "Medium" | "Low";
  effort: "Small" | "Medium" | "Large";
  detail: string;
};

export type AuditReport = {
  auditedAt: string;
  input: AuditInput;
  snapshot: PageSnapshot;
  evidence: AuditEvidence;
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
    mode: "preview" | "full" | "fallback" | "limited";
    freePreviewRemaining: number | null;
    summary: string;
    positioning: string;
    recommendations: string[];
  };
};
