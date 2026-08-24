import { SectionHeading } from '../components/SectionHeading'
import { certifications, education } from '../data/education'

export function EducationSection() {
  return (
    <section id="formacao" className="content-section">
      <SectionHeading
        eyebrow="Formação & certificações"
        title="Base acadêmica e complementar para uma atuação técnica e estratégica."
      />

      <div className="education-layout">
        <div className="education-list">
          {education.map((item) => (
            <article key={`${item.institution}-${item.title}`} className="edu-item">
              <div>
                <span>{item.period}</span>
                <h3>{item.title}</h3>
                <strong>{item.institution}</strong>
              </div>
              {item.description ? <p>{item.description}</p> : null}
            </article>
          ))}
        </div>

        <div className="cert-list">
          <h3>Certificações e cursos</h3>
          <ul>
            {certifications.map((item) => (
              <li key={item.name}>
                <span>{item.name}</span>
                <small>{item.issuer}</small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
