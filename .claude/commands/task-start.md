---
description: プロジェクトの現状を把握して、次に取り組むべきタスクを提案する
---

# プロジェクト状況分析と次のタスク提案

## 1. プロジェクト概要の把握

CLAUDE.mdの内容:
@CLAUDE.md

## 2. 開発計画の現状把握

development-plan.mdの内容:
@docs/development-plan.md

## 3. 現在のプロジェクト構造確認

!ls -la

現在のapp/ディレクトリの状況:
!find app -name "*.tsx" -o -name "*.ts" -o -name "*.css" 2>/dev/null || echo "app/ディレクトリが存在しません"

現在のcomponents/ディレクトリの状況:
!find components -name "*.tsx" -o -name "*.ts" 2>/dev/null || echo "components/ディレクトリが存在しません"

現在のdata/ディレクトリの状況:
!find data -name "*.ts" 2>/dev/null || echo "data/ディレクトリが存在しません"

## 4. Git状況の確認

!git status --porcelain

## 5. package.jsonの確認

package.jsonの内容:
@package.json

## 分析と次のタスク提案

上記の情報を基に、以下を分析して提案してください：

1. **現在の開発段階**: どのフェーズにいるか
2. **完了済みの項目**: 既に実装されている機能
3. **不足している項目**: まだ実装されていない重要な部分
4. **次の優先タスク**: 今すぐ取り組むべき具体的なタスク
5. **実装の手順**: 推奨される実装順序

**重要**: 実際のファイルの存在状況と開発計画を照らし合わせて、現実的で実行可能なタスクを1つ具体的に提案してください。