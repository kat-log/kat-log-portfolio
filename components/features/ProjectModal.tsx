'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import {
  Project,
  normalizeTechnologies,
  normalizeScreenshots,
  PROJECT_TYPE_LABELS,
  PROJECT_STATUS_LABELS,
} from '@/types'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  const technologies = normalizeTechnologies(project.technologies)
  const screenshots = normalizeScreenshots(project.screenshots)

  // すべての技術タグを1つの配列に結合
  const allTechnologies = Object.entries(technologies)
    .filter(([, techs]) => techs && techs.length > 0)
    .map(([category, techs]) => ({
      category,
      techs: techs || [],
    }))

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex flex-col gap-3 pr-8">
            <div className="flex items-center gap-2">
              <DialogTitle className="text-2xl md:text-3xl font-bold">
                {project.title}
              </DialogTitle>
              {project.featured && (
                <Badge variant="default" className="shrink-0">
                  Featured
                </Badge>
              )}
            </div>
            <DialogDescription className="text-base">
              {PROJECT_TYPE_LABELS[project.type]} • {project.date}
              {project.status && (
                <>
                  {' '}
                  • {PROJECT_STATUS_LABELS[project.status]}
                </>
              )}
            </DialogDescription>
          </div>
        </DialogHeader>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="space-y-6 mt-4"
        >
          {/* スクリーンショットギャラリー */}
          {screenshots.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">スクリーンショット</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {screenshots.map((screenshot, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative aspect-video bg-muted rounded-lg overflow-hidden border border-border"
                  >
                    <Image
                      src={screenshot.url}
                      alt={screenshot.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {screenshot.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-2">
                        {screenshot.caption}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* プロジェクト説明 */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">プロジェクト概要</h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* 技術スタック */}
          {allTechnologies.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">技術スタック</h3>
              <div className="space-y-3">
                {allTechnologies.map(({ category, techs }) => (
                  <div key={category}>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2 capitalize">
                      {category === 'frontend'
                        ? 'フロントエンド'
                        : category === 'backend'
                        ? 'バックエンド'
                        : category === 'database'
                        ? 'データベース'
                        : category === 'deploy'
                        ? 'デプロイ'
                        : category === 'tools'
                        ? 'ツール'
                        : category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech, index) => (
                        <Badge key={index} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* リンク */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">リンク</h3>
            <div className="flex flex-wrap gap-3">
              {project.links.github && (
                <Button variant="default" size="lg" asChild>
                  <Link
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Link>
                </Button>
              )}

              {project.links.demo && (
                <Button variant="default" size="lg" asChild>
                  <Link
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    デモを見る
                  </Link>
                </Button>
              )}

              {project.links.store && (
                <Button variant="default" size="lg" asChild>
                  <Link
                    href={project.links.store}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    ストア
                  </Link>
                </Button>
              )}

              {project.links.article && (
                <Button variant="outline" size="lg" asChild>
                  <Link
                    href={project.links.article}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    記事を読む
                  </Link>
                </Button>
              )}

              {project.links.video && (
                <Button variant="outline" size="lg" asChild>
                  <Link
                    href={project.links.video}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    動画を見る
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
