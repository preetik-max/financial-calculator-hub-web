export interface PpfInput {
  annualInvestment: number;
  interestRate: number;
  years: number;
}

export interface PpfResult {
  annualInvestment: number;
  interestRate: number;
  years: number;
  totalInvestment: number;
  totalInterest: number;
  maturityAmount: number;
}

export function calculatePpf({
  annualInvestment,
  interestRate,
  years,
}: PpfInput): PpfResult {
  const contribution = Math.max(
    0,
    annualInvestment,
  );

  const annualRate =
    Math.max(0, interestRate) / 100;

  const period = Math.max(
    0,
    Math.floor(years),
  );

  let balance = 0;
  let totalInvestment = 0;
  let totalInterest = 0;

  for (let year = 1; year <= period; year++) {
    balance += contribution;
    totalInvestment += contribution;

    const interest =
      balance * annualRate;

    balance += interest;
    totalInterest += interest;
  }

  return {
    annualInvestment: contribution,
    interestRate: interestRate,
    years: period,
    totalInvestment,
    totalInterest,
    maturityAmount: balance,
  };
}

export function calculatePpfYearlyGrowth(
  annualInvestment: number,
  interestRate: number,
  years: number,
) {
  const contribution =
    Math.max(0, annualInvestment);

  const annualRate =
    Math.max(0, interestRate) / 100;

  const period = Math.max(
    1,
    Math.floor(years),
  );

  let balance = 0;

  return Array.from(
    { length: period },
    (_, index) => {
      const year = index + 1;

      balance += contribution;

      balance +=
        balance * annualRate;

      return {
        label: `Year ${year}`,
        value: balance,
      };
    },
  );
}
