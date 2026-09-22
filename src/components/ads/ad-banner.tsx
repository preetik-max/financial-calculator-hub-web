"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdPosition = "top" | "bottom" | "content";

interface AdBannerProps {
  position?: AdPosition;
  className?: string;
}

const adSlots: Record<AdPosition, string | undefined> = {
  top: process.env.NEXT_PUBLIC_ADSENSE_TOP_SLOT,
  bottom: process.env.NEXT_PUBLIC_ADSENSE_BOTTOM_SLOT,
  content: process.env.NEXT_PUBLIC_ADSENSE_CONTENT_SLOT,
};

export function AdBanner({
  position = "content",
  className = "",
}: AdBannerProps) {
  const adSlot = adSlots[position];

  useEffect(() => {
    if (!adSlot) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Ignore AdSense errors during development.
    }
  }, [adSlot]);

  /*
   * Development placeholder.
   *
   * This will disappear automatically once the real
   * AdSense slot IDs are configured.
   */
  if (!adSlot) {
    return (
      <section
        aria-label="Advertisement"
        className={`w-full bg-white ${className}`}
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex min-h-[90px] w-full items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              Advertisement
            </span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      aria-label="Advertisement"
      className={`w-full bg-white ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex min-h-[90px] items-center justify-center overflow-hidden">
          <ins
            className="adsbygoogle"
            style={{
              display: "block",
              width: "100%",
              minHeight: "90px",
            }}
            data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}
            data-ad-slot={adSlot}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
      </div>
    </section>
  );
}
