// Project types based on docs/type-examples.md

export interface Project {
  id: string
  title: string
  type: 'website' | 'extension' | 'app' | 'other'
  description: string
  tags: string[]
  technologies: Technology[]
  urls: ProjectUrls
  screenshots: string[]
  featured: boolean
  createdAt: string
  updatedAt: string
}

export interface Technology {
  name: string
  category?: 'frontend' | 'backend' | 'deploy' | 'tool' | 'other'
  color?: string
}

export interface ProjectUrls {
  github?: string
  demo?: string
  store?: string
  website?: string
}

export interface Profile {
  name: string
  title: string
  description: string
  avatar: string
  skills: Skill[]
  social: SocialLinks
  contact: ContactInfo
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'design' | 'other'
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  icon?: string
}

export interface SocialLinks {
  github?: string
  twitter?: string
  linkedin?: string
  email?: string
  website?: string
}

export interface ContactInfo {
  email: string
  location?: string
  available: boolean
}

// Filter and UI types
export interface FilterState {
  tags: string[]
  types: Project['type'][]
  technologies: string[]
}

export interface ModalState {
  isOpen: boolean
  projectId: string | null
}