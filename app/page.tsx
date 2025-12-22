'use client'

import { useState, useMemo } from 'react'
import { HeroSection } from '@/components/features/HeroSection'
import { AboutSection } from '@/components/features/AboutSection'
import { FeaturedProjects } from '@/components/features/FeaturedProjects'
import { ProjectGrid } from '@/components/features/ProjectGrid'
import { ProjectModal } from '@/components/features/ProjectModal'
import { FilterBar } from '@/components/features/FilterBar'
import { projects } from '@/data/projects'
import { profile } from '@/data/profile'
import { Project, ProjectTag } from '@/types'

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState<ProjectTag | 'all'>('all')

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    // アニメーション完了後にプロジェクトをクリア
    setTimeout(() => setSelectedProject(null), 300)
  }

  const handleFilterChange = (tag: ProjectTag | 'all') => {
    setActiveFilter(tag)
  }

  // フィルタリングされたプロジェクト
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects
    }
    return projects.filter((project) => project.tags.includes(activeFilter))
  }, [activeFilter])

  return (
    <main className="min-h-screen">
      {/* ヒーローセクション */}
      <HeroSection />

      {/* 自己紹介セクション */}
      <AboutSection profile={profile} />

      {/* 注目プロジェクトセクション */}
      <FeaturedProjects projects={projects} onProjectClick={handleProjectClick} />

      {/* プロジェクト一覧セクション */}
      <section id="projects-section" className="py-12 px-4 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
            <p className="text-muted-foreground text-lg">
              私が手がけたプロジェクトの一覧です
            </p>
          </div>

          {/* フィルターバー */}
          <FilterBar onFilterChange={handleFilterChange} />

          {/* プロジェクトグリッド */}
          <ProjectGrid projects={filteredProjects} onProjectClick={handleProjectClick} />
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