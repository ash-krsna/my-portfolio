import { motion } from "framer-motion";
import { MagneticButton } from "../components/MagneticButton";
import { SectionHeading } from "../components/SectionHeading";

export function ResumeSection() {
  return (
    <section id="resume" className="section-shell">
      <SectionHeading
        eyebrow="Resume"
        title="A lightweight resume surface, with the deeper story still living in the work."
        copy="Until a final PDF is dropped in, this gives visitors a polished snapshot of experience, direction, and a downloadable profile summary."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="premium-card p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-white/40">Downloadable profile</p>
          <h3 className="mt-5 font-display text-3xl text-zinc-950 dark:text-white">Resume snapshot</h3>
          <p className="mt-4 text-base leading-8 text-zinc-600 dark:text-white/64">
            Includes a concise written summary, core skills, current experience context, and primary project references.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <MagneticButton href="/media/documents/akash-bhagwat-resume.txt" download>
              Download Resume
            </MagneticButton>
            <MagneticButton href="#contact" secondary>
              Request Full Resume
            </MagneticButton>
          </div>
        </motion.div>

        <div className="grid gap-4">
          {[
            ["Aptara", "Trainee HTML Programmer", "Accessibility-aware digital content workflows and structured document production."],
            ["Current Growth", "React + Product Systems", "Building toward stronger component systems, APIs, automation, and polished frontend execution."],
            ["Next Horizon", "Cinema + Story Worlds", "Preparing to expand from still frames into cinematic edits and visual storytelling."],
          ].map(([company, role, copy]) => (
            <div key={company} className="premium-card p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 dark:text-white/40">{company}</p>
              <h4 className="mt-3 font-display text-2xl text-zinc-950 dark:text-white">{role}</h4>
              <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-white/62">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
