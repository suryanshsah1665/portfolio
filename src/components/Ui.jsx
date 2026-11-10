import { motion } from "framer-motion";

export function Section({ id, title, intro, children }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="reveal scroll-mt-20 py-20 sm:py-28 bg-ink/90 backdrop-blur-md relative"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 relative z-10">
        <div className="flex flex-col items-center gap-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl mb-4">
            {title}
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
    className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs text-accent font-medium shadow-sm transition-all hover:bg-accent/20 hover:shadow-accent/20"
  >
    {children}
  </motion.span>
);
