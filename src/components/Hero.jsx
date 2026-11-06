import { motion } from "framer-motion";
import { Github, Linkedin, Download, Mail, ArrowDown } from "lucide-react";
import { site } from "../data/site.js";

const lines = [
  [["kw", "engineer"], ["pl", " = {"]],
  [["pl", '    "name": '], ["st", '"Suryansh Sah"'], ["pl", ","]],
  [["pl", '    "focus": ['], ["st", '"Python", "AI/ML", "Backend"'], ["pl", "],"]],
  [["pl", '    "frameworks": ['], ["st", '"Frappe", "Flask", "Django"'], ["pl", "],"]],
  [["pl", '    "studying": '], ["st", '"B.Tech CSE (AI & ML)"'], ["pl", ","]],
  [["pl", '    "status": '], ["st", '"open_to_opportunities"'], ["pl", ","]],
  [["pl", "}"]],
];
const color = { kw: "text-violet", st: "text-emerald-300", pl: "text-slate-400" };

const rise = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-20 pt-32 pb-16 sm:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.1 }}>
          <motion.p variants={rise} className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
            <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400" /> Open to Opportunities
          </motion.p>
          <motion.h1 variants={rise} className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">{site.name}</motion.h1>
          <motion.p variants={rise} className="mt-4 font-display text-xl text-azure sm:text-2xl">{site.role}</motion.p>
          <motion.p variants={rise} className="mt-5 max-w-lg text-lg leading-relaxed text-mute">{site.intro}</motion.p>
          <motion.div variants={rise} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-azure px-5 py-2.5 font-medium text-ink transition-colors hover:bg-white">View My Projects <ArrowDown size={16} /></a>
            <a href={site.resume} download className="inline-flex items-center gap-2 rounded-lg border border-line bg-white/[0.03] px-5 py-2.5 font-medium text-white transition-colors hover:border-azure/60"><Download size={16} /> Download Resume</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 font-medium text-slate-300 transition-colors hover:text-white"><Mail size={16} /> Contact Me</a>
          </motion.div>
          <motion.div variants={rise} className="mt-8 flex gap-4 text-mute">
            <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="transition-colors hover:text-white"><Github /></a>
            {site.linkedin && <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="transition-colors hover:text-white"><Linkedin /></a>}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }} className="overflow-hidden rounded-xl border border-line bg-panel/80 shadow-[0_0_60px_-20px_#5B8CFF66] backdrop-blur" aria-hidden="true">
          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400/70" /><span className="h-3 w-3 rounded-full bg-yellow-400/70" /><span className="h-3 w-3 rounded-full bg-green-400/70" />
            <span className="ml-3 font-mono text-xs text-mute">profile.py</span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7">
            {lines.map((l, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 + i * 0.12 }}>
                {l.map(([c, t], j) => <span key={j} className={color[c]}>{t}</span>)}
              </motion.div>
            ))}
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
