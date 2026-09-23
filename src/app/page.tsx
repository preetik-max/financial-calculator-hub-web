import { Hero } from "@/components/home/hero";
import { PopularCalculators } from "@/components/home/popular-calculators";

export default function Home() {
  return (
    <>
      <Hero />

      <PopularCalculators />

      <section
        id="app"
        className="bg-slate-950 py-20 text-white sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-green-400">
            Mobile App
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Financial Calculator Hub
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Your financial toolkit for SIP, EMI, FD, RD, CAGR,
            PPF, SWP and more.
          </p>

          <button
            type="button"
            className="mt-8 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            Download on Google Play
          </button>
        </div>
      </section>
    </>
  );
}
