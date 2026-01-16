# Vercel デプロイガイド

## 概要

このドキュメントでは、Kat Log ポートフォリオサイトを Vercel にデプロイする手順を説明します。

## 前提条件

- GitHub アカウント
- Vercel アカウント（GitHub でサインアップ推奨）
- Node.js 18+ がインストールされていること

## デプロイ方法

### 方法1: Vercel ダッシュボードから（推奨）

1. [Vercel](https://vercel.com) にログイン
2. 「Add New...」→「Project」をクリック
3. 「Import Git Repository」で `kat-log-portfolio` を選択
4. 以下の設定を確認：
   - **Framework Preset**: Next.js（自動検出）
   - **Root Directory**: `./`（デフォルト）
   - **Build Command**: `pnpm build`
   - **Install Command**: `pnpm install`
   - **Output Directory**: `.next`
5. 「Deploy」をクリック

### 方法2: Vercel CLI から

```bash
# Vercel CLI のインストール（未インストールの場合）
npm install -g vercel

# プロジェクトディレクトリで実行
cd kat-log-portfolio

# Vercel にログイン
vercel login

# プレビューデプロイ
vercel

# 本番デプロイ
vercel --prod
```

## 設定ファイル

### vercel.json

プロジェクトルートに `vercel.json` を配置済み：

```json
{
  "framework": "nextjs",
  "installCommand": "pnpm install",
  "buildCommand": "pnpm build",
  "regions": ["hnd1"],
  "headers": [...]
}
```

**設定内容:**
- `regions: ["hnd1"]`: 東京リージョンを優先
- セキュリティヘッダー（X-Content-Type-Options, X-Frame-Options, X-XSS-Protection）
- フォントファイルの長期キャッシュ設定

## 環境変数

現時点で必要な環境変数はありません。将来的に追加する場合は Vercel ダッシュボードの「Settings」→「Environment Variables」から設定してください。

## カスタムドメイン（オプション）

1. Vercel ダッシュボードでプロジェクトを選択
2. 「Settings」→「Domains」に移動
3. カスタムドメインを追加
4. DNS 設定を案内に従って更新

## デプロイ後の確認事項

- [ ] サイトが正常に表示される
- [ ] 全ページがアクセス可能（/, /about, /components-test）
- [ ] ダークモード切り替えが動作する
- [ ] プロジェクトカードのモーダルが開く
- [ ] モバイル表示が正常
- [ ] OG 画像が正しく生成される

## トラブルシューティング

### ビルドエラーが発生する場合

```bash
# ローカルでビルドを確認
pnpm build

# 型エラーの確認
pnpm type-check

# リントエラーの確認
pnpm lint
```

### デプロイが遅い場合

- Vercel の無料プランでは cold start が発生することがあります
- `regions` 設定で最寄りのリージョンを指定済み

## 参考リンク

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel CLI Reference](https://vercel.com/docs/cli)

---

**最終更新**: 2026-01-15
