import { useState } from 'react'
import { AccordionItem } from '../components/AccordionItem'
import { SectionHeading } from '../components/SectionHeading'
import { experiences } from '../data/experiences'

export function ExperienceSection() {
  const [openExperience, setOpenExperience] = useState<string>(experiences[0].company)

  return (
    <section id="experiencia" className="content-section">
      <SectionHeading
        eyebrow="Experiência"
        title="Minha trajetória em sistemas corporativos, integrações e evolução de plataformas."
      />

      <div className="accordion-group" aria-label="Experiência profissional">
        {experiences.map((experience) => {
          const isOpen = openExperience === experience.company

          return (
            <AccordionItem
              key={`${experience.company}-${experience.role}`}
              id={experience.company}
              title={experience.company}
              subtitle={experience.role}
              isOpen={isOpen}
              onToggle={() =>
                setOpenExperience((current) =>
                  current === experience.company ? '' : experience.company,
                )
              }
            >
              <div className="experience-details">
                <div className="timeline-header compact">
                  <span>{experience.role}</span>
                  <time>{experience.period}</time>
                </div>

                <div className="experience-body">
                  {experience.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <ul className="highlight-list">
                  {experience.highlights.map((item) => (
                    <li key={item}>{item}</li>
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
