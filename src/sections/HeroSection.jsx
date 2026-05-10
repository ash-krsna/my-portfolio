import { motion } from "framer-motion";
import { MagneticButton } from "../components/MagneticButton";
import { heroHighlights, socialLinks } from "../data/content";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_16%,rgba(255,77,79,0.18),transparent_18%),radial-gradient(circle_at_82%_18%,rgba(155,178,255,0.18),transparent_18%),radial-gradient(circle_at_56%_92%,rgba(145,255,176,0.12),transparent_24%)]" />
      <div className="absolute inset-x-[10%] top-24 -z-10 h-[34rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1),transparent_62%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_64%)]" />

      <div className="mx-auto grid min-h-[82vh] max-w-7xl gap-10 px-4 pb-10 md:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex w-fit rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/60"
          >
            Frontend developer • tech explorer • systems-minded builder
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08 }}
            className="mt-8 max-w-4xl font-display text-5xl font-semibold leading-[0.9] tracking-[-0.04em] text-zinc-950 dark:text-white md:text-7xl lg:text-[6rem]"
          >
            I Build Technical Experiences.
            <span className="mt-4 block bg-[linear-gradient(90deg,#ff6163,#8dd4ff,#9cffaf)] bg-clip-text text-transparent">
              With Code, Systems, and Sharp UI.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-white/66"
          >
            A tech-first portfolio for a developer who cares about clean interfaces, stronger engineering feel, practical builds, Raspberry Pi curiosity, and software that looks thoughtful without losing clarity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <MagneticButton href="#projects">View Work</MagneticButton>
            <MagneticButton href="/media/documents/akash-ohalkar-resume.pdf" secondary download>
              Resume
            </MagneticButton>
            <MagneticButton href="#contact" secondary>
              Contact
            </MagneticButton>
          </motion.div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {heroHighlights.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18 + index * 0.07 }}
                className="rounded-2xl border border-black/8 bg-black/[0.03] px-4 py-3 text-sm text-zinc-600 dark:border-white/10 dark:bg-white/6 dark:text-white/66"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 22 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.14 }}
          className="relative flex items-center justify-center"
        >
          <div className="glass-panel relative w-full max-w-[32rem] overflow-hidden rounded-[2rem] p-3 shadow-premium">
            <div className="absolute inset-3 rounded-[1.5rem] bg-hero-grid bg-[length:2.6rem_2.6rem] opacity-[0.08]" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#08090f]">
              <img
                src="/media/photos/profile-main.jpeg"
                alt="Akash Bhagwat portrait"
                className="h-[31rem] w-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(8,9,15,0.15),rgba(8,9,15,0.88))]" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <p className="text-xs uppercase tracking-[0.28em] text-white/50">Now building</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.3rem] border border-white/10 bg-white/6 p-4 backdrop-blur">
                    <p className="text-sm text-white/60">Focus</p>
                    <p className="mt-2 text-base font-semibold">Frontend engineering + UI polish</p>
                  </div>
                  <div className="rounded-[1.3rem] border border-white/10 bg-white/6 p-4 backdrop-blur">
                    <p className="text-sm text-white/60">Current curiosity</p>
                    <p className="mt-2 text-base font-semibold">Raspberry Pi, systems, playful builds</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-zinc-700 transition hover:-translate-y-0.5 hover:border-black/20 dark:border-white/10 dark:bg-white/6 dark:text-white/70"
                >
                  <i className={`bi ${link.icon}`} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
