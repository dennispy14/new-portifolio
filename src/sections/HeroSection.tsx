import { Badge } from '../components/Badge'

export function HeroSection() {
  return (
    <header className="hero-section" id="inicio">
      <nav className="topbar" aria-label="Navegação principal">
        <a href="#inicio" className="brand" aria-label="Página inicial de Dennis Py">
          <span className="brand-mark">D</span>
          <span>Dennis Py</span>
        </a>

        <div className="nav-links" aria-label="Menu principal">
          <a href="#sobre">Sobre</a>
          <a href="#stack">Stack</a>
          <a href="#experiencia">Experiência</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>

      <div className="hero-content">
        <div className="hero-copy">
          <Badge label="Disponível para projetos" />
          <h1>Desenvolvedor Full Stack</h1>
          <p className="hero-tagline">
            Construindo aplicações escaláveis, modernas e orientadas a produto com Java,
            Spring, React e Inteligência Artificial.
          </p>

          <div className="cta-group" aria-label="Ações principais">
            <a href="#projetos" className="button primary">
              Ver projetos
            </a>
            <a
              href="https://www.linkedin.com/in/dennis-py-a497b5b4/"
              target="_blank"
              rel="noreferrer"
              className="button secondary"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/dennispy14"
              target="_blank"
              rel="noreferrer"
              className="button secondary"
            >
              GitHub
            </a>
            <a href="#contato" className="button secondary">
              Contato
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Resumo profissional">
          <div className="panel-card">
            <span className="panel-label">Perfil</span>
            <strong>Full Stack • Java • React • IA</strong>
            <ul>
              <li>+7 anos em desenvolvimento de software</li>
              <li>Backend Java/Spring e frontend React</li>
              <li>Aplicações corporativas e integrações</li>
            </ul>
          </div>
        </aside>
      </div>
    </header>
  )
}
