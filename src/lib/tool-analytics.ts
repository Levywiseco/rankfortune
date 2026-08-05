import type { ToolEvent, ToolEventSource } from "@/lib/tool-event-contract";

function verificationSource(): ToolEventSource | undefined {
  if (typeof window === "undefined") return undefined;

  const params = new URLSearchParams(window.location.search);
  return params.get("source") === "verification" ||
    params.get("utm_source") === "verification"
    ? "verification"
    : undefined;
}

export function trackToolEvent(event: ToolEvent, tool: string): void {
  if (typeof window === "undefined") return;

  const source = verificationSource();
  const payload = { event, tool, ...(source ? { source } : {}) };

  try {
    void fetch("/api/tool-event", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
      credentials: "omit",
      referrerPolicy: "no-referrer",
    }).catch(() => {});
  } catch {
    // Usage measurement must never interrupt an audit.
  }
}
