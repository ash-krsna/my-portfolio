import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { notesSpaceItems } from "../data/content";

const noteIcons = [
  "bi-stars",
  "bi-shield-check",
  "bi-cpu",
  "bi-broadcast-pin",
  "bi-diagram-3",
  "bi-lock",
  "bi-lightning-charge",
  "bi-robot"
];

function NoteCard({ item, index }) {
  const icon = noteIcons[index % noteIcons.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.42, delay: index * 0.04 }}
      className="simple-note-card note-card p-6 md:p-7"
    >
      <div className="note-page-meta">
        <span className="note-page-number">Note {String(index + 1).padStart(2, "0")}</span>
        <span className="note-status">{item.status}</span>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <span className="note-icon">
          <i className={`bi ${icon}`} />
        </span>
        <span className="note-topic">{item.topic}</span>
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
  );
}

export function NotesSpaceSection() {
  return (
    <section id="notes" className="section-shell notes-space-section">
      <div className="notes-circuit-field" aria-hidden="true">
        <span className="notes-circuit-line notes-circuit-line--one" />
        <span className="notes-circuit-line notes-circuit-line--two" />
        <span className="notes-circuit-node notes-circuit-node--one" />
        <span className="notes-circuit-node notes-circuit-node--two" />
        <span className="notes-circuit-chip">
          <i className="bi bi-cpu" />
        </span>
      </div>

      <SectionHeading
        eyebrow="My notes space"
        title="A simple scrollable space for my technology observations, security ideas, and AI-era product thinking."
        copy="These are working notes on fast-moving tech: what I am watching, what feels risky, and what kind of interface thinking could make the next wave of products easier to trust."
      />

      <div className="notes-scroll-shell mt-12">
        <div className="notes-scroll-header">
          <div>
            <p className="notes-scroll-kicker">Tech notes</p>
            <h3>Current watchlist</h3>
          </div>
          <span className="notes-scroll-count">{notesSpaceItems.length} notes</span>
        </div>

        <div className="notes-scroll-list">
          {notesSpaceItems.map((item, index) => (
            <NoteCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
