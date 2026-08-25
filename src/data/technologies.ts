import type { Technology } from '../types'

export const technologies: Technology[] = [
  { name: 'Java', category: 'backend', icon: 'openjdk', accent: '#f89820', glyph: 'J' },
  { name: 'Spring Boot', category: 'backend', icon: 'springboot', accent: '#6db33f', glyph: 'S' },
  { name: 'JavaScript', category: 'frontend', icon: 'javascript', accent: '#f7df1e', glyph: 'JS' },
  { name: 'TypeScript', category: 'frontend', icon: 'typescript', accent: '#3178c6', glyph: 'TS' },
  { name: 'React', category: 'frontend', icon: 'react', accent: '#61dafb', glyph: 'R' },
  { name: 'Node.js', category: 'backend', icon: 'nodedotjs', accent: '#5fa04e', glyph: 'N' },
  { name: 'NestJS', category: 'backend', icon: 'nestjs', accent: '#e0234e', glyph: 'N' },
  { name: 'PostgreSQL', category: 'database', icon: 'postgresql', accent: '#4169e1', glyph: 'PG' },
  {
    name: 'SQL Server',
    category: 'database',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg',
    accent: '#cc2927',
    glyph: 'SQL',
  },
  { name: 'REST APIs', category: 'backend', icon: 'swagger', accent: '#85ea2d', glyph: '{}' },
  { name: 'Git', category: 'tool', icon: 'git', accent: '#f05032', glyph: 'G' },
  { name: 'Docker', category: 'devops', icon: 'docker', accent: '#2496ed', glyph: 'D' },
  { name: 'CI/CD', category: 'devops', icon: 'githubactions', accent: '#2088ff', glyph: 'CI' },
  { name: 'JUnit', category: 'tool', icon: 'junit5', accent: '#25a162', glyph: 'JU' },
  { name: 'Mockito', category: 'tool', accent: '#78a641', glyph: 'MO' },
  { name: 'MapStruct', category: 'tool', accent: '#ffb300', glyph: 'MS' },
  { name: 'Maven', category: 'tool', icon: 'apachemaven', accent: '#c71a36', glyph: 'M' },
  { name: 'Jenkins', category: 'devops', icon: 'jenkins', accent: '#d24939', glyph: 'J' },
  {
    name: 'OpenAI',
    category: 'ai',
    iconUrl: 'https://api.iconify.design/simple-icons:openai.svg?color=%2310a37f',
    accent: '#10a37f',
    glyph: 'AI',
  },
  { name: 'MCP', category: 'ai', accent: '#a78bfa', glyph: 'MCP' },
  { name: 'Embeddings', category: 'ai', accent: '#22d3ee', glyph: 'E' },
  { name: 'RAG', category: 'ai', accent: '#f472b6', glyph: 'RAG' },
  { name: 'OIDC', category: 'tool', icon: 'openid', accent: '#f78c40', glyph: 'ID' },
]

export function splitTechnologies(items: Technology[]): [Technology[], Technology[]] {
  return items.reduce<[Technology[], Technology[]]>(
    (rows, item, index) => {
      rows[index % 2].push(item)
      return rows
    },
    [[], []],
  )
}
