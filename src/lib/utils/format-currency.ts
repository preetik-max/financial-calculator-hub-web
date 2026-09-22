export function formatCurrency(
  value: number,
  maximumFractionDigits = 0,
): string {
  if (!Number.isFinite(value)) {
    return "₹0";
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits,
  }).format(value);
}

export function formatCompactCurrency(value: number): string {
  if (!Number.isFinite(value)) {
    return "₹0";
  }

  if (Math.abs(value) >= 10_000_000) {
    return `₹${(value / 10_000_000).toFixed(2)} Cr`;
  }

  if (Math.abs(value) >= 100_000) {
    return `₹${(value / 100_000).toFixed(2)} L`;
  }

  if (Math.abs(value) >= 1_000) {
    return `₹${(value / 1_000).toFixed(1)}K`;
  }

  return formatCurrency(value);
}
