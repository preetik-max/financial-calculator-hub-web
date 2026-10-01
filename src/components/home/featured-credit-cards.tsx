import Image from "next/image";
import Link from "next/link";

import { ArrowRight, CreditCard, ShieldCheck } from "lucide-react";

import { Container } from "@/components/common/container";

const cards = [
  {
    name: "SBI Cashback Credit Card",
    bank: "SBI Card",
    image: "/images/cards/sbi/sbi_cashback.png",
    url: "https://linkzip.in/bf3aln",
    tag: "Cashback",
  },
  {
    name: "HDFC Millennia Credit Card",
    bank: "HDFC Bank",
    image: "/images/cards/hdfc/hdfc_millennia.png",
    url: "https://linkzip.in/e6mepl",
    tag: "Rewards",
  },
  {
    name: "Airtel Axis Bank Credit Card",
    bank: "Axis Bank",
    image: "/images/cards/axis/airtel_axis.png",
    url: "https://linkzip.in/01bg6x",
    tag: "Popular",
  },
];

export function FeaturedCreditCards() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="rounded-3xl bg-slate-950 p-6 sm:p-10 lg:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-green-400">
                <CreditCard size={15} />
                Credit Card Offers
              </div>

              <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Find a Credit Card that fits your spending
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                Explore selected credit card offers and check the available
                application options.
              </p>
            </div>

            <Link
              href="/financial-products/credit-cards"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Explore All Cards
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card.name}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white p-4"
              >
                <div className="relative aspect-[1.6/1] overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    className="object-contain p-3"
                  />
                </div>

                <div className="mt-4">
                  <span className="inline-flex rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                    {card.tag}
                  </span>

                  <h3 className="mt-3 text-base font-bold text-slate-950">
                    {card.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {card.bank}
                  </p>

                  <a
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
                  >
                    Apply Now
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck size={15} />
            Application eligibility and approval are determined by the issuer.
          </div>
        </div>
      </Container>
    </section>
  );
}