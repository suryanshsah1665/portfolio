import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { site } from "../data/site.js";

const links = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const href = (l) => `#${l.toLowerCase()}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-ink/75 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-display text-lg font-semibold text-white">
          <span className="text-accent">Suryansh</span>.
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l}><a href={href(l)} className="text-sm text-mute transition-colors hover:text-accent">{l}</a></li>
          ))}
          <li>
            <a href={site.resume} download className="inline-flex items-center gap-1.5 rounded-lg border border-accent/40 bg-accent/10 px-3 py-1.5 text-sm text-accent transition-colors hover:bg-accent/20">
              <FileText size={14} /> Resume
            </a>
          </li>
        </ul>
        <button className="md:hidden text-slate-200" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-line bg-ink md:hidden">
            {links.map((l) => (
              <li key={l}><a href={href(l)} onClick={() => setOpen(false)} className="block px-5 py-3 text-slate-300 hover:text-accent">{l}</a></li>
            ))}
            <li><a href={site.resume} download onClick={() => setOpen(false)} className="block px-5 py-3 text-accent">Resume</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}