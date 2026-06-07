import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

function NotebookPage({ item, index, total }) {
  const pageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start 88%", "end 34%"]
  });
  const rotateY = useTransform(scrollYProgress, [0, 0.42, 1], [-42, 0, 3]);
  const y = useTransform(scrollYProgress, [0, 0.42, 1], [28, 0, -10]);
  const opacity = useTransform(scrollYProgress, [0, 0.22, 1], [0.28, 1, 1]);
  const icon = noteIcons[index % noteIcons.length];

  return (
    <motion.article
      ref={pageRef}
      style={{
        rotateY,
        y,
        opacity,
        transformPerspective: 1300,
        transformOrigin: "left center",
        zIndex: total - index
      }}
      className="notebook-page note-card p-6 md:p-7"
    >
      <div className="note-page-meta">
        <span className="note-page-number">Field note {String(index + 1).padStart(2, "0")}</span>
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
        title="A notebook-style space for my technology observations, security ideas, and AI-era product thinking."
        copy="These are working notes on fast-moving tech: what I am watching, what feels risky, and what kind of interface thinking could make the next wave of products easier to trust."
      />

      <div className="notebook-shell mt-12">
        <div className="notebook-spine" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, index) => (
            <span key={index} className="notebook-ring" />
          ))}
        </div>

        <div className="notebook-cover">
          <div>
            <p className="notebook-kicker">Tech field notebook</p>
            <h3>Current watchlist</h3>
          </div>
          <div className="notebook-signal-grid" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="notebook-pages">
          {notesSpaceItems.map((item, index) => (
            <NotebookPage key={item.title} item={item} index={index} total={notesSpaceItems.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
