import { parseToolEventPayload } from "@/lib/tool-event-contract";

const MAX_BODY_BYTES = 512;

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || "0");
  if (contentLength > MAX_BODY_BYTES) {
    return Response.json({ error: "Invalid tool event." }, { status: 400 });
  }

  try {
    const body = await request.text();
    if (new TextEncoder().encode(body).byteLength > MAX_BODY_BYTES) {
      return Response.json({ error: "Invalid tool event." }, { status: 400 });
    }

    const payload = parseToolEventPayload(JSON.parse(body));
    if (!payload) {
      return Response.json({ error: "Invalid tool event." }, { status: 400 });
    }

    console.info(JSON.stringify({ type: "TOOL_USAGE", ...payload }));
    return new Response(null, { status: 204 });
  } catch {
    return Response.json({ error: "Invalid tool event." }, { status: 400 });
  }
}
