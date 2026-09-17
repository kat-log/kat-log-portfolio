# Kat Log ポートフォリオ

Next.js 16 (App Router) + TypeScript で作った個人ポートフォリオサイト。Vercel にデプロイしている。

## 環境の罠

- **パッケージマネージャーは pnpm のみ**。`npm` は使わない
- **Tailwind CSS は v3 系**（`tailwindcss@3.4.19`）。`app/globals.css` は `@tailwind base;` の v3 構文。v4 の `@import "tailwindcss"` や `@theme` は使えない
- **バンドラーは Turbopack、モジュール形式は ESM**（`package.json` の `"type": "module"`）。CommonJS が必要な設定ファイルは `.cjs` にする（例: `lighthouserc.cjs`）。Webpack でのみ動く API や設定パターンは使えない
- `git push` 時に husky の pre-push が `pnpm type-check` と `pnpm lint` を走らせる。push が遅い・落ちるときはまずここを疑う
- `main` への直接コミットは husky の pre-commit が機械的に拒否する

## 判断の基準

- 既存コードと同じ読み味になるように書く。命名・コメント密度・イディオムを周囲に合わせる
- ルーティングは App Router (`app/`)。Pages Router は使わない
- TypeScript は strict mode
- データは `data/` 配下の静的 TypeScript ファイルで持つ。DB は使わない
- Lighthouse CI の閾値は `lighthouserc.cjs` が正。**accessibility と SEO は 0.95 を下回ると CI が落ちる**（performance と best-practices は warn のみ）
- CI の不安定なテスト（WebKit のカラーコントラスト、CSS アニメーション等のブラウザ固有の揺れ）は、ハードコード値やテストスキップのような脆い回避策ではなく、テスト環境でアニメーションを無効化するような堅牢な方法で直す

## 実行前に確認を取ること

- 失敗するテストをスキップ・無効化すること
- 最初のアプローチが失敗したときに別の方法を続けて試すこと。状況と次に試す案を説明して承認を待つ
- `main` への直接 push

## Git

- 作業は必ずフィーチャーブランチで行い、push して PR を作る。ブランチ名は `fix/webkit-color-contrast` のように内容が分かるもの
- PR 説明には `git log main..HEAD --oneline` で確認した「このブランチの差分」だけを書く。過去の PR でマージ済みの変更は含めない
- Issue 参照は、部分的な進捗なら `Refs #N`。その PR で完全に解決する場合のみ `Closes #N`

## 進め方

- 「残りの MVP タスク」のようにスコープを指定されたら、その範囲に厳密に絞る。他フェーズの分析や提案は、求められてからにする

## 必要になったら読むもの

- `docs/` — requirements.md（機能要件）/ tech-stack.md（技術選定）/ development-plan.md（開発フェーズ）/ type-examples.md（データ構造）/ deploy-guide.md（デプロイ）
- `.claude/commands/` — 定型作業のスラッシュコマンド（task-start, task-end, create-mr, update-issue, explain）
