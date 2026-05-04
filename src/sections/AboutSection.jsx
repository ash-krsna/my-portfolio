import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { aboutTimeline } from "../data/content";

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About me"
        title="Code with atmosphere. Design with intent. Build with the ambition to direct stories next."
        copy="I care about digital work that feels authored. Not just functional. My path sits between frontend engineering, visual taste, product clarity, and a growing pull toward cinematic storytelling."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="premium-card p-8"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-zinc-500 dark:text-white/40">Personal manifesto</p>
          <p className="mt-6 text-2xl leading-[1.5] text-zinc-900 dark:text-white">
            I want the final mix to be developer precision, visual direction, emotional tone, and the confidence to make work that people remember.
          </p>
        </motion.div>

        <div className="space-y-4">
          {aboutTimeline.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="premium-card flex gap-5 p-6"
            >
              <div className="relative mt-1 flex flex-col items-center">
                <span className="h-3 w-3 rounded-full bg-[linear-gradient(135deg,#ff5f5f,#d6b57c)]" />
                {index !== aboutTimeline.length - 1 ? (
                  <span className="mt-3 h-full w-px bg-black/10 dark:bg-white/10" />
                ) : null}
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 dark:text-white/42">{item.year}</p>
                <h3 className="mt-2 font-display text-2xl text-zinc-950 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-white/62">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
