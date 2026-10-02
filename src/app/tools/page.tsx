import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Crop, FileImage, FileSignature, Image, LockKeyholeOpen, ScanLine, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/common/container";

export const metadata: Metadata = {
  title: "Free PDF & Image Tools",
  description: "Use simple browser-based image tools and explore PDF utilities from Finora Labs.",
};

const tools = [
  { title: "JPG to PDF", description: "Turn one or more images into a shareable PDF document.", href: "/tools/jpg-to-pdf", icon: FileImage, tag: "PDF tool", color: "bg-rose-50 text-rose-600", ready: false },
  { title: "Resize Image", description: "Change image dimensions while keeping the original proportions.", href: "/tools/resize-image", icon: ScanLine, tag: "Image tool", color: "bg-blue-50 text-blue-600", ready: true },
  { title: "Crop Image", description: "Crop an image to a useful shape or custom dimensions.", href: "/tools/crop-image", icon: Crop, tag: "Image tool", color: "bg-violet-50 text-violet-600", ready: true },
  { title: "Sign PDF", description: "Add a handwritten-style signature to a PDF document.", href: "/tools/sign-pdf", icon: FileSignature, tag: "PDF tool", color: "bg-amber-50 text-amber-700", ready: false },
  { title: "Unlock PDF", description: "Remove supported restrictions from a PDF you are authorized to edit.", href: "/tools/unlock-pdf", icon: LockKeyholeOpen, tag: "PDF tool", color: "bg-emerald-50 text-emerald-700", ready: false },
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl py-16 text-center sm:py-20">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white"><Sparkles size={26} /></div>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-green-700">Finora Labs · Free utilities</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">PDF & Image Tools</h1>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">Everyday file tasks, made simple. Choose a tool to get started.</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2"><ShieldCheck size={16} className="text-green-600" /> Image editing runs in your browser</span>
              <span className="inline-flex items-center gap-2"><Image size={16} /> No account required</span>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-12 sm:py-16">
        <Container>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="text-sm font-semibold text-green-700">TOOLBOX</p><h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">What would you like to do?</h2></div>
            <p className="text-sm text-slate-500">More tools will be added in stages.</p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return <Link key={tool.href} href={tool.href} className="group flex min-h-56 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-600">
                <div className="flex items-start justify-between"><span className={`flex h-12 w-12 items-center justify-center rounded-xl ${tool.color}`}><Icon size={23} /></span><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{tool.tag}</span></div>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">{tool.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{tool.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-950">{tool.ready ? "Open tool" : "View tool"} <ArrowRight size={16} className="transition group-hover:translate-x-1" /></span>
              </Link>;
            })}
          </div>
          <div className="mt-10 rounded-2xl border border-green-100 bg-green-50/70 p-5 sm:flex sm:items-center sm:justify-between sm:p-6">
            <div><h3 className="font-semibold text-slate-950">Built for everyday tasks</h3><p className="mt-1 text-sm leading-6 text-slate-600">For privacy, image files are processed locally in your browser in the image tools.</p></div>
            <Link href="/calculators" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-green-800 sm:mt-0">Explore calculators <ArrowRight size={16} /></Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
