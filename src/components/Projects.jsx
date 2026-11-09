import { motion } from "framer-motion";
import { Github, ExternalLink, ChevronRight } from "lucide-react";
import { Section, Tag } from "./Ui.jsx";
import { featured, others } from "../data/site.js";

function InvoiceVisual() {
  return (
    <div className="relative mx-auto w-56 rotate-[-3deg] rounded-lg bg-slate-100 p-4 shadow-2xl transition-transform duration-500 hover:rotate-0" aria-hidden="true">
      <div className="flex items-center justify-between"><div className="h-2.5 w-14 rounded bg-slate-800" /><div className="rounded bg-azure px-1.5 py-0.5 text-[10px] font-semibold text-white">PDF</div></div>
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
        <motion.div
          key={s}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className={`w-full rounded-lg border px-4 py-2 text-center font-mono text-[11px] ${i === steps.length - 1 ? "border-cyan/50 bg-cyan/10 text-cyan" : "border-line bg-ink/60 text-slate-400"}`}
        >
          {s}
        </motion.div>
      ))}
    </div>
  );
}

function Featured({ p, flip }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="card-tilt grid overflow-hidden rounded-2xl border border-line bg-panel/70 lg:grid-cols-[0.8fr_1.2fr] hover:border-cyan/30"
    >
      <div className={`flex items-center justify-center bg-gradient-to-br from-cyan/5 via-transparent to-violet/5 p-8 ${flip ? "lg:order-2" : ""}`}>
        {p.visual === "invoice" ? <InvoiceVisual /> : <FlowVisual steps={p.steps} />}
      </div>
      <div className="p-6 sm:p-8">
        <h3 className="font-display text-2xl font-semibold text-white">{p.name}</h3>
        <p className="mt-3 text-slate-300">{p.desc}</p>
        <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-mute marker:text-cyan/60">{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
        <div className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-ink transition-all hover:bg-cyan hover:text-white"><Github size={16} /> Source</a>
          {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-medium text-white transition-all hover:border-cyan/60 hover:text-cyan"><ExternalLink size={16} /> Live</a>}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Featured projects">
      <div className="space-y-6">{featured.map((p, i) => <Featured key={p.id} p={p} flip={i % 2 === 1} />)}</div>
      <h3 className="mt-20 font-display text-xl font-medium text-white">Other projects</h3>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {others.map((o) => (
          <motion.div key={o.name} whileHover={{ y: -4 }} className="flex items-center justify-between rounded-xl border border-line bg-panel/60 p-5 hover:border-cyan/30">
            <span className="font-display font-medium text-white">{o.name}</span>
            <a href={o.repo} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs text-mute hover:text-cyan"><Github size={14} /> Source</a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}