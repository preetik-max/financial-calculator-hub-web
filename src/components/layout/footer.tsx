import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
                F
              </span>
              <div>
                <div className="font-bold text-slate-950">Finora Labs</div>
                <div className="text-xs text-slate-500">
                  Simple Tools. Smarter Financial Decisions.
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-6 text-slate-500">
              Financial Calculator Hub provides practical calculators and
              educational resources to help users understand everyday
              financial decisions.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-950">
              Calculators
            </h3>
            <div className="mt-4 space-y-3">
              <Link href="/calculators/sip" className="block text-sm text-slate-500 hover:text-slate-950">
                SIP Calculator
              </Link>
              <Link href="/calculators/emi" className="block text-sm text-slate-500 hover:text-slate-950">
                EMI Calculator
              </Link>
              <Link href="/calculators/fd" className="block text-sm text-slate-500 hover:text-slate-950">
                FD Calculator
              </Link>
              <Link href="/calculators" className="block text-sm font-medium text-green-600 hover:text-green-700">
                All Calculators →
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-950">
              Company & Policies
            </h3>
            <div className="mt-4 space-y-3">
              <Link href="/about" className="block text-sm text-slate-500 hover:text-slate-950">
                About Us
              </Link>
              <Link href="/contact" className="block text-sm text-slate-500 hover:text-slate-950">
                Contact
              </Link>
              <Link href="/privacy" className="block text-sm text-slate-500 hover:text-slate-950">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-sm text-slate-500 hover:text-slate-950">
                Terms
              </Link>
              <Link href="/disclaimer" className="block text-sm text-slate-500 hover:text-slate-950">
                Disclaimer
              </Link>
              <Link href="/affiliate-disclosure" className="block text-sm text-slate-500 hover:text-slate-950">
                Affiliate Disclosure
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-100 pt-6">
          <p className="text-xs leading-5 text-slate-500">
            © {new Date().getFullYear()} Finora Labs. All rights reserved.
            Financial calculators provide estimates for educational purposes
            and should not be treated as financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
