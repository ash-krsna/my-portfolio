import { motion } from "framer-motion";
import { skillGroups } from "../data/content";

export function Skills() {
  return (
    <section id="skills" className="section-band section-band-deep px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title mt-4">The stack is focused, practical, and growing in the right direction.</h2>
          <p className="section-copy mt-6">
            I group my skills by the kind of work they help me do: build clean interfaces, connect data, understand backend
            flows, use developer tools, and keep learning security fundamentals.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="skill-card"
            >
              <div className="skill-icon">
                <i className={`bi ${group.icon}`} />
              </div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
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
