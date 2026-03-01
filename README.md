# Kat Log ポートフォリオ

Web開発プロジェクトを紹介するポートフォリオサイトです。

**Live**: https://kat-log-portfolio.vercel.app/

## 技術スタック

| カテゴリ | 技術 |
|---------|------|
| フレームワーク | Next.js 15 (App Router) |
| 言語 | TypeScript (strict mode) |
| スタイリング | Tailwind CSS v4 |
| UIコンポーネント | shadcn/ui (Radix UI) |
| アニメーション | Framer Motion |
| テスト | Playwright / Storybook |
| 監視 | Sentry / Vercel Analytics |
| デプロイ | Vercel |

## 主な機能

- レスポンシブグリッドレイアウト（モバイル1列 / タブレット2列 / デスクトップ3列）
- ダークモード切替（システム設定連動）
- タグによるプロジェクトフィルタリング
- プロジェクト詳細モーダル（スクリーンショットライトボックス付き）
- スクロールトリガーアニメーション
- 動的OG画像生成
- アクセシビリティ対応（WCAG 2.1 AA）

## プロジェクト構造

```
app/                    # Next.js App Router ページ
components/
├── ui/                 # shadcn/ui 基本コンポーネント
├── layout/             # Header, Footer, Navigation
└── features/           # ProjectGrid, ProjectModal, FilterBar 等
data/                   # 静的プロジェクトデータ
types/                  # TypeScript 型定義
lib/                    # ユーティリティ
e2e/                    # Playwright E2E テスト
docs/                   # 詳細ドキュメント
```
