import { Badge } from '../components/Badge'
import { FaDownload, FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa6'

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
            <a
              href="/curriculo-dennis-py.pdf"
              download="Curriculo-Dennis-Py.pdf"
              className="button primary resume-button"
            >
              <FaDownload aria-hidden="true" />
              <span>Baixar currículo</span>
            </a>
            <div className="cta-secondary-actions">
              <a
                href="https://www.linkedin.com/in/dennis-py-a497b5b4/"
                target="_blank"
                rel="noreferrer"
                className="button secondary icon-button"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedinIn aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/dennispy14"
                target="_blank"
                rel="noreferrer"
                className="button secondary icon-button"
                aria-label="GitHub"
                title="GitHub"
              >
                <FaGithub aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                href="#contato"
                className="button secondary icon-button"
                aria-label="Contato"
                title="Contato"
              >
                <FaEnvelope aria-hidden="true" />
                <span>Contato</span>
              </a>
            </div>
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
