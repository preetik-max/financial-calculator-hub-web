"use client";

import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setMobileOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
            F
          </span>

          <div className="leading-tight">
            <div className="text-sm font-bold text-slate-950">
              Finora Labs
            </div>
            <div className="text-[11px] text-slate-500">
              Financial Calculator Hub
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <Link
            href="/calculators"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            Calculators
          </Link>

          <Link
            href="/financial-products"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            Financial Products
          </Link>

          <Link
            href="/learn"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            Learn
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            About
          </Link>

          <Link
            href="/search"
            aria-label="Search"
            className="text-slate-500 transition hover:text-slate-950"
          >
            <Search size={19} />
          </Link>

          <Link
            href="#app"
            className="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Download App
          </Link>
        </nav>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="rounded-lg p-2 text-slate-700 md:hidden"
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            <Link
              href="/calculators"
              className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700"
              onClick={() => setMobileOpen(false)}
            >
              Calculators
            </Link>

            <Link
              href="/financial-products"
              className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700"
              onClick={() => setMobileOpen(false)}
            >
              Financial Products
            </Link>

            <Link
              href="/learn"
              className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700"
              onClick={() => setMobileOpen(false)}
            >
              Learn
            </Link>

            <Link
              href="/about"
              className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>

            <Link
              href="/search"
              className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700"
              onClick={() => setMobileOpen(false)}
            >
              Search
            </Link>

            <Link
              href="#app"
              className="mt-4 rounded-xl bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Download App
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
