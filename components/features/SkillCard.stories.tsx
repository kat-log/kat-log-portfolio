import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { SkillCard } from './SkillCard'
import { Skill } from '@/types'

const meta = {
  title: 'Features/SkillCard',
  component: SkillCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-[250px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SkillCard>

export default meta
type Story = StoryObj<typeof meta>

// サンプルスキルデータ
const expertSkill: Skill = {
  name: 'TypeScript',
  category: 'language',
  level: 5,
  icon: '📘',
}

const intermediateSkill: Skill = {
  name: 'React',
  category: 'framework',
  level: 4,
  icon: '⚛️',
}

const beginnerSkill: Skill = {
  name: 'Rust',
  category: 'language',
  level: 2,
  icon: '🦀',
}

const toolSkill: Skill = {
  name: 'Docker',
  category: 'tool',
  level: 3,
  icon: '🐳',
}

// 上級スキル
export const Expert: Story = {
  args: {
    skill: expertSkill,
  },
}

// 中上級スキル
export const Intermediate: Story = {
  args: {
    skill: intermediateSkill,
  },
}

// 初中級スキル
export const Beginner: Story = {
  args: {
    skill: beginnerSkill,
  },
}

// ツールスキル
export const Tool: Story = {
  args: {
    skill: toolSkill,
  },
}

// アイコンなし
export const NoIcon: Story = {
  args: {
    skill: {
      name: 'JavaScript',
      category: 'language',
      level: 4,
    },
  },
}

// 全レベル表示
export const AllLevels: StoryObj = {
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    () => (
      <div className="p-8 min-w-[900px]">
        <div className="grid grid-cols-5 gap-4">
          <SkillCard
            skill={{ name: 'レベル1', category: 'other', level: 1, icon: '1️⃣' }}
          />
          <SkillCard
            skill={{ name: 'レベル2', category: 'other', level: 2, icon: '2️⃣' }}
          />
          <SkillCard
            skill={{ name: 'レベル3', category: 'other', level: 3, icon: '3️⃣' }}
          />
          <SkillCard
            skill={{ name: 'レベル4', category: 'other', level: 4, icon: '4️⃣' }}
          />
          <SkillCard
            skill={{ name: 'レベル5', category: 'other', level: 5, icon: '5️⃣' }}
          />
        </div>
      </div>
    ),
  ],
}

// スキルグリッド
export const SkillGrid: StoryObj = {
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    () => (
      <div className="p-8 min-w-[700px]">
        <div className="grid grid-cols-3 gap-4">
          <SkillCard skill={expertSkill} />
          <SkillCard skill={intermediateSkill} />
          <SkillCard skill={beginnerSkill} />
          <SkillCard skill={toolSkill} />
          <SkillCard
            skill={{ name: 'Next.js', category: 'framework', level: 4, icon: '▲' }}
          />
          <SkillCard
            skill={{ name: 'Node.js', category: 'framework', level: 3, icon: '🟢' }}
          />
        </div>
      </div>
    ),
  ],
}
