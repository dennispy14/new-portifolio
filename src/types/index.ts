export type Technology = {
  name: string
  category: 'backend' | 'frontend' | 'database' | 'devops' | 'ai' | 'tool'
}

export type Experience = {
  company: string
  role: string
  period: string
  description: string[]
  highlights: string[]
}

export type Project = {
  title: string
  summary: string
  stack: string[]
  features: string[]
  href?: string
  accent: string
}

export type EducationItem = {
  title: string
  institution: string
  period: string
  description?: string
}

export type Certification = {
  name: string
  issuer: string
  period?: string
}

export type ContactLink = {
  label: string
  href: string
  description: string
}
