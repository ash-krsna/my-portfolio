import { AnimatePresence, motion } from "framer-motion";

export function Lightbox({ item, onClose }) {
  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          className="fixed inset-0 z-[95] flex items-center justify-center bg-black/85 p-4 backdrop-blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={item.src} alt={item.title} className="max-h-[78vh] w-full object-cover" />
            <figcaption className="flex items-center justify-between gap-4 p-5 text-white">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/50">{item.category}</p>
                <p className="mt-2 text-lg">{item.title}</p>
              </div>
              <button type="button" onClick={onClose} className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/75">
                Close
              </button>
            </figcaption>
          </motion.figure>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
