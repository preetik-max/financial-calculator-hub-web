import type { Metadata } from "next";
import { ImageEditor } from "@/components/tools/image-editor";

export const metadata: Metadata = {
  title: "Resize Image Online for Free",
  description: "Resize JPG, PNG and WebP images in your browser with control over dimensions and quality.",
};

export default function ResizeImagePage() {
  return <ImageEditor mode="resize" />;
}
