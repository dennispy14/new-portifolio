import { useState, type CSSProperties } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { splitTechnologies, technologies } from '../data/technologies'
import type { Technology } from '../types'

function TechnologyItem({ tech, duplicate = false }: { tech: Technology; duplicate?: boolean }) {
  const [iconFailed, setIconFailed] = useState(false)

  return (
    <li
      className="tech-item"
      style={{ '--tech-accent': tech.accent } as CSSProperties}
      aria-hidden={duplicate || undefined}
    >
      <div className="tech-icon-shell">
        {(!tech.icon && !tech.iconUrl || iconFailed) && (
          <span className="tech-glyph">{tech.glyph}</span>
        )}
        {(tech.icon || tech.iconUrl) && !iconFailed && (
          <img
            className="tech-icon"
            src={tech.iconUrl ?? `https://cdn.simpleicons.org/${tech.icon}/${tech.accent.slice(1)}`}
            alt=""
            loading="lazy"
            decoding="async"
            onError={(event) => {
              event.currentTarget.style.display = 'none'
              setIconFailed(true)
            }}
          />
        )}
      </div>
      <span className="tech-name">{tech.name}</span>
    </li>
  )
}

function TechnologyRow({ items, reverse = false }: { items: Technology[]; reverse?: boolean }) {
  return (
    <div className={`tech-marquee${reverse ? ' reverse' : ''}`}>
      <div className="tech-track">
        <ul className="tech-group">
          {items.map((tech) => <TechnologyItem key={tech.name} tech={tech} />)}
        </ul>
        <ul className="tech-group" aria-hidden="true">
          {items.map((tech) => <TechnologyItem key={`${tech.name}-duplicate`} tech={tech} duplicate />)}
        </ul>
      </div>
    </div>
  )
}

export function StackSection() {
  const [firstRow, secondRow] = splitTechnologies(technologies)

  return (
    <section id="stack" className="content-section">
      <SectionHeading
        eyebrow="Stack"
        title="Tecnologias que uso para entregar soluções práticas e escaláveis."
        description="Minha atuação combina backend, frontend, dados e automação, com foco em qualidade, performance e clareza de arquitetura."
      />

      <div className="tech-showcase" aria-label="Tecnologias e ferramentas">
        <TechnologyRow items={firstRow} />
        <TechnologyRow items={secondRow} reverse />
      </div>
    </section>
  )
}
