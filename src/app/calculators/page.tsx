import { Calculator } from "lucide-react";

import { CalculatorCard } from "@/components/common/calculator-card";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { calculators } from "@/data/calculators";

export default function CalculatorsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-600">
              <Calculator size={26} />
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Financial Calculators
            </h1>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Plan, estimate and understand your finances with simple,
              easy-to-use financial calculators.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="All Tools"
            title="Choose a calculator"
            description="Explore calculators for investments, loans, savings, taxes and financial planning."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {calculators.map((calculator) => (
              <CalculatorCard
                key={calculator.slug}
                calculator={calculator}
              />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
