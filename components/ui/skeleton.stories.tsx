import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Skeleton } from './skeleton'
import { Card, CardHeader, CardContent } from './card'

const meta = {
  title: 'UI/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

// 基本的なスケルトン
export const Default: Story = {
  render: () => <Skeleton className="h-4 w-[250px]" />,
}

// 円形スケルトン（アバター用）
export const Circle: Story = {
  render: () => <Skeleton className="h-12 w-12 rounded-full" />,
}

// テキスト行
export const TextLines: Story = {
  render: () => (
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-4 w-[150px]" />
    </div>
  ),
}

// カードスケルトン
export const CardSkeleton: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <Skeleton className="h-5 w-[180px]" />
        <Skeleton className="h-4 w-[250px]" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-20 w-full" />
      </CardContent>
    </Card>
  ),
}

// プロジェクトカードスケルトン
export const ProjectCardSkeleton: Story = {
  render: () => (
    <Card className="w-[350px] overflow-hidden">
      <Skeleton className="h-48 w-full rounded-none" />
      <CardHeader>
        <Skeleton className="h-6 w-[200px]" />
        <Skeleton className="h-4 w-[280px]" />
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-14 rounded-full" />
        </div>
      </CardContent>
    </Card>
  ),
}

// プロフィールスケルトン
export const ProfileSkeleton: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[100px]" />
      </div>
    </div>
  ),
}

// グリッドスケルトン
export const GridSkeleton: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i} className="overflow-hidden">
          <Skeleton className="h-32 w-full rounded-none" />
          <CardHeader>
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-full" />
          </CardHeader>
        </Card>
      ))}
    </div>
  ),
}
