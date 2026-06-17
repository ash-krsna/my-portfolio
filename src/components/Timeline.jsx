import { motion } from "framer-motion";
import { journeyItems } from "../data/content";

export function Timeline() {
  return (
    <section id="journey" className="section-band journey-section px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="section-kicker">04 Journey</p>
          <h2 className="section-title mt-4">Through the years, the signal gets sharper.</h2>
          <p className="section-copy mt-6">
            The path is not inflated. It shows a real growth curve: education, workplace discipline, public projects, and
            a steady move toward security-aware development.
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
