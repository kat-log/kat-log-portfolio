'use client'

import { Project } from '@/types'
import { ProjectCard } from './ProjectCard'

interface ProjectGridProps {
  projects: Project[]
  onProjectClick?: (project: Project) => void
}

export function ProjectGrid({ projects, onProjectClick }: ProjectGridProps) {
  // 空状態のハンドリング
  if (!projects || projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <p className="text-muted-foreground text-center text-lg">
          プロジェクトが見つかりませんでした
        </p>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* レスポンシブグリッド
          - モバイル: 1列 (grid-cols-1)
          - タブレット: 2列 (md:grid-cols-2)
          - デスクトップ: 3列 (lg:grid-cols-3)
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={onProjectClick}
          />
        ))}
      </div>
    </div>
  )
}
