import Link from "next/link";

import { Container } from "@/components/common/container";
import { CreditCardCard } from "@/components/products/credit-card-card";
import { creditCards } from "@/data/credit-cards";

const featuredSlugs = ["sbi-cashback", "millennia-hdfc", "airtel-axis"];

export function FeaturedCreditCards() {
  const cards = featuredSlugs
    .map((slug) => creditCards.find((card) => card.slug === slug))
    .filter((card): card is (typeof creditCards)[number] => Boolean(card));

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-600">Credit Cards</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">Find a card that fits your needs</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">Explore selected cards from SBI, HDFC Bank and Axis Bank. Check eligibility through our partner links.</p>
          </div>
          <Link href="/financial-products/credit-cards" className="shrink-0 text-sm font-bold text-green-600 hover:text-green-700">View all credit cards →</Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {cards.map((card) => <CreditCardCard key={card.slug} card={card} />)}
        </div>
      </Container>
    </section>
  );
}
