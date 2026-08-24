import { useMemo, useState } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { technologies } from '../data/technologies'

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'backend', label: 'Backend' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'database', label: 'Banco' },
  { id: 'devops', label: 'DevOps' },
  { id: 'ai', label: 'IA' },
  { id: 'tool', label: 'Ferramentas' },
]

export function StackSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const visibleTechnologies = useMemo(() => {
    if (activeCategory === 'all') {
      return technologies
    }

    return technologies.filter((tech) => tech.category === activeCategory)
  }, [activeCategory])

  return (
    <section id="stack" className="content-section">
      <SectionHeading
        eyebrow="Stack"
        title="Tecnologias que uso para entregar soluções práticas e escaláveis."
        description="Minha atuação combina backend, frontend, dados e automação, com foco em qualidade, performance e clareza de arquitetura."
      />

      <div className="stack-filter" aria-label="Filtros de tecnologias">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={activeCategory === category.id ? 'filter-chip active' : 'filter-chip'}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="tech-grid" aria-label="Lista de tecnologias">
        {visibleTechnologies.map((tech) => (
          <div key={tech.name} className="tech-card">
            <span className="tech-name">{tech.name}</span>
            <span className="tech-category">{tech.category}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
