import { expect } from '@playwright/test';
import type { Page } from '@playwright/test';

/**
 * E2E テスト共通のヘルパー
 */

/**
 * ページを開き、検証を開始できる状態になるまで待機する
 *
 * `waitForLoadState('networkidle')` は Playwright が非推奨としており、
 * dev サーバーのオンデマンドコンパイルで通信が途切れず、負荷の高い環境では
 * タイムアウトするため使用しない。代わりに以下の明示的な条件で待機する。
 *
 * - main ランドマークが表示されている
 * - PageTransition のフェードインが完了している
 *   （SSR 時点では opacity: 0 のため、opacity が 1 になった時点で
 *     ハイドレーション完了かつアニメーション完了とみなせる）
 * - Web フォントの読み込みが完了している（文字サイズ確定後に判定するため）
 *
 * ハイドレーション完了を待つ点も重要で、framer-motion は SSR 時に
 * `tabindex="0"` を持つ div を出力し、ハイドレーション時にそれを取り除く。
 * 待機せずにキーボード操作を行うと、この div にフォーカスが入ってしまう。
 */
export async function gotoAndWaitForReady(page: Page, path: string): Promise<void> {
  await page.goto(path);

  await expect(page.getByRole('main')).toBeVisible();

  await page.waitForFunction(
    () => {
      const content = document.querySelector('main')?.firstElementChild;
      return !!content && getComputedStyle(content).opacity === '1';
    },
    undefined,
    { timeout: 10000 }
  );

  await page.evaluate(() => document.fonts.ready.then(() => undefined));
}
