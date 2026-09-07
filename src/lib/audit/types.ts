export type AuditInput = {
  url: string;
  productName?: string;
  competitors?: string[];
};

export type AuditSignal = {
  key: string;
  label: string;
  state: "observed" | "issue" | "unknown" | "not-applicable";
  detail: string;
  scope: string;
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

export type EvidenceTrack = {
  id: string;
  label: string;
  state: "observed" | "partial" | "not-measured";
  summary: string;
};

export type AiCrawlerAccess = {
  userAgent: string;
  provider: string;
  purpose: "search" | "training" | "user-fetch";
  allowed: boolean | null;
  detail: string;
};

export type IndexingDirective = {
  target: string;
  value: string;
  source: "meta" | "X-Robots-Tag";
};

export type PageSnapshot = {
  finalUrl: string;
  host: string;
  title: string;
  description: string;
  h1: string[];
  h2: string[];
  canonical: string;
  indexingDirectives: IndexingDirective[];
  canonicalCount: number;
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
  textLength: number;
  textSample: string;
  robotsTxt: {
    exists: boolean | null;
    checkedPath: string;
    sitemapUrls: string[];
    aiCrawlers: AiCrawlerAccess[];
  };
  sitemap: {
    exists: boolean | null;
    urlCount: number;
    kind: "urlset" | "sitemapindex" | "unknown";
  };
};

export type FixItem = {
  signalKey: string;
  title: string;
  priority: "P1" | "P2";
  effort: "Small" | "Medium" | "Large";
  detail: string;
  scope: string;
  verification: string;
};

export type AuditReport = {
  ruleVersion: string;
  auditedAt: string;
  input: AuditInput;
  snapshot: PageSnapshot;
  evidence: AuditEvidence;
  tracks: EvidenceTrack[];
  signals: AuditSignal[];
  biggestGaps: FixItem[];
  actionPlan: FixItem[];
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
