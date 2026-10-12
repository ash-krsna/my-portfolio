import { motion } from "framer-motion";
import { projects } from "../data/content";

export function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const supportingProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="section-band projects-section px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">01 Selected Work</p>
            <h2 className="section-title mt-4">Verified projects with practical software evidence.</h2>
          </div>
          <p className="section-copy">
            A small selection is stronger than a long gallery. These projects were chosen because the source, stack, and
            live or demo links can be inspected.
          </p>
        </div>

        <div className="project-plates mt-12">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.58, delay: index * 0.05 }}
              className="project-plate project-plate-featured"
            >
              <div className="plate-index">0{index + 1}</div>

              <div className="plate-main">
                <div className="plate-meta-row">
                  <span>{project.category}</span>
                  <strong>{project.status}</strong>
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-case-grid">
                  <div className="project-case-block">
                    <span>Problem</span>
                    <p>{project.problem}</p>
                  </div>
                  <div className="project-case-block">
                    <span>Solution</span>
                    <p>{project.solution}</p>
                  </div>
                  <div className="project-case-block">
                    <span>Implementation</span>
                    <p>{project.implementation}</p>
                  </div>
                  <div className="project-case-block">
                    <span>Proof</span>
                    <p>{project.proof}</p>
                  </div>
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
                {project.visual ? (
                  <div className="project-visual" aria-label={`${project.title} visual summary`}>
                    <div className="project-visual-head">
                      <span>{project.visual.title}</span>
                      <i className={`bi ${project.icon}`} />
                    </div>
                    <div className="project-visual-lines">
                      {project.visual.rows.map((row) => (
                        <span key={row}>{row}</span>
                      ))}
                    </div>
                  </div>
                ) : null}
                <div>
                  <span>Build</span>
                  <strong>{project.period}</strong>
                </div>
                <div className="project-actions">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer" className="link-button">
                      <i className="bi bi-github" />
                      Source
                    </a>
                  ) : null}
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noreferrer" className="link-button link-button-bright">
                      <i className="bi bi-box-arrow-up-right" />
                      Live
                    </a>
                  ) : (
                    <span className="link-button link-button-muted">
                      <i className="bi bi-hourglass-split" />
                      Link pending
                    </span>
                  )}
                </div>
              </aside>
            </motion.article>
          ))}
        </div>

        <div className="secondary-projects mt-8">
          {supportingProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="project-plate is-compact"
            >
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

              <div className="compact-project-actions">
                <span className="project-icon">
                  <i className={`bi ${project.icon}`} />
                </span>
                <div className="project-actions">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer" className="link-button">
                      <i className="bi bi-github" />
                      Source
                    </a>
                  ) : null}
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noreferrer" className="link-button link-button-bright">
                      <i className="bi bi-box-arrow-up-right" />
                      Live
                    </a>
                  ) : (
                    <span className="link-button link-button-muted">
                      <i className="bi bi-hourglass-split" />
                      Link pending
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
