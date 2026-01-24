import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Badge } from './badge'

const meta = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'バッジのスタイルバリアント',
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

// 基本バリアント
export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
}

export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
}

// 技術タグとしての使用例
export const TechTags: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">React</Badge>
      <Badge variant="secondary">TypeScript</Badge>
      <Badge variant="outline">Next.js</Badge>
      <Badge variant="default">Tailwind CSS</Badge>
    </div>
  ),
}

// ステータス表示としての使用例
export const StatusBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">完了</Badge>
      <Badge variant="secondary">進行中</Badge>
      <Badge variant="destructive">エラー</Badge>
      <Badge variant="outline">待機中</Badge>
    </div>
  ),
}

// 全バリアント一覧
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
}
