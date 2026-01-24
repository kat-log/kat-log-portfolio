import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Footer } from './Footer'

const meta = {
  title: 'Layout/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

// 基本的なフッター
export const Default: Story = {}

// ページ全体での表示
export const WithPageContent: Story = {
  decorators: [
    (Story) => (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-4">ページコンテンツ</h1>
          <p className="text-gray-600 dark:text-gray-400">
            フッターはページ下部に配置されます。
          </p>
        </main>
        <Story />
      </div>
    ),
  ],
}

// モバイル幅での表示
export const MobileWidth: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}
