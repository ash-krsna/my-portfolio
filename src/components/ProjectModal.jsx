import { AnimatePresence, motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";

export function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 p-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 32, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0b1220] p-5 text-white shadow-2xl md:p-8"
          >
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="space-y-5">
                <div className="mb-2 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-white/45">{project.label}</p>
                    <h3 className="mt-3 font-display text-3xl md:text-4xl">{project.title}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70"
                  >
                    Close
                  </button>
                </div>

                <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0f172a]">
                  <img src={project.cover} alt={`${project.title} cover`} className="h-64 w-full object-cover object-center" />
                  <div className="grid gap-3 border-t border-white/10 bg-white/[0.03] p-4 sm:grid-cols-3">
                    {project.metrics?.map((metric) => (
                      <div key={metric} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/78">
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-base leading-8 text-white/72">{project.description}</p>

                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/60">
                  {project.impact}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/78">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">Problem</p>
                  <p className="mt-3 text-sm leading-7 text-white/76">{project.caseStudy.problem}</p>
                </div>

                <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">What I identified</p>
                  <div className="mt-4 space-y-3">
                    {project.caseStudy.analysis.map((item) => (
                      <div key={item} className="flex gap-3 text-sm leading-7 text-white/72">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">Solution</p>
                  <p className="mt-3 text-sm leading-7 text-white/76">{project.caseStudy.solution}</p>
                </div>

                <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">Outcome</p>
                  <div className="mt-4 space-y-3">
                    {project.caseStudy.outcomes.map((item) => (
                      <div key={item} className="flex gap-3 text-sm leading-7 text-white/72">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.links.map((link) => (
                    <MagneticButton key={link.href} href={link.href}>
                      {link.label}
                    </MagneticButton>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
