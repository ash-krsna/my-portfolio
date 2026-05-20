import { motion } from "framer-motion";
import { MagneticButton } from "../components/MagneticButton";
import { SectionHeading } from "../components/SectionHeading";
import { certificates } from "../data/content";

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-shell">
      <SectionHeading
        eyebrow="Achievements"
        title="Verified programs, practical simulations, and platform-backed progress."
        copy="A certifications surface designed to feel curated rather than stacked. It keeps the credibility visible without flattening the visual experience."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {certificates.map((certificate, index) => (
          <motion.article
            key={`${certificate.title}-${certificate.badge}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.48, delay: index * 0.05 }}
            className="premium-card flex h-full flex-col p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#48c28d,#4d9fff)] text-lg text-white">
                  <i className={`bi ${certificate.icon}`} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 dark:text-white/40">{certificate.platform}</p>
                  <h3 className="mt-2 font-display text-xl leading-tight text-zinc-950 dark:text-white">{certificate.title}</h3>
                </div>
              </div>
              <span className="rounded-full border border-black/10 bg-black/5 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:border-white/10 dark:bg-white/5 dark:text-white/48">
                {certificate.badge}
              </span>
            </div>
            <p className="mt-5 flex-1 text-sm leading-7 text-zinc-600 dark:text-white/64">{certificate.description}</p>
            <div className="mt-6">
              <MagneticButton href={certificate.href} secondary>
                {certificate.cta}
              </MagneticButton>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
