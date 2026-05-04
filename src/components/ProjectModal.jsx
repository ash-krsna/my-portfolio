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
            className="w-full max-w-3xl rounded-[2rem] border border-white/10 bg-[#0d0d12] p-8 text-white shadow-2xl"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/45">{project.label}</p>
                <h3 className="mt-3 font-display text-4xl">{project.title}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70"
              >
                Close
              </button>
            </div>
            <p className="text-lg leading-8 text-white/72">{project.description}</p>
            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/60">
              {project.impact}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/78">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              {project.links.map((link) => (
                <MagneticButton key={link.href} href={link.href}>
                  {link.label}
                </MagneticButton>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
