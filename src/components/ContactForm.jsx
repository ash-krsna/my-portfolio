import { useState } from "react";

export function ContactForm({
  source,
  submitLabel,
  showProjectFields = false,
  compact = false
}) {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    payload.source = source;

    try {
      setSubmitting(true);
      setStatus({ type: "", message: "" });

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Message sending failed.");
      }

      event.currentTarget.reset();
      setStatus({ type: "success", message: "Your message was sent successfully." });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Unable to send your message right now."
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`premium-card space-y-5 ${compact ? "p-6" : "p-6 md:p-7"}`}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-zinc-700 dark:text-white/68">
          <span>Name</span>
          <input name="name" required className="input-shell" />
        </label>
        <label className="space-y-2 text-sm text-zinc-700 dark:text-white/68">
          <span>Email</span>
          <input type="email" name="email" required className="input-shell" />
        </label>
      </div>

      {showProjectFields ? (
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm text-zinc-700 dark:text-white/68">
            <span>Project type</span>
            <select name="projectType" className="input-shell">
              <option>Frontend website</option>
              <option>Portfolio website</option>
              <option>Landing page</option>
              <option>UI redesign</option>
              <option>Technical experiment</option>
            </select>
          </label>
          <label className="space-y-2 text-sm text-zinc-700 dark:text-white/68">
            <span>Budget / scope</span>
            <input name="budget" placeholder="Optional" className="input-shell" />
          </label>
        </div>
      ) : null}

      <label className="space-y-2 text-sm text-zinc-700 dark:text-white/68">
        <span>{showProjectFields ? "What do you need built?" : "Message"}</span>
        <textarea name="message" rows={showProjectFields ? 7 : 6} required className="input-shell resize-none" />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={submitting}
          className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-zinc-950"
        >
          {submitting ? "Sending..." : submitLabel}
        </button>
        <a
          href="mailto:akash.gita.bhagwat@gmail.com"
          className="rounded-full border border-black/10 bg-black/5 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:text-white"
        >
          Direct email
        </a>
      </div>

      <p className="text-sm leading-7 text-zinc-500 dark:text-white/45">
        Messages are sent securely to <span className="font-medium text-zinc-700 dark:text-white/70">akash.gita.bhagwat@gmail.com</span>.
      </p>

      {status.message ? (
        <p
          className={`text-sm ${
            status.type === "success"
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-red-600 dark:text-red-400"
          }`}
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
