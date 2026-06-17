import { useState } from "react";
import { motion } from "framer-motion";
import { contactLinks, identity } from "../data/content";

const initialStatus = { type: "", message: "" };

export function Contact() {
  const [status, setStatus] = useState(initialStatus);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    payload.source = "akash-ohalkar-portfolio";

    try {
      setSubmitting(true);
      setStatus(initialStatus);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Message sending failed.");
      }

      form.reset();
      setStatus({ type: "success", message: "Thanks. Your message was sent successfully." });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Unable to send right now. Please email me directly."
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="section-kicker">07 Contact</p>
          <h2 className="section-title mt-4">For roles, internships, and serious project conversations.</h2>
          <p className="section-copy mt-6">
            Send a short message and I will reply with context, availability, and the next step. I am especially interested
            in frontend, junior developer, Python/SQL, and security-learning opportunities.
          </p>

          <div className="mt-10 grid gap-3">
            {contactLinks.map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="contact-link">
                <i className={`bi ${link.icon}`} />
                <span>
                  <strong>{link.label}</strong>
                  <small>{link.value}</small>
                </span>
              </a>
            ))}
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="contact-form"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label>
              <span>Name</span>
              <input name="name" required placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" required placeholder="you@example.com" />
            </label>
          </div>

          <label>
            <span>Opportunity</span>
            <select name="opportunity">
              <option>Internship / junior developer role</option>
              <option>Frontend project</option>
              <option>Python / SQL project</option>
              <option>Cyber security learning opportunity</option>
              <option>General collaboration</option>
            </select>
          </label>

          <label>
            <span>Message</span>
            <textarea name="message" rows="6" required placeholder="Tell me what you are looking for..." />
          </label>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <button type="submit" disabled={submitting} className="btn btn-primary">
              <i className={`bi ${submitting ? "bi-arrow-repeat" : "bi-send"}`} />
              {submitting ? "Sending..." : "Send Message"}
            </button>
            <a href={`mailto:${identity.email}`} className="btn btn-secondary">
              Direct Email
            </a>
          </div>

          {status.message ? (
            <p className={`form-status ${status.type === "success" ? "form-success" : "form-error"}`}>
              {status.message}
            </p>
          ) : null}
        </motion.form>
      </div>
    </section>
  );
}
