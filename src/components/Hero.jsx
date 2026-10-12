import { motion } from "framer-motion";
import { heroDetails, heroSignals, identity, profileVitals } from "../data/content";
import { WordReveal } from "./WordReveal";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

export function Hero() {
  const [roleLead, roleRest] = identity.role.split(" ");

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

      <div className="hero-inner mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col justify-center gap-8 pb-14">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="hero-issue-line"
        >
          <motion.span variants={fadeUp}>{identity.name}</motion.span>
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

            <motion.h1 variants={fadeUp} className="hero-name font-display font-extrabold" aria-label={identity.role}>
              <span aria-hidden="true">{roleLead}</span>
              <span aria-hidden="true">{roleRest}</span>
            </motion.h1>

            <WordReveal as="p" text={identity.headline} className="hero-role" delay={0.22} stagger={0.045} />

            <WordReveal
              as="p"
              text="I build practical web applications and backend solutions using Python, Flask, databases, and APIs. I'm an early-career developer looking for opportunities to build useful software, solve real problems, and grow with a development team."
              className="hero-intro"
              delay={0.35}
              stagger={0.018}
              duration={0.45}
            />

            <motion.div variants={fadeUp} className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <i className="bi bi-grid-1x2" />
                View My Work
              </a>
              <a href={`mailto:${identity.email}`} className="btn btn-ghost">
                <i className="bi bi-send" />
                Get in Touch
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
                <span>Profile</span>
                <span>{identity.initials} / 01</span>
              </div>
              <div className="profile-portrait">
                <img src="/media/photos/profile-main.jpeg" alt={`${identity.name} profile portrait`} />
                <div className="portrait-overlay">
                  <span>{identity.headline}</span>
                  <strong>{identity.name}, based in Pune and open to junior software roles.</strong>
                </div>
              </div>
            </div>

            <div className="now-panel">
              <div className="now-panel-head">
                <span>Current focus</span>
                <strong>Practical backend and web development</strong>
              </div>
              <div className="now-list">
                {profileVitals.map((item) => (
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
            {heroDetails.map((detail) => (
              <div key={detail.label}>
                <span>{detail.label}</span>
                <strong>{detail.value}</strong>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
