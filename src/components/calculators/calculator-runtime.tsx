"use client";

import { useMemo, useState } from "react";

import { CalculatorPage } from "@/components/calculators/calculator-page";
import type { CalculatorItem } from "@/data/calculators";
import { calculateEmi, calculateEmiOutstandingBalance } from "@/lib/calculators/emi";
import { calculateFd, calculateFdYearlyGrowth } from "@/lib/calculators/fd";
import { calculateRd, calculateRdYearlyGrowth } from "@/lib/calculators/rd";
import { calculateSip } from "@/lib/calculators/sip";

interface CalculatorRuntimeProps {
  calculator: CalculatorItem;
}

export function CalculatorRuntime({
  calculator,
}: CalculatorRuntimeProps) {
  const fields = calculator.fields ?? [];

  const initialValues = useMemo(() => {
    return Object.fromEntries(
      fields.map((field) => [
        field.id,
        field.defaultValue,
      ]),
    );
  }, [fields]);

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
    const result = calculateSip({
      monthlyInvestment:
        values.monthlyInvestment ?? 10000,
      annualReturnRate:
        values.annualReturnRate ?? 12,
      years:
        values.years ?? 10,
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

    const monthlyInvestment =
      values.monthlyInvestment ?? 10000;

    const lineData = Array.from(
      { length: result.months },
      (_, index) => {
        const month = index + 1;
        const monthlyRate = result.monthlyRate;

        let value: number;

        if (monthlyRate === 0) {
          value = monthlyInvestment * month;
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
        value: result.totalInterest,
        color: "#16a34a",
      },
    ];

    const lineData = Array.from(
      {
        length: result.months,
      },
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
        value: result.interestEarned,
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
        value: result.interestEarned,
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
  // Remaining calculators
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
