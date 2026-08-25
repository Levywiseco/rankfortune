import assert from "node:assert/strict";
import {
  FREE_AI_PREVIEW_LIMIT,
  FREE_AI_PREVIEW_WINDOW_MS,
  consumeFreeAiPreview,
  resetAiPreviewQuotaForTests,
} from "../src/lib/audit/ai-quota.ts";
import { isCheckoutProduct } from "../src/lib/checkout.ts";

resetAiPreviewQuotaForTests();

const first = consumeFreeAiPreview("client-a", 1_000);
assert.equal(first.allowed, true);
assert.equal(first.remaining, FREE_AI_PREVIEW_LIMIT - 1);

consumeFreeAiPreview("client-a", 1_001);
const third = consumeFreeAiPreview("client-a", 1_002);
assert.equal(third.allowed, true);
assert.equal(third.remaining, 0);

const limited = consumeFreeAiPreview("client-a", 1_003);
assert.equal(limited.allowed, false);
assert.equal(limited.remaining, 0);

const reset = consumeFreeAiPreview(
  "client-a",
  1_000 + FREE_AI_PREVIEW_WINDOW_MS + 1,
);
assert.equal(reset.allowed, true);
assert.equal(reset.remaining, FREE_AI_PREVIEW_LIMIT - 1);

assert.equal(isCheckoutProduct("fullReport"), true);
assert.equal(isCheckoutProduct("monitorMonthly"), false);

console.log("Free AI preview quota checks passed.");
