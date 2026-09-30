export interface IncomeTaxInput {
  annualIncome: number;
}

export interface IncomeTaxResult {
  annualIncome: number;
  slabTax: number;
  rebate: number;
  cess: number;
  totalTax: number;
  effectiveRate: number;
}

function calculateNewRegimeTax(
  income: number,
): number {
  let tax = 0;

  if (income <= 400000) {
    return 0;
  }

  tax +=
    Math.min(income - 400000, 400000) * 0.05;

  if (income > 800000) {
    tax +=
      Math.min(income - 800000, 400000) * 0.10;
  }

  if (income > 1200000) {
    tax +=
      Math.min(income - 1200000, 400000) * 0.15;
  }

  if (income > 1600000) {
    tax +=
      Math.min(income - 1600000, 400000) * 0.20;
  }

  if (income > 2000000) {
    tax +=
      Math.min(income - 2000000, 400000) * 0.25;
  }

  if (income > 2400000) {
    tax +=
      (income - 2400000) * 0.30;
  }

  return tax;
}

export function calculateIncomeTax({
  annualIncome,
}: IncomeTaxInput): IncomeTaxResult {
  const income = Math.max(0, annualIncome);

  let slabTax = calculateNewRegimeTax(income);
  let rebate = 0;

  if (income <= 1200000) {
    rebate = slabTax;
    slabTax = 0;
  }

  if (
    income > 1200000 &&
    income <= 1275000
  ) {
    const excessIncome =
      income - 1200000;

    const taxBeforeRelief =
      calculateNewRegimeTax(income);

    if (taxBeforeRelief > excessIncome) {
      slabTax = excessIncome;
    }
  }

  const cess = slabTax * 0.04;
  const totalTax = slabTax + cess;

  return {
    annualIncome: income,
    slabTax,
    rebate,
    cess,
    totalTax,
    effectiveRate:
      income > 0
        ? (totalTax / income) * 100
        : 0,
  };
}
