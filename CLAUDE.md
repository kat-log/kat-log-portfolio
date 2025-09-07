# Kat Log ポートフォリオ - Claude 指示書

## プロジェクト概要
TypeScript と Tailwind CSS で構築された Next.js 15 ポートフォリオサイト。Web開発プロジェクトを紹介するモダンでパフォーマンス重視の個人ポートフォリオ。

## パッケージマネージャー
**重要**: このプロジェクトは `pnpm` を使用します。`npm` は使用しないでください。必ず pnpm コマンドを使用してください。

## 基本コマンド
```bash
# 開発
pnpm dev              # 開発サーバー起動

# ビルド・品質チェック
pnpm build            # 本番用ビルド
pnpm start            # 本番サーバー起動
pnpm type-check       # TypeScript コンパイラー実行
pnpm lint             # ESLint 実行

# インストール
pnpm install          # 依存関係インストール
```

## 技術スタック
- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4
- **デプロイ**: Vercel
- **パッケージマネージャー**: pnpm

## プロジェクト構造
```
app/                  # Next.js 15 App Router ページ
├── layout.tsx        # ルートレイアウト
├── page.tsx          # ホームページ
└── globals.css       # グローバルスタイル

components/           # 再利用可能コンポーネント
├── ui/              # shadcn/ui 基本コンポーネント
├── layout/          # Header, Footer, Navigation
└── features/        # ProjectGrid, ProjectModal, FilterBar

data/                # 静的データ管理
└── projects.ts      # プロジェクトデータ配列

types/               # TypeScript 型定義
└── index.ts         # Project, Profile 型

docs/                # プロジェクトドキュメント
├── requirements.md   # 機能要件
├── tech-stack.md    # 技術選定
├── development-plan.md # 開発フェーズ
└── type-examples.md  # データ構造例
```

## 主要仕様
- **目標パフォーマンス**: Lighthouse 90+ スコア
- **レスポンシブデザイン**: モバイルファースト、デスクトップは3列グリッド
- **データ管理**: 静的TypeScriptファイル（データベース不使用）
- **ブラウザサポート**: モダンブラウザのみ
- **予算**: 無料ティアサービス（Vercel, GitHub）

## 開発ガイドライン
- TypeScript strict mode に従う
- App Router パターンを使用（Pages Router は使用しない）
- レスポンシブデザインの実装（モバイル/タブレット/デスクトップ）
- Core Web Vitals の最適化
- 詳細仕様は docs/ を参照

## 重要な注意事項
- プロジェクトは開発段階
- 全要件は docs/ に文書化済み
- スケーリングまでは静的データアプローチ
- パフォーマンスとアクセシビリティを重視