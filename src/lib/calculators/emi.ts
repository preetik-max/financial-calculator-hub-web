export interface EmiCalculationInput {
  loanAmount: number;
  annualInterestRate: number;
  loanTenureYears: number;
}

export interface EmiCalculationResult {
  loanAmount: number;
  monthlyEmi: number;
  totalInterest: number;
  totalPayment: number;
  months: number;
  monthlyRate: number;
}

export function calculateEmi({
  loanAmount,
  annualInterestRate,
  loanTenureYears,
}: EmiCalculationInput): EmiCalculationResult {
  const principal = Math.max(0, loanAmount);

  const months = Math.max(
    0,
    Math.round(loanTenureYears * 12),
  );

  const monthlyRate =
    Math.max(0, annualInterestRate) / 12 / 100;

  if (principal <= 0 || months <= 0) {
    return {
      loanAmount: principal,
      monthlyEmi: 0,
      totalInterest: 0,
      totalPayment: 0,
      months,
      monthlyRate,
    };
  }

  let monthlyEmi: number;

  if (monthlyRate === 0) {
    monthlyEmi = principal / months;
  } else {
    const growthFactor = Math.pow(
      1 + monthlyRate,
      months,
    );

    monthlyEmi =
      (principal *
        monthlyRate *
        growthFactor) /
      (growthFactor - 1);
  }

  const totalPayment =
    monthlyEmi * months;

  const totalInterest = Math.max(
    0,
    totalPayment - principal,
  );

  return {
    loanAmount: principal,
    monthlyEmi,
    totalInterest,
    totalPayment,
    months,
    monthlyRate,
  };
}

export function calculateEmiOutstandingBalance(
  loanAmount: number,
  monthlyRate: number,
  monthlyEmi: number,
  monthsPaid: number,
): number {
  if (
    loanAmount <= 0 ||
    monthlyEmi <= 0 ||
    monthsPaid <= 0
  ) {
    return Math.max(0, loanAmount);
  }

  if (monthlyRate === 0) {
    return Math.max(
      0,
      loanAmount -
        monthlyEmi * monthsPaid,
    );
  }

  const growthFactor = Math.pow(
    1 + monthlyRate,
    monthsPaid,
  );

  const balance =
    loanAmount * growthFactor -
    monthlyEmi *
      ((growthFactor - 1) /
        monthlyRate);

  return Math.max(0, balance);
}
