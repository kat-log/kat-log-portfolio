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
  },
  {
    id: 'kat-log-portfolio',
    title: 'Kat Log ポートフォリオ',
    type: 'website',
    description:
      'こちらのポートフォリオサイトです。これまでの制作物を紹介しています。Next.js 15・TypeScript・Tailwind CSSで構築し、Vercelで公開しています。',
    tags: ['frontend', 'personal'],
    technologies: {
      frontend: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      deploy: ['Vercel']
    },
    links: {
      demo: 'https://kat-log-portfolio.vercel.app/',
      github: 'https://github.com/kat-log/kat-log-portfolio'
    },
    screenshots: [
      { url: '/images/projects/katlog-portfolio/hero.png', alt: 'トップページ' },
      { url: '/images/projects/katlog-portfolio/about.png', alt: 'アバウトページ' }
    ],
    featured: true,
    date: '2026-02',
    status: 'in-progress'
  }
]