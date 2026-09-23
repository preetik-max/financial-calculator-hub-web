import { notFound } from "next/navigation";

import { CalculatorRuntime } from "@/components/calculators/calculator-runtime";
import { calculators } from "@/data/calculators";

interface CalculatorSlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return calculators.map((calculator) => ({
    slug: calculator.slug,
  }));
}

export default async function CalculatorSlugPage({
  params,
}: CalculatorSlugPageProps) {
  const { slug } = await params;

  const calculator = calculators.find(
    (item) => item.slug === slug,
  );

  if (!calculator) {
    notFound();
  }

  return (
    <CalculatorRuntime
      calculator={calculator}
    />
  );
}
