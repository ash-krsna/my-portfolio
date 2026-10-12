import { motion } from "framer-motion";
import { contactLinks, identity } from "../data/content";

export function Contact() {
  return (
    <section id="contact" className="contact-section px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div>
          <p className="section-kicker">06 Contact</p>
          <h2 className="section-title mt-4">Open to junior software developer opportunities.</h2>
          <p className="section-copy mt-6">
            Recruiters, founders, and development teams can reach out about entry-level software development, Python or
            backend work, web development, and junior full-stack opportunities.
          </p>

          <div className="contact-direct mt-8">
            <span>Best first step</span>
            <a href={`mailto:${identity.email}`}>{identity.email}</a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="contact-links-panel"
        >
          <div className="contact-panel-head">
            <span>Contact paths</span>
            <strong>Resume, code, and direct email</strong>
          </div>

          <div className="mt-4 grid gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                download={link.download}
                className="contact-link"
              >
                <i className={`bi ${link.icon}`} />
                <span>
                  <strong>{link.label}</strong>
                  <small>{link.value}</small>
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
