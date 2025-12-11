'use client'

import { useState } from 'react'
import { ProjectGrid } from '@/components/features/ProjectGrid'
import { ProjectModal } from '@/components/features/ProjectModal'
import { projects } from '@/data/projects'
import { Project } from '@/types'

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    // アニメーション完了後にプロジェクトをクリア
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <main className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="py-16 px-4 md:py-24">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Welcome to Kat Log Portfolio
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Modern portfolio website built with Next.js 15, TypeScript, and Tailwind CSS
          </p>
        </div>
      </section>

      {/* プロジェクト一覧セクション */}
      <section className="py-12 px-4 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
            <p className="text-muted-foreground text-lg">
              私が手がけたプロジェクトの一覧です
            </p>
          </div>

          <ProjectGrid projects={projects} onProjectClick={handleProjectClick} />
        </div>
      </section>

      {/* プロジェクト詳細モーダル */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  )
}