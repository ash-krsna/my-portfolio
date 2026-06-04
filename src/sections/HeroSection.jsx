import { motion } from "framer-motion";
import { MagneticButton } from "../components/MagneticButton";
import { heroHighlights, heroStats, heroTerminalLines, socialLinks } from "../data/content";

export function HeroSection() {
  return (
    <section id="home" className="hero-shell relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_16%_18%,rgba(41,182,246,0.16),transparent_22%),radial-gradient(circle_at_84%_12%,rgba(45,212,191,0.16),transparent_20%),radial-gradient(circle_at_52%_78%,rgba(99,102,241,0.12),transparent_24%)]" />
      <div className="hero-noise absolute inset-0 -z-10 opacity-40" />

      <div className="mx-auto grid min-h-[84vh] max-w-7xl gap-10 px-4 pb-10 md:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/72 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/60"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(74,222,128,0.8)]" />
            Frontend developer · live products · systems-minded builder
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08 }}
            className="mt-8 max-w-5xl font-display text-5xl font-semibold leading-[0.92] text-zinc-950 dark:text-white md:text-7xl lg:text-[6rem]"
          >
            Building clean,
            <span className="mt-2 block">fast, technical products</span>
            <span className="hero-gradient-title mt-4 block bg-clip-text text-transparent">
              with real project depth.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-white/68"
          >
            I build frontend experiences that feel precise, responsive, and engineered with intent. The focus is modern UI, practical systems, case-study thinking, and live work that visitors can actually explore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.26 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <MagneticButton href="#projects">View Work</MagneticButton>
            <MagneticButton href="/media/documents/akash-ohalkar-resume.pdf" secondary download>
              Resume
            </MagneticButton>
            <MagneticButton href="#hire" secondary>
              Hire Me
            </MagneticButton>
          </motion.div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {heroHighlights.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18 + index * 0.07 }}
                className="hero-chip rounded-2xl px-4 py-3 text-sm text-zinc-700 dark:text-white/72"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 22 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.05, delay: 0.12 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative grid w-full max-w-[35rem] gap-4">
            <div className="grid gap-4 md:grid-cols-[0.88fr_1.12fr]">
              <div className="premium-card overflow-hidden p-3">
                <div className="relative h-full min-h-[24rem] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#08111d]">
                  <img
                    src="/media/photos/profile-latest.jpeg"
                    alt="Akash Bhagwat portrait"
                    className="h-full w-full object-cover object-top"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(7,16,24,0.16),rgba(7,16,24,0.88))]" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-[11px] uppercase tracking-[0.26em] text-white/45">Akash Bhagwat</p>
                    <p className="mt-2 text-base font-semibold">Frontend developer with a stronger systems and product mindset.</p>
                  </div>
                </div>
              </div>

              <div className="hero-console premium-card overflow-hidden p-4 md:p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/42">system status</p>
                </div>

                <div className="mt-4 space-y-3 font-mono text-[13px] leading-6 text-emerald-100/88">
                  {heroTerminalLines.map((line) => (
                    <div key={line} className="flex gap-3">
                      <span className="text-cyan-300">$</span>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {heroStats.map((item) => (
                    <div key={item.label} className="hero-stat rounded-2xl p-4">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-white/42">{item.label}</p>
                      <p className="mt-2 text-base font-semibold text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-[1.08fr_0.92fr]">
              <div className="hero-signal premium-card p-4 md:p-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500 dark:text-white/42">Build signal</p>
                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl border border-black/10 bg-black/[0.03] px-4 py-3 dark:border-white/10 dark:bg-white/[0.04]">
                    <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-white/42">
                      <span>Frontend quality</span>
                      <span>91%</span>
                    </div>
                    <div className="h-2 rounded-full bg-black/8 dark:bg-white/10">
                      <div className="hero-meter h-full w-[91%] rounded-full" />
                    </div>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-black/[0.03] px-4 py-3 dark:border-white/10 dark:bg-white/[0.04]">
                    <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-white/42">
                      <span>Case-study clarity</span>
                      <span>87%</span>
                    </div>
                    <div className="h-2 rounded-full bg-black/8 dark:bg-white/10">
                      <div className="hero-meter h-full w-[87%] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="premium-card p-4 md:p-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500 dark:text-white/42">Connect</p>
                <div className="mt-4 grid gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hero-social inline-flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-zinc-700 transition dark:text-white/74"
                    >
                      <span className="inline-flex items-center gap-2">
                        <i className={`bi ${link.icon}`} />
                        {link.label}
                      </span>
                      <i className="bi bi-arrow-up-right text-xs opacity-60" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
