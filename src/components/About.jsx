import { motion } from "framer-motion";
import { aboutHighlights, disciplineStrip, focusModes, profileVitals } from "../data/content";

export function About() {
  return (
    <section id="about" className="section-band about-section px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
          className="section-heading-row"
        >
          <div>
            <p className="section-kicker">03 About</p>
            <h2 className="section-title mt-4">A practical developer profile with a clear next step.</h2>
          </div>
          <p className="section-copy">
            I am not presenting myself as a senior engineer. I am an early-career developer with a clear foundation,
            project evidence, and room to grow inside a real team.
          </p>
        </motion.div>

        <div className="marquee-strip" aria-hidden="true">
          <div>
            {[...disciplineStrip, ...disciplineStrip].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="story-panel"
          >
            <p>
              I am Akash Ohalkar, a BCA graduate from Maharashtra and an MCA student building toward junior software
              developer roles. I like work that has a real shape to it: forms that collect the right data, pages that are
              easy to understand, and backend logic that turns ideas into useful workflows.
            </p>
            <p>
              My current center of gravity is Python, Flask, SQL, JavaScript, HTML, and CSS. I can work on the front of a
              site, but I am especially interested in the connection between screen, route, database, and user action.
            </p>
            <p>
              I am also strengthening React, Node.js, and Express at a foundational level. The goal is simple: keep
              improving, build visible proof, and become useful inside a real engineering team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="vitals-panel"
          >
            <div className="vitals-panel-head">
              <span>Vitals</span>
              <strong>Honest profile data</strong>
            </div>
            <div className="vitals-list">
              {profileVitals.map((item) => (
                <div key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {aboutHighlights.map((point, index) => (
            <motion.article
              key={point.label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="proof-card"
            >
              <span>0{index + 1}</span>
              <h3>{point.label}</h3>
              <p>{point.value}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="direction-board mt-8"
        >
          <div className="direction-board-head">
            <span>Working Direction</span>
            <strong>Web apps / Backend / Automation</strong>
          </div>
          <div className="direction-grid">
            {focusModes.map((mode) => (
              <article key={mode.label} className="direction-card">
                <div className="direction-icon">
                  <i className={`bi ${mode.icon}`} />
                </div>
                <span>{mode.label}</span>
                <h3>{mode.title}</h3>
                <p>{mode.copy}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
