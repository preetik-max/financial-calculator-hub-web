export interface LumpsumInput {
  investment: number;
  returnRate: number;
  years: number;
}

export interface LumpsumResult {
  investment: number;
  returnRate: number;
  years: number;
  estimatedReturns: number;
  totalValue: number;
}

export function calculateLumpsum({
  investment,
  returnRate,
  years,
}: LumpsumInput): LumpsumResult {
  const principal = Math.max(0, investment);
  const annualRate = Math.max(0, returnRate);
  const period = Math.max(0, years);

  if (principal <= 0) {
    return {
      investment: principal,
      returnRate: annualRate,
      years: period,
      estimatedReturns: 0,
      totalValue: 0,
    };
  }

  const totalValue =
    principal *
    Math.pow(
      1 + annualRate / 100,
      period,
    );

  const estimatedReturns =
    totalValue - principal;

  return {
    investment: principal,
    returnRate: annualRate,
    years: period,
    estimatedReturns,
    totalValue,
  };
}

export function calculateLumpsumYearlyGrowth(
  investment: number,
  returnRate: number,
  years: number,
) {
  const principal = Math.max(0, investment);
  const annualRate = Math.max(0, returnRate);
  const period = Math.max(1, Math.floor(years));

  if (principal <= 0) {
    return [];
  }

  return Array.from(
    { length: period },
    (_, index) => {
      const year = index + 1;

      const value =
        principal *
        Math.pow(
          1 + annualRate / 100,
          year,
        );

      return {
        label: `Year ${year}`,
        value,
      };
    },
  );
}
