import { motion } from "framer-motion";
import { Github, Linkedin, Download, Mail, ArrowDown, ChevronDown } from "lucide-react";
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
    <section id="home" className="scroll-mt-20 pt-32 pb-16 sm:pt-44">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.1 }}>
          <motion.p variants={rise} className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
            <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400" /> Open to Opportunities
          </motion.p>
          <motion.h1 variants={rise} className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block text-white">I build</span>
            <span className="block text-gradient">intelligent</span>
            <span className="block text-white">software.</span>
          </motion.h1>
          <motion.p variants={rise} className="mt-4 font-display text-xl text-cyan sm:text-2xl">{site.role}</motion.p>
          <motion.p variants={rise} className="mt-5 max-w-lg text-lg leading-relaxed text-mute">{site.intro}</motion.p>
          <motion.div variants={rise} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan to-azure px-5 py-2.5 font-medium text-ink transition-all hover:shadow-[0_0_30px_-5px_#38E1FF] hover:brightness-110">View My Projects <ArrowDown size={16} /></a>
            <a href={site.resume} download className="inline-flex items-center gap-2 rounded-lg border border-line bg-white/[0.03] px-5 py-2.5 font-medium text-white transition-colors hover:border-cyan/60 hover:text-cyan"><Download size={16} /> Download Resume</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 font-medium text-slate-300 transition-colors hover:text-white"><Mail size={16} /> Contact Me</a>
          </motion.div>
          <motion.div variants={rise} className="mt-8 flex gap-4 text-mute">
            <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="transition-colors hover:text-cyan"><Github /></a>
            {site.linkedin && <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="transition-colors hover:text-cyan"><Linkedin /></a>}
          </motion.div>
          <motion.a
            href="#about"
            variants={rise}
            className="mt-10 inline-flex items-center gap-2 text-sm text-mute hover:text-cyan"
            aria-label="Scroll to about"
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-mute" /> Scroll down <ChevronDown size={14} className="animate-bounce" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="group overflow-hidden rounded-xl border border-line bg-panel/80 shadow-[0_0_60px_-20px_#5B8CFF66] backdrop-blur transition-transform duration-300 hover:rotateX-4"
          style={{ transformStyle: "preserve-3d", transformPerspective: 900 }}
          aria-hidden="true"
        >
          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400/70" /><span className="h-3 w-3 rounded-full bg-yellow-400/70" /><span className="h-3 w-3 rounded-full bg-green-400/70" />
            <span className="ml-3 font-mono text-xs text-mute">profile.py</span>
            <span className="ml-auto font-mono text-[10px] text-mute">live</span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7">
            {lines.map((l, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 + i * 0.12 }}>
                {l.map(([c, t], j) => <span key={j} className={color[c]}>{t}</span>)}
              </motion.div>
            ))}
          </pre>
          <div className="h-1 w-full bg-gradient-to-r from-cyan via-azure to-violet" />
        </motion.div>
      </div>
    </section>
  );
}