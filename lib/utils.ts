import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Project, ProjectTag, ProjectType } from "@/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Date formatting utility
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// Project filtering utilities
export function filterProjectsByTag(projects: Project[], tag: ProjectTag) {
  return projects.filter(project =>
    project.tags.some((projectTag: ProjectTag) =>
      projectTag.toLowerCase().includes(tag.toLowerCase())
    )
  )
}

export function filterProjectsByType(projects: Project[], type: ProjectType) {
  return projects.filter(project => project.type === type)
}

export function getFeaturedProjects(projects: Project[]) {
  return projects.filter(project => project.featured)
}

// Technology color utilities
export function getTechColor(techName: string): string {
  const techColors: Record<string, string> = {
    'React': '#61dafb',
    'Next.js': '#000000',
    'TypeScript': '#3178c6',
    'JavaScript': '#f7df1e',
    'Tailwind CSS': '#06b6d4',
    'Node.js': '#339933',
    'Express': '#000000',
    'MongoDB': '#47a248',
    'Vercel': '#000000',
    'Stripe': '#635bff',
    'Socket.io': '#010101',
    'Chrome APIs': '#4285f4',
    'HTML/CSS': '#e34c26',
    'Framer Motion': '#0055ff',
  }

  return techColors[techName] || '#6b7280'
}

// URL validation
export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

// Truncate text utility
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}
