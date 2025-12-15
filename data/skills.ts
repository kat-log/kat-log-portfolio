import { Skill } from '@/types'

/**
 * スキルデータ
 * Aboutページで表示するスキル一覧
 */
export const skills: Skill[] = [
  // プログラミング言語
  {
    name: 'TypeScript',
    category: 'language',
    level: 4,
    icon: '🔷',
  },
  {
    name: 'JavaScript',
    category: 'language',
    level: 5,
    icon: '📜',
  },
  {
    name: 'Python',
    category: 'language',
    level: 3,
    icon: '🐍',
  },
  {
    name: 'HTML/CSS',
    category: 'language',
    level: 5,
    icon: '🎨',
  },

  // フレームワーク
  {
    name: 'Next.js',
    category: 'framework',
    level: 2,
    icon: '▲',
  },
  {
    name: 'React',
    category: 'framework',
    level: 1,
    icon: '⚛️',
  },
  {
    name: 'Tailwind CSS',
    category: 'framework',
    level: 1,
    icon: '💨',
  },
  {
    name: 'Node.js',
    category: 'framework',
    level: 3,
    icon: '🟢',
  },

  // ツール
  {
    name: 'Git',
    category: 'tool',
    level: 4,
    icon: '📦',
  },
  {
    name: 'GitHub',
    category: 'tool',
    level: 4,
    icon: '🐙',
  },
  {
    name: 'VS Code',
    category: 'tool',
    level: 5,
    icon: '💻',
  },
  {
    name: 'Figma',
    category: 'tool',
    level: 3,
    icon: '🎨',
  },
]

/**
 * カテゴリ別にスキルを取得
 */
export const getSkillsByCategory = (category: Skill['category']) => {
  return skills.filter((skill) => skill.category === category)
}

/**
 * レベル順でスキルを取得
 */
export const getSkillsByLevel = (minLevel: number = 1) => {
  return skills
    .filter((skill) => skill.level >= minLevel)
    .sort((a, b) => b.level - a.level)
}
