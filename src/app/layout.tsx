import type { Metadata } from "next";

import { AdsenseScript } from "@/components/ads/adsense-script";
import { SiteShell } from "@/components/layout/site-shell";

import "./globals.css";

const siteUrl = "https://financialcalculatorhubs.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Financial Calculator Hub | Finora Labs",
    template: "%s | Financial Calculator Hub",
  },
  description:
    "Free financial calculators for SIP, EMI, FD, RD, CAGR, PPF, SWP, loans, GST, tax and more from Finora Labs.",
  openGraph: {
    title: "Financial Calculator Hub | Finora Labs",
    description:
      "Free financial calculators for everyday financial planning from Finora Labs.",
    url: siteUrl,
    siteName: "Finora Labs",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <AdsenseScript />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
