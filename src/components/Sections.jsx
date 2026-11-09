import { motion } from "framer-motion";
import { Code2, Layers, Globe, Server, Database, Brain, Cpu, Wrench } from "lucide-react";
import { Section, Tag } from "./Ui.jsx";
import { about, skills, experience } from "../data/site.js";

const Icons = { Code2, Layers, Globe, Server, Database, Brain, Cpu, Wrench };

export function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
        <p className="max-w-prose text-lg leading-relaxed text-mute">
          {about.text}
        </p>
        <dl className="unslop-card">
          {about.facts.map(([k, v]) => (
            <div key={k} className="flex flex-col gap-1.5 px-3 py-3 border-b border-line/30 last:border-b-0">
              <dt className="text-sm text-mute font-mono">
                {k}
              </dt>
              <dd className="text-sm text-white">
                {v}
              </dd>
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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ title, icon, items }) => {
          const Icon = Icons[icon];
          return (
            <div key={title} className="unslop-card">
              <h3 className="flex items-center gap-2 font-display font-medium text-white">
                <Icon size={18} className="text-accent" /> {title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {items.map((s) => <Tag key={s}>{s}</Tag>)}
              </div>
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
        {experience.map((e, i) => (
          <motion.li
            key={e.role}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
          >
            <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-ink" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display text-xl font-medium text-white">{e.role} <span className="text-mute">at {e.org}</span></h3>
              <p className="text-sm text-mute font-mono">{e.period}</p>
            </div>
            <ul className="mt-3 max-w-2xl list-disc space-y-1.5 pl-5 text-slate-300 marker:text-accent/30">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}