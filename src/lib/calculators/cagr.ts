export interface CagrInput {
  initialInvestment: number;
  finalValue: number;
  years: number;
}

export interface CagrResult {
  initialInvestment: number;
  finalValue: number;
  years: number;
  absoluteGain: number;
  cagr: number;
}

export function calculateCagr({
  initialInvestment,
  finalValue,
  years,
}: CagrInput): CagrResult {
  const initial = Math.max(0, initialInvestment);
  const final = Math.max(0, finalValue);
  const period = Math.max(0, years);

  if (initial <= 0 || final <= 0 || period <= 0) {
    return {
      initialInvestment: initial,
      finalValue: final,
      years: period,
      absoluteGain: final - initial,
      cagr: 0,
    };
  }

  const cagr =
    (Math.pow(final / initial, 1 / period) - 1) * 100;

  return {
    initialInvestment: initial,
    finalValue: final,
    years: period,
    absoluteGain: final - initial,
    cagr,
  };
}

export function calculateCagrGrowth(
  initialInvestment: number,
  finalValue: number,
  years: number,
) {
  const initial = Math.max(0, initialInvestment);
  const final = Math.max(0, finalValue);
  const period = Math.max(1, Math.floor(years));

  if (initial <= 0 || final <= 0) {
    return [];
  }

  return Array.from(
    { length: period },
    (_, index) => {
      const year = index + 1;

      const value =
        initial *
        Math.pow(final / initial, year / period);

      return {
        label: `Year ${year}`,
        value,
      };
    },
  );
}
