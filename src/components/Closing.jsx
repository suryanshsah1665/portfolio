import { Github, Linkedin, Mail, Phone, MapPin, FileText } from "lucide-react";
import { Section } from "./Ui.jsx";
import { education, certifications, site } from "../data/site.js";

export function EducationCerts() {
  return (
    <Section id="education" title="Education & certifications">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          {education.map((e) => (
            <div key={e.title} className="group border-l-2 border-line pl-6 transition-colors hover:border-cyan">
              <h3 className="font-display text-lg text-white group-hover:text-cyan">{e.title}</h3>
              <p className="mt-1 text-slate-300">{e.org}</p>
              <p className="text-sm text-mute font-mono">{e.period}</p>
            </div>
          ))}
        </div>
        <ul className="divide-y divide-line rounded-xl border border-line bg-panel/60 overflow-hidden">
          {certifications.map(([name, issuer, date]) => (
            <li key={name} className="px-5 py-4 transition-colors hover:bg-white/[0.03]">
              <p className="text-sm text-white font-medium">{name}</p>
              <p className="mt-0.5 text-xs text-mute">{issuer} · {date}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function Contact() {
  const row = "flex items-center gap-3 text-slate-300 transition-colors hover:text-cyan";
  return (
    <Section id="contact" title="Let's talk">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-panel p-8 sm:p-12">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan/5 via-transparent to-violet/5" />
        <p className="max-w-lg text-lg text-slate-300">I'm open to software engineering, Python development, and AI/ML roles. The quickest way to reach me is email.</p>
        <a
          href={`mailto:${site.email}?subject=Portfolio%20Contact&body=Hi%20Suryansh,`}
          className="relative z-10 mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-ink transition-all hover:scale-105 hover:bg-cyan hover:text-white"
        >
          <Mail size={18} /> Email me
        </a>
        <ul className="relative z-10 mt-10 grid gap-6 sm:grid-cols-2">
          <li>
            <a href={`mailto:${site.email}`} className={row}>
              <Mail size={18} className="text-cyan" /> {site.email}
            </a>
          </li>
          <li><a className={row} href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}><Phone size={18} className="text-cyan" /> {site.phone}</a></li>
          <li className="flex items-center gap-3 text-slate-300"><MapPin size={18} className="text-cyan" /> {site.location}</li>
          <li className="flex items-center gap-5">
            <a className={row} href={site.github} target="_blank" rel="noreferrer"><Github size={18} className="text-cyan" /> GitHub</a>
            {site.linkedin && <a className={row} href={site.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} className="text-cyan" /> LinkedIn</a>}
          </li>
        </ul>
      </div>
    </Section>
  );
}

export const Footer = () => (
  <footer className="border-t border-line py-10 text-center text-sm text-mute">
    © {new Date().getFullYear()} {site.name} • Built with React & Tailwind
  </footer>
);