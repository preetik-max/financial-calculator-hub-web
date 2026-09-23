export interface FdCalculationInput {
  principal: number;
  annualInterestRate: number;
  years: number;
}

export interface FdCalculationResult {
  principal: number;
  maturityAmount: number;
  interestEarned: number;
  years: number;
  quarterlyRate: number;
}

export function calculateFd({
  principal,
  annualInterestRate,
  years,
}: FdCalculationInput): FdCalculationResult {
  const deposit = Math.max(0, principal);
  const period = Math.max(0, years);

  const quarterlyRate =
    Math.max(0, annualInterestRate) /
    4 /
    100;

  if (deposit <= 0 || period <= 0) {
    return {
      principal: deposit,
      maturityAmount: deposit,
      interestEarned: 0,
      years: period,
      quarterlyRate,
    };
  }

  const quarters = period * 4;

  const maturityAmount =
    deposit *
    Math.pow(
      1 + quarterlyRate,
      quarters,
    );

  const interestEarned = Math.max(
    0,
    maturityAmount - deposit,
  );

  return {
    principal: deposit,
    maturityAmount,
    interestEarned,
    years: period,
    quarterlyRate,
  };
}

export function calculateFdYearlyGrowth(
  principal: number,
  annualInterestRate: number,
  years: number,
) {
  const points = [];

  for (
    let year = 1;
    year <= years;
    year += 1
  ) {
    const result = calculateFd({
      principal,
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
