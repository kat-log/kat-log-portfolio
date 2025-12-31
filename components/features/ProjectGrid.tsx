'use client'

import { motion } from 'framer-motion'
import { Project } from '@/types'
import { ProjectCard } from './ProjectCard'

interface ProjectGridProps {
  projects: Project[]
  onProjectClick?: (project: Project) => void
}

// コンテナのアニメーション設定
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

// 子要素のアニメーション設定
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96] as const,
    },
  },
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
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard
              project={project}
              onClick={onProjectClick}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
