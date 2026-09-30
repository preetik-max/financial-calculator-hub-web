export interface InflationInput {
  currentAmount: number;
  inflationRate: number;
  years: number;
}

export interface InflationResult {
  currentAmount: number;
  inflationRate: number;
  years: number;
  futureValue: number;
  additionalCost: number;
  purchasingPower: number;
}

export function calculateInflation({
  currentAmount,
  inflationRate,
  years,
}: InflationInput): InflationResult {
  const amount = Math.max(0, currentAmount);
  const rate = Math.max(0, inflationRate);
  const period = Math.max(0, years);

  const futureValue =
    amount * Math.pow(1 + rate / 100, period);

  const additionalCost = futureValue - amount;

  const purchasingPower =
    futureValue > 0
      ? (amount / futureValue) * 100
      : 0;

  return {
    currentAmount: amount,
    inflationRate: rate,
    years: period,
    futureValue,
    additionalCost,
    purchasingPower,
  };
}

export function calculateInflationGrowth(
  currentAmount: number,
  inflationRate: number,
  years: number,
): { label: string; value: number }[] {
  const amount = Math.max(0, currentAmount);
  const rate = Math.max(0, inflationRate);
  const period = Math.max(1, Math.floor(years));

  return Array.from(
    { length: period },
    (_, index) => {
      const year = index + 1;
      const value =
        amount * Math.pow(1 + rate / 100, year);

      return {
        label: `Year ${year}`,
        value,
      };
    },
  );
}
