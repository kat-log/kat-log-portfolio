'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import { Project, normalizeTechnologies, PROJECT_TYPE_LABELS } from '@/types'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface ProjectCardProps {
  project: Project
  onClick?: (project: Project) => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const technologies = normalizeTechnologies(project.technologies)
  const thumbnail = Array.isArray(project.screenshots)
    ? (typeof project.screenshots[0] === 'string'
        ? project.screenshots[0]
        : project.screenshots[0]?.url)
    : undefined

  // すべての技術タグを1つの配列に結合
  const allTechnologies = Object.values(technologies).flat().filter(Boolean)

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="h-full"
    >
      <Card
        className="h-full flex flex-col overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border-border/50 hover:border-primary/30 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
        onClick={() => onClick?.(project)}
      >
        {/* サムネイル画像 */}
        {thumbnail && (
          <div className="relative w-full h-48 bg-muted overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative w-full h-full"
            >
              <Image
                src={thumbnail}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>

            {/* Featured バッジ */}
            {project.featured && (
              <div className="absolute top-3 right-3">
                <Badge variant="default" className="shadow-lg backdrop-blur-md bg-primary/90 border border-white/20">
                  Featured
                </Badge>
              </div>
            )}
          </div>
        )}

        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold truncate mb-1">
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {PROJECT_TYPE_LABELS[project.type]} • {project.date}
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 pb-3">
          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
            {project.description}
          </p>

          {/* 技術タグ */}
          <div className="flex flex-wrap gap-1.5">
            {allTechnologies.slice(0, 4).map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs"
              >
                {tech}
              </Badge>
            ))}
            {allTechnologies.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{allTechnologies.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="pt-3 gap-2">
          {project.links.github && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              asChild
              onClick={(e) => e.stopPropagation()}
            >
              <Link
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Link>
            </Button>
          )}

          {project.links.demo && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              asChild
              onClick={(e) => e.stopPropagation()}
            >
              <Link
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </Link>
            </Button>
          )}

          {project.links.store && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              asChild
              onClick={(e) => e.stopPropagation()}
            >
              <Link
                href={project.links.store}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Store
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
