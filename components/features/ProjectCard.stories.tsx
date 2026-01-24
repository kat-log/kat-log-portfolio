import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ProjectCard, ProjectCardSkeleton } from './ProjectCard'
import { Project } from '@/types'

const meta = {
  title: 'Features/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-[350px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProjectCard>

export default meta
type Story = StoryObj<typeof meta>

// サンプルプロジェクトデータ
const sampleProject: Project = {
  id: 'portfolio-site',
  title: 'ポートフォリオサイト',
  type: 'website',
  description:
    'Next.js 15とTypeScript、Tailwind CSSで構築したモダンなポートフォリオサイト。パフォーマンスとアクセシビリティを重視した設計。',
  tags: ['frontend', 'personal'],
  technologies: {
    frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    deploy: ['Vercel'],
  },
  links: {
    github: 'https://github.com/example/portfolio',
    demo: 'https://portfolio.example.com',
  },
  screenshots: ['/images/projects/portfolio-thumb.png'],
  featured: true,
  date: '2024-12',
  status: 'completed',
}

const minimalProject: Project = {
  id: 'minimal-project',
  title: 'シンプルなプロジェクト',
  type: 'website',
  description: '最小限の情報を持つプロジェクトの例。',
  tags: ['frontend'],
  technologies: ['HTML', 'CSS', 'JavaScript'],
  links: {},
  screenshots: [],
  date: '2024-01',
}

const manyTechProject: Project = {
  id: 'fullstack-app',
  title: 'フルスタックアプリケーション',
  type: 'website',
  description:
    '多くの技術スタックを使用した大規模なウェブアプリケーション。複数のマイクロサービスで構成。',
  tags: ['fullstack', 'opensource'],
  technologies: {
    frontend: ['React', 'TypeScript', 'Redux', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'GraphQL'],
    database: ['PostgreSQL', 'Redis'],
    deploy: ['AWS', 'Docker', 'Kubernetes'],
  },
  links: {
    github: 'https://github.com/example/fullstack',
    demo: 'https://app.example.com',
  },
  screenshots: ['/images/projects/fullstack-thumb.png'],
  featured: false,
  date: '2024-06',
  status: 'in-progress',
}

// 基本的なカード
export const Default: Story = {
  args: {
    project: sampleProject,
  },
}

// Featured プロジェクト
export const Featured: Story = {
  args: {
    project: { ...sampleProject, featured: true },
  },
}

// Featured なしプロジェクト
export const NotFeatured: Story = {
  args: {
    project: { ...sampleProject, featured: false },
  },
}

// 最小限の情報
export const Minimal: Story = {
  args: {
    project: minimalProject,
  },
}

// 多くの技術タグ
export const ManyTechnologies: Story = {
  args: {
    project: manyTechProject,
  },
}

// GitHub のみリンク
export const GitHubOnly: Story = {
  args: {
    project: {
      ...sampleProject,
      links: { github: 'https://github.com/example/project' },
    },
  },
}

// Demo のみリンク
export const DemoOnly: Story = {
  args: {
    project: {
      ...sampleProject,
      links: { demo: 'https://demo.example.com' },
    },
  },
}

// クリックハンドラー付き
export const WithClickHandler: Story = {
  args: {
    project: sampleProject,
    onClick: (project) => alert(`クリック: ${project.title}`),
  },
}

// スケルトン状態
export const Skeleton: StoryObj = {
  render: () => <ProjectCardSkeleton />,
}

// グリッド表示
export const Grid: StoryObj = {
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    () => (
      <div className="p-8 min-w-[900px]">
        <div className="grid grid-cols-3 gap-6">
          <ProjectCard project={sampleProject} />
          <ProjectCard project={manyTechProject} />
          <ProjectCard project={minimalProject} />
        </div>
      </div>
    ),
  ],
}
