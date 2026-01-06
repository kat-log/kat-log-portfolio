'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProjectCard } from "@/components/features/ProjectCard"
import { ProjectGrid } from "@/components/features/ProjectGrid"
import { ProjectModal } from "@/components/features/ProjectModal"
import { SkillCard } from "@/components/features/SkillCard"
import { projects } from "@/data/projects"
import { skills } from "@/data/skills"
import type { Project } from "@/types"

export default function ComponentsTestPage() {
  const [isGridLoading, setIsGridLoading] = useState(false)
  const [isModalLoading, setIsModalLoading] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleShowGridLoading = () => {
    setIsGridLoading(true)
    setTimeout(() => setIsGridLoading(false), 3000)
  }

  const handleShowModalLoading = () => {
    setSelectedProject(projects[0])
    setIsModalOpen(true)
    setIsModalLoading(true)
    setTimeout(() => setIsModalLoading(false), 2000)
  }

  return (
    <div className="container mx-auto p-8 space-y-12">
      <h1 className="text-4xl font-bold text-center mb-8">shadcn/ui コンポーネントテスト</h1>

      {/* Loading States Tests */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold border-b pb-2">ローディング状態テスト（P4-006）</h2>

        <Card>
          <CardHeader>
            <CardTitle>ローディング状態のデモ</CardTitle>
            <CardDescription>
              ボタンをクリックして、スケルトンローディング表示を確認してください
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button onClick={handleShowGridLoading} disabled={isGridLoading}>
                {isGridLoading ? '読み込み中...' : 'プロジェクトグリッドのローディング表示（3秒）'}
              </Button>
              <Button onClick={handleShowModalLoading} disabled={isModalLoading}>
                {isModalLoading ? 'モーダル読み込み中...' : 'プロジェクトモーダルのローディング表示（2秒）'}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              ※ 1つ目のボタン: 下のプロジェクト一覧がスケルトン表示に切り替わります（6個表示）<br />
              ※ 2つ目のボタン: プロジェクト詳細モーダルがスケルトン表示で開きます
            </p>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">プロジェクト一覧</h3>
          <ProjectGrid
            projects={projects}
            isLoading={isGridLoading}
            skeletonCount={6}
            onProjectClick={(project) => {
              setSelectedProject(project)
              setIsModalOpen(true)
            }}
          />
        </div>
      </section>

      {/* Button Tests */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold border-b pb-2">Button コンポーネント</h2>

        {/* Button Variants */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Variants</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>

        {/* Button Sizes */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Sizes</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">🎯</Button>
          </div>
        </div>

        {/* Button States */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">States</h3>
          <div className="flex flex-wrap gap-4">
            <Button>Normal</Button>
            <Button disabled>Disabled</Button>
            <Button className="bg-blue-500 hover:bg-blue-600">Custom Color</Button>
          </div>
        </div>
      </section>

      {/* Card Tests */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold border-b pb-2">Card コンポーネント</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Basic Card */}
          <Card>
            <CardHeader>
              <CardTitle>基本カード</CardTitle>
              <CardDescription>シンプルな説明文がここに入ります</CardDescription>
            </CardHeader>
            <CardContent>
              <p>カードの本文コンテンツです。shadcn/uiのCardコンポーネントが正しく動作しているかテストしています。</p>
            </CardContent>
            <CardFooter>
              <Button>アクション</Button>
            </CardFooter>
          </Card>

          {/* Project Card Example */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🚀 プロジェクトカード
                <Badge variant="secondary">New</Badge>
              </CardTitle>
              <CardDescription>プロジェクト風のカード例</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm">技術スタック:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              <Button size="sm" variant="outline">GitHub</Button>
              <Button size="sm">デモ</Button>
            </CardFooter>
          </Card>

          {/* Stats Card */}
          <Card>
            <CardHeader>
              <CardTitle>統計カード</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold">24</div>
                <div className="text-sm text-muted-foreground">完了したプロジェクト</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ProjectCard Tests */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold border-b pb-2">ProjectCard コンポーネント</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={(project) => {
                console.log('Project clicked:', project.title)
                alert(`クリックされたプロジェクト: ${project.title}`)
              }}
            />
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>ProjectCard 機能テスト</CardTitle>
            <CardDescription>実装された機能のチェックリスト</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>✅ プロジェクトデータの表示（タイトル、説明、日付）</li>
              <li>✅ サムネイル画像の表示とホバーズーム</li>
              <li>✅ Featuredバッジの表示</li>
              <li>✅ 技術スタックタグの表示（最大4つ + カウント）</li>
              <li>✅ GitHub/Demo/Storeリンクボタン</li>
              <li>✅ カードホバーアニメーション（上昇エフェクト）</li>
              <li>✅ レスポンシブデザイン（1/2/3カラム）</li>
              <li>✅ クリックイベントハンドラー</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* SkillCard Tests */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold border-b pb-2">SkillCard コンポーネント</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>SkillCard 機能テスト</CardTitle>
            <CardDescription>実装された機能のチェックリスト</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>✅ スキル名の表示</li>
              <li>✅ スキルレベルバッジの表示</li>
              <li>✅ 5段階レベルバーの表示</li>
              <li>✅ レベルに応じた色分け（グレー/黄/青/緑）</li>
              <li>✅ アイコン表示（オプション）</li>
              <li>✅ カードホバーアニメーション</li>
              <li>✅ レスポンシブデザイン（1/2/4カラム）</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Badge Tests */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold border-b pb-2">Badge コンポーネント</h2>

        {/* Badge Variants */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Variants</h3>
          <div className="flex flex-wrap gap-4">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </div>

        {/* Technology Badges */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">技術スタック例</h3>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-blue-500 hover:bg-blue-600">TypeScript</Badge>
            <Badge className="bg-black hover:bg-gray-800">Next.js</Badge>
            <Badge className="bg-cyan-500 hover:bg-cyan-600">Tailwind CSS</Badge>
            <Badge className="bg-purple-500 hover:bg-purple-600">Framer Motion</Badge>
            <Badge variant="outline">shadcn/ui</Badge>
          </div>
        </div>

        {/* Status Badges */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">ステータス例</h3>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-green-500 hover:bg-green-600">完成</Badge>
            <Badge className="bg-yellow-500 hover:bg-yellow-600">開発中</Badge>
            <Badge variant="destructive">停止中</Badge>
            <Badge variant="secondary">計画中</Badge>
          </div>
        </div>
      </section>

      {/* Integration Tests */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold border-b pb-2">統合テスト</h2>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>コンポーネント統合例</span>
              <Badge className="bg-green-500">動作確認済み</Badge>
            </CardTitle>
            <CardDescription>
              すべてのコンポーネントが適切に統合されているかのテスト
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>shadcn/ui コンポーネントライブラリの基本セットが正常に動作しています：</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Button: 6種類のvariant × 4種類のサイズ</li>
              <li>Card: Header, Content, Footer の完全セット</li>
              <li>Badge: 4種類のvariant + カスタムスタイル対応</li>
              <li>TypeScript型安全性: 完全対応</li>
              <li>Tailwind CSS: スタイリング正常</li>
            </ul>
          </CardContent>
          <CardFooter className="gap-2">
            <Button onClick={() => alert('Button clicked!')}>インタラクションテスト</Button>
            <Button variant="outline" onClick={() => console.log('Console test')}>
              コンソールテスト
            </Button>
          </CardFooter>
        </Card>
      </section>

      {/* Accessibility Tests */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold border-b pb-2">アクセシビリティテスト</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>キーボードナビゲーション</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button>タブで移動可能 1</Button>
              <Button variant="outline">タブで移動可能 2</Button>
              <Button variant="secondary">タブで移動可能 3</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>フォーカス状態</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                各ボタンにフォーカスを当てて、視覚的なフィードバックを確認してください。
              </p>
              <div className="space-y-2">
                <Button className="w-full">フォーカステスト 1</Button>
                <Button variant="outline" className="w-full">フォーカステスト 2</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ProjectModal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setIsModalLoading(false)
        }}
        isLoading={isModalLoading}
      />
    </div>
  )
}