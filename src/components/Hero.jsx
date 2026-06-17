import { motion } from "framer-motion";
import { heroSignals, identity, impactMetrics, issueDetails, nowItems, profileVitals } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

export function Hero() {
  return (
    <section id="home" className="hero-section relative min-h-screen overflow-hidden px-4 pt-28 sm:px-6">
      <div className="hero-grid-layer" />
      <motion.div
        className="hero-glow hero-glow-one"
        animate={{ x: [0, 26, -12, 0], y: [0, -18, 10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-glow hero-glow-two"
        animate={{ x: [0, -18, 18, 0], y: [0, 20, -14, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col justify-center gap-8 pb-14">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="hero-issue-line"
        >
          <motion.span variants={fadeUp}>Portfolio / Developer Profile / 2026</motion.span>
          <motion.span variants={fadeUp}>{identity.location}</motion.span>
        </motion.div>

        <div className="hero-editorial-grid">
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            animate="visible"
            className="hero-copy"
          >
            <motion.div variants={fadeUp} className="status-badge">
              <span className="status-dot" />
              {identity.status}
            </motion.div>

            <motion.h1 variants={fadeUp} className="hero-name font-display font-extrabold" aria-label={identity.name}>
              <span aria-hidden="true">Akash</span>
              <span aria-hidden="true">Ohalkar</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="hero-role">
              {identity.role}
            </motion.p>

            <motion.p variants={fadeUp} className="hero-intro">
              I build sharp, responsive web experiences with a practical developer mindset: clear UI, usable data flows,
              Python and SQL foundations, and a growing cyber security lens. The goal is simple: make software feel useful,
              trustworthy, and ready for real people.
            </motion.p>

            <motion.div variants={fadeUp} className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <i className="bi bi-grid-1x2" />
                View Projects
              </a>
              <a href={identity.resume} className="btn btn-secondary" download>
                <i className="bi bi-download" />
                Download Resume
              </a>
              <a href={`mailto:${identity.email}`} className="btn btn-ghost">
                <i className="bi bi-send" />
                Contact Me
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="hero-signal-row">
              {heroSignals.map((signal) => (
                <span key={signal} className="signal-chip">
                  {signal}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: "easeOut" }}
            className="hero-profile-column"
          >
            <div className="profile-shell">
              <div className="profile-topline">
                <span>Profile Signal</span>
                <span>AO / 01</span>
              </div>
              <div className="profile-portrait">
                <img src="/media/photos/profile-main.jpeg" alt="Akash Ohalkar profile portrait" />
                <div className="portrait-overlay">
                  <span>Frontend / Python / SQL / Cyber Security</span>
                  <strong>Available for internships and junior developer roles</strong>
                </div>
              </div>
            </div>

            <div className="now-panel">
              <div className="now-panel-head">
                <span>Now</span>
                <strong>What I am focused on</strong>
              </div>
              <div className="now-list">
                {nowItems.map((item) => (
                  <div key={item.label}>
                    <span>{item.label}</span>
                    <p>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.35 }}
          className="hero-proof-board"
        >
          <div className="hero-detail-grid">
            {issueDetails.map((detail) => (
              <div key={detail.label}>
                <span>{detail.label}</span>
                <strong>{detail.value}</strong>
              </div>
            ))}
          </div>

          <div className="hero-vitals-grid">
            {profileVitals.map((vital) => (
              <div key={vital.label}>
                <span>{vital.label}</span>
                <strong>{vital.value}</strong>
              </div>
            ))}
          </div>

          <div className="hero-metric-strip">
            {impactMetrics.slice(0, 3).map((metric) => (
              <div key={`${metric.value}-${metric.label}`}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
