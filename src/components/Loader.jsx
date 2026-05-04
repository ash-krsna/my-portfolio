import { AnimatePresence, motion } from "framer-motion";

export function Loader({ visible }) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07070c] text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeOut" } }}
        >
          <div className="space-y-4 text-center">
            <div className="mx-auto h-20 w-20 rounded-full border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_60%),linear-gradient(135deg,#ff4d4f,#09090f)] p-[1px]">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#09090f] font-display text-3xl font-bold">
                A
              </div>
            </div>
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-xs uppercase tracking-[0.45em] text-white/60"
              >
                Loading visual system
              </motion.p>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
