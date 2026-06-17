import { motion } from "framer-motion";
import { disciplineStrip, focusModes, proofPoints, profileVitals } from "../data/content";

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
            <p className="section-kicker">01 Background</p>
            <h2 className="section-title mt-4">A practical builder with momentum, taste, and patience.</h2>
          </div>
          <p className="section-copy">
            The portfolio is designed to show the way Akash thinks: start with clarity, make the interface useful, connect
            the data, and keep learning the security layer that makes products more trustworthy.
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
              I am Akash Bhagwat, a BCA graduate from Maharashtra building toward frontend and junior developer roles. My
              strongest lane is creating React and JavaScript interfaces that make information easy to scan, actions easy to
              understand, and projects easier to trust.
            </p>
            <p>
              I also enjoy the system side of the work: Python, Flask, SQL, and MySQL help me think beyond the screen into
              records, forms, admin workflows, and useful data. That mix is why my projects include public websites,
              management flows, dashboard concepts, and computer-vision experiments.
            </p>
            <p>
              Cyber security is the direction I am intentionally growing into. I am not pretending to be a senior security
              engineer; I am building the habits early: networking basics, OWASP thinking, Linux practice, and tool-based
              learning with Nmap, Wireshark, and Burp Suite.
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
          {proofPoints.map((point, index) => (
            <motion.article
              key={point.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="proof-card"
            >
              <span>0{index + 1}</span>
              <h3>{point.title}</h3>
              <p>{point.copy}</p>
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
            <strong>Build / Connect / Protect</strong>
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
