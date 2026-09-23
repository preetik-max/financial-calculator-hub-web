export interface RdCalculationInput {
  monthlyDeposit: number;
  annualInterestRate: number;
  years: number;
}

export interface RdCalculationResult {
  monthlyDeposit: number;
  totalDeposit: number;
  interestEarned: number;
  maturityAmount: number;
  months: number;
  quarterlyRate: number;
}

export function calculateRd({
  monthlyDeposit,
  annualInterestRate,
  years,
}: RdCalculationInput): RdCalculationResult {
  const deposit = Math.max(
    0,
    monthlyDeposit,
  );

  const period = Math.max(0, years);

  const months = Math.round(
    period * 12,
  );

  const quarterlyRate =
    Math.max(0, annualInterestRate) /
    4 /
    100;

  const totalDeposit =
    deposit * months;

  if (
    deposit <= 0 ||
    months <= 0
  ) {
    return {
      monthlyDeposit: deposit,
      totalDeposit,
      interestEarned: 0,
      maturityAmount: totalDeposit,
      months,
      quarterlyRate,
    };
  }

  if (quarterlyRate === 0) {
    return {
      monthlyDeposit: deposit,
      totalDeposit,
      interestEarned: 0,
      maturityAmount: totalDeposit,
      months,
      quarterlyRate,
    };
  }

  /*
   * Recurring deposit maturity estimate
   * using quarterly compounding.
   */

  const maturityAmount =
    deposit *
    (
      (
        Math.pow(
          1 + quarterlyRate,
          months / 3,
        ) - 1
      ) /
      (
        1 -
        Math.pow(
          1 + quarterlyRate,
          -1 / 3,
        )
      )
    );

  const interestEarned = Math.max(
    0,
    maturityAmount -
      totalDeposit,
  );

  return {
    monthlyDeposit: deposit,
    totalDeposit,
    interestEarned,
    maturityAmount,
    months,
    quarterlyRate,
  };
}

export function calculateRdYearlyGrowth(
  monthlyDeposit: number,
  annualInterestRate: number,
  years: number,
) {
  const points = [];

  for (
    let year = 1;
    year <= years;
    year += 1
  ) {
    const result = calculateRd({
      monthlyDeposit,
      annualInterestRate,
      years: year,
    });

    points.push({
      label: `Year ${year}`,
      value: result.maturityAmount,
    });
  }

  return points;
}
