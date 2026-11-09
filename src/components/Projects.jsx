import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Section, Tag } from "./Ui.jsx";
import { featured, others } from "../data/site.js";

function InvoiceVisual() {
  return (
    <div className="mx-auto w-56 rounded-lg bg-paper p-4 shadow-2xl" aria-hidden="true">
      <div className="flex items-center justify-between"><div className="h-2.5 w-14 rounded bg-slate-800" /><div className="rounded bg-accent px-1.5 py-0.5 text-[10px] font-semibold text-ink">PDF</div></div>
      <div className="mt-4 space-y-1.5"><div className="h-1.5 w-24 rounded bg-slate-300" /><div className="h-1.5 w-16 rounded bg-slate-300" /></div>
      <div className="mt-5 space-y-2.5">{[40, 32, 36].map((w, i) => (
        <div key={i} className="flex justify-between"><div className="h-1.5 rounded bg-slate-300" style={{ width: `${w}%` }} /><div className="h-1.5 w-8 rounded bg-slate-400" /></div>))}</div>
      <div className="mt-5 flex justify-end border-t border-slate-300 pt-3"><div className="h-2.5 w-16 rounded bg-slate-800" /></div>
    </div>
  );
}

function FlowVisual({ steps }) {
  return (
    <div className="mx-auto flex max-w-xs flex-col items-stretch gap-2">
      {steps.map((s, i) => (
        <div key={s} className={`w-full rounded-lg border px-4 py-2 text-center font-mono text-[11px] ${i === steps.length - 1 ? "border-accent/50 bg-accent/10 text-accent" : "border-line bg-ink/60 text-slate-300"}`}>
          {s}
        </div>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Featured projects">
      <div className="space-y-8">
        {featured.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="unslop-card"
          >
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="flex items-center justify-center bg-paper p-8">
                {p.visual === "invoice" ? <InvoiceVisual /> : <FlowVisual steps={p.steps} />}
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-white">{p.name}</h3>
                <p className="mt-3 text-mute">{p.desc}</p>
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-mute marker:text-accent/30">{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
                <div className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line bg-paper px-4 py-2 text-sm font-medium text-white transition-colors hover:border-accent hover:bg-white hover:text-ink"><Github size={16} /> Source</a>
                  {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-medium text-white transition-colors hover:border-accent hover:text-accent"><ExternalLink size={16} /> Live</a>}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <h3 className="mt-16 font-display text-xl font-medium text-white">Other projects</h3>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {others.map((o) => (
          <motion.div
            key={o.name}
            whileHover={{ y: -2 }}
            className="unslop-card"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg text-white">{o.name}</span>
              <a href={o.repo} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm text-mute hover:text-accent"><Github size={15} /> Source</a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}