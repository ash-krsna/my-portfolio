import { motion } from "framer-motion";
import { impactMetrics } from "../data/content";

export function Impact() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="impact-grid">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={`${metric.value}-${metric.label}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className={`metric-card metric-${metric.tone}`}
            >
              <div className="metric-card-head">
                <span>{metric.label}</span>
                <small>0{index + 1}</small>
              </div>
              <strong>{metric.value}</strong>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
