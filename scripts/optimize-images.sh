#!/usr/bin/env bash
# プロジェクト画像を 16:9 にリサイズ・クロップする（形式はそのまま、Next.js が最適化）
# 使い方: pnpm optimize-images [ターゲットディレクトリ]
# 例: pnpm optimize-images public/images/projects/my-project

set -euo pipefail

TARGET="${1:-public/images/projects}"
OUTPUT_WIDTH=1280
OUTPUT_HEIGHT=720

if ! command -v magick &>/dev/null; then
  echo "Error: ImageMagick が見つかりません。brew install imagemagick を実行してください。"
  exit 1
fi

count=0

while IFS= read -r -d '' file; do
  ext="$(echo "${file##*.}" | tr '[:upper:]' '[:lower:]')"

  if [[ "$ext" != "png" && "$ext" != "jpg" && "$ext" != "jpeg" ]]; then
    continue
  fi

  echo "  処理中: $file"

  # 一時ファイルに出力してから上書き
  tmp="${file}.tmp"
  magick "$file" \
    -resize "${OUTPUT_WIDTH}x${OUTPUT_HEIGHT}^" \
    -gravity Center \
    -extent "${OUTPUT_WIDTH}x${OUTPUT_HEIGHT}" \
    "$tmp"
  mv "$tmp" "$file"

  echo "  -> 完了 (1280x720 にクロップ)"
  count=$((count + 1))
done < <(find "$TARGET" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) -print0)

echo ""
echo "完了: $count ファイルを処理しました"
