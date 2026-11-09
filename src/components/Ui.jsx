import { motion } from "framer-motion";

export function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="reveal scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
          {intro && <p className="mt-3 max-w-xl text-mute">{intro}</p>}
          <div className="mt-10">{children}</div>
        </div>
      </div>
    </section>
  );
}

export const Tag = ({ children }) => (
  <span className="rounded-md border border-line bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300">{children}</span>
);
