import { motion } from "framer-motion";

export function SectionHeading({ eyebrow, title, copy, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`section-heading max-w-4xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <span className="section-eyebrow">
        {eyebrow}
      </span>
      <h2 className="section-title">
        {title}
      </h2>
      <p className="section-copy">{copy}</p>
    </motion.div>
  );
}
