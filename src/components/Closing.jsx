import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Section } from "./Ui.jsx";
import { education, certifications, site } from "../data/site.js";
import { openMail } from "../utils/mail.js";

export function EducationCerts() {
  return (
    <Section id="education" title="Education & certifications">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          {education.map((e) => (
            <div key={e.title} className="unslop-card">
              <h3 className="font-display text-lg text-white">{e.title}</h3>
              <p className="mt-1 text-slate-300">{e.org}</p>
              <p className="text-sm text-mute font-mono">{e.period}</p>
            </div>
          ))}
        </div>
        <div className="unslop-card space-y-4">
          {certifications.map(([name, issuer, date]) => (
            <div key={name} className="border-b border-line/30 pb-3 last:border-b-0 last:pb-0">
              <p className="text-sm text-white font-medium">{name}</p>
              <p className="mt-0.5 text-xs text-mute">{issuer} · {date}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Contact() {
  const row = "flex items-center gap-3 text-slate-300 transition-colors hover:text-accent cursor-pointer";
  return (
    <Section id="contact" title="Let's talk">
      <div className="unslop-card sm:p-12">
        <p className="max-w-lg text-lg text-slate-300">I'm open to software engineering, Python development, and AI/ML roles. The quickest way to reach me is email.</p>

        <button
          onClick={() => openMail(site.email, "Portfolio Contact", "Hi Suryansh,")}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-ink transition-all hover:bg-white hover:scale-105 cursor-pointer"
        >
          <Mail size={18} /> Email me
        </button>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 border-t border-line pt-8">
          <li>
            <button onClick={() => openMail(site.email, "Portfolio Contact", "Hi Suryansh,")} className={row}>
              <Mail size={18} className="text-accent" /> {site.email}
            </button>
          </li>
          <li><a className={row} href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}><Phone size={18} className="text-accent" /> {site.phone}</a></li>
          <li className="flex items-center gap-3 text-slate-300"><MapPin size={18} className="text-accent" /> {site.location}</li>
          <li className="flex items-center gap-5">
            <a className={row} href={site.github} target="_blank" rel="noreferrer"><Github size={18} className="text-accent" /> GitHub</a>
            {site.linkedin && <a className={row} href={site.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} className="text-accent" /> LinkedIn</a>}
          </li>
        </ul>
      </div>
    </Section>
  );
}

export const Footer = () => (
  <footer className="border-t border-line py-10 text-center text-sm text-mute">
    © {new Date().getFullYear()} {site.name} • Unsloped UI Design
  </footer>
);