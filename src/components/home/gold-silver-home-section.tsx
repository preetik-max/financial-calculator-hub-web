"use client";

import { useMemo, useState } from "react";

type Metal = "gold" | "silver";

const inr = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);

function MetalCalculator({ metal }: { metal: Metal }) {
  const [purity, setPurity] = useState("22K");
  const [rate, setRate] = useState("");
  const [weight, setWeight] = useState("10");
  const [making, setMaking] = useState("12");
  const [gst, setGst] = useState("3");

  const calc = useMemo(() => {
    const base = Math.max(0, Number(rate) || 0) * Math.max(0, Number(weight) || 0);
    const makingAmount = base * Math.max(0, Number(making) || 0) / 100;
    const gstAmount = (base + makingAmount) * Math.max(0, Number(gst) || 0) / 100;
    return { base, makingAmount, gstAmount, total: base + makingAmount + gstAmount };
  }, [rate, weight, making, gst]);

  const label = metal === "gold" ? "Gold" : "Silver";

  return (
    <article className="rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-sm sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">{label} calculator</p>
          <h3 className="mt-1 text-xl font-bold text-white">Estimate your jewellery cost</h3>
        </div>
        <span className="rounded-full border border-emerald-700/70 bg-emerald-950 px-3 py-1 text-xs font-medium text-emerald-300">
          Includes making charges & GST
        </span>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {metal === "gold" && (
          <label className="block text-sm font-medium text-slate-300">
            Purity
            <select value={purity} onChange={(e) => setPurity(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-3 text-white">
              <option>24K</option><option>22K</option><option>18K</option>
            </select>
          </label>
        )}
        <label className="block text-sm font-medium text-slate-300">
          {label} rate per gram (₹)
          <input inputMode="decimal" type="number" min="0" value={rate} onChange={(e) => setRate(e.target.value)} placeholder={metal === "gold" ? "Enter selected purity rate" : "Enter current silver rate"} className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-3 text-white placeholder:text-slate-500" />
        </label>
        <label className="block text-sm font-medium text-slate-300">
          Weight (grams)
          <input inputMode="decimal" type="number" min="0" value={weight} onChange={(e) => setWeight(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-3 text-white" />
        </label>
        <label className="block text-sm font-medium text-slate-300">
          Making charges (%)
          <input inputMode="decimal" type="number" min="0" value={making} onChange={(e) => setMaking(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-3 text-white" />
        </label>
        <label className="block text-sm font-medium text-slate-300">
          GST
          <select value={gst} onChange={(e) => setGst(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-3 text-white">
            <option value="0">No GST (0%)</option><option value="3">3%</option><option value="5">5%</option><option value="18">18%</option>
          </select>
        </label>
      </div>

      {metal === "gold" && <p className="mt-3 text-xs text-slate-400">Selected purity: {purity}. Enter the current rate for {purity} gold per gram.</p>}
      <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_0.9fr]">
        <div className="divide-y divide-slate-700 rounded-xl border border-slate-700">
          <div className="flex justify-between gap-3 px-4 py-3 text-sm"><span className="text-slate-400">Base value</span><strong className="text-slate-100">{inr(calc.base)}</strong></div>
          <div className="flex justify-between gap-3 px-4 py-3 text-sm"><span className="text-slate-400">Making charges</span><strong className="text-slate-100">{inr(calc.makingAmount)}</strong></div>
          <div className="flex justify-between gap-3 px-4 py-3 text-sm"><span className="text-slate-400">GST ({gst}%)</span><strong className="text-slate-100">{inr(calc.gstAmount)}</strong></div>
        </div>
        <div className="flex flex-col justify-center rounded-xl border border-emerald-800 bg-emerald-950/60 p-5">
          <p className="text-sm font-medium text-emerald-200">Estimated total amount</p>
          <p className="mt-2 text-3xl font-bold text-emerald-400">{inr(calc.total)}</p>
          <p className="mt-2 text-xs leading-5 text-slate-400">Estimate only. Enter a current local rate. Jeweller pricing, taxes and charges may vary.</p>
        </div>
      </div>
    </article>
  );
}

export function GoldSilverHomeSection() {
  const [active, setActive] = useState<Metal>("gold");
  return (
    <section id="gold-silver" className="bg-slate-950 py-14 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-400">Gold & Silver Tools</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Gold & Silver Rate Calculator</h2>
          <p className="mt-4 text-slate-400">Estimate jewellery costs with weight, making charges and GST in one place.</p>
        </div>
        <div className="mt-8 flex justify-center gap-3" role="tablist" aria-label="Choose metal">
          <button type="button" role="tab" aria-selected={active === "gold"} onClick={() => setActive("gold")} className={`rounded-xl px-7 py-3 text-sm font-bold transition ${active === "gold" ? "bg-emerald-500 text-slate-950" : "border border-slate-700 bg-slate-900 text-slate-300 hover:border-emerald-500"}`}>Gold</button>
          <button type="button" role="tab" aria-selected={active === "silver"} onClick={() => setActive("silver")} className={`rounded-xl px-7 py-3 text-sm font-bold transition ${active === "silver" ? "bg-emerald-500 text-slate-950" : "border border-slate-700 bg-slate-900 text-slate-300 hover:border-emerald-500"}`}>Silver</button>
        </div>
        <div className="mx-auto mt-6 max-w-4xl">
          <div id={active === "gold" ? "gold-calculator" : "silver-calculator"}><MetalCalculator key={active} metal={active} /></div>
          <p className="mt-4 text-center text-xs text-slate-500">Rates are not fetched automatically in this version; enter the current rate provided by your local jeweller.</p>
        </div>
      </div>
    </section>
  );
}
