import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { site } from "../data/site.js";

const links = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const href = (l) => `#${l.toLowerCase()}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-accent/30 bg-black/80 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,0,0.1)]">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-display text-lg font-semibold text-accent glow-text">
          <span>&gt;</span> suryansh<span className="text-mute">.dev</span>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l}><a href={href(l)} className="text-sm text-mute transition-colors hover:text-accent hover:drop-shadow-[0_0_8px_rgba(0,255,0,0.6)]">{l}</a></li>
          ))}
          <li>
            <a href={site.resume} download className="inline-flex items-center gap-1.5 rounded-lg border border-accent/40 bg-accent/10 px-3 py-1.5 text-sm text-accent transition-colors hover:bg-accent/20 hover:shadow-[0_0_15px_rgba(0,255,0,0.4)]">
              <FileText size={14} /> Resume
            </a>
          </li>
        </ul>
        <button className="md:hidden text-accent" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -10 }}
            className="overflow-hidden border-t border-accent/20 bg-black/95 md:hidden transition-all duration-300 ease-in-out"
          >
            <motion.ul className="overflow-hidden">
              {links.map((l) => (
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.1 * links.indexOf(l) }}
                  key={l}
                  className="block px-5 py-3 text-mute hover:text-accent"
                >
                  <a href={href(l)} onClick={() => setOpen(false)}>{l}</a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.1 * links.length }}
                className="block px-5 py-3 text-accent"
              >
                <a href={site.resume} download onClick={() => setOpen(false)}>Resume</a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}