import { motion } from "framer-motion";
import { identity, resumeHighlights } from "../data/content";

export function Resume() {
  return (
    <section id="resume" className="section-band px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div>
          <p className="section-kicker">Resume</p>
          <h2 className="section-title mt-4">A compact preview before the download.</h2>
          <p className="section-copy mt-6">
            The resume should support the website, not repeat it. This section gives recruiters a fast summary and a direct
            file download.
          </p>
          <a href={identity.resume} download className="btn btn-primary mt-8">
            <i className="bi bi-file-earmark-arrow-down" />
            Download Resume
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, rotateX: 8, y: 24 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="resume-preview"
        >
          <div className="resume-header">
            <div>
              <span>Resume Preview</span>
              <h3>{identity.name}</h3>
              <p>{identity.role}</p>
            </div>
            <i className="bi bi-filetype-pdf" />
          </div>

          <div className="resume-lines">
            {resumeHighlights.map((highlight) => (
              <div key={highlight}>
                <i className="bi bi-check2-circle" />
                <p>{highlight}</p>
              </div>
            ))}
          </div>

          <div className="resume-footer">
            <span>{identity.location}</span>
            <span>{identity.email}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
