import { Github, Linkedin, Download, Mail, ArrowDown } from "lucide-react";
import { site } from "../data/site.js";

const lines = [
  [["kw", "class"], ["pl", " Engineer {"], ["" , ""]],
  [["pl", '  name   = '], ["st", '"Suryansh Sah"']],
  [["pl", '  role   = '], ["st", '"Software & AI"']],
  [["pl", '  stack  = ['], ["st", '"Python", "Flask", "Frappe"'], ["pl", "]"]],
  [["pl", '  status = '], ["st", '"open_for_hire"']],
  [["pl", "}"]]
];
const color = { kw: "text-accent", st: "text-accent", pl: "text-green-300" };

export default function Hero() {
  return (
    <section id="home" className="pt-36 pb-20 sm:pt-48 border-b border-line relative overflow-hidden">
      <div className="mx-auto grid max-w-5xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/5 px-3.5 py-1.5 font-mono text-xs text-accent shadow-[0_0_15px_rgba(0,255,0,0.3)]">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            B.Tech CSE (AI & ML) · GITAM
          </div>
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl font-display">
            Building software with <span className="text-accent underline decoration-accent/40 underline-offset-8 glow-text">intent</span>.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-mute leading-relaxed">{site.intro}</p>

          <div className="mt-8 flex flex-wrap gap-4 font-mono text-sm">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-semibold text-black transition-all hover:bg-emerald-400 hover:shadow-[0_0_25px_rgba(0,255,0,0.6)] hover:-translate-y-0.5">
              View Work <ArrowDown size={15} />
            </a>
            <a href={site.resume} download className="inline-flex items-center gap-2 rounded-xl border border-accent/40 bg-black/50 px-6 py-3.5 text-accent transition-all hover:border-accent hover:bg-accent/10 hover:shadow-[0_0_20px_rgba(0,255,0,0.4)] hover:-translate-y-0.5">
              <Download size={15} /> Resume (.pdf)
            </a>
          </div>

          <div className="mt-12 flex gap-6 text-mute">
            <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors hover:scale-110"><Github size={22} /></a>
            {site.linkedin && <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors hover:scale-110"><Linkedin size={22} /></a>}
            <a href={`mailto:${site.email}`} className="hover:text-accent transition-colors hover:scale-110"><Mail size={22} /></a>
          </div>
        </div>

        {/* Code window with HUD styling */}
        <div className="terminal-card group">
          <div className="flex items-center justify-between border-b border-accent/20 pb-3 mb-4 text-mute">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-accent/80 inline-block" />
              <span className="ml-2 text-accent/80">profile.py</span>
            </div>
            <span className="text-[10px] text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20 shadow-[0_0_10px_rgba(0,255,0,0.3)]">active</span>
          </div>
          <pre className="overflow-x-auto text-green-300 text-xs leading-6">
            {lines.map((l, i) => (
              <div key={i} className="py-0.5">
                {l.map(([c, t], j) => <span key={j} className={color[c]}>{t}</span>)}
              </div>
            ))}
          </pre>
        </div>
      </div>
    </section>
  );
}