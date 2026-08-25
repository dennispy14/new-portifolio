import celebrationPhoto from '../assets/dennis-celebracao.jpg'
import portraitPhoto from '../assets/dennis-retrato.jpg'
import volleyballPhoto from '../assets/dennis-volei.jpeg'
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
        <div className="mini-stats" aria-label="Resumo profissional">
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

      <div className="personal-story">
        <div className="personal-copy">
          <span className="personal-kicker">Além do código</span>
          <h3>A pessoa por trás das entregas.</h3>
          <p>
            Sou movido por curiosidade, disciplina e vontade de evoluir. Gosto de viver novas
            experiências, celebrar cada conquista e levar essa mesma energia para os desafios
            que escolho construir. Fora do código, amo jogar vôlei: é onde recarrego a energia,
            exercito o foco e vivo o espírito de equipe.
          </p>
        </div>

        <div className="personal-photos" aria-label="Momentos pessoais de Dennis">
          <figure className="personal-photo personal-photo-main">
            <img
              src={portraitPhoto}
              alt="Dennis sorrindo e celebrando uma conquista pessoal"
              width="1200"
              height="1800"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure className="personal-photo personal-photo-secondary">
            <img
              src={celebrationPhoto}
              alt="Dennis comemorando entre amigos"
              width="1800"
              height="1198"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure className="personal-photo personal-photo-volleyball">
            <img
              src={volleyballPhoto}
              alt="Dennis jogando vôlei com a bola em mãos"
              width="1066"
              height="1600"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
