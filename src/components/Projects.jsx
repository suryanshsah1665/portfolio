import { motion } from "framer-motion";
import { Github, ExternalLink, ChevronRight } from "lucide-react";
import { Section, Tag } from "./Ui.jsx";
import { featured, others } from "../data/site.js";

function InvoiceVisual() {
  return (
    <div className="mx-auto w-56 rotate-[-3deg] rounded-lg bg-slate-100 p-4 shadow-2xl" aria-hidden="true">
      <div className="flex items-center justify-between"><div className="h-2.5 w-14 rounded bg-slate-800" /><div className="rounded bg-azure px-1.5 py-0.5 text-[10px] font-semibold text-white">PDF</div></div>
      <div className="mt-4 space-y-1.5"><div className="h-1.5 w-24 rounded bg-slate-300" /><div className="h-1.5 w-16 rounded bg-slate-300" /></div>
      <div className="mt-5 space-y-2.5">{[40, 32, 36].map((w, i) => (
        <div key={i} className="flex justify-between"><div className="h-1.5 rounded bg-slate-300" style={{ width: `${w}%` }} /><div className="h-1.5 w-8 rounded bg-slate-400" /></div>))}</div>
      <div className="mt-5 flex justify-end border-t border-slate-300 pt-3"><div className="h-2.5 w-16 rounded bg-slate-800" /></div>
    </div>
  );
}

function FlowVisual({ steps, caption }) {
  return (
    <figure aria-label={caption}>
      <ol className="mx-auto flex max-w-xs flex-col items-stretch gap-2">
        {steps.map((s, i) => (
          <li key={s} className="flex flex-col items-center gap-2">
            <div className={`w-full rounded-lg border px-4 py-2.5 text-center font-mono text-xs ${i === steps.length - 1 ? "border-azure/50 bg-azure/10 text-azure" : "border-line bg-ink/60 text-slate-300"}`}>{s}</div>
            {i < steps.length - 1 && <ChevronRight size={14} className="rotate-90 text-mute" aria-hidden="true" />}
          </li>
        ))}
      </ol>
      <figcaption className="mt-4 text-center text-xs text-mute">{caption}</figcaption>
    </figure>
  );
}

const btn = "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors";

function Featured({ p, flip }) {
  return (
    <motion.article whileHover={{ y: -3 }} transition={{ duration: 0.2 }} className="grid overflow-hidden rounded-2xl border border-line bg-panel/70 lg:grid-cols-[0.8fr_1.2fr]">
      <div className={`flex items-center justify-center bg-gradient-to-br from-azure/15 via-transparent to-violet/15 p-8 ${flip ? "lg:order-2" : ""}`}>
        {p.visual === "invoice" ? <InvoiceVisual /> : <FlowVisual steps={p.steps} caption={p.caption} />}
      </div>
      <div className="p-6 sm:p-8">
        <h3 className="font-display text-2xl font-semibold text-white">{p.name}</h3>
        <p className="mt-3 text-slate-300">{p.desc}</p>
        <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-mute marker:text-line">{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
        <div className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
        <p className="mt-5 text-sm text-mute">{p.note}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={p.repo} target="_blank" rel="noreferrer" className={`${btn} bg-white text-ink hover:bg-azure`}><Github size={16} /> View Source</a>
          {p.live && <a href={p.live} target="_blank" rel="noreferrer" className={`${btn} border border-line text-white hover:border-azure/60`}><ExternalLink size={16} /> Live demo</a>}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Featured projects" intro="Descriptions are based on what each repository actually implements.">
      <div className="space-y-6">{featured.map((p, i) => <Featured key={p.id} p={p} flip={i % 2 === 1} />)}</div>
      <h3 className="mt-16 font-display text-xl font-medium text-white">Other projects</h3>
      <p className="mt-2 text-sm text-mute">Static websites built with HTML, CSS, and JavaScript.</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {others.map((o) => (
          <div key={o.name} className="flex items-center justify-between rounded-xl border border-line bg-panel/60 p-5">
            <span className="font-display text-lg text-white">{o.name}</span>
            <div className="flex gap-2">
              <a href={o.repo} target="_blank" rel="noreferrer" className={`${btn} border border-line text-slate-200 hover:border-azure/60`}><Github size={15} /> Source</a>
              {o.live && <a href={o.live} target="_blank" rel="noreferrer" className={`${btn} bg-azure text-ink hover:bg-white`}><ExternalLink size={15} /> Live site</a>}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
