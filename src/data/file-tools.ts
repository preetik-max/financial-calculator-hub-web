export type FileTool = {
  slug: string;
  title: string;
  description: string;
  category: "PDF" | "Image";
  badge: string;
};

export const fileTools: FileTool[] = [
  { slug: "jpg-to-pdf", title: "JPG to PDF", description: "Turn one or more images into a downloadable PDF.", category: "Image", badge: "Popular" },
  { slug: "merge-pdf", title: "Merge PDF", description: "Combine multiple PDF files into one document.", category: "PDF", badge: "Popular" },
  { slug: "split-pdf", title: "Split PDF", description: "Extract a page range into a new PDF file.", category: "PDF", badge: "PDF" },
  { slug: "rotate-pdf", title: "Rotate PDF", description: "Rotate every page by 90, 180, or 270 degrees.", category: "PDF", badge: "PDF" },
  { slug: "sign-pdf", title: "Sign PDF", description: "Place an uploaded signature image onto a PDF page.", category: "PDF", badge: "PDF" },
  { slug: "resize-image", title: "Resize Image", description: "Resize an image to custom pixel dimensions.", category: "Image", badge: "Image" },
  { slug: "crop-image", title: "Crop Image", description: "Crop an image to a chosen aspect ratio.", category: "Image", badge: "Image" },
  { slug: "convert-image", title: "Convert Image", description: "Convert images to JPG, PNG, or WebP.", category: "Image", badge: "Image" },
];
