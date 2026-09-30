export interface GstInput {
  amount: number;
  gstRate: number;
}

export interface GstResult {
  amount: number;
  gstRate: number;
  gstAmount: number;
  inclusiveAmount: number;
  cgst: number;
  sgst: number;
}

export function calculateGst({
  amount,
  gstRate,
}: GstInput): GstResult {
  const baseAmount = Math.max(0, amount);
  const rate = Math.max(0, gstRate);

  const gstAmount = baseAmount * (rate / 100);
  const inclusiveAmount = baseAmount + gstAmount;

  return {
    amount: baseAmount,
    gstRate: rate,
    gstAmount,
    inclusiveAmount,
    cgst: gstAmount / 2,
    sgst: gstAmount / 2,
  };
}

export function calculateGstExclusive(
  inclusiveAmount: number,
  gstRate: number,
): number {
  const total = Math.max(0, inclusiveAmount);
  const rate = Math.max(0, gstRate);

  if (rate === 0) {
    return total;
  }

  return total / (1 + rate / 100);
}
