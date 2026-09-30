import type { CreditCard } from "@/data/credit-cards";

interface CreditCardCardProps {
  card: CreditCard;
}

export function CreditCardCard({ card }: CreditCardCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex min-h-52 items-center justify-center bg-slate-50 p-5">
        <img
          src={card.image}
          alt={card.name}
          className="max-h-44 w-full object-contain transition duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-green-600">
          {card.bank} Credit Card
        </p>
        <h2 className="mt-2 min-h-12 text-base font-bold leading-6 text-slate-950">
          {card.name}
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Explore the card details and check eligibility on the partner application page.
        </p>
        <a
          href={card.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="mt-5 flex w-full items-center justify-center rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Check Eligibility →
        </a>
      </div>
    </article>
  );
}
