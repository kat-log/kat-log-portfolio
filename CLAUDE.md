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
- **バンドラー**: Turbopack
- **モジュール形式**: ESM

本プロジェクトは Turbopack、pnpm、TypeScript、ESM モジュールを使用している。パッケージのインストールや設定ファイルの作成時は、必ず ESM 互換の形式（.mjs/.cjs を適宜使用）を使い、Turbopack との互換性を確認すること。Webpack でのみ動作する API や設定パターンは使用しない。

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

## Claude の動作指針
- 最初のアプローチが失敗した場合、自動的に別の方法を試行せず、代替案を提示してユーザーの承認を求める
- エラーや問題が発生した場合は状況を説明し、次に試すべき方法を提案する
- ユーザーの明示的な許可なしに複数のアプローチを連続実行しない

## CI・テスト
- CIテスト失敗（特にWebKitのカラーコントラストやCSSアニメーション関連のブラウザ固有の不安定な問題）を修正する際は、脆弱な回避策（ハードコード値、テストスキップ）よりも堅牢な解決策（テスト環境でのアニメーション無効化など）を優先する
- ユーザーの明示的な承認なしに、失敗するテストをスキップしない

## Git ワークフロー
- `main` ブランチに直接コミットやプッシュをしない。必ずフィーチャーブランチを作成し、プッシュしてPRを作成する
- ブランチ命名: `fix/webkit-color-contrast` や `feat/sentry-integration` のような説明的な名前を使用する
- PR説明を作成する際は、現在のブランチのmainに対するdiffの変更のみを含める。以前のPRでマージされたコミットや変更を参照しない。含まれる内容を確認するために `git log main..HEAD --oneline` を実行する
- GitHub IssueをPRで参照する際、部分的な進捗には `Refs #N` を使用する。そのPRでIssueが完全に解決される場合のみ `Closes #N` や `Fixes #N` を使用する

## コミュニケーション方針
- ユーザーが特定のタスクやフェーズに集中するよう求めた場合（例: 「残りのMVPタスク」）、求められた内容に厳密にスコープを絞る。明示的に求められない限り、他のフェーズの作業を分析・提案しない