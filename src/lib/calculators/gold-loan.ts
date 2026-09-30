export interface GoldLoanInput {
  goldValue: number;
  loanToValue: number;
  interestRate: number;
}

export interface GoldLoanResult {
  goldValue: number;
  loanToValue: number;
  interestRate: number;
  eligibleLoan: number;
  annualInterest: number;
  monthlyInterest: number;
}

export function calculateGoldLoan({
  goldValue,
  loanToValue,
  interestRate,
}: GoldLoanInput): GoldLoanResult {
  const value = Math.max(0, goldValue);
  const ltv = Math.max(0, loanToValue);
  const rate = Math.max(0, interestRate);

  const eligibleLoan = value * (ltv / 100);
  const annualInterest =
    eligibleLoan * (rate / 100);
  const monthlyInterest = annualInterest / 12;

  return {
    goldValue: value,
    loanToValue: ltv,
    interestRate: rate,
    eligibleLoan,
    annualInterest,
    monthlyInterest,
  };
}
