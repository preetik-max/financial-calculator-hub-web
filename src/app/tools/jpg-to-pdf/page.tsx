import type { Metadata } from "next";
import { JpgToPdfTool } from "@/components/tools/jpg-to-pdf";

export const metadata: Metadata = {
  title: "JPG to PDF Converter Online",
  description: "Combine images into a PDF using a browser-based workflow. Arrange pages and choose paper size.",
};

export default function JpgToPdfPage() {
  return <JpgToPdfTool />;
}
