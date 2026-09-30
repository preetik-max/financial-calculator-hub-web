import Link from "next/link";
import { CreditCard, Landmark, WalletCards } from "lucide-react";

import { Container } from "@/components/common/container";

const products = [
  { href: "/financial-products/credit-cards", title: "Credit Cards", description: "Explore SBI, HDFC Bank and Axis Bank credit cards.", icon: CreditCard },
  { href: "/calculators/personal-loan", title: "Personal Loans", description: "Calculate personal loan EMI, interest and total repayment.", icon: WalletCards },
  { href: "/calculators/gold-loan", title: "Gold Loans", description: "Estimate eligible loan value and interest on a gold loan.", icon: Landmark },
];

export default function FinancialProductsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-600">Financial Products</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Explore Financial Products</h1>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">Explore selected financial products and tools. Partner links may earn Finora Labs a commission.</p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <Link key={product.href} href={product.href} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600"><Icon size={24} /></div>
                  <h2 className="mt-5 text-xl font-bold text-slate-950">{product.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>
                  <span className="mt-5 inline-block text-sm font-bold text-green-600">Explore →</span>
                </Link>
              );
            })}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-5 text-slate-500">We may earn a commission when you apply through certain partner links. This does not affect the price you pay.</p>
        </Container>
      </section>
    </main>
  );
}
