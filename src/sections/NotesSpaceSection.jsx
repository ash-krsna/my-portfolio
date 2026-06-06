import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { notesSpaceItems } from "../data/content";

export function NotesSpaceSection() {
  return (
    <section id="notes" className="section-shell">
      <SectionHeading
        eyebrow="My notes space"
        title="Handwritten-style thoughts on technology, security, AI, and product direction."
        copy="A separate space for my working notes: quick observations, current technology signals, what I think is changing, and how I would approach those ideas as a frontend developer."
      />

      <div className="notes-grid mt-12 grid gap-5 xl:grid-cols-2">
        {notesSpaceItems.map((item, index) => (
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
