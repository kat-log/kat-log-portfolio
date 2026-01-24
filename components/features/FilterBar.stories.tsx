import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FilterBar } from './FilterBar'

const meta = {
  title: 'Features/FilterBar',
  component: FilterBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onFilterChange: { action: 'onFilterChange' },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FilterBar>

export default meta
type Story = StoryObj<typeof meta>

// 基本的なフィルターバー
export const Default: Story = {
  args: {
    onFilterChange: (tag) => console.log(`フィルター変更: ${tag}`),
  },
}

// インタラクション例
export const WithInteraction: Story = {
  args: {
    onFilterChange: (tag) => {
      console.log(`フィルター変更: ${tag}`)
      alert(`選択されたフィルター: ${tag}`)
    },
  },
}

// モバイル幅での表示
export const MobileWidth: Story = {
  decorators: [
    (Story) => (
      <div className="w-[320px]">
        <Story />
      </div>
    ),
  ],
  args: {
    onFilterChange: (tag) => console.log(`フィルター変更: ${tag}`),
  },
}

// タブレット幅での表示
export const TabletWidth: Story = {
  decorators: [
    (Story) => (
      <div className="w-[768px]">
        <Story />
      </div>
    ),
  ],
  args: {
    onFilterChange: (tag) => console.log(`フィルター変更: ${tag}`),
  },
}
