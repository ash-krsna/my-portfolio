import { useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "../components/MagneticButton";
import { SectionHeading } from "../components/SectionHeading";
import { socialLinks } from "../data/content";

export function ContactSection() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    window.location.href = `mailto:akashohalkar300@gmail.com?subject=${encodeURIComponent(`Portfolio enquiry from ${name}`)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;
    setStatus("Opening your mail app with the message details.");
  };

  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="If the work feels like a fit, let’s talk before the next chapter gets louder."
        copy="Available for frontend roles, creative collaborations, visual experiments, and projects that value both interface quality and ambition."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="premium-card flex items-center justify-between gap-4 p-6 transition hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/5 text-xl text-zinc-900 dark:bg-white/6 dark:text-white">
                  <i className={`bi ${link.icon}`} />
                </span>
                <span className="text-lg text-zinc-900 dark:text-white">{link.label}</span>
              </div>
              <i className="bi bi-arrow-up-right text-zinc-500 dark:text-white/40" />
            </a>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="premium-card space-y-5 p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2 text-sm text-zinc-700 dark:text-white/68">
              <span>Name</span>
              <input name="name" required className="input-shell" />
            </label>
            <label className="space-y-2 text-sm text-zinc-700 dark:text-white/68">
              <span>Email</span>
              <input type="email" name="email" required className="input-shell" />
            </label>
          </div>
          <label className="space-y-2 text-sm text-zinc-700 dark:text-white/68">
            <span>Message</span>
            <textarea name="message" rows="6" required className="input-shell resize-none" />
          </label>
          <div className="flex flex-wrap items-center gap-4">
            <button type="submit" className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950">
              Send message
            </button>
            <MagneticButton href="mailto:akashohalkar300@gmail.com" secondary>
              Direct email
            </MagneticButton>
          </div>
          {status ? <p className="text-sm text-zinc-500 dark:text-white/45">{status}</p> : null}
        </motion.form>
      </div>
    </section>
  );
}
