import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './card'
import { Button } from './button'
import { Badge } from './badge'

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

// 基本的なカード
export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>カードタイトル</CardTitle>
        <CardDescription>カードの説明文がここに入ります。</CardDescription>
      </CardHeader>
      <CardContent>
        <p>カードの本文コンテンツです。</p>
      </CardContent>
      <CardFooter>
        <Button>アクション</Button>
      </CardFooter>
    </Card>
  ),
}

// ヘッダーのみ
export const HeaderOnly: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>シンプルなカード</CardTitle>
        <CardDescription>ヘッダーのみのカード</CardDescription>
      </CardHeader>
    </Card>
  ),
}

// コンテンツのみ
export const ContentOnly: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent className="pt-6">
        <p>コンテンツのみのシンプルなカードです。</p>
      </CardContent>
    </Card>
  ),
}

// プロジェクトカード風
export const ProjectCardStyle: Story = {
  render: () => (
    <Card className="w-[350px] overflow-hidden">
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600" />
      <CardHeader>
        <CardTitle>ポートフォリオサイト</CardTitle>
        <CardDescription>Next.js 15 で構築したモダンなポートフォリオ</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">React</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="secondary">Tailwind CSS</Badge>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="sm">詳細を見る</Button>
        <Button size="sm" variant="outline">GitHub</Button>
      </CardFooter>
    </Card>
  ),
}

// フッター付きカード
export const WithFooterActions: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>確認ダイアログ</CardTitle>
        <CardDescription>この操作を実行しますか？</CardDescription>
      </CardHeader>
      <CardContent>
        <p>この操作は取り消すことができません。</p>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">キャンセル</Button>
        <Button variant="destructive">削除</Button>
      </CardFooter>
    </Card>
  ),
}

// 複数カードのグリッド表示
export const CardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>カード 1</CardTitle>
        </CardHeader>
        <CardContent>
          <p>コンテンツ 1</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>カード 2</CardTitle>
        </CardHeader>
        <CardContent>
          <p>コンテンツ 2</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>カード 3</CardTitle>
        </CardHeader>
        <CardContent>
          <p>コンテンツ 3</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>カード 4</CardTitle>
        </CardHeader>
        <CardContent>
          <p>コンテンツ 4</p>
        </CardContent>
      </Card>
    </div>
  ),
}
