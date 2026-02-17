'use client'

import { useState, useMemo } from 'react'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import { HeroSection } from '@/components/features/HeroSection'
import { AboutSection } from '@/components/features/AboutSection'
import { FeaturedProjects } from '@/components/features/FeaturedProjects'
import { ProjectGrid } from '@/components/features/ProjectGrid'
import { FilterBar } from '@/components/features/FilterBar'
import { projects } from '@/data/projects'
import { profile } from '@/data/profile'
import { Project, ProjectTag } from '@/types'

// 動的インポート: モーダルは使用時まで遅延読み込み（クリック時のみロード）
const ProjectModal = dynamic(
  () => import('@/components/features/ProjectModal').then((mod) => ({ default: mod.ProjectModal })),
  {
    ssr: false,
    loading: () => null,
  }
)

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

  // 構造化データ（JSON-LD）
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.title,
    description: profile.bio,
    url: 'https://kat-log-portfolio.vercel.app',
    sameAs: profile.socialLinks.map((link) => link.url),
    knowsAbout: [
      'Web Development',
      'Frontend Development',
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
    ],
  }

  return (
    <div className="min-h-screen">
      {/* 構造化データ */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ヒーローセクション */}
      <HeroSection />

      {/* 自己紹介セクション */}
      <AboutSection profile={profile} />

      {/* 注目プロジェクトセクション */}
      <FeaturedProjects projects={projects} onProjectClick={handleProjectClick} />

      {/* プロジェクト一覧セクション */}
      <section id="projects" className="py-12 px-4 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
            <p className="text-muted-foreground text-lg">
              これまでの制作物
            </p>
          </div>

          {/* フィルターバー */}
          <FilterBar onFilterChange={handleFilterChange} />

          {/* プロジェクトグリッド */}
          <ProjectGrid projects={filteredProjects} onProjectClick={handleProjectClick} />
        </div>
      </section>

      {/* プロジェクト詳細モーダル - 条件付きレンダリングで遅延読み込みを実現 */}
      {isModalOpen && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}