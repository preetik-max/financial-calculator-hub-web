export type CalculatorCategory =
  | "Investment"
  | "Loans"
  | "Banking"
  | "Tax"
  | "Planning"
  | "General";

export interface Calculator {
  slug: string;
  name: string;
  description: string;
  category: CalculatorCategory;
  icon: string;
}

export const calculators: Calculator[] = [
  {
    slug: "sip",
    name: "SIP Calculator",
    description:
      "Estimate potential returns from your monthly SIP investments.",
    category: "Investment",
    icon: "TrendingUp",
  },
  {
    slug: "emi",
    name: "EMI Calculator",
    description:
      "Calculate your monthly loan EMI, interest and total repayment.",
    category: "Loans",
    icon: "Calculator",
  },
  {
    slug: "fd",
    name: "FD Calculator",
    description:
      "Estimate fixed deposit maturity amount and interest earned.",
    category: "Banking",
    icon: "Landmark",
  },
  {
    slug: "rd",
    name: "RD Calculator",
    description:
      "Calculate recurring deposit maturity and estimated interest.",
    category: "Banking",
    icon: "CalendarDays",
  },
  {
    slug: "cagr",
    name: "CAGR Calculator",
    description:
      "Calculate the annualized growth rate of an investment.",
    category: "Investment",
    icon: "TrendingUp",
  },
  {
    slug: "lumpsum",
    name: "Lumpsum Calculator",
    description:
      "Estimate the future value of a one-time investment.",
    category: "Investment",
    icon: "Wallet",
  },
  {
    slug: "ppf",
    name: "PPF Calculator",
    description:
      "Estimate PPF investment growth and maturity value.",
    category: "Investment",
    icon: "PiggyBank",
  },
  {
    slug: "swp",
    name: "SWP Calculator",
    description:
      "Estimate withdrawals and remaining investment value.",
    category: "Investment",
    icon: "ArrowDownToLine",
  },
  {
    slug: "income-tax",
    name: "Income Tax Calculator",
    description:
      "Estimate income tax based on your income and applicable rules.",
    category: "Tax",
    icon: "ReceiptText",
  },
  {
    slug: "gst",
    name: "GST Calculator",
    description:
      "Calculate GST-inclusive and GST-exclusive amounts.",
    category: "Tax",
    icon: "Percent",
  },
  {
    slug: "inflation",
    name: "Inflation Calculator",
    description:
      "Understand how inflation can affect future purchasing power.",
    category: "Planning",
    icon: "ArrowUpRight",
  },
  {
    slug: "gold-loan",
    name: "Gold Loan Calculator",
    description:
      "Estimate EMI and repayment for a gold loan.",
    category: "Loans",
    icon: "CircleDollarSign",
  },
  {
    slug: "personal-loan",
    name: "Personal Loan Calculator",
    description:
      "Calculate personal loan EMI and total interest.",
    category: "Loans",
    icon: "HandCoins",
  },
  {
    slug: "car-loan",
    name: "Car Loan Calculator",
    description:
      "Estimate car loan EMI and total repayment.",
    category: "Loans",
    icon: "Car",
  },
  {
    slug: "age",
    name: "Age Calculator",
    description:
      "Calculate age, next birthday and date difference.",
    category: "General",
    icon: "CakeSlice",
  },
];
