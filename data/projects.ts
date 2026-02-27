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
    date: '2025-12',
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
  },
  {
    id: 'youtube-live-voicevox',
    title: 'YouTubeライブチャット ずんだもんボイス読み上げ',
    type: 'extension',
    description:
      'YouTubeライブ配信のコメントをVOICEVOXのずんだもんの声でリアルタイムに読み上げるChrome拡張機能。話者選択・速度調整・音量調整などに対応。約100名の方にご利用いただいています。',
    tags: ['extension', 'personal'],
    technologies: {
      frontend: ['JavaScript', 'Chrome Extension Manifest V3'],
      tools: ['YouTube Data API v3', 'VOICEVOX API (TTS Quest)']
    },
    links: {
      store:
        'https://chromewebstore.google.com/detail/youtube%E3%83%A9%E3%82%A4%E3%83%96%E3%83%81%E3%83%A3%E3%83%83%E3%83%88%E3%81%9A%E3%82%93%E3%81%A0%E3%82%82%E3%82%93%E3%83%9C%E3%82%A4%E3%82%B9%E8%AA%AD%E3%81%BF%E4%B8%8A/gdakacmdogbakjhalfjkclkagdojhooi'
    },
    screenshots: [
      { url: '/images/projects/youtube-voicevox/screenshot1.png', alt: 'メイン紹介画像' },
      { url: '/images/projects/youtube-voicevox/screenshot2.png', alt: '機能紹介画像' },
      { url: '/images/projects/youtube-voicevox/screenshot3.png', alt: '設定画面' }
    ],
    featured: false,
    date: '2025-08',
    status: 'completed'
  },
  {
    id: 'qiita-stock-incremental-search',
    title: 'Qiita ストック インクリメンタルサーチ',
    type: 'extension',
    description:
      'Qiita記事のストック時にカテゴリーを絞り込み検索できるChrome拡張機能。インストールするだけで検索フォームが追加され、部分一致でカテゴリーをリアルタイムに絞り込み可能。',
    tags: ['extension', 'personal'],
    technologies: {
      frontend: ['JavaScript', 'HTML', 'Chrome Extension Manifest V3']
    },
    links: {
      store:
        'https://chromewebstore.google.com/detail/qiita-%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF-%E3%82%A4%E3%83%B3%E3%82%AF%E3%83%AA%E3%83%A1%E3%83%B3%E3%82%BF%E3%83%AB%E3%82%B5%E3%83%BC%E3%83%81/kgkghjdpjkjedpalgimneellgbobadnl',
      github: 'https://github.com/kat-log/chrome-extension-qiita-stock-incremental-search'
    },
    screenshots: [
      { url: '/images/projects/qiita-stock-search/screenshot1.png', alt: 'メイン紹介画像' },
      { url: '/images/projects/qiita-stock-search/screenshot2.png', alt: '絞り込みフォーム動作画面' }
    ],
    featured: false,
    date: '2026-02',
    status: 'completed'
  }
]