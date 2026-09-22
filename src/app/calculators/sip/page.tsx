"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Calculator,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { Container } from "@/components/common/container";
import { calculateSip } from "@/lib/calculators/sip";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.max(0, value));
}

export default function SipCalculatorPage() {
  const [monthlyInvestment, setMonthlyInvestment] =
    useState(10000);

  const [annualReturnRate, setAnnualReturnRate] =
    useState(12);

  const [years, setYears] = useState(10);

  const result = useMemo(
    () =>
      calculateSip({
        monthlyInvestment,
        annualReturnRate,
        years,
      }),
    [monthlyInvestment, annualReturnRate, years],
  );

  const pieData = [
    {
      name: "Invested Amount",
      value: result.investedAmount,
    },
    {
      name: "Estimated Returns",
      value: Math.max(0, result.estimatedReturns),
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <Container className="py-10 sm:py-14">
          <Link
            href="/calculators"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-950"
          >
            <ArrowLeft size={16} />
            All Calculators
          </Link>

          <div className="mt-6 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <Calculator size={24} />
            </div>

            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                SIP Calculator
              </h1>

              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                Estimate the potential value of your monthly SIP
                investment based on your investment amount, expected
                return and investment period.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Calculator */}
      <section className="py-10 sm:py-14">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold text-slate-950">
                SIP Calculator
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Adjust the values to see the estimated result instantly.
              </p>

              <div className="mt-8 space-y-8">
                <SliderField
                  label="Monthly Investment"
                  value={monthlyInvestment}
                  displayValue={formatCurrency(monthlyInvestment)}
                  min={500}
                  max={100000}
                  step={500}
                  onChange={setMonthlyInvestment}
                />

                <SliderField
                  label="Expected Return"
                  value={annualReturnRate}
                  displayValue={`${annualReturnRate}%`}
                  min={1}
                  max={30}
                  step={0.5}
                  onChange={setAnnualReturnRate}
                />

                <SliderField
                  label="Investment Period"
                  value={years}
                  displayValue={`${years} Years`}
                  min={1}
                  max={40}
                  step={1}
                  onChange={setYears}
                />
              </div>

              <div className="mt-8 rounded-xl bg-slate-50 p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-green-600"
                  />

                  <p className="text-sm leading-6 text-slate-600">
                    This calculator provides an estimate based on the
                    assumptions you enter. Actual mutual fund returns can
                    vary with market conditions.
                  </p>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="rounded-2xl bg-slate-950 p-6 text-white shadow-xl sm:p-8">
              <p className="text-sm text-slate-400">
                Estimated SIP Value
              </p>

              <p className="mt-2 text-4xl font-bold">
                {formatCurrency(result.totalValue)}
              </p>

              <div className="mt-8 space-y-4">
                <ResultRow
                  label="Invested Amount"
                  value={formatCurrency(result.investedAmount)}
                />

                <ResultRow
                  label="Estimated Returns"
                  value={formatCurrency(result.estimatedReturns)}
                />

                <ResultRow
                  label="Total Value"
                  value={formatCurrency(result.totalValue)}
                  highlight
                />
              </div>

              {/* Pie Chart */}
              <div className="mt-8 rounded-2xl bg-white p-5 text-slate-950">
                <h3 className="text-base font-bold">
                  Investment Breakdown
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Invested amount vs estimated returns
                </p>

                <div className="mt-4 h-64">
                  <ResponsiveContainer
                    width="100%"
                    height="100%"
                  >
                    <PieChart>
                      <Pie
                        data={pieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={62}
                        outerRadius={88}
                        paddingAngle={3}
                        strokeWidth={0}
                      >
                        <Cell fill="#0f172a" />
                        <Cell fill="#16a34a" />
                      </Pie>

                      <Tooltip
                        formatter={(value) =>
                          formatCurrency(Number(value))
                        }
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Legend */}
                <div className="space-y-3">
                  <LegendRow
                    color="#0f172a"
                    label="Invested Amount"
                    value={formatCurrency(
                      result.investedAmount,
                    )}
                  />

                  <LegendRow
                    color="#16a34a"
                    label="Estimated Returns"
                    value={formatCurrency(
                      result.estimatedReturns,
                    )}
                  />
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-white/5 p-4">
                <p className="text-xs text-slate-400">
                  Investment period
                </p>

                <p className="mt-1 text-sm font-semibold">
                  {years} years · {annualReturnRate}% expected return
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Explanation */}
      <section className="border-t border-slate-200 bg-white py-14">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-950">
              How does a SIP work?
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              A Systematic Investment Plan (SIP) allows you to invest
              a fixed amount at regular intervals in a mutual fund.
              The future value depends on the amount invested, investment
              period and assumed rate of return.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-slate-950">
              SIP example
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              For example, investing ₹10,000 every month for 10 years
              with an assumed annual return of 12% gives an estimated
              total value based on the calculator&apos;s compounding formula.
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              The calculation is an estimate and does not guarantee
              future mutual fund returns.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}

function SliderField({
  label,
  value,
  displayValue,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  displayValue: string;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <label className="text-sm font-semibold text-slate-800">
          {label}
        </label>

        <span className="rounded-lg bg-green-50 px-3 py-1.5 text-sm font-bold text-green-700">
          {displayValue}
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) =>
          onChange(Number(event.target.value))
        }
        className="mt-5 w-full accent-green-600"
      />

      <div className="mt-2 flex justify-between text-xs text-slate-400">
        <span>
          {label === "Expected Return"
            ? `${min}%`
            : label === "Investment Period"
              ? `${min} Year`
              : formatCurrency(min)}
        </span>

        <span>
          {label === "Expected Return"
            ? `${max}%`
            : label === "Investment Period"
              ? `${max} Years`
              : formatCurrency(max)}
        </span>
      </div>
    </div>
  );
}

function ResultRow({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-4 border-b border-white/10 pb-4 ${
        highlight ? "text-green-400" : ""
      }`}
    >
      <span className="text-sm text-slate-400">
        {label}
      </span>

      <span className="text-sm font-bold">
        {value}
      </span>
    </div>
  );
}

function LegendRow({
  color,
  label,
  value,
}: {
  color: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-2.5">
        <span
          className="h-3 w-3 rounded-full"
          style={{ backgroundColor: color }}
        />

        <span className="text-sm text-slate-600">
          {label}
        </span>
      </div>

      <span className="text-sm font-semibold text-slate-950">
        {value}
      </span>
    </div>
  );
}
