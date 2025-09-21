import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'e-commerce-site',
    title: 'E-commerce Website',
    type: 'website',
    description: 'Modern e-commerce website built with Next.js, featuring product catalog, shopping cart, and payment integration.',
    tags: ['frontend', 'personal'],
    technologies: {
      frontend: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      deploy: ['Vercel'],
      tools: ['Stripe']
    },
    links: {
      github: 'https://github.com/username/e-commerce-site',
      demo: 'https://e-commerce-demo.vercel.app'
    },
    screenshots: [
      '/images/projects/e-commerce/hero.jpg',
      '/images/projects/e-commerce/products.jpg'
    ],
    featured: true,
    date: '2025-06',
    status: 'completed'
  },
  {
    id: 'task-manager-app',
    title: 'Task Manager Application',
    type: 'website',
    description: 'Full-stack task management application with user authentication, real-time updates, and collaborative features.',
    tags: ['fullstack', 'personal'],
    technologies: {
      frontend: ['React', 'TypeScript'],
      backend: ['Node.js', 'Express', 'Socket.io'],
      database: ['MongoDB']
    },
    links: {
      github: 'https://github.com/username/task-manager',
      demo: 'https://task-manager-demo.netlify.app'
    },
    screenshots: [
      '/images/projects/task-manager/dashboard.jpg',
      '/images/projects/task-manager/board.jpg'
    ],
    featured: true,
    date: '2025-04',
    status: 'completed'
  },
  {
    id: 'chrome-productivity-extension',
    title: 'Productivity Chrome Extension',
    type: 'extension',
    description: 'Chrome extension that helps users stay focused by blocking distracting websites and tracking productivity metrics.',
    tags: ['frontend', 'personal'],
    technologies: ['JavaScript', 'Chrome APIs', 'HTML/CSS'],
    links: {
      github: 'https://github.com/username/productivity-extension',
      store: 'https://chrome.google.com/webstore/detail/productivity-helper'
    },
    screenshots: [
      '/images/projects/extension/popup.jpg',
      '/images/projects/extension/settings.jpg'
    ],
    featured: false,
    date: '2025-03',
    status: 'completed'
  }
]