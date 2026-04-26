'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Project, isTechnologyStack, isScreenshotObject } from '@/types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

interface FeaturedProjectsProps {
  projects: Project[]
  onProjectClick: (project: Project) => void
}

export function FeaturedProjects({ projects, onProjectClick }: FeaturedProjectsProps) {
  const featuredProjects = projects.filter((project) => project.featured)

  if (featuredProjects.length === 0) {
    return null
  }

  return (
    <section className="py-16 px-4 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* セクションヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            特に注目していただきたいプロジェクトをご紹介します
          </p>
        </motion.div>

        {/* プロジェクトグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className="relative h-full bg-card border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => onProjectClick(project)}
              >
                {/* プロジェクト画像 */}
                <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                  {project.screenshots && project.screenshots.length > 0 ? (
                    <Image
                      src={
                        isScreenshotObject(project.screenshots[0])
                          ? project.screenshots[0].url
                          : project.screenshots[0]
                      }
                      alt={
                        isScreenshotObject(project.screenshots[0])
                          ? project.screenshots[0].alt
                          : project.title
                      }
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      <span className="text-6xl">🚀</span>
                    </div>
                  )}

                  {/* オーバーレイ */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* ステータスバッジ */}
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={project.status === 'completed' ? 'default' : 'secondary'}
                      className="shadow-lg"
                    >
                      {project.status === 'completed' ? '完成' : project.status === 'in-progress' ? '進行中' : '計画中'}
                    </Badge>
                  </div>
                </div>

                {/* プロジェクト情報 */}
                <div className="p-6 md:p-8">
                  {/* タイプバッジ */}
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {project.type === 'website' ? 'Website' : project.type === 'extension' ? 'Extension' : 'Mobile App'}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{project.date}</span>
                  </div>

                  {/* タイトル */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* 説明 */}
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* タグ */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* テクノロジー */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold mb-2 text-muted-foreground">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {isTechnologyStack(project.technologies) ? (
                        <>
                          {project.technologies.frontend?.map((tech: string) => (
                            <span key={tech} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.backend?.map((tech: string) => (
                            <span key={tech} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                              {tech}
                            </span>
                          ))}
                        </>
                      ) : (
                        project.technologies.map((tech: string) => (
                          <span key={tech} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                            {tech}
                          </span>
                        ))
                      )}
                    </div>
                  </div>

                  {/* アクションボタン */}
                  <div className="flex flex-wrap gap-3">
                    {project.links?.github && (
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    )}

                    {(project.links?.demo || project.links?.store) && (
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a
                          href={project.links.demo || project.links.store || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="サイトを見る"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </Button>
                    )}

                    {project.links?.lp && (
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a
                          href={project.links.lp}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="紹介ページ"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
