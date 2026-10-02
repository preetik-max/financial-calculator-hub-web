"use client";

import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/calculators", label: "Calculators" },
  { href: "/tools", label: "PDF & Image Tools" },
  { href: "/financial-products", label: "Financial Products" },
  { href: "/learn", label: "Learn" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">F</span>
          <div className="leading-tight">
            <div className="text-sm font-bold text-slate-950">Finora Labs</div>
            <div className="text-[11px] text-slate-500">Financial Calculator Hub</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {links.map((link) => <Link key={link.href} href={link.href} className={`text-sm font-medium transition hover:text-slate-950 ${link.href === "/tools" ? "rounded-lg bg-green-50 px-3 py-2 text-green-800" : "text-slate-600"}`}>{link.label}</Link>)}
          <Link href="/search" aria-label="Search" className="text-slate-500 transition hover:text-slate-950"><Search size={19} /></Link>
          <Link href="#app" className="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">Download App</Link>
        </nav>

        <button type="button" aria-label={mobileOpen ? "Close menu" : "Open menu"} className="rounded-lg p-2 text-slate-700 lg:hidden" onClick={() => setMobileOpen((value) => !value)}>
          {mobileOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {mobileOpen && <div className="border-t border-slate-200 bg-white lg:hidden"><nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
        {links.map((link) => <Link key={link.href} href={link.href} className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700" onClick={() => setMobileOpen(false)}>{link.label}</Link>)}
        <Link href="/search" className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700" onClick={() => setMobileOpen(false)}>Search</Link>
        <Link href="#app" className="mt-4 rounded-xl bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white" onClick={() => setMobileOpen(false)}>Download App</Link>
      </nav></div>}
    </header>
  );
}
