export interface SipCalculationInput {
  monthlyInvestment: number;
  annualReturnRate: number;
  years: number;
}

export interface SipCalculationResult {
  investedAmount: number;
  estimatedReturns: number;
  totalValue: number;
  monthlyRate: number;
  months: number;
}

export function calculateSip({
  monthlyInvestment,
  annualReturnRate,
  years,
}: SipCalculationInput): SipCalculationResult {
  const months = Math.round(years * 12);

  // Groww-style effective monthly rate:
  // Monthly Rate = (1 + Annual Rate)^(1/12) - 1
  const monthlyRate =
    Math.pow(1 + annualReturnRate / 100, 1 / 12) - 1;

  const investedAmount = monthlyInvestment * months;

  if (months <= 0 || monthlyInvestment <= 0) {
    return {
      investedAmount: 0,
      estimatedReturns: 0,
      totalValue: 0,
      monthlyRate,
      months: 0,
    };
  }

  let totalValue: number;

  if (monthlyRate === 0) {
    totalValue = investedAmount;
  } else {
    totalValue =
      monthlyInvestment *
      (((Math.pow(1 + monthlyRate, months) - 1) /
        monthlyRate) *
        (1 + monthlyRate));
  }

  const estimatedReturns = totalValue - investedAmount;

  return {
    investedAmount,
    estimatedReturns,
    totalValue,
    monthlyRate,
    months,
  };
}
