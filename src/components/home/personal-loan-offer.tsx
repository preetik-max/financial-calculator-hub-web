import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Calculator,
  CheckCircle2,
} from "lucide-react";

import { Container } from "@/components/common/container";

export function PersonalLoanOffer() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            {/* Left Content */}
            <div className="p-7 sm:p-10 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-green-700">
                <Banknote size={15} />
                Personal Loan
              </div>

              <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Planning a Personal Loan?
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                First estimate your EMI, interest and total repayment with our
                Personal Loan Calculator. Then explore available loan
                application options.
              </p>

              <div className="mt-7 space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-green-600"
                  />
                  Calculate your expected EMI
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-green-600"
                  />
                  Understand total interest payable
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-green-600"
                  />
                  Compare loan amounts and tenures
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/calculators/personal-loan"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Calculate Personal Loan EMI
                  <Calculator size={17} />
                </Link>

                <button
                  type="button"
                  disabled
                  className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm font-semibold text-slate-400"
                >
                  Apply for Personal Loan
                  <ArrowRight size={17} />
                </button>
              </div>

              <p className="mt-3 text-xs text-slate-400">
                Personal loan application link will be added here.
              </p>
            </div>

            {/* Right Visual */}
            <div className="flex items-center justify-center bg-slate-950 p-8 lg:p-12">
              <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
                <p className="text-sm font-medium text-slate-400">
                  Personal Loan
                </p>

                <p className="mt-3 text-4xl font-bold">
                  Calculate first.
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Understand your estimated EMI, interest and repayment
                  before applying.
                </p>

                <div className="mt-7 grid grid-cols-3 gap-2">
                  <div className="rounded-xl bg-white/5 p-3 text-center">
                    <p className="text-xs text-slate-500">EMI</p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Monthly
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/5 p-3 text-center">
                    <p className="text-xs text-slate-500">Interest</p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Total
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/5 p-3 text-center">
                    <p className="text-xs text-slate-500">Tenure</p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Years
                    </p>
                  </div>
                </div>

                <Link
                  href="/calculators/personal-loan"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-green-400"
                >
                  Open Calculator
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}