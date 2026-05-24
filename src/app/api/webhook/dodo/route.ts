import crypto from "crypto";
import { NextResponse } from "next/server";
import { runAudit } from "@/lib/audit/audit";
import { sendReportEmail } from "@/lib/report-email";

export const runtime = "nodejs";

function verifyStandardWebhook(body: string, headers: Headers) {
  const webhookSecret = process.env.DODO_WEBHOOK_SECRET;
  if (!webhookSecret) return false;

  const signature = headers.get("webhook-signature");
  const timestamp = headers.get("webhook-timestamp");
  const webhookId = headers.get("webhook-id");
  if (!signature || !timestamp || !webhookId) return false;

  const signedContent = `${webhookId}.${timestamp}.${body}`;
  const secretBytes = Buffer.from(
    webhookSecret.split("_")[1] || webhookSecret,
    "base64",
  );
  const computedSignature = crypto
    .createHmac("sha256", secretBytes)
    .update(signedContent)
    .digest("base64");

  return signature.split(" ").some((sig) => {
    const sigValue = sig.split(",")[1] || sig;
    return sigValue === computedSignature;
  });
}

function verifySharedHeader(headers: Headers) {
  const expected = process.env.RANKFORTUNE_WEBHOOK_SECRET;
  if (!expected) return false;
  const actual = headers.get("x-rankfortune-webhook-secret");
  if (!actual) return false;

  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(actual);
  return (
    expectedBuffer.length === actualBuffer.length &&
    crypto.timingSafeEqual(expectedBuffer, actualBuffer)
  );
}

function metadataFrom(data: Record<string, unknown>) {
  const candidates = [
    data.metadata,
    (data.payment as { metadata?: unknown } | undefined)?.metadata,
    (data.subscription as { metadata?: unknown } | undefined)?.metadata,
    (data.checkout_session as { metadata?: unknown } | undefined)?.metadata,
  ];
  return candidates.find(
    (value): value is Record<string, unknown> =>
      Boolean(value) && typeof value === "object" && !Array.isArray(value),
  ) ?? {};
}

function stringValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function customerEmail(data: Record<string, unknown>, metadata: Record<string, unknown>) {
  const customer = data.customer as { email?: unknown } | undefined;
  return (
    stringValue(customer?.email) ||
    stringValue(data.email) ||
    stringValue(metadata.email) ||
    stringValue(metadata.metadata_email)
  ).toLowerCase();
}

function auditUrlFrom(metadata: Record<string, unknown>) {
  return (
    stringValue(metadata.url) ||
    stringValue(metadata.audit_url) ||
    stringValue(metadata.auditUrl) ||
    stringValue(metadata.metadata_url)
  );
}

export async function POST(request: Request) {
  const body = await request.text();

  if (!verifyStandardWebhook(body, request.headers) && !verifySharedHeader(request.headers)) {
    return NextResponse.json({ error: "Invalid webhook signature" }, { status: 401 });
  }

  try {
    const payload = JSON.parse(body) as { type?: string; data?: Record<string, unknown> };
    const eventType = payload.type;

    if (eventType !== "payment.succeeded" && eventType !== "subscription.active") {
      return NextResponse.json({ received: true, ignored: true });
    }

    const data = payload.data ?? {};
    const metadata = metadataFrom(data);
    const email = customerEmail(data, metadata);
    const auditUrl = auditUrlFrom(metadata);

    if (!email || !auditUrl) {
      console.warn("[RankFortune] Missing email or audit URL in Dodo webhook metadata");
      return NextResponse.json({
        received: true,
        delivered: false,
        reason: "missing_email_or_url",
      });
    }

    const report = await runAudit({
      url: auditUrl,
      productName: stringValue(metadata.productName) || stringValue(metadata.metadata_productName),
    });
    const delivery = await sendReportEmail({ to: email, report });

    return NextResponse.json({ received: true, delivered: delivery.sent });
  } catch (error) {
    console.error("[RankFortune Dodo webhook]", error);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
