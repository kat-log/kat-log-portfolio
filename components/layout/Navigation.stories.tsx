import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Navigation } from './Navigation'

const meta = {
  title: 'Layout/Navigation',
  component: Navigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="p-8 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-lg">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Navigation>

export default meta
type Story = StoryObj<typeof meta>

// デスクトップナビゲーション
export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },
}

// モバイルナビゲーション（ハンバーガーメニュー）
// 注意: ハンバーガーメニューを確認するには、ブラウザのデベロッパーツールでモバイル表示（768px未満）に切り替えてください
export const Mobile: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="w-full min-h-[400px]">
        <div className="flex justify-end p-4 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
          <Story />
        </div>
        <p className="p-4 text-sm text-gray-600 dark:text-gray-400">
          ハンバーガーメニューを確認するには、ブラウザのデベロッパーツール（F12）でモバイル表示（768px未満）に切り替えてください。
        </p>
      </div>
    ),
  ],
}

// ヘッダー内での表示
export const InHeader: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <header className="w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold">Kat Log</span>
            <Story />
          </div>
        </div>
      </header>
    ),
  ],
}
