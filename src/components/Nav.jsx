import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { site } from "../data/site.js";

const links = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  // Close the mobile menu whenever the active section changes.
  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const href = (l) => `#${l.toLowerCase()}`;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-line/80 bg-ink/85 backdrop-blur-xl shadow-[0_8px_30px_-12px_#000a]"
            : "border-b border-line/30 bg-ink/40 backdrop-blur-md"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Primary">
          <a href="#home" className="group flex items-center gap-1 font-display text-lg font-semibold text-white">
            <span className="text-gradient">Suryansh</span>
            <span className="text-cyan">.</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={href(l)}
                  className="relative px-3 py-2 text-sm text-mute transition-colors hover:text-white"
                >
                  {l}
                  <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan to-violet transition-transform duration-300 hover:scale-x-100" />
                </a>
              </li>
            ))}
            <li className="ml-2">
              <a
                href={site.resume}
                download
                className="group inline-flex items-center gap-1.5 rounded-lg border border-cyan/40 bg-cyan/10 px-3 py-1.5 text-sm text-cyan transition-colors hover:bg-cyan/20"
              >
                <FileText size={14} /> Resume
              </a>
            </li>
          </ul>

          <button
            className="md:hidden text-slate-200"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden border-t border-line bg-ink/95 backdrop-blur-xl md:hidden"
            >
              {links.map((l) => (
                <li key={l}>
                  <a
                    href={href(l)}
                    onClick={() => setOpen(false)}
                    className="block px-5 py-3 text-slate-300 transition-colors hover:bg-white/[0.03] hover:text-white"
                  >
                    {l}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.resume}
                  download
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-5 py-3 text-cyan"
                >
                  <FileText size={16} /> Resume
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}