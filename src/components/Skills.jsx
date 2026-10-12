import { motion } from "framer-motion";
import { skillGroups } from "../data/content";

export function Skills() {
  return (
    <section id="skills" className="section-band toolkit-section px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">02 Technical Skills</p>
            <h2 className="section-title mt-4">A focused stack for junior developer work.</h2>
          </div>
          <p className="section-copy">
            The stack is grouped by where each technology fits: backend, databases, frontend, tooling, and current
            learning. No progress bars, no inflated percentages.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="skill-card"
            >
              <div className="skill-card-head">
                <div className="skill-icon">
                  <i className={`bi ${group.icon}`} />
                </div>
                <span>0{index + 1}</span>
              </div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="skill-chip-list">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
