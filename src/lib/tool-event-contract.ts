export const TOOL_EVENTS = ["tool_start", "tool_success", "tool_export"] as const;

export type ToolEvent = (typeof TOOL_EVENTS)[number];
export type ToolEventSource = "verification";

export interface ToolEventPayload {
  event: ToolEvent;
  tool: string;
  source?: ToolEventSource;
}

const TOOL_SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ALLOWED_KEYS = new Set(["event", "tool", "source"]);

export function parseToolEventPayload(value: unknown): ToolEventPayload | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;

  const body = value as Record<string, unknown>;
  if (Object.keys(body).some((key) => !ALLOWED_KEYS.has(key))) return null;
  if (!TOOL_EVENTS.includes(body.event as ToolEvent)) return null;
  if (
    typeof body.tool !== "string" ||
    body.tool.length === 0 ||
    body.tool.length > 64 ||
    !TOOL_SLUG_PATTERN.test(body.tool)
  ) {
    return null;
  }
  if (body.source !== undefined && body.source !== "verification") return null;

  return {
    event: body.event as ToolEvent,
    tool: body.tool,
    ...(body.source === "verification" ? { source: body.source } : {}),
  };
}
