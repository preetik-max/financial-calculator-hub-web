import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import { Container } from "@/components/common/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-green-100/60 blur-3xl" />
      <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-slate-100 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-3.5 py-2 text-sm font-medium text-green-700">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Simple tools for smarter decisions
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Smart Financial Tools for{" "}
              <span className="text-green-600">
                Smarter Decisions
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Calculate, compare and understand your money with simple
              financial tools for investments, loans, savings, taxes and
              everyday planning.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/calculators"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Explore Calculators
                <ArrowRight size={18} />
              </Link>

              <Link
                href="#app"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                <Smartphone size={18} />
                Get the App
              </Link>
            </div>

            <div className="mt-8 flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:flex-wrap sm:gap-5">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-green-600" />
                Free to use
              </div>

              <div className="flex items-center gap-2">
                <Calculator size={17} className="text-green-600" />
                Instant calculations
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck size={17} className="text-green-600" />
                Privacy-focused
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200/70 sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Financial Calculator Hub
                  </p>
                  <h2 className="mt-1 text-lg font-bold text-slate-950">
                    Investment Overview
                  </h2>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  ↗
                </div>
              </div>

              <div className="mt-7 rounded-2xl bg-slate-950 p-5 text-white">
                <p className="text-xs text-slate-400">
                  Estimated Future Value
                </p>

                <p className="mt-2 text-3xl font-bold">
                  ₹23.23L
                </p>

                <div className="mt-4 h-28">
                  <svg
                    viewBox="0 0 500 130"
                    className="h-full w-full"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 108 C55 98 70 95 105 91 C145 86 150 76 190 78 C225 79 245 65 278 67 C316 69 326 48 360 50 C400 52 416 30 500 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="5"
                      className="text-green-400"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Invested</p>
                  <p className="mt-1 font-semibold text-slate-950">
                    ₹12.00L
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Returns</p>
                  <p className="mt-1 font-semibold text-slate-950">
                    ₹11.23L
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {["SIP", "EMI", "FD"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-200 p-3 text-center"
                  >
                    <div className="mx-auto h-2 w-2 rounded-full bg-green-500" />
                    <p className="mt-2 text-xs font-semibold text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-green-100 bg-white p-4 shadow-xl sm:block">
              <p className="text-xs text-slate-500">
                Financial tools
              </p>
              <p className="mt-1 text-sm font-bold text-slate-950">
                15+ calculators
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
