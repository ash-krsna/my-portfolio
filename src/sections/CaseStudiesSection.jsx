import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { perspectiveCaseStudies } from "../data/content";

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="section-shell">
      <SectionHeading
        eyebrow="Case study notes"
        title="How I think about fast-moving tech, product quality, and where good interfaces are heading."
        copy="This section is less about shipped projects and more about technical perspective. I wanted it to feel like handwritten working notes: what I notice, what I think is broken, and how I would approach it."
      />

      <div className="notes-grid mt-12 grid gap-5 xl:grid-cols-2">
        {perspectiveCaseStudies.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24, rotate: index % 2 === 0 ? -1 : 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="note-card p-6 md:p-7"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="note-topic">{item.topic}</span>
              <span className="note-status">{item.status}</span>
            </div>

            <h3 className="note-title mt-5">{item.title}</h3>

            <p className="note-body mt-5">{item.note}</p>

            <div className="note-section mt-6">
              <p className="note-label">What I see</p>
              <p className="note-body">{item.problem}</p>
            </div>

            <div className="note-section mt-5">
              <p className="note-label">What I would do</p>
              <p className="note-body">{item.solution}</p>
            </div>

            <div className="note-section mt-5">
              <p className="note-label">My perspective</p>
              <p className="note-body">{item.perspective}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
