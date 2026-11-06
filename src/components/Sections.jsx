import { Code2, Layers, Globe, Server, Database, Brain, Cpu, Wrench } from "lucide-react";
const Icons = { Code2, Layers, Globe, Server, Database, Brain, Cpu, Wrench };
import { Section, Tag } from "./Ui.jsx";
import { about, skills, experience } from "../data/site.js";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <p className="max-w-prose text-lg leading-relaxed text-slate-300">{about.text}</p>
        <dl className="divide-y divide-line rounded-xl border border-line bg-panel/60">
          {about.facts.map(([k, v]) => (
            <div key={k} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:justify-between sm:gap-6">
              <dt className="text-sm text-mute">{k}</dt>
              <dd className="text-sm text-white sm:text-right">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Technical skills">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map(({ title, icon, items }) => {
          const Icon = Icons[icon];
          return (
            <div key={title} className="rounded-xl border border-line bg-panel/60 p-5">
              <h3 className="flex items-center gap-2 font-display font-medium text-white"><Icon size={18} className="text-azure" /> {title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">{items.map((s) => <Tag key={s}>{s}</Tag>)}</div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative ml-2 space-y-10 border-l border-line pl-8">
        {experience.map((e) => (
          <li key={e.role} className="relative">
            <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-azure ring-4 ring-ink" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display text-xl font-medium text-white">{e.role} <span className="text-mute">at {e.org}</span></h3>
              <p className="text-sm text-mute">{e.period}</p>
            </div>
            <ul className="mt-3 max-w-2xl list-disc space-y-1.5 pl-5 text-slate-300 marker:text-line">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
