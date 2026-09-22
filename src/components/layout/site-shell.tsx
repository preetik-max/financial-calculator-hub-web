import { AdBanner } from "@/components/ads/ad-banner";
import { WhatsAppFloat } from "@/components/common/whatsapp-float";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

interface SiteShellProps {
  children: React.ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Global top advertisement */}
      <AdBanner position="top" />

      <main className="flex-1">
        {children}
      </main>

      {/* Global bottom advertisement */}
      <AdBanner position="bottom" />

      <Footer />

      {/* Global WhatsApp lead button */}
      <WhatsAppFloat />
    </div>
  );
}
