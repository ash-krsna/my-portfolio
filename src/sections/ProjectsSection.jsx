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
        title="Selected builds with cleaner structure, stronger UI logic, and practical product direction."
        copy="A tighter set of projects focused on interface clarity, useful workflows, and frontend decisions that feel grounded instead of ornamental."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-12">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className={`project-card premium-card group relative overflow-hidden p-5 ${
              project.featured ? "md:col-span-2 xl:col-span-6" : "xl:col-span-3"
            }`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.16),transparent_24%)] opacity-80" />
            <div className="relative z-10">
              <span className="inline-flex rounded-full border border-black/10 bg-black/5 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:border-white/10 dark:bg-white/5 dark:text-white/50">
                {project.label}
              </span>
              <h3 className="mt-4 font-display text-xl text-zinc-950 dark:text-white md:text-[1.75rem]">{project.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-white/64">{project.description}</p>
              <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-white/52">{project.impact}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-xs text-zinc-700 dark:border-white/10 dark:bg-white/6 dark:text-white/72">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-2.5 text-sm font-semibold text-zinc-900 transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:text-white"
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
