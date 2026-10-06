import type { Metadata } from "next";
import { ToolComingSoon } from "@/components/tools/tool-coming-soon";

export const metadata: Metadata = {
  title: "Sign PDF Online",
  description: "Information about adding a signature to a PDF with Finora Labs.",
};

export default function SignPdfPage() {
  return <ToolComingSoon title="Sign PDF" description="Prepare a PDF signing tool with drawn, typed, or uploaded signatures and controls for positioning a signature on a page." note="This tool is not active yet. The planned visual signature feature will not itself create a certificate-based digital signature or verify identity." />;
}
