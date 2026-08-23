import assert from "node:assert/strict";
import { parseToolEventPayload } from "../src/lib/tool-event-contract.ts";

assert.deepEqual(
  parseToolEventPayload({ event: "tool_start", tool: "ai-visibility-audit" }),
  { event: "tool_start", tool: "ai-visibility-audit" },
);
assert.deepEqual(
  parseToolEventPayload({
    event: "tool_success",
    tool: "ai-visibility-audit",
    source: "verification",
  }),
  {
    event: "tool_success",
    tool: "ai-visibility-audit",
    source: "verification",
  },
);
assert.deepEqual(
  parseToolEventPayload({ event: "founder_audit_interest", tool: "ai-visibility-audit" }),
  { event: "founder_audit_interest", tool: "ai-visibility-audit" },
);
assert.deepEqual(
  parseToolEventPayload({ event: "audit_retest_completed", tool: "ai-visibility-audit" }),
  { event: "audit_retest_completed", tool: "ai-visibility-audit" },
);

for (const payload of [
  null,
  [],
  {},
  { event: "audit", tool: "ai-visibility-audit" },
  { event: "tool_start", tool: "AI Visibility Audit" },
  { event: "tool_start", tool: "../audit" },
  { event: "tool_start", tool: "a".repeat(65) },
  { event: "tool_success", tool: "ai-visibility-audit", source: "campaign" },
  {
    event: "tool_success",
    tool: "ai-visibility-audit",
    url: "https://private.example",
  },
  { event: "tool_success", tool: "ai-visibility-audit", session: "private" },
]) {
  assert.equal(parseToolEventPayload(payload), null);
}

console.log("Tool event contract checks passed.");
