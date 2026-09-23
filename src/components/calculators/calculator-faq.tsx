import type { CalculatorItem } from "@/data/calculators";

interface CalculatorFaqProps {
  faq?: CalculatorItem["faq"];
}

export function CalculatorFaq({
  faq = [],
}: CalculatorFaqProps) {
  if (faq.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-slate-200 pt-10">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-green-600">
          FAQs
        </p>

        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
          Frequently asked questions
        </h2>
      </div>

      <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
        {faq.map((item) => (
          <details
            key={item.question}
            className="group p-5"
          >
            <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-slate-900">
              {item.question}
            </summary>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
