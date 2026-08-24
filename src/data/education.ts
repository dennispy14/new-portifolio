import type { EducationItem, Certification } from '../types'

export const education: EducationItem[] = [
  {
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'UniRitter',
    period: 'Graduação',
    description: 'Formação acadêmica com foco em desenvolvimento de software, arquitetura e soluções digitais.',
  },
  {
    title: 'Tecnologia para Negócios com foco em Inteligência Artificial, Data Science e Big Data',
    institution: 'PUCRS',
    period: 'Pós-graduação / MBA',
    description: 'Especialização em IA, dados e estratégias digitais para negócios.',
  },
  {
    title: 'Formação complementar',
    institution: 'UniRitter',
    period: 'Em andamento',
    description: 'Cursos de aprofundamento em tecnologia, desenvolvimento e inovação.',
  },
]

export const certifications: Certification[] = [
  { name: 'AWS Academy Cloud Foundations', issuer: 'AWS Academy', period: 'Certificação' },
  { name: 'Red Hat OpenShift', issuer: 'Red Hat', period: 'Certificação' },
  { name: 'Spring Boot', issuer: 'Plataforma de formação', period: 'Curso' },
  { name: 'Testes Unitários com Java', issuer: 'Plataforma de formação', period: 'Curso' },
  { name: 'Git e GitHub', issuer: 'Plataforma de formação', period: 'Curso' },
]
