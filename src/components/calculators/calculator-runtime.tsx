"use client";

import { useMemo, useState } from "react";

import { CalculatorPage } from "@/components/calculators/calculator-page";
import type { CalculatorItem } from "@/data/calculators";

import {
  calculateCagr,
  calculateCagrGrowth,
} from "@/lib/calculators/cagr";

import {
  calculateEmi,
  calculateEmiOutstandingBalance,
} from "@/lib/calculators/emi";

import {
  calculateFd,
  calculateFdYearlyGrowth,
} from "@/lib/calculators/fd";

import {
  calculateLumpsum,
  calculateLumpsumYearlyGrowth,
} from "@/lib/calculators/lumpsum";

import {
  calculatePpf,
  calculatePpfYearlyGrowth,
} from "@/lib/calculators/ppf";

import {
  calculateRd,
  calculateRdYearlyGrowth,
} from "@/lib/calculators/rd";

import { calculateSip } from "@/lib/calculators/sip";

import {
  calculateSwp,
  calculateSwpYearlyGrowth,
} from "@/lib/calculators/swp";

import { calculateIncomeTax } from "@/lib/calculators/income-tax";

import { calculateGst } from "@/lib/calculators/gst";

import {
  calculateInflation,
  calculateInflationGrowth,
} from "@/lib/calculators/inflation";

import { calculateGoldLoan } from "@/lib/calculators/gold-loan";

import { calculatePersonalLoan } from "@/lib/calculators/personal-loan";

import { calculateCarLoan } from "@/lib/calculators/car-loan";

import {
  calculateAge,
  calculateAgeGrowth,
} from "@/lib/calculators/age";

interface CalculatorRuntimeProps {
  calculator: CalculatorItem;
}

export function CalculatorRuntime({
  calculator,
}: CalculatorRuntimeProps) {
  // ============================================================
  // INITIAL VALUES
  // ============================================================

  const initialValues = useMemo(() => {
    const fields = calculator.fields ?? [];

    return Object.fromEntries(
      fields.map((field) => [
        field.id,
        field.defaultValue,
      ]),
    );
  }, [calculator.fields]);

  // ============================================================
  // FORM STATE
  // ============================================================

  const [values, setValues] =
    useState<Record<string, number>>(initialValues);

  const handleChange = (
    id: string,
    value: number,
  ) => {
    setValues((current) => ({
      ...current,
      [id]: value,
    }));
  };

  // ============================================================
  // SIP
  // ============================================================

  if (calculator.slug === "sip") {
    const monthlyInvestment =
      values.monthlyInvestment ?? 10000;

    const annualReturnRate =
      values.annualReturnRate ?? 12;

    const years =
      values.years ?? 10;

    const result = calculateSip({
      monthlyInvestment,
      annualReturnRate,
      years,
    });

    const results = [
      {
        label: "Invested Amount",
        value: result.investedAmount,
        type: "currency" as const,
      },
      {
        label: "Estimated Returns",
        value: result.estimatedReturns,
        type: "currency" as const,
      },
      {
        label: "Total Value",
        value: result.totalValue,
        type: "currency" as const,
        highlighted: true,
      },
    ];

    const pieData = [
      {
        name: "Invested",
        value: result.investedAmount,
        color: "#0f172a",
      },
      {
        name: "Returns",
        value: Math.max(
          0,
          result.estimatedReturns,
        ),
        color: "#16a34a",
      },
    ];

    const lineData = Array.from(
      { length: result.months },
      (_, index) => {
        const month = index + 1;
        const monthlyRate =
          result.monthlyRate;

        let value: number;

        if (monthlyRate === 0) {
          value =
            monthlyInvestment * month;
        } else {
          value =
            monthlyInvestment *
            (((Math.pow(
              1 + monthlyRate,
              month,
            ) - 1) /
              monthlyRate) *
              (1 + monthlyRate));
        }

        if (
          month % 12 === 0 ||
          month === result.months
        ) {
          return {
            label: `Year ${Math.ceil(
              month / 12,
            )}`,
            value,
          };
        }

        return null;
      },
    ).filter(
      (
        item,
      ): item is {
        label: string;
        value: number;
      } => item !== null,
    );

    return (
      <CalculatorPage
        calculator={calculator}
        values={values}
        onChange={handleChange}
        results={results}
        pieData={pieData}
        lineData={lineData}
        formula={calculator.formula}
      />
    );
  }

  // ============================================================
  // EMI
  // ============================================================

  if (calculator.slug === "emi") {
    const loanAmount =
      values.loanAmount ?? 1_000_000;

    const interestRate =
      values.interestRate ?? 8.5;

    const loanTenure =
      values.loanTenure ?? 10;

    const result = calculateEmi({
      loanAmount,
      annualInterestRate: interestRate,
      loanTenureYears: loanTenure,
    });

    const results = [
      {
        label: "Monthly EMI",
        value: result.monthlyEmi,
        type: "currency" as const,
        highlighted: true,
      },
      {
        label: "Total Interest",
        value: result.totalInterest,
        type: "currency" as const,
      },
      {
        label: "Total Repayment",
        value: result.totalPayment,
        type: "currency" as const,
      },
      {
        label: "Loan Amount",
        value: result.loanAmount,
        type: "currency" as const,
      },
    ];

    const pieData = [
      {
        name: "Principal",
        value: result.loanAmount,
        color: "#0f172a",
      },
      {
        name: "Interest",
        value: Math.max(
          0,
          result.totalInterest,
        ),
        color: "#16a34a",
      },
    ];

    const lineData = Array.from(
      { length: result.months },
      (_, index) => {
        const month = index + 1;

        if (
          month % 12 !== 0 &&
          month !== result.months
        ) {
          return null;
        }

        const balance =
          calculateEmiOutstandingBalance(
            result.loanAmount,
            result.monthlyRate,
            result.monthlyEmi,
            month,
          );

        return {
          label: `Year ${Math.ceil(
            month / 12,
          )}`,
          value: balance,
        };
      },
    ).filter(
      (
        item,
      ): item is {
        label: string;
        value: number;
      } => item !== null,
    );

    return (
      <CalculatorPage
        calculator={calculator}
        values={values}
        onChange={handleChange}
        results={results}
        pieData={pieData}
        lineData={lineData}
        formula={calculator.formula}
      />
    );
  }

  // ============================================================
  // FD
  // ============================================================

  if (calculator.slug === "fd") {
    const principal =
      values.principal ?? 100_000;

    const interestRate =
      values.interestRate ?? 7;

    const years =
      values.years ?? 5;

    const result = calculateFd({
      principal,
      annualInterestRate: interestRate,
      years,
    });

    const results = [
      {
        label: "Maturity Amount",
        value: result.maturityAmount,
        type: "currency" as const,
        highlighted: true,
      },
      {
        label: "Interest Earned",
        value: result.interestEarned,
        type: "currency" as const,
      },
      {
        label: "Deposit Amount",
        value: result.principal,
        type: "currency" as const,
      },
    ];

    const pieData = [
      {
        name: "Deposit",
        value: result.principal,
        color: "#0f172a",
      },
      {
        name: "Interest",
        value: Math.max(
          0,
          result.interestEarned,
        ),
        color: "#16a34a",
      },
    ];

    const lineData =
      calculateFdYearlyGrowth(
        principal,
        interestRate,
        years,
      );

    return (
      <CalculatorPage
        calculator={calculator}
        values={values}
        onChange={handleChange}
        results={results}
        pieData={pieData}
        lineData={lineData}
        formula={calculator.formula}
      />
    );
  }

  // ============================================================
  // RD
  // ============================================================

  if (calculator.slug === "rd") {
    const monthlyDeposit =
      values.monthlyDeposit ?? 5000;

    const interestRate =
      values.interestRate ?? 7;

    const years =
      values.years ?? 5;

    const result = calculateRd({
      monthlyDeposit,
      annualInterestRate: interestRate,
      years,
    });

    const results = [
      {
        label: "Maturity Amount",
        value: result.maturityAmount,
        type: "currency" as const,
        highlighted: true,
      },
      {
        label: "Interest Earned",
        value: result.interestEarned,
        type: "currency" as const,
      },
      {
        label: "Total Deposit",
        value: result.totalDeposit,
        type: "currency" as const,
      },
    ];

    const pieData = [
      {
        name: "Total Deposit",
        value: result.totalDeposit,
        color: "#0f172a",
      },
      {
        name: "Interest",
        value: Math.max(
          0,
          result.interestEarned,
        ),
        color: "#16a34a",
      },
    ];

    const lineData =
      calculateRdYearlyGrowth(
        monthlyDeposit,
        interestRate,
        years,
      );

    return (
      <CalculatorPage
        calculator={calculator}
        values={values}
        onChange={handleChange}
        results={results}
        pieData={pieData}
        lineData={lineData}
        formula={calculator.formula}
      />
    );
  }

  // ============================================================
  // CAGR
  // ============================================================

  if (calculator.slug === "cagr") {
    const initialInvestment =
      values.initialInvestment ?? 100_000;

    const finalValue =
      values.finalValue ?? 200_000;

    const years =
      values.years ?? 5;

    const result = calculateCagr({
      initialInvestment,
      finalValue,
      years,
    });

    const results = [
      {
        label: "Initial Investment",
        value: result.initialInvestment,
        type: "currency" as const,
      },
      {
        label: "Absolute Gain",
        value: result.absoluteGain,
        type: "currency" as const,
      },
      {
        label: "Final Value",
        value: result.finalValue,
        type: "currency" as const,
        highlighted: true,
      },
      {
        label: "CAGR",
        value: result.cagr,
        type: "percentage" as const,
        highlighted: true,
      },
    ];

    const pieData = [
      {
        name: "Initial Investment",
        value: result.initialInvestment,
        color: "#0f172a",
      },
      {
        name: "Gain",
        value: Math.max(
          0,
          result.absoluteGain,
        ),
        color: "#16a34a",
      },
    ];

    const lineData =
      calculateCagrGrowth(
        result.initialInvestment,
        result.finalValue,
        result.years,
      );

    return (
      <CalculatorPage
        calculator={calculator}
        values={values}
        onChange={handleChange}
        results={results}
        pieData={pieData}
        lineData={lineData}
        formula={calculator.formula}
      />
    );
  }

  // ============================================================
  // LUMPSUM
  // ============================================================

  if (calculator.slug === "lumpsum") {
    const investment =
      values.investment ?? 100_000;

    const returnRate =
      values.returnRate ?? 12;

    const years =
      values.years ?? 10;

    const result = calculateLumpsum({
      investment,
      returnRate,
      years,
    });

    const results = [
      {
        label: "Investment",
        value: result.investment,
        type: "currency" as const,
      },
      {
        label: "Estimated Returns",
        value: result.estimatedReturns,
        type: "currency" as const,
      },
      {
        label: "Total Value",
        value: result.totalValue,
        type: "currency" as const,
        highlighted: true,
      },
    ];

    const pieData = [
      {
        name: "Investment",
        value: result.investment,
        color: "#0f172a",
      },
      {
        name: "Returns",
        value: Math.max(
          0,
          result.estimatedReturns,
        ),
        color: "#16a34a",
      },
    ];

    const lineData =
      calculateLumpsumYearlyGrowth(
        result.investment,
        result.returnRate,
        result.years,
      );

    return (
      <CalculatorPage
        calculator={calculator}
        values={values}
        onChange={handleChange}
        results={results}
        pieData={pieData}
        lineData={lineData}
        formula={calculator.formula}
      />
    );
  }

  // ============================================================
  // PPF
  // ============================================================

  if (calculator.slug === "ppf") {
    const annualInvestment =
      values.annualInvestment ?? 100_000;

    const interestRate =
      values.interestRate ?? 7.1;

    const years =
      values.years ?? 15;

    const result = calculatePpf({
      annualInvestment,
      interestRate,
      years,
    });

    const results = [
      {
        label: "Total Investment",
        value: result.totalInvestment,
        type: "currency" as const,
      },
      {
        label: "Total Interest",
        value: result.totalInterest,
        type: "currency" as const,
      },
      {
        label: "Maturity Amount",
        value: result.maturityAmount,
        type: "currency" as const,
        highlighted: true,
      },
    ];

    const pieData = [
      {
        name: "Investment",
        value: result.totalInvestment,
        color: "#0f172a",
      },
      {
        name: "Interest",
        value: Math.max(
          0,
          result.totalInterest,
        ),
        color: "#16a34a",
      },
    ];

    const lineData =
      calculatePpfYearlyGrowth(
        result.annualInvestment,
        result.interestRate,
        result.years,
      );

    return (
      <CalculatorPage
        calculator={calculator}
        values={values}
        onChange={handleChange}
        results={results}
        pieData={pieData}
        lineData={lineData}
        formula={calculator.formula}
      />
    );
  }

  // ============================================================
  // SWP
  // ============================================================

  if (calculator.slug === "swp") {
    const investment =
      values.investment ?? 1_000_000;

    const monthlyWithdrawal =
      values.monthlyWithdrawal ?? 10_000;

    const returnRate =
      values.returnRate ?? 10;

    const years =
      values.years ?? 10;

    const result = calculateSwp({
      investment,
      monthlyWithdrawal,
      returnRate,
      years,
    });

    const results = [
      {
        label: "Initial Investment",
        value: result.investment,
        type: "currency" as const,
      },
      {
        label: "Total Withdrawals",
        value: result.totalWithdrawals,
        type: "currency" as const,
      },
      {
        label: "Remaining Value",
        value: result.remainingValue,
        type: "currency" as const,
        highlighted: true,
      },
    ];

    const pieData = [
      {
        name: "Withdrawals",
        value: result.totalWithdrawals,
        color: "#0f172a",
      },
      {
        name: "Remaining",
        value: Math.max(
          0,
          result.remainingValue,
        ),
        color: "#16a34a",
      },
    ];

    const lineData =
      calculateSwpYearlyGrowth(
        result.investment,
        result.monthlyWithdrawal,
        result.returnRate,
        result.years,
      );

    return (
      <CalculatorPage
        calculator={calculator}
        values={values}
        onChange={handleChange}
        results={results}
        pieData={pieData}
        lineData={lineData}
        formula={calculator.formula}
      />
    );
  }

  // ============================================================
  // INCOME TAX
  // ============================================================

  if (calculator.slug === "income-tax") {
    const annualIncome =
      values.annualIncome ?? 1_000_000;

    const result = calculateIncomeTax({
      annualIncome,
    });

    const results = [
      {
        label: "Annual Income",
        value: result.annualIncome,
        type: "currency" as const,
      },
      {
        label: "Tax Before Cess",
        value: result.slabTax,
        type: "currency" as const,
      },
      {
        label: "Health & Education Cess",
        value: result.cess,
        type: "currency" as const,
      },
      {
        label: "Estimated Total Tax",
        value: result.totalTax,
        type: "currency" as const,
        highlighted: true,
      },
      {
        label: "Effective Tax Rate",
        value: result.effectiveRate,
        type: "percentage" as const,
      },
    ];

    const lineData = Array.from(
      { length: 11 },
      (_, index) => {
        const income =
          400_000 + index * 400_000;

        const taxResult =
          calculateIncomeTax({
            annualIncome: income,
          });

        return {
          label: `₹${income / 100_000}L`,
          value: taxResult.totalTax,
        };
      },
    );

    return (
      <CalculatorPage
        calculator={calculator}
        values={values}
        onChange={handleChange}
        results={results}
        lineData={lineData}
        formula={calculator.formula}
        chartTitle="Estimated tax by income"
        chartDescription="Estimated tax based on the selected income assumption."
      />
    );
  }

  // ============================================================
  // GST
  // ============================================================

  if (calculator.slug === "gst") {
    const amount =
      values.amount ?? 10_000;

    const gstRate =
      values.gstRate ?? 18;

    const result = calculateGst({
      amount,
      gstRate,
    });

    const results = [
      {
        label: "Base Amount",
        value: result.amount,
        type: "currency" as const,
      },
      {
        label: "GST Amount",
        value: result.gstAmount,
        type: "currency" as const,
      },
      {
        label: "CGST",
        value: result.cgst,
        type: "currency" as const,
      },
      {
        label: "SGST",
        value: result.sgst,
        type: "currency" as const,
      },
      {
        label: "Total Amount",
        value: result.inclusiveAmount,
        type: "currency" as const,
        highlighted: true,
      },
    ];

    const pieData = [
      {
        name: "Base Amount",
        value: result.amount,
        color: "#0f172a",
      },
      {
        name: "GST",
        value: Math.max(
          0,
          result.gstAmount,
        ),
        color: "#16a34a",
      },
    ];

    return (
      <CalculatorPage
        calculator={calculator}
        values={values}
        onChange={handleChange}
        results={results}
        pieData={pieData}
        formula={calculator.formula}
        pieTitle="GST breakdown"
        pieDescription="Base amount and GST amount included in the total."
      />
    );
  }

  // ============================================================
  // INFLATION
  // ============================================================

  if (calculator.slug === "inflation") {
    const currentAmount =
      values.currentAmount ?? 100_000;

    const inflationRate =
      values.inflationRate ?? 6;

    const years =
      values.years ?? 10;

    const result = calculateInflation({
      currentAmount,
      inflationRate,
      years,
    });

    const results = [
      {
        label: "Current Cost",
        value: result.currentAmount,
        type: "currency" as const,
      },
      {
        label: "Additional Cost",
        value: result.additionalCost,
        type: "currency" as const,
      },
      {
        label: "Future Cost",
        value: result.futureValue,
        type: "currency" as const,
        highlighted: true,
      },
      {
        label: "Purchasing Power",
        value: result.purchasingPower,
        type: "percentage" as const,
      },
    ];

    const lineData =
      calculateInflationGrowth(
        currentAmount,
        inflationRate,
        years,
      );

    return (
      <CalculatorPage
        calculator={calculator}
        values={values}
        onChange={handleChange}
        results={results}
        lineData={lineData}
        formula={calculator.formula}
        chartTitle="Inflation-adjusted cost over time"
        chartDescription="Estimated future cost using the selected inflation assumption."
      />
    );
  }

  // ============================================================
  // GOLD LOAN
  // ============================================================

  if (calculator.slug === "gold-loan") {
    const goldValue =
      values.goldValue ?? 500_000;

    const loanToValue =
      values.loanToValue ?? 75;

    const interestRate =
      values.interestRate ?? 10;

    const result = calculateGoldLoan({
      goldValue,
      loanToValue,
      interestRate,
    });

    const results = [
      {
        label: "Gold Value",
        value: result.goldValue,
        type: "currency" as const,
      },
      {
        label: "Eligible Loan",
        value: result.eligibleLoan,
        type: "currency" as const,
        highlighted: true,
      },
      {
        label: "Annual Interest",
        value: result.annualInterest,
        type: "currency" as const,
      },
      {
        label: "Monthly Interest",
        value: result.monthlyInterest,
        type: "currency" as const,
      },
    ];

    const pieData = [
      {
        name: "Eligible Loan",
        value: result.eligibleLoan,
        color: "#0f172a",
      },
      {
        name: "Remaining Gold Value",
        value: Math.max(
          0,
          result.goldValue -
            result.eligibleLoan,
        ),
        color: "#16a34a",
      },
    ];

    return (
      <CalculatorPage
        calculator={calculator}
        values={values}
        onChange={handleChange}
        results={results}
        pieData={pieData}
        formula={calculator.formula}
        pieTitle="Gold loan eligibility"
        pieDescription="Estimated loan amount compared with the entered gold value."
      />
    );
  }

  // ============================================================
  // PERSONAL LOAN
  // ============================================================

  if (calculator.slug === "personal-loan") {
    const loanAmount =
      values.loanAmount ?? 1_000_000;

    const interestRate =
      values.interestRate ?? 12;

    const loanTenure =
      values.loanTenure ?? 5;

    const result = calculatePersonalLoan({
      loanAmount,
      interestRate,
      loanTenure,
    });

    const results = [
      {
        label: "Monthly EMI",
        value: result.monthlyEmi,
        type: "currency" as const,
        highlighted: true,
      },
      {
        label: "Loan Amount",
        value: result.loanAmount,
        type: "currency" as const,
      },
      {
        label: "Total Interest",
        value: result.totalInterest,
        type: "currency" as const,
      },
      {
        label: "Total Payment",
        value: result.totalPayment,
        type: "currency" as const,
      },
    ];

    const pieData = [
      {
        name: "Principal",
        value: result.loanAmount,
        color: "#0f172a",
      },
      {
        name: "Interest",
        value: Math.max(
          0,
          result.totalInterest,
        ),
        color: "#16a34a",
      },
    ];

    const totalMonths = Math.max(
      1,
      Math.round(
        result.loanTenure * 12,
      ),
    );

    const lineData = Array.from(
      { length: totalMonths },
      (_, index) => {
        const month = index + 1;
        const monthlyRate =
          result.interestRate / 100 / 12;

        let balance: number;

        if (monthlyRate === 0) {
          balance = Math.max(
            0,
            result.loanAmount -
              result.monthlyEmi *
                month,
          );
        } else {
          balance =
            result.loanAmount *
              Math.pow(
                1 + monthlyRate,
                month,
              ) -
            result.monthlyEmi *
              ((Math.pow(
                1 + monthlyRate,
                month,
              ) -
                1) /
                monthlyRate);

          balance = Math.max(
            0,
            balance,
          );
        }

        if (
          month % 12 === 0 ||
          month === totalMonths
        ) {
          return {
            label: `Year ${Math.ceil(
              month / 12,
            )}`,
            value: balance,
          };
        }

        return null;
      },
    ).filter(
      (
        item,
      ): item is {
        label: string;
        value: number;
      } => item !== null,
    );

    return (
      <CalculatorPage
        calculator={calculator}
        values={values}
        onChange={handleChange}
        results={results}
        pieData={pieData}
        lineData={lineData}
        formula={calculator.formula}
        pieTitle="Loan composition"
        pieDescription="Principal and estimated interest over the loan tenure."
        chartTitle="Outstanding loan balance"
        chartDescription="Estimated remaining loan balance over time."
      />
    );
  }

  // ============================================================
  // CAR LOAN
  // ============================================================

  if (calculator.slug === "car-loan") {
    const loanAmount =
      values.loanAmount ?? 1_000_000;

    const interestRate =
      values.interestRate ?? 9;

    const loanTenure =
      values.loanTenure ?? 5;

    const result = calculateCarLoan({
      loanAmount,
      interestRate,
      loanTenure,
    });

    const results = [
      {
        label: "Monthly EMI",
        value: result.monthlyEmi,
        type: "currency" as const,
        highlighted: true,
      },
      {
        label: "Loan Amount",
        value: result.loanAmount,
        type: "currency" as const,
      },
      {
        label: "Total Interest",
        value: result.totalInterest,
        type: "currency" as const,
      },
      {
        label: "Total Payment",
        value: result.totalPayment,
        type: "currency" as const,
      },
    ];

    const pieData = [
      {
        name: "Principal",
        value: result.loanAmount,
        color: "#0f172a",
      },
      {
        name: "Interest",
        value: Math.max(
          0,
          result.totalInterest,
        ),
        color: "#16a34a",
      },
    ];

    const totalMonths = Math.max(
      1,
      Math.round(
        result.loanTenure * 12,
      ),
    );

    const lineData = Array.from(
      { length: totalMonths },
      (_, index) => {
        const month = index + 1;
        const monthlyRate =
          result.interestRate / 100 / 12;

        let balance: number;

        if (monthlyRate === 0) {
          balance = Math.max(
            0,
            result.loanAmount -
              result.monthlyEmi *
                month,
          );
        } else {
          balance =
            result.loanAmount *
              Math.pow(
                1 + monthlyRate,
                month,
              ) -
            result.monthlyEmi *
              ((Math.pow(
                1 + monthlyRate,
                month,
              ) -
                1) /
                monthlyRate);

          balance = Math.max(
            0,
            balance,
          );
        }

        if (
          month % 12 === 0 ||
          month === totalMonths
        ) {
          return {
            label: `Year ${Math.ceil(
              month / 12,
            )}`,
            value: balance,
          };
        }

        return null;
      },
    ).filter(
      (
        item,
      ): item is {
        label: string;
        value: number;
      } => item !== null,
    );

    return (
      <CalculatorPage
        calculator={calculator}
        values={values}
        onChange={handleChange}
        results={results}
        pieData={pieData}
        lineData={lineData}
        formula={calculator.formula}
        pieTitle="Car loan composition"
        pieDescription="Principal and estimated interest over the car loan tenure."
        chartTitle="Outstanding car loan balance"
        chartDescription="Estimated remaining car loan balance over time."
      />
    );
  }

  // ============================================================
  // AGE
  // ============================================================

  if (calculator.slug === "age") {
    const dateOfBirth =
      values.dateOfBirth ?? 0;

    const hasDateOfBirth =
      dateOfBirth > 0;

    if (!hasDateOfBirth) {
      return (
        <CalculatorPage
          calculator={calculator}
          values={values}
          onChange={handleChange}
          results={[]}
          formula={calculator.formula}
        />
      );
    }

    const result = calculateAge({
      dateOfBirth,
    });

    const results = [
      {
        label: "Age",
        value: result.years,
        type: "number" as const,
        highlighted: true,
      },
      {
        label: "Months",
        value: result.months,
        type: "number" as const,
      },
      {
        label: "Days",
        value: result.days,
        type: "number" as const,
      },
      {
        label: "Total Months",
        value: result.totalMonths,
        type: "number" as const,
      },
      {
        label: "Days Until Next Birthday",
        value: result.daysUntilBirthday,
        type: "number" as const,
      },
    ];

    const lineData =
      calculateAgeGrowth(
        result.years,
      );

    return (
      <CalculatorPage
        calculator={calculator}
        values={values}
        onChange={handleChange}
        results={results}
        lineData={lineData}
        formula={calculator.formula}
        chartTitle="Age progression"
        chartDescription="Age in completed years from birth through your current age."
      />
    );
  }

  // ============================================================
  // FALLBACK
  // ============================================================

  return (
    <CalculatorPage
      calculator={calculator}
      values={values}
      onChange={handleChange}
      results={[]}
      formula={calculator.formula}
    />
  );
}
