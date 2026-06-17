import { motion } from "framer-motion";
import { projects } from "../data/content";

export function Projects() {
  return (
    <section id="projects" className="section-band projects-section px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">03 Projects</p>
            <h2 className="section-title mt-4">Selected builds, framed like product evidence.</h2>
          </div>
          <p className="section-copy">
            These projects show range: public institution sites, operations workflows, dashboard thinking, computer vision,
            and the portfolio system itself.
          </p>
        </div>

        <div className="project-plates mt-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.58, delay: index * 0.05 }}
              className="project-plate"
            >
              <div className="plate-index">0{index + 1}</div>

              <div className="plate-main">
                <div className="plate-meta-row">
                  <span>{project.category}</span>
                  <strong>{project.status}</strong>
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-impact">
                  <i className="bi bi-lightning-charge" />
                  <p>{project.impact}</p>
                </div>

                <div className="project-stack">
                  <span className="project-stack-label">Tech stack</span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="stack-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="plate-side">
                <span className="project-icon">
                  <i className={`bi ${project.icon}`} />
                </span>
                <div>
                  <span>Build</span>
                  <strong>{project.period}</strong>
                </div>
                <div className="project-actions">
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
              </aside>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
