import { motion } from "framer-motion";
import { MagneticButton } from "../components/MagneticButton";
import { heroHighlights, heroStats, heroTerminalLines, socialLinks } from "../data/content";

const identityRows = [
  { label: "Role", value: "IT Professional" },
  { label: "Focus", value: "Cybersecurity + AI Automation" },
  { label: "Stack", value: "Python | React | Flask | SQL" },
  { label: "Direction", value: "LLMs | RAG | SOC Learning" }
];

export function HeroSection() {
  return (
    <section id="home" className="reference-hero hero-shell relative min-h-screen overflow-hidden pt-36">
      <div className="reference-hero-grid mx-auto grid min-h-[82vh] max-w-[96rem] gap-8 px-4 pb-8 md:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="reference-hero-copy flex flex-col justify-center"
        >
          <p className="reference-hero-line">
            Secure software, AI workflows, and practical systems thinking - built with clear ownership.
          </p>

          <h1 className="reference-name mt-8">
            <span>Akash</span>
            <span>Bhagwat</span>
          </h1>

          <div className="reference-identity-grid mt-8">
            {identityRows.map((item) => (
              <div key={item.label} className="reference-identity-row">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-600 dark:text-white/66 md:text-lg">
            I work across Python, web development, databases, networking, cybersecurity fundamentals, LLMs, RAG, AI agents, and automation. The portfolio is shaped around useful execution: clear interfaces, secure thinking, and technology that can be explained.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <MagneticButton href="#projects">View Work</MagneticButton>
            <MagneticButton href="/media/documents/akash-ohalkar-resume.pdf" secondary download>
              Download Resume
            </MagneticButton>
            <MagneticButton href="#contact" secondary>
              Contact
            </MagneticButton>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.12 }}
          className="reference-portrait-stack relative flex items-center justify-center"
        >
          <div className="reference-scan" aria-hidden="true" />
          <div className="reference-portrait-panel">
            <img src="/media/photos/profile-latest.jpeg" alt="Akash Bhagwat portrait" loading="eager" />
            <div className="reference-portrait-caption">
              <span>Akash Bhagwat</span>
              <strong>Developer | Cybersecurity | AI Systems</strong>
            </div>
          </div>

          <div className="reference-terminal-panel">
            <div className="reference-terminal-top">
              <span />
              <span />
              <span />
              <strong>system trace</strong>
            </div>
            <div className="reference-terminal-lines">
              {heroTerminalLines.slice(0, 5).map((line) => (
                <p key={line}>
                  <span>$</span>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>

      <div className="reference-hero-bottom mx-auto grid max-w-[96rem] gap-3 px-4 pb-10 md:px-6 lg:grid-cols-[1fr_1.2fr_1fr] lg:px-8">
        <div className="reference-highlight-strip">
          {heroHighlights.slice(0, 4).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="reference-stat-strip">
          {heroStats.map((item) => (
            <div key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>

        <div className="reference-social-strip">
          {socialLinks.slice(0, 3).map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              <i className={`bi ${link.icon}`} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
