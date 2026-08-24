import type { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'Saca Só',
    summary:
      'Aplicação para gerenciamento de torneios de vôlei, com fluxos completos de cadastro, organização e acompanhamento de competições.',
    stack: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
    features: [
      'Cadastro de jogadores',
      'Formação de times',
      'Criação de torneios',
      'Geração de partidas',
      'Controle de placares',
      'Fases do torneio',
      'PWA',
    ],
    accent: 'violet',
  },
  {
    title: 'Projetos de IA / MCP',
    summary:
      'Estudos e POCs focados em integração de LLMs, embeddings, busca semântica, agentes e IA aplicada em sistemas corporativos.',
    stack: ['MCP', 'OpenAI', 'Embeddings', 'RAG', 'Node.js'],
    features: [
      'Integração de LLMs',
      'Busca semântica',
      'Assistentes internos',
      'Automação de tarefas',
      'IA aplicada ao desenvolvimento',
    ],
    accent: 'cyan',
  },
]
