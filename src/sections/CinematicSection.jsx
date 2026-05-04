import { motion } from "framer-motion";
import { MagneticButton } from "../components/MagneticButton";

export function CinematicSection() {
  return (
    <section className="section-shell">
      <div className="relative overflow-hidden rounded-[2.4rem] border border-black/10 bg-[#09090f] px-6 py-16 text-white shadow-premium md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,77,79,0.22),transparent_22%),radial-gradient(circle_at_80%_40%,rgba(214,181,124,0.2),transparent_18%),linear-gradient(135deg,#050507,#0c0d16_45%,#13131c)]" />
        <div className="absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]">
          <div className="absolute -left-20 top-10 h-80 w-32 rotate-[14deg] bg-white/10 blur-3xl" />
          <div className="absolute right-0 top-24 h-96 w-24 -rotate-[18deg] bg-[#ffb74a]/20 blur-3xl" />
        </div>
        <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_0.45fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/45">Coming soon</p>
            <h2 className="mt-5 font-display text-5xl leading-[0.92] md:text-7xl">Cinematic Videos</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
              I&apos;m entering the world of visual storytelling. Short films, cinematic edits, emotion-driven visuals, and creative journeys are coming next.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton href="#gallery">See My Frames</MagneticButton>
              <MagneticButton href="https://www.instagram.com/duskveil_______/" secondary>
                Follow The Journey
              </MagneticButton>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <button type="button" className="group relative flex h-44 w-44 items-center justify-center rounded-full border border-white/12 bg-white/6 backdrop-blur-xl">
              <span className="absolute inset-0 animate-ping rounded-full bg-white/10" />
              <span className="absolute inset-4 rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_65%)]" />
              <span className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl text-zinc-950 shadow-2xl transition group-hover:scale-110">
                <i className="bi bi-play-fill" />
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
