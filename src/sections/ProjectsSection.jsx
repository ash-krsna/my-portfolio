import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectModal } from "../components/ProjectModal";
import { SectionHeading } from "../components/SectionHeading";
import { projects } from "../data/content";
import { MagneticButton } from "../components/MagneticButton";

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work with product taste, cleaner structure, and room for cinematic ambition."
        copy="Built to feel less like a card dump and more like a controlled showcase. Each project can open into a short case-study view instead of asking visitors to guess why it matters."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-12">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className={`premium-card group relative overflow-hidden p-7 ${
              project.featured ? "md:col-span-2 xl:col-span-7" : "xl:col-span-5"
            }`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,77,79,0.18),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(214,181,124,0.18),transparent_26%)] opacity-70" />
            <div className="relative z-10">
              <span className="inline-flex rounded-full border border-black/10 bg-black/5 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:border-white/10 dark:bg-white/5 dark:text-white/50">
                {project.label}
              </span>
              <h3 className="mt-5 font-display text-3xl text-zinc-950 dark:text-white md:text-4xl">{project.title}</h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600 dark:text-white/64">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm text-zinc-700 dark:border-white/10 dark:bg-white/6 dark:text-white/72">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:text-white"
                >
                  Open Case Study
                  <i className="bi bi-arrow-up-right" />
                </button>
                {project.links[0] ? <MagneticButton href={project.links[0].href}>{project.links[0].label}</MagneticButton> : null}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
