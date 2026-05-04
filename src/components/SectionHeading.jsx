import { motion } from "framer-motion";

export function SectionHeading({ eyebrow, title, copy, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl space-y-5 ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <span className="inline-flex rounded-full border border-black/10 bg-black/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:border-white/10 dark:bg-white/5 dark:text-white/60">
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl font-semibold leading-[0.95] text-zinc-950 dark:text-white md:text-6xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-zinc-600 dark:text-white/64 md:text-lg">{copy}</p>
    </motion.div>
  );
}
