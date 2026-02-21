import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'amaguri-2bro-gallery',
    title: '2BRO推し活ギャラリー',
    type: 'website',
    description: 'AI生成画像で推し活を表現するギャラリーサイト。React + NestJSで構築し、Cloudflare WorkersとRenderでホスティング。',
    tags: ['frontend', 'backend', 'personal'],
    technologies: {
      frontend: ['React', 'TypeScript', 'Vite', 'React Router'],
      backend: ['NestJS', 'Prisma', 'PostgreSQL'],
      deploy: ['Cloudflare Workers', 'Render'],
      tools: ['Cloudflare R2']
    },
    links: {
      demo: 'https://amaguri-2bro-gallery.kat-log.workers.dev/'
    },
    screenshots: [
      { url: '/images/projects/amaguri/home.png', alt: 'ホームページ' },
      { url: '/images/projects/amaguri/gallery.png', alt: 'ギャラリーページ' },
      { url: '/images/projects/amaguri/about.png', alt: 'アバウトページ' }
    ],
    featured: true,
    date: '2025-06',
    status: 'completed'
  }
]