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
const color = { kw: "text-accent", st: "text-emerald-400", pl: "text-slate-300" };

export default function Hero() {
  return (
    <section id="home" className="pt-36 pb-20 sm:pt-48 border-b border-line">
      <div className="mx-auto grid max-w-5xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="inline-flex items-center gap-2 border border-line bg-paper px-3 py-1 font-mono text-xs text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            B.Tech CSE (AI & ML) · GITAM
          </div>
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Building software with <span className="text-accent underline decoration-accent/30 underline-offset-8">intent</span>.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-mute leading-relaxed">{site.intro}</p>

          <div className="mt-8 flex flex-wrap gap-4 font-mono text-sm">
            <a href="#projects" className="inline-flex items-center gap-2 bg-accent px-5 py-3 font-semibold text-ink transition-colors hover:bg-white">
              View Work <ArrowDown size={14} />
            </a>
            <a href={site.resume} download className="inline-flex items-center gap-2 border border-line bg-paper px-5 py-3 text-white transition-colors hover:border-accent">
              <Download size={14} /> Resume (.pdf)
            </a>
          </div>

          <div className="mt-12 flex gap-6 text-mute">
            <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><Github size={20} /></a>
            {site.linkedin && <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><Linkedin size={20} /></a>}
            <a href={`mailto:${site.email}`} className="hover:text-accent transition-colors"><Mail size={20} /></a>
          </div>
        </div>

        {/* Code window instead of generic card */}
        <div className="border border-line bg-paper p-5 font-mono text-xs leading-6 shadow-2xl">
          <div className="flex items-center justify-between border-b border-line pb-3 mb-3 text-mute">
            <span>profile.py</span>
            <span className="text-[10px] text-emerald-400">active</span>
          </div>
          <pre className="overflow-x-auto text-slate-300">
            {lines.map((l, i) => (
              <div key={i}>
                {l.map(([c, t], j) => <span key={j} className={color[c]}>{t}</span>)}
              </div>
            ))}
          </pre>
        </div>
      </div>
    </section>
  );
}