import { SectionHeading } from '../components/SectionHeading'

export function AboutSection() {
  return (
    <section id="sobre" className="content-section">
      <SectionHeading
        eyebrow="Sobre"
        title="Desenvolvedor Full Stack com foco em produto, engenharia e evolução de sistemas."
        description="Construo e evoluo sistemas corporativos com atenção à regra de negócio, qualidade de código e experiência do usuário, atuando do backend ao frontend."
      />

      <div className="about-grid">
        <p>
          Desenvolvedor Full Stack com experiência na construção e evolução de sistemas
          corporativos, atuando desde a análise da regra de negócio até a implementação no
          backend e frontend. Tenho foco em Java, Spring e React, além de explorar
          Inteligência Artificial como ferramenta para melhorar produtos, processos e
          desenvolvimento de software.
        </p>
        <div className="mini-stats" aria-label="Resumo profissional em números">
          <div>
            <strong>Full Stack</strong>
            <span>Back + Front</span>
          </div>
          <div>
            <strong>Java & Spring</strong>
            <span>Soluções robustas</span>
          </div>
          <div>
            <strong>IA aplicada</strong>
            <span>Produtividade + produto</span>
          </div>
        </div>
      </div>
    </section>
  )
}
