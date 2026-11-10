import { Github, Linkedin, Download, Mail, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { site } from "../data/site.js";

const lines = [
  [["kw", "class"], ["pl", " Engineer {"], ["" , ""]],
  [["pl", '  name   = '], ["st", '"Suryansh Sah"']],
  [["pl", '  role   = '], ["st", '"Software & AI"']],
  [["pl", '  stack  = ['], ["st", '"Python", "Flask", "Frappe"'], ["pl", "]"]],
  [["pl", '  status = '], ["st", '"open_for_hire"']],
  [["pl", "}"]]
];
const color = { kw: "text-accent", st: "text-accent", pl: "text-slate-300" };

export default function Hero() {
  return (
    <section id="home" className="pt-36 pb-20 sm:pt-48 border-b border-line relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto grid max-w-5xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 font-mono text-xs text-accent shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            B.Tech CSE (AI & ML) · GITAM
          </motion.div>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Building software with <span className="text-accent underline decoration-accent/40 underline-offset-8">intent</span>.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-mute leading-relaxed">{site.intro}</p>

          <div className="mt-8 flex flex-wrap gap-4 font-mono text-sm">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-semibold text-ink transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5">
              View Work <ArrowDown size={15} />
            </a>
            <a href={site.resume} download className="inline-flex items-center gap-2 rounded-xl border border-line bg-paper px-6 py-3.5 text-white transition-all hover:border-accent hover:bg-white/5 hover:-translate-y-0.5">
              <Download size={15} /> Resume (.pdf)
            </a>
          </div>

          <div className="mt-12 flex gap-6 text-mute">
            <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors hover:scale-110"><Github size={22} /></a>
            {site.linkedin && <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors hover:scale-110"><Linkedin size={22} /></a>}
            <a href={`mailto:${site.email}`} className="hover:text-accent transition-colors hover:scale-110"><Mail size={22} /></a>
          </div>
        </motion.div>

        {/* Code window with glowing border */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="rounded-2xl border border-line bg-paper/90 backdrop-blur-md p-6 font-mono text-xs leading-6 shadow-2xl relative group hover:border-accent/50 transition-colors"
        >
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <div className="flex items-center justify-between border-b border-line pb-3 mb-4 text-mute">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-slate-400">profile.py</span>
            </div>
            <span className="text-[10px] text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20">active</span>
          </div>
          <pre className="overflow-x-auto text-slate-300">
            {lines.map((l, i) => (
              <div key={i} className="py-0.5">
                {l.map(([c, t], j) => <span key={j} className={color[c]}>{t}</span>)}
              </div>
            ))}
          </pre>
        </motion.div>
      </div>
    </section>
  );
}