import type { Metadata } from "next";
import { ImageEditor } from "@/components/tools/image-editor";

export const metadata: Metadata = {
  title: "Crop Image Online for Free",
  description: "Crop images in your browser and download the result as JPG, PNG or WebP.",
};

export default function CropImagePage() {
  return <ImageEditor mode="crop" />;
}
