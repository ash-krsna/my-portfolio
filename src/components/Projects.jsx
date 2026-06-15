import { motion } from "framer-motion";
import { projects } from "../data/content";

export function Projects() {
  return (
    <section id="projects" className="section-band px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="section-kicker">Featured Projects</p>
            <h2 className="section-title mt-4">Project proof for recruiters who scan fast.</h2>
          </div>
          <p className="section-copy max-w-xl">
            Each build is presented with a purpose, tech stack, and outcome so the work feels practical instead of just
            decorative.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.58, delay: index * 0.05 }}
              className={`project-card ${index === 0 ? "lg:row-span-2" : ""}`}
            >
              <div className="project-card-top">
                <span className="project-icon">
                  <i className={`bi ${project.icon}`} />
                </span>
                <span className="project-category">{project.category}</span>
              </div>

              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-impact">{project.impact}</p>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="stack-chip">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={project.github} target="_blank" rel="noreferrer" className="link-button">
                  <i className="bi bi-github" />
                  GitHub
                </a>
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noreferrer" className="link-button link-button-bright">
                    <i className="bi bi-box-arrow-up-right" />
                    Live
                  </a>
                ) : (
                  <span className="link-button link-button-muted">
                    <i className="bi bi-hourglass-split" />
                    Demo pending
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
