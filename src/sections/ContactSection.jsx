import { motion } from "framer-motion";
import { ContactForm } from "../components/ContactForm";
import { SectionHeading } from "../components/SectionHeading";
import { socialLinks } from "../data/content";

export function ContactSection() {
  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Keep the connection options simple, direct, and easy to use."
        copy="For people who prefer direct links, email, phone, or social platforms instead of filling out a project brief."
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="space-y-4">
          <a
            href="tel:+919699134688"
            className="premium-card flex items-center justify-between gap-4 p-5 transition hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black/5 text-lg text-zinc-900 dark:bg-white/6 dark:text-white">
                <i className="bi bi-telephone" />
              </span>
              <div>
                <span className="block text-base text-zinc-900 dark:text-white">Call or WhatsApp</span>
                <span className="text-sm text-zinc-500 dark:text-white/42">+91 96991 34688</span>
              </div>
            </div>
            <i className="bi bi-arrow-up-right text-zinc-500 dark:text-white/40" />
          </a>

          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="premium-card flex items-center justify-between gap-4 p-5 transition hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black/5 text-lg text-zinc-900 dark:bg-white/6 dark:text-white">
                  <i className={`bi ${link.icon}`} />
                </span>
                <span className="text-base text-zinc-900 dark:text-white">{link.label}</span>
              </div>
              <i className="bi bi-arrow-up-right text-zinc-500 dark:text-white/40" />
            </a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ContactForm source="contact-section" submitLabel="Send message" compact />
        </motion.div>
      </div>
    </section>
  );
}
