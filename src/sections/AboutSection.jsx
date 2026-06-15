import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { aboutTimeline } from "../data/content";

const aboutPrinciples = [
  ["Secure by default", "I think about permissions, data handling, user trust, and failure states early instead of adding security language at the end."],
  ["Useful before flashy", "Interfaces should help someone decide, act, or understand faster. Animation and visuals only matter when they support that job."],
  ["AI with context", "LLMs, RAG, agents, and automation work best when the surrounding workflow is clear, reviewed, and grounded in real information."]
];

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About me"
        title="The work is not just the tool. It is the system around it."
        copy="I care about technology that is useful, secure, and well-structured. My current direction blends web development, databases, networking, security fundamentals, AI agents, RAG, and automation."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="about-manifesto premium-card p-8"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-zinc-500 dark:text-white/40">Working signal</p>
          <p className="mt-6 text-2xl leading-[1.5] text-zinc-900 dark:text-white">
            I like solving technical problems across the full stack: clean interfaces, readable code, useful databases, secure thinking, and automation that makes work faster.
          </p>

          <div className="mt-8 grid gap-3">
            {aboutPrinciples.map(([title, copy]) => (
              <div key={title} className="about-principle">
                <span>{title}</span>
                <p>{copy}</p>
              </div>
            ))}
          </div>
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
                <span className="h-3 w-3 rounded-full bg-[linear-gradient(135deg,#22d3ee,#34d399)]" />
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
