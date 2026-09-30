"use client";

import { useMemo, useState } from "react";

import { Container } from "@/components/common/container";
import { CreditCardCard } from "@/components/products/credit-card-card";
import { creditCards, creditCardBanks, type CreditCardBank } from "@/data/credit-cards";

export default function CreditCardsPage() {
  const [activeBank, setActiveBank] = useState<CreditCardBank>("SBI");

  const visibleCards = useMemo(
    () => creditCards.filter((card) => card.bank === activeBank),
    [activeBank],
  );

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-600">Credit Cards</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Find a Credit Card That Fits You</h1>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">Explore credit card options from SBI, HDFC Bank and Axis Bank and check eligibility through the partner application page.</p>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <div className="flex flex-wrap justify-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
            {creditCardBanks.map((bank) => (
              <button
                key={bank}
                type="button"
                onClick={() => setActiveBank(bank)}
                className={`rounded-xl px-7 py-3 text-sm font-bold transition ${activeBank === bank ? "bg-slate-950 text-white" : "text-slate-600 hover:bg-slate-100"}`}
              >
                {bank}
              </button>
            ))}
          </div>

          <div className="mt-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-green-600">{activeBank} Credit Cards</p>
              <h2 className="mt-1 text-2xl font-bold text-slate-950">Available cards</h2>
            </div>
            <p className="text-sm text-slate-500">{visibleCards.length} cards</p>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleCards.map((card) => (
              <CreditCardCard key={card.slug} card={card} />
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-5 text-slate-500">Partner disclosure: We may earn a commission when you apply through certain links. Card approval, eligibility, fees and benefits are determined by the respective issuer/partner and may change.</p>
        </Container>
      </section>
    </main>
  );
}
