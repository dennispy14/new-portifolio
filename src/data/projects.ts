import type { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'Saca Só',
    summary:
      'Aplicação para registrar partidas de vôlei em tempo real, com configuração de times e regras, lançamento de pontos e acompanhamento das estatísticas do jogo.',
    stack: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
    features: [
      'Configuração de times e regras da partida',
      'Placar ao vivo por sets',
      'Registro de pontos por fundamento',
      'Registro de erros e infrações',
      'Histórico de eventos da partida',
      'Estatísticas de partidas',
      'PWA',
    ],
    href: 'https://volley-score-keeper.vercel.app/',
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
  {
    title: 'Weather Finder',
    summary:
      'Aplicação web que permite consultar as condições climáticas de qualquer cidade, exibindo informações precisas e atualizadas a partir do nome pesquisado.',
    stack: ['JavaScript'],
    features: [
      'Busca de condições climáticas por cidade',
      'Consulta de informações atualizadas sobre o clima',
      'Interface web responsiva',
    ],
    href: 'https://dennispy14.github.io/ClimaPorCidade/',
    accent: 'blue',
  },
  {
    title: 'Word Quest',
    summary:
      'Jogo web educativo e divertido de adivinhação de palavras, com dicas temáticas, tentativas por letra e pontuação para acompanhar o desafio.',
    stack: ['React', 'JavaScript', 'CSS'],
    features: [
      'Adivinhação de palavras',
      'Dicas por categoria',
      'Controle de letras utilizadas',
      'Sistema de pontuação',
      'Interface responsiva',
    ],
    href: 'https://dennispy14.github.io/react-dev/',
    accent: 'yellow',
  },
]
