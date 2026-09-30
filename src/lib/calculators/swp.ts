export interface SwpInput {
  investment: number;
  monthlyWithdrawal: number;
  returnRate: number;
  years: number;
}

export interface SwpResult {
  investment: number;
  monthlyWithdrawal: number;
  returnRate: number;
  years: number;
  totalWithdrawals: number;
  remainingValue: number;
  totalValue: number;
}

export function calculateSwp({
  investment,
  monthlyWithdrawal,
  returnRate,
  years,
}: SwpInput): SwpResult {
  let balance = Math.max(0, investment);

  const withdrawal =
    Math.max(0, monthlyWithdrawal);

  const annualRate =
    Math.max(0, returnRate) / 100;

  const period =
    Math.max(0, Math.floor(years));

  const monthlyRate =
    annualRate / 12;

  let totalWithdrawals = 0;

  const totalMonths = period * 12;

  for (
    let month = 1;
    month <= totalMonths;
    month++
  ) {
    balance +=
      balance * monthlyRate;

    const actualWithdrawal =
      Math.min(balance, withdrawal);

    balance -= actualWithdrawal;

    totalWithdrawals +=
      actualWithdrawal;

    if (balance <= 0) {
      balance = 0;
      break;
    }
  }

  return {
    investment: Math.max(0, investment),
    monthlyWithdrawal: withdrawal,
    returnRate,
    years: period,
    totalWithdrawals,
    remainingValue: balance,
    totalValue:
      totalWithdrawals + balance,
  };
}

export function calculateSwpYearlyGrowth(
  investment: number,
  monthlyWithdrawal: number,
  returnRate: number,
  years: number,
) {
  let balance =
    Math.max(0, investment);

  const withdrawal =
    Math.max(0, monthlyWithdrawal);

  const monthlyRate =
    Math.max(0, returnRate) /
    100 /
    12;

  const period =
    Math.max(1, Math.floor(years));

  const data: {
    label: string;
    value: number;
  }[] = [];

  for (
    let year = 1;
    year <= period;
    year++
  ) {
    for (
      let month = 1;
      month <= 12;
      month++
    ) {
      balance +=
        balance * monthlyRate;

      const actualWithdrawal =
        Math.min(balance, withdrawal);

      balance -= actualWithdrawal;

      if (balance <= 0) {
        balance = 0;
        break;
      }
    }

    data.push({
      label: `Year ${year}`,
      value: balance,
    });

    if (balance <= 0) {
      break;
    }
  }

  return data;
}
