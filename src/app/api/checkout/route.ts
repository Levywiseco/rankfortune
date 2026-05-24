import { NextResponse } from "next/server";
import { buildCheckoutUrl, isCheckoutProduct } from "@/lib/checkout";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      product?: unknown;
      email?: unknown;
      auditUrl?: unknown;
      productName?: unknown;
    };

    if (!isCheckoutProduct(body.product)) {
      return NextResponse.json({ error: "Unknown checkout product." }, { status: 400 });
    }

    const email =
      typeof body.email === "string" && body.email.includes("@")
        ? body.email.trim().toLowerCase()
        : "";
    const auditUrl =
      typeof body.auditUrl === "string" ? body.auditUrl.trim().slice(0, 500) : "";
    const productName =
      typeof body.productName === "string" ? body.productName.trim().slice(0, 120) : "";

    if (body.product === "fullReport" && (!email || !auditUrl)) {
      return NextResponse.json(
        { error: "A website URL and work email are required for report delivery." },
        { status: 400 },
      );
    }

    const origin = process.env.NEXT_PUBLIC_SITE_URL || "https://rankfortune.com";
    const checkoutUrl = buildCheckoutUrl({
      product: body.product,
      email,
      auditUrl,
      productName,
      origin,
    });

    return NextResponse.json({ checkoutUrl });
  } catch {
    return NextResponse.json({ error: "Could not create checkout link." }, { status: 500 });
  }
}
