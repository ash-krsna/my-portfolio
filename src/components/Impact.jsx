import { motion } from "framer-motion";
import { impactMetrics } from "../data/content";

export function Impact() {
  return (
    <section id="impact" className="section-band proof-section px-4 py-24 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">02 Proof</p>
            <h2 className="section-title mt-4">Signals that matter before a recruiter opens GitHub.</h2>
          </div>
          <p className="section-copy">
            The numbers stay simple and honest. They are meant to show readiness, direction, and public proof without
            overselling the stage of the journey.
          </p>
        </div>

        <div className="impact-grid mt-10">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={`${metric.value}-${metric.label}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="metric-card"
            >
              <div className="metric-card-head">
                <span>{metric.label}</span>
                <small>0{index + 1}</small>
              </div>
              <strong>{metric.value}</strong>
              <p>{metric.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
