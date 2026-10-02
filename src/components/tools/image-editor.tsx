"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Download, ImagePlus, LockKeyhole, RefreshCw, ScanLine, Crop } from "lucide-react";

type ImageEditorProps = { mode: "resize" | "crop" };

export function ImageEditor({ mode }: ImageEditorProps) {
  const [source, setSource] = useState<string | null>(null);
  const [fileName, setFileName] = useState("finora-image");
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);
  const [keepRatio, setKeepRatio] = useState(true);
  const [ratio, setRatio] = useState(4 / 3);
  const [format, setFormat] = useState<"image/jpeg" | "image/png" | "image/webp">("image/jpeg");
  const [quality, setQuality] = useState(90);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => () => { if (source) URL.revokeObjectURL(source); }, [source]);

  const title = mode === "resize" ? "Resize Image" : "Crop Image";
  const Icon = mode === "resize" ? ScanLine : Crop;

  function loadFile(file?: File) {
    setError("");
    if (!file) return;
    if (!file.type.startsWith("image/")) { setError("Please choose a valid image file."); return; }
    if (file.size > 20 * 1024 * 1024) { setError("Please choose an image smaller than 20 MB."); return; }
    if (source) URL.revokeObjectURL(source);
    const url = URL.createObjectURL(file);
    const image = new window.Image();
    image.onload = () => {
      setSource(url);
      setFileName(file.name.replace(/\.[^.]+$/, "") || "finora-image");
      setWidth(image.naturalWidth);
      setHeight(image.naturalHeight);
      setRatio(image.naturalWidth / image.naturalHeight);
    };
    image.onerror = () => { URL.revokeObjectURL(url); setError("This image could not be opened. Try another file."); };
    image.src = url;
  }

  function changeWidth(value: number) {
    const next = Math.max(1, Math.min(12000, value || 1));
    setWidth(next);
    if (keepRatio) setHeight(Math.max(1, Math.round(next / ratio)));
  }
  function changeHeight(value: number) {
    const next = Math.max(1, Math.min(12000, value || 1));
    setHeight(next);
    if (keepRatio) setWidth(Math.max(1, Math.round(next * ratio)));
  }

  async function exportImage() {
    const image = imageRef.current;
    if (!image || !source) return;
    setBusy(true); setError("");
    try {
      const canvas = document.createElement("canvas");
      if (mode === "resize") {
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Your browser could not start image editing.");
        ctx.drawImage(image, 0, 0, width, height);
      } else {
        const cropWidth = Math.min(image.naturalWidth, width);
        const cropHeight = Math.min(image.naturalHeight, height);
        canvas.width = cropWidth; canvas.height = cropHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Your browser could not start image editing.");
        const sx = Math.max(0, Math.floor((image.naturalWidth - cropWidth) / 2));
        const sy = Math.max(0, Math.floor((image.naturalHeight - cropHeight) / 2));
        ctx.drawImage(image, sx, sy, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);
      }
      const blob = await new Promise<Blob>((resolve, reject) => canvas.toBlob((result) => result ? resolve(result) : reject(new Error("Could not export image. Try a different format.")), format, quality / 100));
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url; anchor.download = `${fileName}-${mode}.${format === "image/jpeg" ? "jpg" : format === "image/png" ? "png" : "webp"}`;
      anchor.click(); URL.revokeObjectURL(url);
    } catch (e) { setError(e instanceof Error ? e.message : "Something went wrong while exporting."); }
    finally { setBusy(false); }
  }

  return <main className="min-h-screen bg-slate-50">
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Link href="/tools" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-950"><ArrowLeft size={16} /> All PDF & Image Tools</Link>
        <div className="mt-6 flex items-center gap-4"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700"><Icon size={24} /></span><div><p className="text-sm font-semibold text-green-700">FINORA LABS · IMAGE TOOLS</p><h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950">{title}</h1></div></div>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">{mode === "resize" ? "Set the output dimensions and download a resized image. Keep proportions locked to avoid stretching." : "Create a centered crop from your image by choosing the output width and height. Preview before downloading."}</p>
      </div>
    </section>
    <section className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-8">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        {!source ? <button type="button" onClick={() => inputRef.current?.click()} className="flex min-h-80 w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-5 text-center transition hover:border-green-500 hover:bg-green-50/50 focus:outline-none focus:ring-2 focus:ring-green-600">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm"><ImagePlus size={26} /></span><span className="mt-4 text-base font-semibold text-slate-950">Choose an image to get started</span><span className="mt-2 text-sm text-slate-500">JPG, PNG, WebP and other browser-supported image formats · Max 20 MB</span><span className="mt-5 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white">Upload image</span>
        </button> : <div className="rounded-xl bg-slate-100 p-3 sm:p-5"><div className="flex items-center justify-between gap-3 pb-3"><p className="truncate text-sm font-medium text-slate-700">{fileName}</p><button onClick={() => { if (source) URL.revokeObjectURL(source); setSource(null); }} className="shrink-0 text-sm font-semibold text-slate-600 hover:text-slate-950">Change image</button></div><div className="flex min-h-64 items-center justify-center overflow-hidden rounded-lg bg-[linear-gradient(45deg,#e2e8f0_25%,transparent_25%),linear-gradient(-45deg,#e2e8f0_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#e2e8f0_75%),linear-gradient(-45deg,transparent_75%,#e2e8f0_75%)] bg-[length:20px_20px] bg-[position:0_0,0_10px,10px_-10px,-10px_0px]"><img ref={imageRef} src={source} alt="Uploaded image preview" className="max-h-[520px] max-w-full object-contain" /></div><p className="mt-3 text-center text-xs text-slate-500">Original image preview · Your image stays in this browser</p></div>}
        <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => loadFile(e.target.files?.[0])} />
        {error && <p role="alert" className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
      </div>
      <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-lg font-semibold text-slate-950">Output settings</h2><p className="mt-1 text-sm text-slate-500">Adjust the result before downloading.</p>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <label className="text-sm font-medium text-slate-700">Width (px)<input type="number" min="1" max="12000" value={width} onChange={(e) => changeWidth(Number(e.target.value))} className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-950 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100" /></label>
          <label className="text-sm font-medium text-slate-700">Height (px)<input type="number" min="1" max="12000" value={height} onChange={(e) => changeHeight(Number(e.target.value))} className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-950 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100" /></label>
        </div>
        {mode === "resize" ? <label className="mt-4 flex cursor-pointer items-center gap-3 rounded-lg bg-slate-50 p-3 text-sm text-slate-700"><input type="checkbox" checked={keepRatio} onChange={(e) => setKeepRatio(e.target.checked)} className="h-4 w-4 accent-green-700" /> Keep aspect ratio</label> : <p className="mt-3 rounded-lg bg-amber-50 p-3 text-xs leading-5 text-amber-800">Crop currently uses the center of the image. Drag-to-select cropping can be added as a follow-up.</p>}
        <label className="mt-5 block text-sm font-medium text-slate-700">Output format<select value={format} onChange={(e) => setFormat(e.target.value as typeof format)} className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-950 outline-none focus:border-green-600"><option value="image/jpeg">JPG</option><option value="image/png">PNG</option><option value="image/webp">WebP</option></select></label>
        {format !== "image/png" && <label className="mt-5 block text-sm font-medium text-slate-700">Image quality <span className="float-right text-slate-500">{quality}%</span><input type="range" min="40" max="100" value={quality} onChange={(e) => setQuality(Number(e.target.value))} className="mt-3 w-full accent-green-700" /></label>}
        <button type="button" disabled={!source || busy} onClick={exportImage} className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300"><Download size={17} />{busy ? "Preparing image…" : "Download image"}</button>
        <button type="button" onClick={() => { setWidth(800); setHeight(Math.max(1, Math.round(800 / ratio))); setKeepRatio(true); setFormat("image/jpeg"); setQuality(90); }} className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"><RefreshCw size={15} /> Reset settings</button>
        <div className="mt-5 flex gap-2 rounded-lg bg-green-50 p-3 text-xs leading-5 text-green-900"><LockKeyhole size={16} className="mt-0.5 shrink-0" /><p>Image editing runs locally in your browser. Your image is not uploaded to a Finora server.</p></div>
      </aside>
    </section>
  </main>;
}
