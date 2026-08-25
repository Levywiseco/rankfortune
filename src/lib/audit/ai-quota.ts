import { createHash } from "node:crypto";

export const FREE_AI_PREVIEW_LIMIT = 3;
export const FREE_AI_PREVIEW_WINDOW_MS = 24 * 60 * 60 * 1000;

type QuotaEntry = {
  startedAt: number;
  used: number;
};

const quotaEntries = new Map<string, QuotaEntry>();

function normalizeKey(value: string) {
  return value.trim().slice(0, 256) || "anonymous";
}

/**
 * Returns a short-lived, non-reversible key without persisting the client IP.
 * The in-memory limit is intentionally best-effort on serverless instances;
 * it is a cost guard for normal use, not an authentication boundary.
 */
export function aiPreviewKeyFromRequest(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const realIp = request.headers.get("x-real-ip")?.trim();
  const rawKey = forwarded || realIp || "anonymous";
  return createHash("sha256").update(normalizeKey(rawKey)).digest("hex").slice(0, 32);
}

export function consumeFreeAiPreview(
  key: string,
  now = Date.now(),
) {
  for (const [entryKey, entry] of quotaEntries) {
    if (now - entry.startedAt >= FREE_AI_PREVIEW_WINDOW_MS) {
      quotaEntries.delete(entryKey);
    }
  }

  const current = quotaEntries.get(normalizeKey(key));
  if (!current || now - current.startedAt >= FREE_AI_PREVIEW_WINDOW_MS) {
    quotaEntries.set(normalizeKey(key), { startedAt: now, used: 1 });
    return {
      allowed: true,
      remaining: FREE_AI_PREVIEW_LIMIT - 1,
      limit: FREE_AI_PREVIEW_LIMIT,
    };
  }

  if (current.used >= FREE_AI_PREVIEW_LIMIT) {
    return { allowed: false, remaining: 0, limit: FREE_AI_PREVIEW_LIMIT };
  }

  current.used += 1;
  return {
    allowed: true,
    remaining: FREE_AI_PREVIEW_LIMIT - current.used,
    limit: FREE_AI_PREVIEW_LIMIT,
  };
}

export function resetAiPreviewQuotaForTests() {
  quotaEntries.clear();
}
