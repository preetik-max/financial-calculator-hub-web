import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Lightbulb,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Finora Labs",
  description:
    "Learn about Finora Labs and Financial Calculator Hub — simple tools designed to help users understand and plan their finances.",
};

const features = [
  {
    icon: Calculator,
    title: "Simple Financial Tools",
    description:
      "Easy-to-use calculators for loans, investments, savings, taxes and everyday financial planning.",
  },
  {
    icon: Lightbulb,
    title: "Built for Better Planning",
    description:
      "Our goal is to make financial calculations easier to understand before users make important decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Clear & Transparent",
    description:
      "We aim to present calculations, assumptions, disclosures and financial-product information clearly.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile",
    description:
      "Financial Calculator Hub is designed to provide a consistent experience across the website and mobile application.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
              About Finora Labs
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Simple Tools.
              <br />
              Smarter Financial Decisions.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Finora Labs develops simple, reliable and user-friendly digital
              financial tools designed to help people understand numbers,
              compare scenarios and plan their finances with greater clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                Who We Are
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Building practical financial technology
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                Finora Labs focuses on building digital products that simplify
                financial calculations and everyday financial planning.
              </p>

              <p>
                Our first major product is Financial Calculator Hub, a
                collection of calculators designed around common financial
                questions such as loan EMIs, SIP investments, fixed deposits,
                recurring deposits, returns and other planning calculations.
              </p>

              <p>
                We believe financial tools should be easy to use, transparent
                about assumptions and accessible to people who may not have a
                technical or financial background.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              What We Focus On
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Useful financial tools without unnecessary complexity
            </h2>

            <p className="mt-4 text-slate-600">
              Our products are designed around practical use cases and clear
              financial calculations.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-slate-950">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Financial Calculator Hub */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-slate-950">
            <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:p-16">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                  <Calculator size={16} />
                  Financial Calculator Hub
                </div>

                <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Your everyday financial calculation toolkit
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                  Financial Calculator Hub brings commonly used financial
                  calculators together in one place so users can quickly
                  estimate payments, returns, savings and other financial
                  scenarios.
                </p>

                <Link
                  href="/calculators"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  Explore Calculators
                  <ArrowRight size={17} />
                </Link>
              </div>

              <div className="grid gap-3">
                {[
                  "Loan & EMI calculations",
                  "SIP & investment calculations",
                  "FD & RD calculations",
                  "Tax and financial planning tools",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200"
                  >
                    <CheckCircle2 size={18} className="shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future */}
      <section className="border-t border-slate-200 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            What&apos;s Next
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            More financial tools are planned
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600">
            Finora Labs plans to expand its product ecosystem over time with
            additional financial tools and financial-product experiences.
            Availability will depend on product readiness, partner
            relationships and applicable requirements.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9">
            <h2 className="text-xl font-bold text-slate-950">
              Important Information
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Financial Calculator Hub provides calculation tools and general
              informational content. Calculator results are estimates based
              on the values entered by the user and should not be treated as
              financial, investment, tax or legal advice.
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Financial products displayed on the website may include
              promotional or affiliate relationships. Product availability,
              eligibility, pricing, rates, fees and approval decisions are
              determined by the relevant financial institution or service
              provider.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
