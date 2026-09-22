import { ArrowUpRight } from "lucide-react";

import type { CalculatorResultItem } from "@/lib/calculators/types";
import { formatCurrency } from "@/lib/utils/format-currency";
import { formatNumber } from "@/lib/utils/format-number";

interface CalculatorResultProps {
  results: CalculatorResultItem[];
}

function formatResultValue(result: CalculatorResultItem) {
  switch (result.type) {
    case "percentage":
      return `${formatNumber(result.value, 2)}%`;

    case "number":
      return formatNumber(result.value, 2);

    case "currency":
    default:
      return formatCurrency(result.value);
  }
}

export function CalculatorResult({
  results,
}: CalculatorResultProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {results.map((result) => (
        <div
          key={result.label}
          className={`rounded-2xl border p-5 ${
            result.highlighted
              ? "border-slate-900 bg-slate-950 text-white"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <p
              className={`text-sm ${
                result.highlighted
                  ? "text-slate-300"
                  : "text-slate-500"
              }`}
            >
              {result.label}
            </p>

            {result.highlighted && (
              <ArrowUpRight
                size={18}
                className="text-green-400"
              />
            )}
          </div>

          <p
            className={`mt-3 text-2xl font-bold tracking-tight sm:text-3xl ${
              result.highlighted
                ? "text-white"
                : "text-slate-950"
            }`}
          >
            {formatResultValue(result)}
          </p>
        </div>
      ))}
    </div>
  );
}
