# ファイル構造（案）

```text
├── app/                    # Next.js 15 App Routerのページ定義
│   ├── layout.tsx          # 全体レイアウト（ヘッダー・フッター配置の設計図）
│   ├── page.tsx            # ホームページ（ヒーロセクション・作品一覧）
│   ├── about/              # Aboutページディレクトリ
│   │   └── page.tsx        # Aboutページ（詳細な自己紹介・スキルセット）
│   └── globals.css         # 全体のCSSスタイル
├── components/             # 再利用可能なコンポーネント
│   ├── ui/                 # shadcn/uiの基本コンポーネント（Button、Card、Modal等）
│   ├── layout/             # レイアウト用コンポーネント（Header、Footer、Navigation）
│   └── features/           # 機能別コンポーネント（ProjectGrid、ProjectModal、FilterBar）
├── data/                   # 静的データ管理
│   └── projects.ts         # 作品データの配列定義
├── lib/                    # ユーティリティ関数・設定
│   └── utils.ts            # 共通関数（クラス名結合、日付フォーマット等）
├── public/                 # 静的ファイル（Next.jsが直接配信）
│   └── images/             # 作品スクリーンショット、アバター画像等
└── types/                  # TypeScript型定義
    └── index.ts            # Project、Profile等の型定義
```
