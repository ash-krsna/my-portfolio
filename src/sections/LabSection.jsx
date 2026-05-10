import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { labExperiments } from "../data/content";

export function LabSection() {
  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="Tech Lab"
        title="The portfolio should feel like it belongs to someone who genuinely likes building things."
        copy="Not just websites. Systems, interfaces, experiments, hardware curiosity, and the small playful side of tech that keeps learning interesting."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {labExperiments.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className="premium-card p-5"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#ff5f5f,#7fc1ff)] text-lg text-white">
              <i className={`bi ${item.icon}`} />
            </span>
            <h3 className="mt-4 font-display text-2xl text-zinc-950 dark:text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-white/62">{item.copy}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
