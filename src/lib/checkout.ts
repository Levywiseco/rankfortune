export const checkoutProducts = {
  fullReport: {
    id: "pdt_0NfWo9jSycHJv16ZUlpD3",
    label: "RankFortune Full Report",
  },
  monitorMonthly: {
    id: "pdt_0NfWo9p9ml2W0HnkC5Nsc",
    label: "RankFortune Monitor Monthly",
  },
} as const;

export type CheckoutProduct = keyof typeof checkoutProducts;

export function isCheckoutProduct(value: unknown): value is CheckoutProduct {
  return value === "fullReport" || value === "monitorMonthly";
}

export function buildCheckoutUrl({
  product,
  email,
  auditUrl,
  productName,
  origin,
}: {
  product: CheckoutProduct;
  email?: string;
  auditUrl?: string;
  productName?: string;
  origin: string;
}) {
  const checkout = new URL(
    `https://checkout.dodopayments.com/buy/${checkoutProducts[product].id}`,
  );
  checkout.searchParams.set("quantity", "1");
  checkout.searchParams.set("showDiscounts", "false");

  const redirect = new URL("/checkout/success", origin);
  redirect.searchParams.set("product", product);
  checkout.searchParams.set("redirect_url", redirect.toString());

  if (email) {
    checkout.searchParams.set("email", email);
    checkout.searchParams.set("disableEmail", "true");
    checkout.searchParams.set("metadata_email", email);
  }

  if (auditUrl) {
    checkout.searchParams.set("metadata_url", auditUrl);
  }

  if (productName) {
    checkout.searchParams.set("metadata_productName", productName);
  }

  checkout.searchParams.set("metadata_product", product);
  checkout.searchParams.set("metadata_source", "rankfortune");

  return checkout.toString();
}
