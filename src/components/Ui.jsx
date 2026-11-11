import { motion } from "framer-motion";

export function Section({ id, title, intro, children }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="reveal scroll-mt-20 py-20 sm:py-28 bg-black/90 backdrop-blur-md relative"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 relative z-10">
        <div className="flex flex-col items-center gap-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-accent sm:text-4xl glow-text mb-4">
            &lt;{title}&gt;
          </h2>
          {intro && <p className="max-w-2xl text-lg text-mute leading-relaxed">
            {intro}
          </p>}
          <div className="mt-10 w-full">
            {children}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export const Tag = ({ children }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.25, delay: 0.1 }}
    className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1.5 text-xs text-accent font-mono shadow-[0_0_10px_rgba(0,255,0,0.2)] transition-all hover:bg-accent/20 hover:shadow-[0_0_15px_rgba(0,255,0,0.4)]"
  >
    {children}
  </motion.span>
);