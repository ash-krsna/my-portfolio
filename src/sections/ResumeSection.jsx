import { motion } from "framer-motion";
import { MagneticButton } from "../components/MagneticButton";
import { SectionHeading } from "../components/SectionHeading";
import { atsKeywords, professionalSummary } from "../data/content";

export function ResumeSection() {
  return (
    <section id="resume" className="section-shell">
      <SectionHeading
        eyebrow="Resume"
        title="A professional summary built for cybersecurity, AI, Python, and software opportunities."
        copy="This section now gives recruiters and hiring platforms a clearer ATS-friendly view of my technical direction, tools, and target roles."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="premium-card p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-white/40">Downloadable profile</p>
          <h3 className="mt-5 font-display text-3xl text-zinc-950 dark:text-white">Resume snapshot</h3>
          <p className="mt-4 text-base leading-8 text-zinc-600 dark:text-white/64">
            BCA graduate and IT professional focused on cybersecurity, AI/ML, Python development, software engineering, IT support, cloud technologies, and technology operations.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <MagneticButton href="/media/documents/akash-ohalkar-resume.pdf" download>
              Download Resume
            </MagneticButton>
            <MagneticButton href="#contact" secondary>
              Request Full Resume
            </MagneticButton>
          </div>
        </motion.div>

        <div className="grid gap-4">
          {[
            ["Core Stack", "Python, SQL, React.js, Flask, MySQL", "Web application development, REST APIs, database management, responsive UI, Git, Linux, and troubleshooting."],
            ["Cybersecurity Track", "Security Fundamentals + Tools", "Ethical hacking, vulnerability assessment, network security, SOC awareness, OWASP Top 10, Nmap, Wireshark, and Burp Suite."],
            ["AI Direction", "LLMs, AI Agents, RAG, and Automation", "Generative AI workflows with LangChain, prompt engineering, vector databases, Ollama, Llama, and AI-powered automation."],
          ].map(([company, role, copy]) => (
            <div key={company} className="premium-card p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 dark:text-white/40">{company}</p>
              <h4 className="mt-3 font-display text-2xl text-zinc-950 dark:text-white">{role}</h4>
              <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-white/62">{copy}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="premium-card p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-white/40">Professional summary</p>
          <div className="mt-6 space-y-4">
            {professionalSummary.map((item) => (
              <p key={item} className="text-base leading-8 text-zinc-600 dark:text-white/68">
                {item}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }} className="premium-card p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-white/40">ATS keywords</p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {atsKeywords.map((keyword) => (
              <span key={keyword} className="rounded-full border border-black/10 bg-black/5 px-3.5 py-2 text-sm text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-white/72">
                {keyword}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
