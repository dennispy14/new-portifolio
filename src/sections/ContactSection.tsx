import { SectionHeading } from '../components/SectionHeading'
import { contactLinks } from '../data/contacts'

export function ContactSection() {
  return (
    <section id="contato" className="content-section contact-section">
      <SectionHeading
        eyebrow="Contato"
        title="Vamos conversar sobre produto, tecnologia e soluções digitais."
        description="Estou aberto a oportunidades, colaborações e desafios que envolvam engenharia, arquitetura e IA aplicada."
      />

      <div className="contact-grid">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            className="contact-card"
          >
            <span>{link.label}</span>
            <strong>{link.description}</strong>
          </a>
        ))}
      </div>
    </section>
  )
}
