export function formatNumber(
  value: number,
  maximumFractionDigits = 0,
): string {
  if (!Number.isFinite(value)) {
    return "0";
  }

  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits,
  }).format(value);
}
