import { motion } from "framer-motion";
import { Code2, Layers, Globe, Server, Database, Brain, Cpu, Wrench } from "lucide-react";
import { Section, Tag } from "./Ui.jsx";
import { about, skills, experience } from "../data/site.js";

const Icons = { Code2, Layers, Globe, Server, Database, Brain, Cpu, Wrench };

const cardReveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.06, ease: "easeOut" } }),
};

export function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-prose text-lg leading-relaxed text-slate-300"
        >
          {about.text}
        </motion.p>
        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="divide-y divide-line rounded-xl border border-line bg-panel/60 overflow-hidden"
        >
          {about.facts.map(([k, v]) => (
            <div key={k} className="group flex flex-col gap-1 px-5 py-4 sm:flex-row sm:justify-between sm:gap-6 transition-colors hover:bg-white/[0.03]">
              <dt className="text-sm text-mute">{k}</dt>
              <dd className="text-sm text-white sm:text-right">{v}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Technical skills">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map(({ title, icon, items }, i) => {
          const Icon = Icons[icon];
          return (
            <motion.div
              key={title}
              custom={i}
              variants={cardReveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-xl border border-line bg-panel/60 p-5 transition-colors hover:border-cyan/40 hover:shadow-[0_12px_40px_-18px_#38E1FF]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <h3 className="flex items-center gap-2 font-display font-medium text-white">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-cyan/10 text-cyan">
                  <Icon size={18} />
                </span>
                {title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">{items.map((s) => <Tag key={s}>{s}</Tag>)}</div>
            </motion.div>
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
            className="relative"
          >
            <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-cyan ring-4 ring-ink">
              <span className="absolute inset-0 rounded-full bg-cyan opacity-75 animate-ping" style={{ animationDuration: "2.4s" }} />
            </span>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display text-xl font-medium text-white">
                {e.role} <span className="text-mute">at {e.org}</span>
              </h3>
              <p className="text-sm text-cyan font-mono">{e.period}</p>
            </div>
            <ul className="mt-3 max-w-2xl list-disc space-y-1.5 pl-5 text-slate-300 marker:text-line">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}