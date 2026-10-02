"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowUp, ArrowDown, Download, FileImage, LockKeyhole, Plus, Printer, Trash2 } from "lucide-react";

type ImageItem = { id: string; name: string; url: string };

export function JpgToPdfTool() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [pageSize, setPageSize] = useState<"A4" | "Letter">("A4");
  const [orientation, setOrientation] = useState<"portrait" | "landscape">("portrait");
  const [fit, setFit] = useState<"contain" | "cover">("contain");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => () => images.forEach((image) => URL.revokeObjectURL(image.url)), [images]);

  function addFiles(files: FileList | null) {
    if (!files) return;
    const selected = Array.from(files);
    if (selected.some((file) => !file.type.startsWith("image/"))) { setError("Please select image files only."); return; }
    if (selected.some((file) => file.size > 20 * 1024 * 1024)) { setError("Each image must be smaller than 20 MB."); return; }
    if (images.length + selected.length > 30) { setError("You can add up to 30 images per document."); return; }
    setError("");
    setImages((current) => [...current, ...selected.map((file) => ({ id: crypto.randomUUID(), name: file.name, url: URL.createObjectURL(file) }))]);
  }

  function move(index: number, direction: -1 | 1) {
    setImages((current) => {
      const next = [...current]; const target = index + direction;
      if (target < 0 || target >= next.length) return current;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  }

  function printPdf() {
    if (!images.length) return;
    const printWindow = window.open("", "_blank");
    if (!printWindow) { setError("Your browser blocked the new window. Allow pop-ups for this site, then try again."); return; }
    const pages = images.map((item) => `<section class="page"><img src="${item.url}" alt="${item.name.replace(/[&<>"']/g, "")}" /></section>`).join("");
    printWindow.document.open();
    printWindow.document.write(`<!doctype html><html><head><title>Finora Images to PDF</title><style>
      @page { size: ${pageSize} ${orientation}; margin: 10mm; }
      * { box-sizing: border-box; } html, body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
      .page { width: 100%; height: calc(100vh - 20mm); display: flex; align-items: center; justify-content: center; break-after: page; page-break-after: always; overflow: hidden; }
      .page:last-child { break-after: auto; page-break-after: auto; }
      img { display: block; max-width: 100%; max-height: 100%; object-fit: ${fit}; }
      @media screen { body { background: #e2e8f0; padding: 24px; } .page { background: white; margin: 0 auto 24px; max-width: 900px; min-height: 80vh; padding: 24px; } }
    </style></head><body>${pages}<script>window.addEventListener('load', () => setTimeout(() => window.print(), 250));<\/script></body></html>`);
    printWindow.document.close();
  }

  return <main className="min-h-screen bg-slate-50">
    <section className="border-b border-slate-200 bg-white"><div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <Link href="/tools" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-950"><ArrowLeft size={16}/> All PDF & Image Tools</Link>
      <div className="mt-6 flex items-center gap-4"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600"><FileImage size={24}/></span><div><p className="text-sm font-semibold text-green-700">FINORA LABS · PDF TOOLS</p><h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950">JPG to PDF</h1></div></div>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">Combine images into a document. Arrange the order, choose page layout, then select “Save as PDF” in your browser’s print dialog.</p>
    </div></section>
    <section className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <input ref={inputRef} type="file" accept="image/*" multiple className="hidden" onChange={(e) => { addFiles(e.target.files); e.currentTarget.value = ""; }}/>
        <button type="button" onClick={() => inputRef.current?.click()} className="flex min-h-40 w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-5 text-center transition hover:border-green-500 hover:bg-green-50/40"><Plus size={28} className="text-slate-700"/><span className="mt-3 font-semibold text-slate-950">Add images</span><span className="mt-1 text-sm text-slate-500">Choose up to 30 images · 20 MB each</span></button>
        {error && <p role="alert" className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
        <div className="mt-6 flex items-center justify-between gap-3"><h2 className="font-semibold text-slate-950">Your pages <span className="text-slate-400">({images.length})</span></h2>{images.length > 0 && <button onClick={() => setImages([])} className="text-sm font-medium text-slate-500 hover:text-red-600">Remove all</button>}</div>
        {images.length === 0 ? <p className="py-12 text-center text-sm text-slate-500">Your selected images will appear here. Use the arrows to change their order.</p> : <div className="mt-4 space-y-3">{images.map((item, index) => <div key={item.id} className="flex items-center gap-3 rounded-xl border border-slate-200 p-3"><img src={item.url} alt="" className="h-16 w-16 rounded-lg bg-slate-100 object-contain"/><div className="min-w-0 flex-1"><p className="truncate text-sm font-medium text-slate-800">{item.name}</p><p className="text-xs text-slate-500">Page {index + 1}</p></div><div className="flex gap-1"><button aria-label="Move up" disabled={index === 0} onClick={() => move(index, -1)} className="rounded-md p-2 hover:bg-slate-100 disabled:opacity-30"><ArrowUp size={16}/></button><button aria-label="Move down" disabled={index === images.length - 1} onClick={() => move(index, 1)} className="rounded-md p-2 hover:bg-slate-100 disabled:opacity-30"><ArrowDown size={16}/></button><button aria-label="Remove image" onClick={() => setImages((current) => current.filter((image) => image.id !== item.id))} className="rounded-md p-2 text-slate-500 hover:bg-red-50 hover:text-red-600"><Trash2 size={16}/></button></div></div>)}</div>}
      </div>
      <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"><h2 className="text-lg font-semibold text-slate-950">PDF settings</h2>
        <label className="mt-5 block text-sm font-medium text-slate-700">Page size<select value={pageSize} onChange={(e) => setPageSize(e.target.value as typeof pageSize)} className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5"><option value="A4">A4</option><option value="Letter">US Letter</option></select></label>
        <label className="mt-4 block text-sm font-medium text-slate-700">Orientation<select value={orientation} onChange={(e) => setOrientation(e.target.value as typeof orientation)} className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5"><option value="portrait">Portrait</option><option value="landscape">Landscape</option></select></label>
        <label className="mt-4 block text-sm font-medium text-slate-700">Image fit<select value={fit} onChange={(e) => setFit(e.target.value as typeof fit)} className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5"><option value="contain">Fit entire image</option><option value="cover">Fill page (may crop)</option></select></label>
        <button disabled={!images.length} onClick={printPdf} className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3.5 text-sm font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300"><Printer size={17}/> Create PDF</button>
        <p className="mt-3 text-xs leading-5 text-slate-500">In the print dialog, select <strong>Save as PDF</strong> as the destination. The images are processed locally in your browser.</p>
        <div className="mt-5 flex gap-2 rounded-lg bg-green-50 p-3 text-xs leading-5 text-green-900"><LockKeyhole size={16} className="mt-0.5 shrink-0"/><p>Your images are not uploaded to a Finora server.</p></div>
      </aside>
    </section>
  </main>;
}
