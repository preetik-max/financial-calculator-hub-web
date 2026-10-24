"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

type Metal = "gold" | "silver";
type Purity = "24K" | "22K" | "18K";
type MetalRates = {
  currency: "INR";
  unit: "gram";
  fetchedAt: string;
  gold: Record<Purity, number>;
  silver: number;
  source: string;
};

const inr = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);

function MetalCalculator({ metal, rates, updatedAt, onRefresh, loading, apiError }: {
  metal: Metal;
  rates: MetalRates | null;
  updatedAt: string;
  onRefresh: () => void;
  loading: boolean;
  apiError: string;
}) {
  const [purity, setPurity] = useState<Purity>("22K");
  const [mode, setMode] = useState<"auto" | "manual">("auto");
  const [manualRate, setManualRate] = useState("");
  const [weight, setWeight] = useState("10");
  const [making, setMaking] = useState("12");
  const [gst, setGst] = useState("3");

  const automaticRate = metal === "gold" ? rates?.gold[purity] : rates?.silver;
  const selectedRate = mode === "auto" && automaticRate ? automaticRate : Math.max(0, Number(manualRate) || 0);
  const rateMissing = !(selectedRate > 0);

  useEffect(() => {
    if (automaticRate && mode === "auto") setManualRate(String(automaticRate));
  }, [automaticRate, mode]);

  const calc = useMemo(() => {
    const base = selectedRate * Math.max(0, Number(weight) || 0);
    const makingAmount = base * Math.max(0, Number(making) || 0) / 100;
    const gstAmount = (base + makingAmount) * Math.max(0, Number(gst) || 0) / 100;
    return { base, makingAmount, gstAmount, total: base + makingAmount + gstAmount };
  }, [selectedRate, weight, making, gst]);

  const label = metal === "gold" ? "Gold" : "Silver";
  const fmtTime = (value: string) => {
    if (!value) return "Not updated yet";
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? value : date.toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });
  };

  return (
    <article className="rounded-2xl border border-slate-700 bg-[#11171b] p-4 shadow-sm sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">{label} rates in India</p>
          <h3 className="mt-1 text-xl font-bold text-white">Today’s {label} Rate</h3>
          <p className="mt-1 text-xs text-slate-400">Per gram · {rates?.source ?? "GoldAPI.io"}</p>
        </div>
        <button type="button" onClick={onRefresh} disabled={loading} className="rounded-lg border border-slate-600 px-3 py-2 text-sm font-semibold text-slate-200 hover:border-emerald-500 disabled:opacity-50">
          {loading ? "Updating…" : "↻ Refresh rates"}
        </button>
      </div>

      {metal === "gold" && rates && (
        <div className="mt-5 grid grid-cols-3 gap-2">
          {(["24K", "22K", "18K"] as Purity[]).map((p) => (
            <button key={p} type="button" onClick={() => setPurity(p)} className={`rounded-xl border p-3 text-left transition ${purity === p ? "border-emerald-500 bg-emerald-950/70" : "border-slate-700 bg-slate-800/70 hover:border-slate-500"}`}>
              <span className="block text-xs text-slate-400">{p} Gold / g</span>
              <strong className="mt-1 block text-base text-white sm:text-lg">{inr(rates.gold[p])}</strong>
            </button>
          ))}
        </div>
      )}

      {metal === "silver" && rates && (
        <div className="mt-5 rounded-xl border border-emerald-800 bg-emerald-950/50 p-4">
          <span className="text-sm text-slate-300">Silver / gram</span>
          <p className="mt-1 text-2xl font-bold text-emerald-400">{inr(rates.silver)}</p>
          <p className="text-xs text-slate-400">{inr(rates.silver * 1000)} per kilogram</p>
        </div>
      )}

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-700 pt-4">
        <div>
          <h4 className="font-semibold text-white">Jewellery cost calculator</h4>
          <p className="mt-1 text-xs text-slate-400">Rate updated: {fmtTime(updatedAt)}</p>
        </div>
        <div className="flex rounded-lg border border-slate-700 p-1" aria-label="Rate source">
          <button type="button" onClick={() => setMode("auto")} className={`rounded-md px-3 py-2 text-xs font-semibold ${mode === "auto" ? "bg-emerald-500 text-slate-950" : "text-slate-300"}`}>Automatic</button>
          <button type="button" onClick={() => setMode("manual")} className={`rounded-md px-3 py-2 text-xs font-semibold ${mode === "manual" ? "bg-emerald-500 text-slate-950" : "text-slate-300"}`}>Manual</button>
        </div>
      </div>

      {apiError && <p role="status" className="mt-3 rounded-lg border border-amber-800 bg-amber-950/40 p-3 text-sm text-amber-200">{apiError} Switch to Manual to enter a rate.</p>}

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metal === "gold" && (
          <label className="block text-sm font-medium text-slate-300">
            Purity
            <select value={purity} onChange={(e) => setPurity(e.target.value as Purity)} className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-3 text-white">
              <option value="24K">24K</option><option value="22K">22K</option><option value="18K">18K</option>
            </select>
          </label>
        )}
        <label className="block text-sm font-medium text-slate-300">
          Rate per gram (₹)
          <input inputMode="decimal" type="number" min="0" value={mode === "auto" && automaticRate ? automaticRate : manualRate} onChange={(e) => { setMode("manual"); setManualRate(e.target.value); }} placeholder="Enter rate" className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-3 text-white placeholder:text-slate-500" />
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
            <option value="0">0%</option><option value="3">3%</option><option value="5">5%</option><option value="18">18%</option>
          </select>
        </label>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_0.9fr]">
        <div className="divide-y divide-slate-700 rounded-xl border border-slate-700">
          <div className="flex justify-between gap-3 px-4 py-3 text-sm"><span className="text-slate-400">Base value</span><strong className="text-slate-100">{inr(calc.base)}</strong></div>
          <div className="flex justify-between gap-3 px-4 py-3 text-sm"><span className="text-slate-400">Making charges</span><strong className="text-slate-100">{inr(calc.makingAmount)}</strong></div>
          <div className="flex justify-between gap-3 px-4 py-3 text-sm"><span className="text-slate-400">GST ({gst}%)</span><strong className="text-slate-100">{inr(calc.gstAmount)}</strong></div>
        </div>
        <div className="flex flex-col justify-center rounded-xl border border-emerald-800 bg-emerald-950/60 p-5">
          <p className="text-sm font-medium text-emerald-200">Estimated total amount</p>
          <p className="mt-2 text-3xl font-bold text-emerald-400">{inr(calc.total)}</p>
          {rateMissing && <p className="mt-2 text-xs text-amber-300">Enter a rate or wait for automatic rates to load.</p>}
          <p className="mt-2 text-xs leading-5 text-slate-400">Estimate only. Spot prices differ from local jeweller prices. GST and making charges may vary.</p>
        </div>
      </div>
    </article>
  );
}

export function GoldSilverHomeSection() {
  const [active, setActive] = useState<Metal>("gold");
  const [rates, setRates] = useState<MetalRates | null>(null);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");

  const refreshRates = useCallback(async () => {
    setLoading(true);
    setApiError("");
    try {
      const response = await fetch("/api/metals", { cache: "no-store" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not fetch metal rates.");
      setRates(data as MetalRates);
      setUpdatedAt(data.fetchedAt || new Date().toISOString());
    } catch (error) {
      setApiError(error instanceof Error ? error.message : "Unable to fetch prices.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { void refreshRates(); }, [refreshRates]);

  return (
    <section id="gold-silver" className="bg-slate-950 py-14 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-400">Finora Labs · Gold & Silver Tools</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Gold Rate Today in India</h2>
          <p className="mt-4 text-slate-400">Check reference rates and estimate jewellery costs with weight, making charges and GST.</p>
        </div>
        <div className="mx-auto mt-8 max-w-5xl">
          <div className="mb-4 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Choose metal">
            <button type="button" role="tab" aria-selected={active === "gold"} onClick={() => setActive("gold")} className={`rounded-xl px-7 py-3 text-sm font-bold transition ${active === "gold" ? "bg-emerald-500 text-slate-950" : "border border-slate-700 bg-slate-900 text-slate-300 hover:border-emerald-500"}`}>Gold</button>
            <button type="button" role="tab" aria-selected={active === "silver"} onClick={() => setActive("silver")} className={`rounded-xl px-7 py-3 text-sm font-bold transition ${active === "silver" ? "bg-emerald-500 text-slate-950" : "border border-slate-700 bg-slate-900 text-slate-300 hover:border-emerald-500"}`}>Silver</button>
          </div>
          <MetalCalculator key={active} metal={active} rates={rates} updatedAt={updatedAt} onRefresh={() => void refreshRates()} loading={loading} apiError={apiError} />
          <p className="mt-4 text-center text-xs text-slate-500">Automatic rates require a valid server-side GoldAPI.io key. Manual entry is always available.</p>
        </div>
      </div>
    </section>
  );
}
