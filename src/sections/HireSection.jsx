import { motion } from "framer-motion";
import { ContactForm } from "../components/ContactForm";
import { SectionHeading } from "../components/SectionHeading";
import { hireMeOffers } from "../data/content";

export function HireSection() {
  return (
    <section id="hire" className="section-shell">
      <SectionHeading
        eyebrow="Hire me"
        title="A direct space for people who want to work with me, not just browse the portfolio."
        copy="If you need a frontend developer who cares about clean UI, strong presentation, responsive implementation, and a builder mindset, this is the fastest way to start the conversation."
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4">
          {hireMeOffers.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="premium-card p-5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#48c28d,#4d9fff)] text-lg text-white">
                <i className={`bi ${item.icon}`} />
              </span>
              <h3 className="mt-4 font-display text-2xl text-zinc-950 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-white/62">{item.copy}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ContactForm source="hire-me" submitLabel="Send hire request" showProjectFields />
        </motion.div>
      </div>
    </section>
  );
}
