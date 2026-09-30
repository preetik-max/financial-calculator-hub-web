import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import { Hero } from "@/components/home/hero";
import { FeaturedCreditCards } from "@/components/home/featured-credit-cards";
import { PersonalLoanOffer } from "@/components/home/personal-loan-offer";
import { PopularCalculators } from "@/components/home/popular-calculators";
import { Container } from "@/components/common/container";

const toolkit = [
  {
    title: "Investment Calculators",
    description:
      "SIP, Lumpsum, CAGR, PPF and SWP calculators for investment planning.",
    href: "/calculators/sip",
  },
  {
    title: "Loan Calculators",
    description:
      "EMI, Personal Loan, Car Loan and Gold Loan calculators.",
    href: "/calculators/emi",
  },
  {
    title: "Savings Calculators",
    description:
      "FD and RD calculators to estimate maturity and interest.",
    href: "/calculators/fd",
  },
  {
    title: "Tax & Planning",
    description:
      "Income Tax, GST, Inflation and Age calculators.",
    href: "/calculators/income-tax",
  },
];

export default function Home() {
  return (
    <>
      <main>
        {/* Hero */}
        <Hero />

        {/* Popular Calculators */}
        <PopularCalculators />

        {/* Credit Card Offers */}
        <FeaturedCreditCards />

        {/* Personal Loan */}
        <PersonalLoanOffer />

        {/* Financial Toolkit */}
        <section className="bg-white py-20 sm:py-24">
          <Container>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-green-600">
                  Financial Toolkit
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Everything you need in one place
                </h2>

                <p className="mt-4 max-w-2xl text-slate-600">
                  Explore calculators for investments, loans, savings,
                  taxes and everyday financial planning.
                </p>
              </div>

              <Link
                href="/calculators"
                className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 transition hover:text-green-700"
              >
                View all calculators
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {toolkit.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <Calculator size={21} />
                  </div>

                  <h3 className="mt-5 font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-green-600">
                    Explore
                    <ArrowRight
                      size={15}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* Mobile App */}
        <section
          id="app"
          className="bg-slate-950 py-20 text-white sm:py-24"
        >
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-green-400">
                  <Smartphone size={15} />
                  Mobile App
                </div>

                <h2 className="mt-5 max-w-2xl text-3xl font-bold sm:text-4xl">
                  Your financial toolkit, wherever you go
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                  Calculate SIP, EMI, FD, RD, CAGR, PPF, SWP and more
                  directly from your phone.
                </p>

                <button
                  type="button"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  Download on Google Play
                  <ArrowRight size={17} />
                </button>
              </div>

              <div className="hidden rounded-3xl border border-white/10 bg-white/5 p-8 sm:block">
                <Smartphone
                  size={72}
                  strokeWidth={1.5}
                  className="text-green-400"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* Financial Education */}
        <section className="bg-slate-50 py-20 sm:py-24">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-green-600">
                  <BookOpen size={18} />
                  Financial Education
                </div>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Learn before you decide
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                  Explore practical financial information about investments,
                  loans, credit cards, savings and personal finance.
                </p>

                <Link
                  href="/learn"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Explore Financial Guides
                  <ArrowRight size={17} />
                </Link>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <ShieldCheck size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-950">
                      Simple and transparent
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Calculators are provided for informational and planning
                      purposes. Actual rates, eligibility and product terms
                      may vary by provider.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Disclaimer */}
        <section className="border-t border-slate-200 bg-white py-12">
          <Container>
            <div className="flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-start">
              <ShieldCheck
                className="shrink-0 text-slate-400"
                size={20}
              />

              <p className="leading-6">
                <span className="font-semibold text-slate-700">
                  Disclaimer:
                </span>{" "}
                Financial Calculator Hub provides calculators and general
                financial information for educational and planning purposes.
                Calculations are estimates and should not be considered
                financial, investment, tax or legal advice. Product
                applications may redirect you to third-party providers.
                Eligibility, approval, rates and terms are determined by the
                respective provider.
              </p>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}