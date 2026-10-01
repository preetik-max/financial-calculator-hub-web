import Link from "next/link";

import { CalculatorCard } from "@/components/common/calculator-card";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { calculators } from "@/data/calculators";

export function PopularCalculators() {
  const popularSlugs = [
    "personal-loan",
    "emi",
    "sip",
  ];

  const popularCalculators = popularSlugs
    .map((slug) =>
      calculators.find((calculator) => calculator.slug === slug),
    )
    .filter(
      (calculator): calculator is (typeof calculators)[number] =>
        Boolean(calculator),
    );

  return (
    <section
      id="calculators"
      className="bg-slate-50 py-20 sm:py-24"
    >
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Financial Tools"
            title="Popular Calculators"
            description="Start with our most useful calculators for loans, monthly payments and investments."
          />

          <Link
            href="/calculators"
            className="shrink-0 text-sm font-semibold text-green-600 hover:text-green-700"
          >
            View all calculators →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {popularCalculators.map((calculator) => (
            <CalculatorCard
              key={calculator.slug}
              calculator={calculator}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}