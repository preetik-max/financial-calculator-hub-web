import type { Metadata } from "next";

import { AdsenseScript } from "@/components/ads/adsense-script";
import { SiteShell } from "@/components/layout/site-shell";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Financial Calculator Hub | Finora Labs",
    template: "%s | Financial Calculator Hub",
  },
  description:
    "Free financial calculators for SIP, EMI, FD, RD, CAGR, PPF, SWP, loans, GST, tax and more from Finora Labs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AdsenseScript />

        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
