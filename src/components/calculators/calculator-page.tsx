"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CalculatorFaq } from "@/components/calculators/calculator-faq";
import { CalculatorForm } from "@/components/calculators/calculator-form";
import { CalculatorResult } from "@/components/calculators/calculator-result";
import { CalculatorChart } from "@/components/calculators/calculator-chart";
import type { CalculatorItem } from "@/data/calculators";
import type {
  CalculatorLineData,
  CalculatorPieData,
  CalculatorResultItem,
} from "@/lib/calculators/types";

interface CalculatorPageProps {
  calculator: CalculatorItem;
  values: Record<string, number>;
  onChange: (id: string, value: number) => void;
  results: CalculatorResultItem[];
  pieData?: CalculatorPieData[];
  lineData?: CalculatorLineData[];
  formula?: string;
  pieTitle?: string;
  pieDescription?: string;
  chartTitle?: string;
  chartDescription?: string;
}

export function CalculatorPage({
  calculator,
  values,
  onChange,
  results,
  pieData = [],
  lineData = [],
  formula,
  pieTitle = "Investment breakdown",
  pieDescription = "See how the total value is divided between the components of the calculation.",
  chartTitle = "Growth over time",
  chartDescription = "Estimated value based on the assumptions entered above.",
}: CalculatorPageProps) {
  /*
   * AGE CALCULATOR
   *
   * Age has no normal calculator fields, so provide
   * a dedicated Date of Birth selector here.
   */
  const today = new Date();
  const currentYear = today.getFullYear();

  const selectedDate = values.dateOfBirth
    ? new Date(values.dateOfBirth)
    : null;

  const selectedDay = selectedDate
    ? selectedDate.getDate()
    : 0;

  const selectedMonth = selectedDate
    ? selectedDate.getMonth() + 1
    : 0;

  const selectedYear = selectedDate
    ? selectedDate.getFullYear()
    : 0;

  const daysInSelectedMonth =
    selectedYear > 0 && selectedMonth > 0
      ? new Date(
          selectedYear,
          selectedMonth,
          0,
        ).getDate()
      : 31;

  const setDatePart = (
    part: "day" | "month" | "year",
    value: number,
  ) => {
    const current = selectedDate
      ? new Date(selectedDate)
      : new Date(
          currentYear - 25,
          0,
          1,
        );

    let year = current.getFullYear();
    let month = current.getMonth();
    let day = current.getDate();

    if (part === "day") {
      day = value;
    }

    if (part === "month") {
      month = value - 1;
    }

    if (part === "year") {
      year = value;
    }

    const maxDay = new Date(
      year,
      month + 1,
      0,
    ).getDate();

    day = Math.min(day, maxDay);

    const nextDate = new Date(
      year,
      month,
      day,
    );

    nextDate.setHours(0, 0, 0, 0);

    onChange(
      "dateOfBirth",
      nextDate.getTime(),
    );
  };

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

              {calculator.slug === "age" ? (
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800">
                      Date of Birth
                    </label>

                    <p className="mt-1 text-xs text-slate-500">
                      Select your date of birth.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label
                        htmlFor="age-day"
                        className="mb-2 block text-xs font-semibold text-slate-600"
                      >
                        Day
                      </label>

                      <select
                        id="age-day"
                        value={selectedDay || ""}
                        onChange={(event) =>
                          setDatePart(
                            "day",
                            Number(event.target.value),
                          )
                        }
                        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                      >
                        <option value="">
                          Day
                        </option>

                        {Array.from(
                          {
                            length:
                              daysInSelectedMonth,
                          },
                          (_, index) => (
                            <option
                              key={index + 1}
                              value={index + 1}
                            >
                              {index + 1}
                            </option>
                          ),
                        )}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="age-month"
                        className="mb-2 block text-xs font-semibold text-slate-600"
                      >
                        Month
                      </label>

                      <select
                        id="age-month"
                        value={selectedMonth || ""}
                        onChange={(event) =>
                          setDatePart(
                            "month",
                            Number(event.target.value),
                          )
                        }
                        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                      >
                        <option value="">
                          Month
                        </option>

                        <option value="1">
                          January
                        </option>
                        <option value="2">
                          February
                        </option>
                        <option value="3">
                          March
                        </option>
                        <option value="4">
                          April
                        </option>
                        <option value="5">
                          May
                        </option>
                        <option value="6">
                          June
                        </option>
                        <option value="7">
                          July
                        </option>
                        <option value="8">
                          August
                        </option>
                        <option value="9">
                          September
                        </option>
                        <option value="10">
                          October
                        </option>
                        <option value="11">
                          November
                        </option>
                        <option value="12">
                          December
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="age-year"
                        className="mb-2 block text-xs font-semibold text-slate-600"
                      >
                        Year
                      </label>

                      <select
                        id="age-year"
                        value={selectedYear || ""}
                        onChange={(event) =>
                          setDatePart(
                            "year",
                            Number(event.target.value),
                          )
                        }
                        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                      >
                        <option value="">
                          Year
                        </option>

                        {Array.from(
                          {
                            length: 121,
                          },
                          (_, index) =>
                            currentYear - index,
                        ).map((year) => (
                          <option
                            key={year}
                            value={year}
                          >
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {selectedDate && (
                    <div className="rounded-xl bg-slate-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Selected Date
                      </p>

                      <p className="mt-1 text-base font-bold text-slate-900">
                        {String(selectedDay).padStart(
                          2,
                          "0",
                        )}
                        /
                        {String(selectedMonth).padStart(
                          2,
                          "0",
                        )}
                        /
                        {selectedYear}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <CalculatorForm
                  fields={calculator.fields}
                  values={values}
                  onChange={onChange}
                />
              )}
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

              {results.length > 0 ? (
                <CalculatorResult results={results} />
              ) : (
                <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
                  <p className="text-sm font-medium text-slate-600">
                    Select your date of birth to calculate your age.
                  </p>
                </div>
              )}
            </div>
          </div>

          {(pieData.length > 0 ||
            lineData.length > 0) && (
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {pieData.length > 0 && (
                <CalculatorChart
                  title={pieTitle}
                  description={pieDescription}
                  type="pie"
                  pieData={pieData}
                />
              )}

              {lineData.length > 0 && (
                <CalculatorChart
                  title={chartTitle}
                  description={chartDescription}
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
