import { motion } from "framer-motion";
import { heroSignals, identity, impactMetrics } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

export function Hero() {
  return (
    <section id="home" className="hero-section relative min-h-screen overflow-hidden px-4 pt-28 sm:px-6 lg:pt-28">
      <div className="hero-grid-layer" />
      <motion.div
        className="hero-glow hero-glow-one"
        animate={{ x: [0, 24, -10, 0], y: [0, -18, 14, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-glow hero-glow-two"
        animate={{ x: [0, -18, 18, 0], y: [0, 18, -12, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <motion.div variants={fadeUp} className="status-badge mb-5">
            <span className="status-dot" />
            {identity.status}
          </motion.div>

          <motion.p variants={fadeUp} className="mb-4 text-sm font-bold uppercase text-cyan-200/70">
            {identity.location}
          </motion.p>

          <motion.h1 variants={fadeUp} className="hero-name font-display font-extrabold text-white" aria-label="Akash Ohalkar">
            <span aria-hidden="true">Akash</span>
            <span aria-hidden="true">Ohalkar</span>
          </motion.h1>

          <motion.h2 variants={fadeUp} className="mt-5 max-w-4xl text-2xl font-semibold leading-tight text-slate-100 sm:text-3xl">
            Frontend developer building sharp interfaces with a security-aware, data-minded edge.
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            I build responsive web experiences with React.js and JavaScript, strengthen them with Python and SQL fundamentals,
            and keep growing into cyber security so the products I create feel useful, trustworthy, and recruiter-ready.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6 flex flex-col gap-3 sm:flex-row">
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

          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
            {heroSignals.map((signal) => (
              <span key={signal} className="signal-chip">
                {signal}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.16, ease: "easeOut" }}
          className="relative z-10 mx-auto w-full max-w-[31rem]"
        >
          <div className="profile-shell">
            <div className="profile-topline">
              <span>Profile Signal</span>
              <span>2026</span>
            </div>
            <div className="profile-portrait">
              <img src="/media/photos/profile-main.jpeg" alt="Akash Ohalkar profile portrait" />
              <div className="portrait-overlay">
                <span>Frontend | Python | SQL | Cyber Security</span>
                <strong>Available for internships and junior developer roles</strong>
              </div>
            </div>
          </div>

          <div className="floating-terminal">
            <div className="terminal-dots">
              <span />
              <span />
              <span />
            </div>
            <p>
              <span>$</span> build-profile --focus react python sql security
            </p>
            <p>
              <span>{">"}</span> recruiter journey: identity / proof / projects / contact
            </p>
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
