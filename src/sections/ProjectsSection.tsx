import { useState } from 'react'
import { AccordionItem } from '../components/AccordionItem'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/projects'

export function ProjectsSection() {
  const [openProject, setOpenProject] = useState<string>(projects[0].title)

  return (
    <section id="projetos" className="content-section">
      <SectionHeading
        eyebrow="Projetos"
        title="Projetos que refletem meu trabalho com produto, dados e engenharia."
        description="Cards com foco em clareza, contexto técnico e impacto prático da solução."
      />

      <div className="accordion-group" aria-label="Projetos em destaque">
        {projects.map((project) => {
          const isOpen = openProject === project.title

          return (
            <AccordionItem
              key={project.title}
              id={project.title}
              title={project.title}
              subtitle="Projeto"
              isOpen={isOpen}
              onToggle={() =>
                setOpenProject((current) => (current === project.title ? '' : project.title))
              }
            >
              <div className="project-details">
                <p>{project.summary}</p>

                <div className="project-stack" aria-label={`Stack de ${project.title}`}>
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <ul className="feature-list">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </AccordionItem>
          )
        })}
      </div>
    </section>
  )
}
