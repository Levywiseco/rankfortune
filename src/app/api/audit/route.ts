import { NextResponse } from "next/server";
import { runAudit } from "@/lib/audit/audit";
import type { AuditInput } from "@/lib/audit/types";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<AuditInput>;

    if (!body.url || typeof body.url !== "string") {
      return NextResponse.json(
        { error: "A website URL is required." },
        { status: 400 },
      );
    }

    const competitors = Array.isArray(body.competitors)
      ? body.competitors
          .map((value) => String(value).trim())
          .filter(Boolean)
          .slice(0, 3)
      : [];

    const report = await runAudit({
      url: body.url,
      productName:
        typeof body.productName === "string" ? body.productName : undefined,
      competitors,
    });

    return NextResponse.json(report);
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "The audit failed. Please try another public website.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
