import { useState } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { SectionTabs } from '../components/SectionTabs'

const aiTabs = [
  { id: 'development', label: 'Desenvolvimento' },
  { id: 'quality', label: 'Qualidade' },
  { id: 'automation', label: 'Automação' },
  { id: 'architecture', label: 'Arquitetura' },
]

export function AiSection() {
  const [activeTab, setActiveTab] = useState('development')

  const aiContent: Record<string, { title: string; text: string }> = {
    development: {
      title: 'Desenvolvimento',
      text: 'Assistência em refatoração, geração de código, documentação e troubleshooting, acelerando a entrega sem perder qualidade técnica.',
    },
    quality: {
      title: 'Qualidade',
      text: 'Criação e refinamento de testes, revisão de fluxos e validação de comportamento para reduzir riscos e aumentar confiabilidade.',
    },
    automation: {
      title: 'Pesquisa e automação',
      text: 'Exploração técnica, análise de requisitos e automação de processos repetitivos para ganho prático em produtividade e padronização.',
    },
    architecture: {
      title: 'Arquitetura',
      text: 'Exploração de LLMs, MCP, embeddings, busca semântica e integrações com sistemas corporativos para construir soluções mais inteligentes.',
    },
  }

  const current = aiContent[activeTab]

  return (
    <section id="ia" className="content-section">
      <SectionHeading
        eyebrow="IA aplicada"
        title="Inteligência Artificial como extensão da engenharia de software."
        description="Uso de IA para acelerar desenvolvimento, melhorar qualidade e apoiar decisões técnicas em contextos reais de produto."
      />

      <SectionTabs tabs={aiTabs} activeTab={activeTab} onChange={setActiveTab}>
        <div key={activeTab} className="ai-feature-card tab-content-enter">
          <span className="feature-kicker">Área ativa</span>
          <h3>{current.title}</h3>
          <p>{current.text}</p>
        </div>
      </SectionTabs>
    </section>
  )
}
