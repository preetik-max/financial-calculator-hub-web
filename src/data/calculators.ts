import type { CalculatorField } from "@/lib/calculators/types";

export interface CalculatorFaqItem {
  question: string;
  answer: string;
}

export interface CalculatorItem {
  slug: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  fields: CalculatorField[];
  explanation: string;
  formula?: string;
  faq: CalculatorFaqItem[];
}

export const calculators: CalculatorItem[] = [
  // ============================================================
  // SIP
  // ============================================================
  {
    slug: "sip",
    name: "SIP Calculator",
    description:
      "Estimate your SIP investment value, invested amount and potential returns.",
    category: "Investment",
    icon: "TrendingUp",

    fields: [
      {
        id: "monthlyInvestment",
        label: "Monthly Investment",
        type: "currency",
        min: 500,
        max: 500000,
        step: 500,
        defaultValue: 10000,
        prefix: "₹",
        description: "Amount you invest every month.",
      },
      {
        id: "annualReturnRate",
        label: "Expected Return Rate",
        type: "percentage",
        min: 1,
        max: 30,
        step: 0.5,
        defaultValue: 12,
        suffix: "%",
        description: "Expected annual return.",
      },
      {
        id: "years",
        label: "Time Period",
        type: "number",
        min: 1,
        max: 40,
        step: 1,
        defaultValue: 10,
        suffix: "Years",
        description: "How long you plan to invest.",
      },
    ],

    explanation:
      "A Systematic Investment Plan (SIP) allows you to invest a fixed amount at regular intervals. This calculator estimates the potential future value of your investment using your monthly investment, expected annual return and investment period. Actual market-linked investment returns can vary.",

    formula:
      "M = P × ({[1 + i]^n − 1} / i) × (1 + i)",

    faq: [
      {
        question: "What is a SIP?",
        answer:
          "A SIP is a method of investing a fixed amount regularly, commonly every month, into an investment product such as a mutual fund.",
      },
      {
        question: "How is the SIP maturity value calculated?",
        answer:
          "The calculator uses the monthly investment, an annual expected return converted into a monthly rate and the total number of investment months.",
      },
      {
        question: "Are SIP returns guaranteed?",
        answer:
          "No. SIP calculations using an expected return are estimates. Actual market-linked returns may be higher or lower.",
      },
      {
        question: "Can I increase my SIP investment?",
        answer:
          "Yes. Many investment products allow investors to increase their regular investment amount. The exact process depends on the investment provider.",
      },
    ],
  },

  // ============================================================
  // EMI
  // ============================================================
  {
    slug: "emi",
    name: "EMI Calculator",
    description:
      "Calculate your monthly loan EMI, total interest and total repayment.",
    category: "Loans",
    icon: "Calculator",

    fields: [
      {
        id: "loanAmount",
        label: "Loan Amount",
        type: "currency",
        min: 10000,
        max: 10000000,
        step: 10000,
        defaultValue: 1000000,
        prefix: "₹",
        description: "Principal amount of the loan.",
      },
      {
        id: "interestRate",
        label: "Interest Rate",
        type: "percentage",
        min: 1,
        max: 30,
        step: 0.1,
        defaultValue: 8.5,
        suffix: "%",
        description: "Annual interest rate.",
      },
      {
        id: "loanTenure",
        label: "Loan Tenure",
        type: "number",
        min: 1,
        max: 30,
        step: 1,
        defaultValue: 10,
        suffix: "Years",
        description: "Loan repayment period.",
      },
    ],

    explanation:
      "An EMI calculator estimates the fixed monthly payment required to repay a loan over a selected tenure. The calculation uses the loan amount, annual interest rate and repayment period.",

    formula:
      "EMI = P × r × (1 + r)^n / ((1 + r)^n − 1)",

    faq: [
      {
        question: "What does EMI mean?",
        answer:
          "EMI stands for Equated Monthly Instalment. It is the periodic payment made toward repaying a loan.",
      },
      {
        question: "Does EMI include interest?",
        answer:
          "Yes. A standard EMI consists of both principal repayment and interest.",
      },
      {
        question: "Does a longer tenure reduce EMI?",
        answer:
          "A longer repayment period generally reduces the monthly EMI but can increase the total interest paid over the life of the loan.",
      },
      {
        question: "Is the calculated EMI the exact amount charged by a lender?",
        answer:
          "It is an estimate based on the inputs entered. Actual lender calculations may differ because of their terms, fees, repayment conventions or other charges.",
      },
    ],
  },

  // ============================================================
  // FD
  // ============================================================
  {
    slug: "fd",
    name: "FD Calculator",
    description:
      "Calculate fixed deposit maturity value and estimated interest earnings.",
    category: "Investment",
    icon: "Landmark",

    fields: [
      {
        id: "principal",
        label: "Deposit Amount",
        type: "currency",
        min: 1000,
        max: 10000000,
        step: 1000,
        defaultValue: 100000,
        prefix: "₹",
        description: "Initial fixed deposit amount.",
      },
      {
        id: "interestRate",
        label: "Interest Rate",
        type: "percentage",
        min: 1,
        max: 15,
        step: 0.1,
        defaultValue: 7,
        suffix: "%",
        description: "Annual interest rate.",
      },
      {
        id: "years",
        label: "Time Period",
        type: "number",
        min: 1,
        max: 20,
        step: 1,
        defaultValue: 5,
        suffix: "Years",
        description: "FD investment period.",
      },
    ],

    explanation:
      "A fixed deposit calculator estimates the maturity amount and interest earned on a deposit using the principal amount, interest rate and investment period.",

    formula:
      "A = P × (1 + r/n)^(n×t)",

    faq: [
      {
        question: "What is a fixed deposit?",
        answer:
          "A fixed deposit is a deposit product where money is placed for a specified period at an agreed interest rate.",
      },
      {
        question: "What is FD maturity amount?",
        answer:
          "The maturity amount is the principal plus the interest accumulated according to the applicable deposit terms.",
      },
      {
        question: "Can I withdraw an FD before maturity?",
        answer:
          "Many deposit providers allow premature withdrawal subject to their terms and applicable penalties or reduced interest.",
      },
    ],
  },

  // ============================================================
  // RD
  // ============================================================
  {
    slug: "rd",
    name: "RD Calculator",
    description:
      "Estimate your recurring deposit maturity amount and interest earned.",
    category: "Investment",
    icon: "CalendarDays",

    fields: [
      {
        id: "monthlyDeposit",
        label: "Monthly Deposit",
        type: "currency",
        min: 100,
        max: 500000,
        step: 100,
        defaultValue: 5000,
        prefix: "₹",
        description: "Amount deposited every month.",
      },
      {
        id: "interestRate",
        label: "Interest Rate",
        type: "percentage",
        min: 1,
        max: 15,
        step: 0.1,
        defaultValue: 7,
        suffix: "%",
        description: "Annual interest rate.",
      },
      {
        id: "years",
        label: "Time Period",
        type: "number",
        min: 1,
        max: 10,
        step: 1,
        defaultValue: 5,
        suffix: "Years",
        description: "Recurring deposit period.",
      },
    ],

    explanation:
      "A recurring deposit calculator estimates the maturity value of regular monthly deposits based on the deposit amount, assumed interest rate and investment period.",

    formula:
      "Maturity value depends on the monthly deposit, applicable interest rate and deposit tenure.",

    faq: [
      {
        question: "What is an RD?",
        answer:
          "A recurring deposit allows you to deposit a fixed amount regularly for a predefined period and earn interest according to the provider's terms.",
      },
      {
        question: "How is RD maturity calculated?",
        answer:
          "The maturity amount depends on the recurring deposits, interest rate and period. The exact compounding convention can vary by provider.",
      },
      {
        question: "Can I change my monthly RD amount?",
        answer:
          "Typically, the recurring deposit amount is fixed for the selected account. Check the provider's terms for available options.",
      },
    ],
  },

  // ============================================================
  // CAGR
  // ============================================================
  {
    slug: "cagr",
    name: "CAGR Calculator",
    description:
      "Calculate the compound annual growth rate of an investment.",
    category: "Investment",
    icon: "ChartNoAxesCombined",

    fields: [
      {
        id: "initialInvestment",
        label: "Initial Investment",
        type: "currency",
        min: 100,
        max: 100000000,
        step: 1000,
        defaultValue: 100000,
        prefix: "₹",
        description: "Starting investment value.",
      },
      {
        id: "finalValue",
        label: "Final Value",
        type: "currency",
        min: 100,
        max: 100000000,
        step: 1000,
        defaultValue: 200000,
        prefix: "₹",
        description: "Ending investment value.",
      },
      {
        id: "years",
        label: "Time Period",
        type: "number",
        min: 1,
        max: 50,
        step: 1,
        defaultValue: 5,
        suffix: "Years",
        description: "Investment period.",
      },
    ],

    explanation:
      "CAGR represents the annualized growth rate that would turn an initial value into a final value over a specified period, assuming a constant compounded rate.",

    formula:
      "CAGR = (Final Value / Initial Value)^(1 / Years) − 1",

    faq: [
      {
        question: "What does CAGR mean?",
        answer:
          "CAGR stands for Compound Annual Growth Rate. It expresses the annualized rate of growth over a period.",
      },
      {
        question: "Does CAGR show actual yearly returns?",
        answer:
          "No. CAGR is an annualized measure and does not show the fluctuations that occurred during individual years.",
      },
      {
        question: "Can CAGR be negative?",
        answer:
          "Yes. If the final value is lower than the initial value, the calculated CAGR can be negative.",
      },
    ],
  },

  // ============================================================
  // LUMPSUM
  // ============================================================
  {
    slug: "lumpsum",
    name: "Lumpsum Calculator",
    description:
      "Estimate the future value and returns from a one-time investment.",
    category: "Investment",
    icon: "Wallet",

    fields: [
      {
        id: "investment",
        label: "Investment Amount",
        type: "currency",
        min: 500,
        max: 100000000,
        step: 500,
        defaultValue: 100000,
        prefix: "₹",
        description: "One-time investment amount.",
      },
      {
        id: "returnRate",
        label: "Expected Return Rate",
        type: "percentage",
        min: 1,
        max: 30,
        step: 0.5,
        defaultValue: 12,
        suffix: "%",
        description: "Expected annual return.",
      },
      {
        id: "years",
        label: "Time Period",
        type: "number",
        min: 1,
        max: 50,
        step: 1,
        defaultValue: 10,
        suffix: "Years",
        description: "Investment duration.",
      },
    ],

    explanation:
      "A lumpsum calculator estimates the future value of a one-time investment using an assumed annual return and investment period.",

    formula:
      "FV = P × (1 + r)^t",

    faq: [
      {
        question: "What is a lumpsum investment?",
        answer:
          "A lumpsum investment means investing an amount in one transaction rather than making regular periodic contributions.",
      },
      {
        question: "Are the returns guaranteed?",
        answer:
          "No. If the calculation uses an expected market-linked return, the result is only an estimate.",
      },
      {
        question: "What happens if the return rate changes?",
        answer:
          "A different assumed return rate will change the estimated future value and returns.",
      },
    ],
  },

  // ============================================================
  // PPF
  // ============================================================
  {
    slug: "ppf",
    name: "PPF Calculator",
    description:
      "Estimate your PPF maturity amount based on annual contributions and interest.",
    category: "Investment",
    icon: "ShieldCheck",

    fields: [
      {
        id: "annualInvestment",
        label: "Annual Investment",
        type: "currency",
        min: 500,
        max: 150000,
        step: 500,
        defaultValue: 100000,
        prefix: "₹",
        description: "Annual contribution.",
      },
      {
        id: "interestRate",
        label: "Interest Rate",
        type: "percentage",
        min: 1,
        max: 12,
        step: 0.1,
        defaultValue: 7.1,
        suffix: "%",
        description: "Assumed annual interest rate.",
      },
      {
        id: "years",
        label: "Time Period",
        type: "number",
        min: 15,
        max: 50,
        step: 1,
        defaultValue: 15,
        suffix: "Years",
        description: "PPF investment period.",
      },
    ],

    explanation:
      "This calculator estimates the accumulated value of annual PPF contributions using the assumed interest rate and selected period. Actual PPF interest rates and account rules are subject to applicable government rules.",

    formula:
      "Future value is calculated by applying the assumed annual interest to the yearly contributions over the selected period.",

    faq: [
      {
        question: "What is PPF?",
        answer:
          "PPF stands for Public Provident Fund. It is a long-term government-backed savings scheme in India.",
      },
      {
        question: "Is the PPF interest rate fixed permanently?",
        answer:
          "No. The applicable PPF interest rate is subject to government notifications and can change over time.",
      },
      {
        question: "Is the calculated PPF maturity amount guaranteed?",
        answer:
          "The calculator is an estimate based on the interest rate entered. Future applicable rates can affect the actual maturity value.",
      },
    ],
  },

  // ============================================================
  // SWP
  // ============================================================
  {
    slug: "swp",
    name: "SWP Calculator",
    description:
      "Estimate withdrawals and remaining value from a systematic withdrawal plan.",
    category: "Investment",
    icon: "ArrowDownToLine",

    fields: [
      {
        id: "investment",
        label: "Investment Amount",
        type: "currency",
        min: 10000,
        max: 100000000,
        step: 10000,
        defaultValue: 1000000,
        prefix: "₹",
        description: "Initial investment.",
      },
      {
        id: "monthlyWithdrawal",
        label: "Monthly Withdrawal",
        type: "currency",
        min: 500,
        max: 500000,
        step: 500,
        defaultValue: 10000,
        prefix: "₹",
        description: "Amount withdrawn each month.",
      },
      {
        id: "returnRate",
        label: "Expected Return Rate",
        type: "percentage",
        min: 1,
        max: 30,
        step: 0.5,
        defaultValue: 10,
        suffix: "%",
        description: "Expected annual return.",
      },
      {
        id: "years",
        label: "Time Period",
        type: "number",
        min: 1,
        max: 40,
        step: 1,
        defaultValue: 10,
        suffix: "Years",
        description: "Withdrawal period.",
      },
    ],

    explanation:
      "A Systematic Withdrawal Plan calculator estimates the remaining value of an investment after regular withdrawals while applying an assumed return rate.",

    formula:
      "Estimated balance is calculated by applying the assumed periodic return and subtracting the periodic withdrawal.",

    faq: [
      {
        question: "What is SWP?",
        answer:
          "SWP stands for Systematic Withdrawal Plan. It allows investors to withdraw a specified amount at regular intervals from an investment.",
      },
      {
        question: "Can an SWP continue indefinitely?",
        answer:
          "The duration depends on the investment balance, withdrawal amount, investment returns and other factors.",
      },
      {
        question: "Are SWP returns guaranteed?",
        answer:
          "No. Market-linked investment returns can vary, so calculated results are estimates.",
      },
    ],
  },

  // ============================================================
  // INCOME TAX
  // ============================================================
  {
    slug: "income-tax",
    name: "Income Tax Calculator",
    description:
      "Estimate income tax based on income and applicable assumptions.",
    category: "Tax",
    icon: "ReceiptText",

    fields: [
      {
        id: "annualIncome",
        label: "Annual Income",
        type: "currency",
        min: 100000,
        max: 100000000,
        step: 10000,
        defaultValue: 1000000,
        prefix: "₹",
        description: "Annual taxable income assumption.",
      },
    ],

    explanation:
      "This calculator is intended to provide an estimate based on the income entered. Actual income tax depends on the applicable tax regime, deductions, exemptions, surcharge, cess and other tax rules.",

    formula:
      "Estimated tax depends on the applicable income-tax slabs and rules.",

    faq: [
      {
        question: "Is this an official income tax calculation?",
        answer:
          "No. It is an educational estimate and should not be treated as an official tax computation.",
      },
      {
        question: "Why can my actual tax differ?",
        answer:
          "Actual tax can depend on deductions, exemptions, tax regime, surcharge, cess, income types and other applicable rules.",
      },
    ],
  },

  // ============================================================
  // GST
  // ============================================================
  {
    slug: "gst",
    name: "GST Calculator",
    description:
      "Calculate GST amount, inclusive price and exclusive price.",
    category: "Tax",
    icon: "Percent",

    fields: [
      {
        id: "amount",
        label: "Amount",
        type: "currency",
        min: 100,
        max: 100000000,
        step: 100,
        defaultValue: 10000,
        prefix: "₹",
        description: "Base or transaction amount.",
      },
      {
        id: "gstRate",
        label: "GST Rate",
        type: "percentage",
        min: 0,
        max: 40,
        step: 0.5,
        defaultValue: 18,
        suffix: "%",
        description: "Applicable GST rate.",
      },
    ],

    explanation:
      "A GST calculator helps estimate the GST amount and the resulting price based on the amount and GST rate entered.",

    formula:
      "GST = Amount × GST Rate / 100",

    faq: [
      {
        question: "What is GST?",
        answer:
          "GST stands for Goods and Services Tax, an indirect tax applied to supplies of goods and services under India's GST framework.",
      },
      {
        question: "Can GST rates differ?",
        answer:
          "Yes. GST rates depend on the applicable classification and rules for the relevant goods or services.",
      },
      {
        question: "Does this calculator provide a tax filing result?",
        answer:
          "No. It provides a mathematical estimate based on the rate entered.",
      },
    ],
  },

  // ============================================================
  // INFLATION
  // ============================================================
  {
    slug: "inflation",
    name: "Inflation Calculator",
    description:
      "Estimate the future value of money after considering inflation.",
    category: "Planning",
    icon: "TrendingDown",

    fields: [
      {
        id: "currentAmount",
        label: "Current Amount",
        type: "currency",
        min: 100,
        max: 100000000,
        step: 100,
        defaultValue: 100000,
        prefix: "₹",
        description: "Current amount.",
      },
      {
        id: "inflationRate",
        label: "Inflation Rate",
        type: "percentage",
        min: 0,
        max: 20,
        step: 0.1,
        defaultValue: 6,
        suffix: "%",
        description: "Assumed annual inflation.",
      },
      {
        id: "years",
        label: "Time Period",
        type: "number",
        min: 1,
        max: 50,
        step: 1,
        defaultValue: 10,
        suffix: "Years",
        description: "Number of years.",
      },
    ],

    explanation:
      "An inflation calculator estimates how the purchasing value of money can change over time when an assumed annual inflation rate is applied.",

    formula:
      "Future Cost = Current Cost × (1 + Inflation Rate)^Years",

    faq: [
      {
        question: "What is inflation?",
        answer:
          "Inflation refers to a general increase in prices over time, which can reduce the purchasing power of money.",
      },
      {
        question: "Can inflation remain constant?",
        answer:
          "Actual inflation can change over time. This calculator uses the rate entered as an assumption for the selected period.",
      },
    ],
  },

  // ============================================================
  // GOLD LOAN
  // ============================================================
  {
    slug: "gold-loan",
    name: "Gold Loan Calculator",
    description:
      "Estimate gold loan eligibility, interest and repayment.",
    category: "Loans",
    icon: "Coins",

    fields: [
      {
        id: "goldValue",
        label: "Gold Value",
        type: "currency",
        min: 10000,
        max: 10000000,
        step: 10000,
        defaultValue: 500000,
        prefix: "₹",
        description: "Estimated value of pledged gold.",
      },
      {
        id: "loanToValue",
        label: "Loan-to-Value",
        type: "percentage",
        min: 1,
        max: 100,
        step: 1,
        defaultValue: 75,
        suffix: "%",
        description: "Loan amount as a percentage of gold value.",
      },
      {
        id: "interestRate",
        label: "Interest Rate",
        type: "percentage",
        min: 1,
        max: 30,
        step: 0.1,
        defaultValue: 10,
        suffix: "%",
        description: "Annual interest rate.",
      },
    ],

    explanation:
      "This calculator provides an estimate of potential gold loan eligibility using the entered gold value and loan-to-value percentage. Actual eligibility depends on the lender's valuation, policies and applicable rules.",

    formula:
      "Estimated Loan Amount = Gold Value × Loan-to-Value / 100",

    faq: [
      {
        question: "What is a gold loan?",
        answer:
          "A gold loan is a secured loan where eligible gold assets are pledged as collateral.",
      },
      {
        question: "Is the calculated loan amount guaranteed?",
        answer:
          "No. Actual loan eligibility depends on the lender's valuation, loan-to-value rules and other eligibility criteria.",
      },
    ],
  },

  // ============================================================
  // PERSONAL LOAN
  // ============================================================
  {
    slug: "personal-loan",
    name: "Personal Loan Calculator",
    description:
      "Calculate estimated EMI and repayment for a personal loan.",
    category: "Loans",
    icon: "Banknote",

    fields: [
      {
        id: "loanAmount",
        label: "Loan Amount",
        type: "currency",
        min: 10000,
        max: 5000000,
        step: 10000,
        defaultValue: 500000,
        prefix: "₹",
        description: "Loan amount.",
      },
      {
        id: "interestRate",
        label: "Interest Rate",
        type: "percentage",
        min: 1,
        max: 30,
        step: 0.1,
        defaultValue: 12,
        suffix: "%",
        description: "Annual interest rate.",
      },
      {
        id: "loanTenure",
        label: "Loan Tenure",
        type: "number",
        min: 1,
        max: 10,
        step: 1,
        defaultValue: 5,
        suffix: "Years",
        description: "Repayment period.",
      },
    ],

    explanation:
      "A personal loan calculator estimates monthly EMI, total repayment and interest based on the loan amount, interest rate and tenure.",

    formula:
      "EMI = P × r × (1 + r)^n / ((1 + r)^n − 1)",

    faq: [
      {
        question: "What affects personal loan EMI?",
        answer:
          "Loan amount, interest rate and repayment tenure are the primary inputs used in the EMI calculation.",
      },
      {
        question: "Can the actual EMI differ?",
        answer:
          "Yes. Actual lender calculations can include different interest conventions, fees or other charges.",
      },
    ],
  },

  // ============================================================
  // CAR LOAN
  // ============================================================
  {
    slug: "car-loan",
    name: "Car Loan Calculator",
    description:
      "Estimate your monthly EMI and total repayment for a car loan.",
    category: "Loans",
    icon: "Car",

    fields: [
      {
        id: "loanAmount",
        label: "Loan Amount",
        type: "currency",
        min: 50000,
        max: 10000000,
        step: 10000,
        defaultValue: 1000000,
        prefix: "₹",
        description: "Car loan amount.",
      },
      {
        id: "interestRate",
        label: "Interest Rate",
        type: "percentage",
        min: 1,
        max: 25,
        step: 0.1,
        defaultValue: 9,
        suffix: "%",
        description: "Annual interest rate.",
      },
      {
        id: "loanTenure",
        label: "Loan Tenure",
        type: "number",
        min: 1,
        max: 10,
        step: 1,
        defaultValue: 5,
        suffix: "Years",
        description: "Repayment period.",
      },
    ],

    explanation:
      "A car loan calculator estimates the monthly EMI and total repayment for a vehicle loan based on the amount borrowed, interest rate and tenure.",

    formula:
      "EMI = P × r × (1 + r)^n / ((1 + r)^n − 1)",

    faq: [
      {
        question: "What is a car loan EMI?",
        answer:
          "It is the regular payment made toward repaying a car loan, including principal and interest.",
      },
      {
        question: "Does a larger down payment reduce EMI?",
        answer:
          "A larger down payment can reduce the amount borrowed, which can reduce the resulting EMI for the same interest rate and tenure.",
      },
    ],
  },

  // ============================================================
  // AGE
  // ============================================================
  {
    slug: "age",
    name: "Age Calculator",
    description:
      "Calculate your exact age based on your date of birth.",
    category: "Planning",
    icon: "Calendar",

    fields: [],

    explanation:
      "The age calculator determines the elapsed time between a date of birth and the current date. A dedicated date input will be added to the calculator interface.",

    formula:
      "Age = Current Date − Date of Birth",

    faq: [
      {
        question: "What does the age calculator calculate?",
        answer:
          "It calculates age based on the difference between the entered date of birth and the selected current date.",
      },
      {
        question: "Can the result show years, months and days?",
        answer:
          "Yes. The final calculator interface will display the elapsed age in years, months and days.",
      },
    ],
  },
];
