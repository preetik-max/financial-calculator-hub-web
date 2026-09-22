"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CalculatorFaq } from "@/components/calculators/calculator-faq";
import { CalculatorForm } from "@/components/calculators/calculator-form";
import { CalculatorResult } from "@/components/calculators/calculator-result";
import { CalculatorChart } from "@/components/calculators/calculator-chart";
import type {
  CalculatorDefinition,
  CalculatorLineData,
  CalculatorPieData,
  CalculatorResultItem,
} from "@/lib/calculators/types";

interface CalculatorPageProps {
  calculator: CalculatorDefinition;
  values: Record<string, number>;
  onChange: (id: string, value: number) => void;
  results: CalculatorResultItem[];
  pieData?: CalculatorPieData[];
  lineData?: CalculatorLineData[];
  formula?: string;
}

export function CalculatorPage({
  calculator,
  values,
  onChange,
  results,
  pieData = [],
  lineData = [],
  formula,
}: CalculatorPageProps) {
  return (
    <main>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <Link
            href="/calculators"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-950"
          >
            <ArrowLeft size={16} />
            All calculators
          </Link>

          <div className="mt-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-green-600">
              {calculator.category}
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              {calculator.name}
            </h1>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              {calculator.description}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="mb-6 text-xl font-bold text-slate-950">
                Calculator
              </h2>

              <CalculatorForm
                fields={calculator.fields}
                values={values}
                onChange={onChange}
              />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-green-600">
                  Results
                </p>

                <h2 className="mt-2 text-2xl font-bold text-slate-950">
                  Your estimated result
                </h2>
              </div>

              <CalculatorResult results={results} />
            </div>
          </div>

          {(pieData.length > 0 || lineData.length > 0) && (
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {pieData.length > 0 && (
                <CalculatorChart
                  title="Investment breakdown"
                  description="See how the total value is divided between your investment and estimated returns."
                  type="pie"
                  pieData={pieData}
                />
              )}

              {lineData.length > 0 && (
                <CalculatorChart
                  title="Growth over time"
                  description="Estimated value based on the assumptions entered above."
                  type="line"
                  lineData={lineData}
                />
              )}
            </div>
          )}

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-slate-950">
                About {calculator.name}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {calculator.explanation}
              </p>

              {formula && (
                <div className="mt-6 rounded-xl bg-slate-950 p-5 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-green-400">
                    Formula
                  </p>

                  <p className="mt-3 overflow-x-auto font-mono text-sm leading-7 text-slate-200">
                    {formula}
                  </p>
                </div>
              )}
            </article>
          </div>

          <div className="mt-10">
            <CalculatorFaq faq={calculator.faq} />
          </div>
        </div>
      </section>
    </main>
  );
}
