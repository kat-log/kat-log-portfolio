import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Header } from './Header'

const meta = {
  title: 'Layout/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="min-h-[200px]">
        <Story />
        <div className="pt-20 p-8">
          <p className="text-gray-600 dark:text-gray-400">
            ヘッダーは固定位置で表示されます。スクロール時も画面上部に固定されます。
          </p>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

// 基本的なヘッダー
export const Default: Story = {}

// コンテンツ付きページでの表示
export const WithContent: Story = {
  decorators: [
    (Story) => (
      <div className="min-h-screen">
        <Story />
        <main className="pt-20 p-8">
          <h1 className="text-3xl font-bold mb-4">ページコンテンツ</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            ヘッダーは固定位置で表示され、コンテンツの上に重なります。
          </p>
          {Array.from({ length: 10 }).map((_, i) => (
            <p key={i} className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          ))}
        </main>
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

// タブレット幅での表示
export const TabletWidth: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}
