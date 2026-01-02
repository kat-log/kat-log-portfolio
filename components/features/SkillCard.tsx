'use client'

import { motion } from 'framer-motion'
import { Skill, SKILL_LEVEL_LABELS } from '@/types'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface SkillCardProps {
  skill: Skill
}

export function SkillCard({ skill }: SkillCardProps) {
  // スキルレベルに応じた色を決定
  const getLevelColor = (level: number) => {
    if (level >= 4) return 'bg-green-500'
    if (level >= 3) return 'bg-blue-500'
    if (level >= 2) return 'bg-yellow-500'
    return 'bg-gray-500'
  }

  // スキルレベルバーの表示（5段階）
  const renderSkillLevel = () => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((level) => (
          <motion.div
            key={level}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: level * 0.1 }}
            className="h-2 w-full rounded-full overflow-hidden bg-muted"
            style={{ transformOrigin: 'left' }}
          >
            <motion.div
              className={`h-full w-full rounded-full ${
                level <= skill.level ? getLevelColor(skill.level) : 'bg-transparent'
              }`}
              initial={{ width: 0 }}
              animate={{ width: level <= skill.level ? '100%' : 0 }}
              transition={{ duration: 0.6, delay: level * 0.1 + 0.2 }}
            />
          </motion.div>
        ))}
      </div>
    )
  }

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-border/50 hover:border-primary/30">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-semibold">{skill.name}</h3>
            <Badge variant="outline" className="text-xs">
              {SKILL_LEVEL_LABELS[skill.level]}
            </Badge>
          </div>

          {/* スキルレベルバー */}
          {renderSkillLevel()}
        </CardHeader>

        <CardContent className="flex-1">
          {/* アイコン表示（オプション） */}
          {skill.icon && (
            <div className="mb-3 text-4xl" aria-label={`${skill.name} icon`}>
              {skill.icon}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
