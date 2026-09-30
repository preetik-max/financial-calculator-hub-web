export interface CarLoanInput {
  loanAmount: number;
  interestRate: number;
  loanTenure: number;
}

export interface CarLoanResult {
  loanAmount: number;
  interestRate: number;
  loanTenure: number;
  monthlyEmi: number;
  totalPayment: number;
  totalInterest: number;
}

export function calculateCarLoan({
  loanAmount,
  interestRate,
  loanTenure,
}: CarLoanInput): CarLoanResult {
  const principal = Math.max(0, loanAmount);
  const annualRate = Math.max(0, interestRate);
  const years = Math.max(0, loanTenure);

  const months = Math.round(years * 12);
  const monthlyRate = annualRate / 100 / 12;

  let monthlyEmi = 0;

  if (principal > 0 && months > 0) {
    if (monthlyRate === 0) {
      monthlyEmi = principal / months;
    } else {
      const factor = Math.pow(
        1 + monthlyRate,
        months,
      );

      monthlyEmi =
        (principal * monthlyRate * factor) /
        (factor - 1);
    }
  }

  const totalPayment = monthlyEmi * months;
  const totalInterest = Math.max(
    0,
    totalPayment - principal,
  );

  return {
    loanAmount: principal,
    interestRate: annualRate,
    loanTenure: years,
    monthlyEmi,
    totalPayment,
    totalInterest,
  };
}
