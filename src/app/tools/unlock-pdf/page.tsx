import type { Metadata } from "next";
import { ToolComingSoon } from "@/components/tools/tool-coming-soon";

export const metadata: Metadata = {
  title: "Unlock PDF",
  description: "Learn about supported PDF permissions and password removal with Finora Labs.",
};

export default function UnlockPdfPage() {
  return <ToolComingSoon title="Unlock PDF" description="A PDF permissions utility for files you own or are authorized to modify, with clear handling of password-protected documents." note="This tool is not active yet. Encrypted PDFs may require the correct password; it will not bypass encryption or remove protections without authorization." />;
}
