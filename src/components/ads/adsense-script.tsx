import Script from "next/script";

const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

export function AdsenseScript() {
  if (!adsenseClientId) {
    return null;
  }

  return (
    <Script
      async
      strategy="afterInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
      crossOrigin="anonymous"
    />
  );
}
