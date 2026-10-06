import Link from "next/link";
import { ArrowLeft, ArrowRight, FileLock2, ShieldCheck } from "lucide-react";

export function ToolComingSoon({ title, description, note }: { title: string; description: string; note: string }) {
  return <main className="min-h-[65vh] bg-slate-50"><section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
    <Link href="/tools" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-950"><ArrowLeft size={16}/> All PDF & Image Tools</Link>
    <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-700"><FileLock2 size={27}/></span>
      <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-green-700">Finora Labs · PDF tools</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">{title}</h1>
      <p className="mt-4 leading-7 text-slate-600">{description}</p>
      <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">{note}</div>
      <div className="mt-6 flex gap-3 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600"><ShieldCheck size={20} className="mt-0.5 shrink-0 text-green-700"/><p>Privacy and file security matter. These PDF features will be enabled only after their document-processing flow and error handling are tested.</p></div>
      <Link href="/tools" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">Explore available tools <ArrowRight size={16}/></Link>
    </div>
  </section></main>;
}
