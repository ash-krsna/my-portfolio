import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { testimonials } from "../data/content";

export function TestimonialsSection() {
  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="Quotes"
        title="Placeholder space for future collaborators, recommendations, and the words that will follow the work."
        copy="Until testimonials arrive, this section still earns its keep by reinforcing the voice and ambition of the portfolio."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {testimonials.map((item, index) => (
          <motion.blockquote
            key={item.quote}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="premium-card p-8"
          >
            <p className="text-2xl leading-[1.6] text-zinc-900 dark:text-white">“{item.quote}”</p>
            <footer className="mt-6 text-sm uppercase tracking-[0.24em] text-zinc-500 dark:text-white/40">
              {item.author}
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
