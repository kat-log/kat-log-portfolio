'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, FileText } from 'lucide-react'
import { Profile, SocialPlatform } from '@/types'
import { SkillCard } from './SkillCard'
import { Button } from '@/components/ui/button'

interface AboutSectionProps {
  profile: Profile
  showAllSkills?: boolean // スキルを全て表示するか、主要なものだけか
}

// SNSプラットフォームとアイコンのマッピング
const socialIcons: Record<SocialPlatform, React.ComponentType<{ className?: string }>> = {
  github: Github,
  x: Twitter,
  linkedin: Linkedin,
  qiita: FileText,
  zenn: FileText,
  other: FileText,
}

// コンテナのアニメーション設定
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

export function AboutSection({ profile, showAllSkills = false }: AboutSectionProps) {
  // スキルを表示する数を制限（ホームページでは主要スキルのみ）
  const displaySkills = showAllSkills
    ? profile.skills
    : profile.skills.filter(skill => skill.level >= 3).slice(0, 6)

  return (
    <section className="py-12 px-4 md:py-16 bg-muted/30">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* セクションタイトル */}
        <motion.div className="mb-12 text-center" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {profile.bio}
          </p>
        </motion.div>

        {/* プロフィール情報 */}
        <motion.div
          className="mb-12 flex flex-col items-center gap-4"
          variants={itemVariants}
        >
          {/* 位置情報 */}
          {profile.location && (
            <p className="text-muted-foreground">
              📍 {profile.location}
            </p>
          )}

          {/* SNSリンク */}
          <div className="flex flex-wrap justify-center gap-3">
            {profile.socialLinks.map((social) => {
              const Icon = socialIcons[social.platform]
              return (
                <Button
                  key={social.platform}
                  variant="outline"
                  size="sm"
                  asChild
                  className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.platform} - ${social.username}`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{social.username}</span>
                    <span className="sm:hidden capitalize">{social.platform}</span>
                  </a>
                </Button>
              )
            })}
          </div>
        </motion.div>

        {/* スキルセクション */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            {showAllSkills ? 'All Skills' : 'Core Skills'}
          </h3>

          {/* スキルグリッド */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {displaySkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>

          {/* 全スキル表示へのリンク（ホームページの場合） */}
          {!showAllSkills && profile.skills.length > displaySkills.length && (
            <div className="mt-8 text-center">
              <Button variant="outline" asChild>
                <a href="#skills">
                  すべてのスキルを見る ({profile.skills.length}個)
                </a>
              </Button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  )
}
