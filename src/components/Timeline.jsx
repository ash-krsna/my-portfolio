import { motion } from "framer-motion";
import { journeyItems } from "../data/content";

export function Timeline() {
  return (
    <section id="journey" className="section-band section-band-deep px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="section-kicker">Experience / Journey</p>
          <h2 className="section-title mt-4">A clear path from study to shipped work.</h2>
          <p className="section-copy mt-6">
            The journey is not inflated. It shows the real growth curve: education, workplace discipline, portfolio
            projects, and a steady move toward security-aware development.
          </p>
        </div>

        <div className="timeline">
          {journeyItems.map((item, index) => (
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
                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
