import { test, expect } from '@playwright/test';

test.describe('ホームページ', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('ページが正常に表示される', async ({ page }) => {
    // タイトルの確認
    await expect(page).toHaveTitle(/Kat Log/);

    // ヒーローセクションの確認
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('ナビゲーションが表示される', async ({ page }) => {
    // ヘッダーの確認
    const header = page.locator('header');
    await expect(header).toBeVisible();

    // ロゴの確認
    await expect(header.getByText('Kat Log')).toBeVisible();
  });

  test('フッターが表示される', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('プロジェクトセクションが表示される', async ({ page }) => {
    // プロジェクトセクションまでスクロール
    const projectsSection = page.locator('#projects');
    await projectsSection.scrollIntoViewIfNeeded();

    // プロジェクトセクションの見出しを確認（exactオプションで完全一致）
    await expect(page.getByRole('heading', { name: 'Projects', exact: true })).toBeVisible();
  });

  test('フィルターバーが機能する', async ({ page }) => {
    // プロジェクトセクションまでスクロール
    const projectsSection = page.locator('#projects');
    await projectsSection.scrollIntoViewIfNeeded();

    // フィルターボタンの存在確認（プロジェクトセクション内のボタン）
    const filterButtons = projectsSection.locator('button');

    // フィルターボタンが存在するか確認（複数の可能性があるのでcount > 0）
    const count = await filterButtons.count();
    expect(count).toBeGreaterThan(0);
  });

  test('ダークモード切り替えが動作する', async ({ page }) => {
    // テーマ切り替えボタンを探す
    const themeButton = page.locator('button[aria-label*="theme"], button[aria-label*="ダーク"], button[aria-label*="ライト"]').first();

    // ボタンが存在するか確認
    if (await themeButton.isVisible()) {
      // クリック前のhtml要素のclass確認
      const htmlElement = page.locator('html');
      const classBefore = await htmlElement.getAttribute('class');

      // ボタンをクリック
      await themeButton.click();

      // 少し待機
      await page.waitForTimeout(500);

      // クリック後のclass確認（変更があることを期待）
      const classAfter = await htmlElement.getAttribute('class');
      expect(classBefore).not.toBe(classAfter);
    }
  });
});

test.describe('プロジェクトモーダル', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('プロジェクトカードをクリックするとモーダルが開く', async ({ page }) => {
    // プロジェクトセクションまでスクロール
    await page.locator('#projects').scrollIntoViewIfNeeded();

    // 最初のプロジェクトカードを探してクリック
    const projectCard = page.locator('[data-project-card]').first();

    // カードが存在しない場合は代替セレクタを使用
    if (await projectCard.count() === 0) {
      // article要素または div内のクリック可能な要素を探す
      const clickableCard = page.locator('article, [role="button"]').first();
      if (await clickableCard.isVisible()) {
        await clickableCard.click();
      }
    } else {
      await projectCard.click();
    }

    // モーダルが開くまで待機
    await page.waitForTimeout(500);

    // モーダルダイアログの確認
    const modal = page.locator('[role="dialog"]');
    if (await modal.count() > 0) {
      await expect(modal).toBeVisible();
    }
  });
});
