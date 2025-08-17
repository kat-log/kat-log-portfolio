# 技術スタック選定書

## コア技術

### フレームワーク & 言語

- **Next.js 15** (App Router)
  - Server Components によるパフォーマンス向上
  - ビルトインの最適化機能
- **TypeScript**
  - 型安全性
  - IDE サポートの向上
  - 保守性の改善

### スタイリング

- **Tailwind CSS v4**
  - CSS ファーストの設定（設定ファイル不要）
  - モダンな CSS 機能のサポート
- **shadcn/ui**
  - モダンでカスタマイズ可能なコンポーネント
  - Radix UI ベース
  - Tailwind CSS 対応

### アニメーション

- **Framer Motion**
  - スムーズで高性能なアニメーション
  - 宣言的な API
  - ジェスチャーサポート
  - shadcn/ui と互換性あり

### テーマ管理

- **next-themes**
  - 簡単なダークモード実装
  - SSR 対応
  - 読み込み時のちらつきなし

## 開発ツール

### パッケージマネージャー

- **pnpm**
  - 高速インストール
  - ディスク容量の効率的な使用
  - 厳格な依存関係管理

### コード品質

- **ESLint** (create-next-app に含まれる)
- **Prettier**

### コンポーネント開発

- Storybook (初期から導入)

  - UI コンポーネントの独立開発
  - ビジュアルテスト
  - ドキュメント生成

- アドオン:

  - @storybook/addon-essentials
  - @storybook/addon-a11y (アクセシビリティチェック)
  - @storybook/addon-interactions (インタラクションテスト)

### テスト

- **Playwright**

  - E2E テスト
  - ビジュアルリグレッションテスト
  - CI/CD 統合

### CI/CD

- **GitHub Actions**

  - 自動ビルド・テスト
  - Lighthouse スコアチェック
  - デプロイ前の品質チェック

### バージョン管理

- **Git**
- **GitHub**

## ホスティング & デプロイ

### プラットフォーム

- **Vercel**
  - 無料プラン（月 100GB 帯域幅）
  - 自動デプロイ
  - Next.js との優れた統合
  - カスタムドメイン無料サポート

### ドメイン

- **Vercel 提供の無料ドメイン** (your-project.vercel.app)
  - 完全無料で永続的に使用可能
  - HTTPS/SSL 証明書自動対応
- カスタムドメイン（オプション）
  - 将来的に必要に応じて追加可能
  - 年間 1,000-2,000 円程度

## データ管理

### 現在のアプローチ

- **TypeScript ファイルでの静的データ管理**
  - シンプルな配列/オブジェクト構造
  - TypeScript による型安全性
  - MVP 段階ではデータベース不要

### 将来の検討事項

- **Supabase** または **PlanetScale** （スケーリング時）
- **Contentful** または **microCMS** （CMS 必要時）

## API 統合

### 将来の API

- **GitHub API**
  - リポジトリ情報の取得
  - コミット活動の表示（草の可視化）
  - スター数の表示
  - 言語統計
- アナリティクス（Vercel Analytics または Google Analytics）
- お問い合わせフォーム（EmailJS またはカスタム API）

## ブラウザサポート

- モダンブラウザのみ（Tailwind CSS v4 の機能を活用）
- Chrome 111+
- Safari 16.4+
- Firefox 128+

## パフォーマンス最適化

### 画像処理

- **Next.js Image コンポーネント**
  - 自動最適化
  - 遅延読み込み
  - レスポンシブ画像

### コード分割

- Next.js による自動分割
- 重いコンポーネントの動的インポート

### キャッシュ戦略

- 可能な限り静的生成
- 動的コンテンツには ISR（増分静的再生成）

## 開発ワークフロー

### ローカル開発

```bash
pnpm dev
```

### ビルドプロセス

```bash
pnpm build
pnpm start
```

### デプロイ

- GitHub へプッシュ
- Vercel 経由での自動デプロイ
