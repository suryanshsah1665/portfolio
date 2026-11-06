import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Section } from "./Ui.jsx";
import { education, certifications, site } from "../data/site.js";

export function EducationCerts() {
  return (
    <Section id="education" title="Education & certifications">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          {education.map((e) => (
            <div key={e.title} className="border-l-2 border-azure/50 pl-5">
              <h3 className="font-display text-lg text-white">{e.title}</h3>
              <p className="text-slate-300">{e.org}</p>
              <p className="text-sm text-mute">{e.period}</p>
            </div>
          ))}
        </div>
        <ul className="divide-y divide-line rounded-xl border border-line bg-panel/60">
          {certifications.map(([name, issuer, date]) => (
            <li key={name} className="px-5 py-3.5">
              <p className="text-sm text-white">{name}</p>
              <p className="text-xs text-mute">{issuer} · {date}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function Contact() {
  const row = "flex items-center gap-3 text-slate-300 transition-colors hover:text-white";
  return (
    <Section id="contact" title="Let's talk">
      <div className="rounded-2xl border border-line bg-gradient-to-br from-azure/10 via-panel/70 to-violet/10 p-8 sm:p-12">
        <p className="max-w-lg text-lg text-slate-300">I'm open to software engineering, Python development, and AI/ML roles. The quickest way to reach me is email.</p>
        <a href={`mailto:${site.email}`} className="mt-6 inline-flex items-center gap-2 rounded-lg bg-azure px-6 py-3 font-medium text-ink transition-colors hover:bg-white"><Mail size={18} /> Email me</a>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          <li><a className={row} href={`mailto:${site.email}`}><Mail size={18} className="text-azure" /> {site.email}</a></li>
          <li><a className={row} href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}><Phone size={18} className="text-azure" /> {site.phone}</a></li>
          <li className="flex items-center gap-3 text-slate-300"><MapPin size={18} className="text-azure" /> {site.location}</li>
          <li className="flex items-center gap-5">
            <a className={row} href={site.github} target="_blank" rel="noreferrer"><Github size={18} className="text-azure" /> GitHub</a>
            {site.linkedin && <a className={row} href={site.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} className="text-azure" /> LinkedIn</a>}
          </li>
        </ul>
      </div>
    </Section>
  );
}

export const Footer = () => (
  <footer className="border-t border-line py-8 text-center text-sm text-mute">© {new Date().getFullYear()} {site.name}</footer>
);
