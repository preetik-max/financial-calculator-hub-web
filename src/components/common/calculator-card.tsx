import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Calculator,
  CakeSlice,
  Car,
  CalendarDays,
  CircleDollarSign,
  HandCoins,
  Landmark,
  Percent,
  PiggyBank,
  ReceiptText,
  TrendingUp,
  Wallet,
} from "lucide-react";

import type { Calculator as CalculatorType } from "@/data/calculators";

const iconMap = {
  TrendingUp,
  Calculator,
  Landmark,
  CalendarDays,
  Wallet,
  PiggyBank,
  ArrowDownToLine,
  ReceiptText,
  Percent,
  ArrowUpRight,
  CircleDollarSign,
  HandCoins,
  Car,
  CakeSlice,
};

interface CalculatorCardProps {
  calculator: CalculatorType;
}

export function CalculatorCard({
  calculator,
}: CalculatorCardProps) {
  const Icon =
    iconMap[calculator.icon as keyof typeof iconMap] ?? Calculator;

  return (
    <Link
      href={`/calculators/${calculator.slug}`}
      className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
          <Icon size={21} strokeWidth={2} />
        </div>

        <ArrowUpRight
          size={19}
          className="text-slate-300 transition group-hover:text-green-600"
        />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-slate-950">
        {calculator.name}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {calculator.description}
      </p>

      <div className="mt-4">
        <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
          {calculator.category}
        </span>
      </div>
    </Link>
  );
}
