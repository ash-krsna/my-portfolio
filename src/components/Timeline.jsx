import { motion } from "framer-motion";
import { experienceItems } from "../data/content";

export function Timeline() {
  return (
    <section id="experience" className="section-band journey-section px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="section-kicker">04 Experience</p>
          <h2 className="section-title mt-4">Work habits, project practice, and technical growth.</h2>
          <p className="section-copy mt-6">
            This keeps the timeline honest: current Aptara experience, independent software projects, and the learning
            loop behind junior developer roles.
          </p>
        </div>

        <div className="timeline">
          {experienceItems.map((item, index) => (
            <motion.article
              key={`${item.date}-${item.title}`}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="timeline-item"
            >
              <div className="timeline-marker">
                <i className={`bi ${item.icon}`} />
              </div>
              <div>
                <span>{item.date}</span>
                <h3>{item.title}</h3>
                <strong className="timeline-org">{item.org}</strong>
                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
