import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { skills } from "../data/content";

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="A stack shaped by frontend precision, visual curiosity, and future storytelling."
        copy="These are the capabilities I want visitors to feel immediately: practical engineering, product taste, and a growing creative edge."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="premium-card p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-zinc-500 dark:text-white/40">Floating strengths</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["React", "Motion", "UI Polish", "Storytelling", "Security", "Photography", "Design Taste", "Creative Code"].map((item) => (
              <span key={item} className="rounded-full border border-black/10 bg-black/5 px-4 py-2 text-sm text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-white/72">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="premium-card space-y-5 p-8">
          {skills.map((skill, index) => (
            <div key={skill.name}>
              <div className="mb-3 flex items-center justify-between text-sm text-zinc-700 dark:text-white/72">
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="h-3 rounded-full bg-black/6 dark:bg-white/8">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.07 }}
                  className="h-full rounded-full bg-[linear-gradient(90deg,#ff5f5f,#d6b57c,#dce7ff)]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
