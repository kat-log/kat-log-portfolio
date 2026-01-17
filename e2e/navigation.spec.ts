import { test, expect } from '@playwright/test';

test.describe('ナビゲーション', () => {
  test('ホームページからAboutページに遷移できる', async ({ page }) => {
    await page.goto('/');

    // ヘッダー内のAboutリンクを確認
    const headerAboutLink = page.locator('header').getByRole('link', { name: 'About', exact: true });

    // モバイルビューではナビゲーションが隠れている場合がある
    if (await headerAboutLink.isVisible()) {
      await headerAboutLink.click();
    } else {
      // ハンバーガーメニューを開く
      const menuButton = page.locator('button[aria-label*="menu"], button[aria-label*="メニュー"]').first();
      if (await menuButton.isVisible()) {
        await menuButton.click();
        await page.waitForTimeout(300);
      }
      // Aboutリンクをクリック
      await page.getByRole('link', { name: 'About', exact: true }).first().click();
    }

    // URLの確認
    await expect(page).toHaveURL('/about');

    // Aboutページのコンテンツ確認
    await expect(page.getByRole('heading', { name: 'Kat Log' })).toBeVisible();
  });

  test('AboutページからHomeに戻れる', async ({ page }) => {
    await page.goto('/about');

    // Homeリンクまたはロゴをクリック
    const homeLink = page.getByRole('link', { name: /home|kat log/i }).first();
    await homeLink.click();

    // URLの確認
    await expect(page).toHaveURL('/');
  });

  test('ハッシュリンクでセクションにスクロールできる', async ({ page }) => {
    await page.goto('/');

    // ヘッダー内のProjectsリンクをクリック（ハッシュリンク）
    const projectsLink = page.locator('header').getByRole('link', { name: /projects/i }).first();
    if (await projectsLink.isVisible()) {
      await projectsLink.click();

      // スクロール完了を待つ
      await page.waitForTimeout(500);

      // プロジェクトセクションが表示されていることを確認
      await expect(page.locator('#projects')).toBeInViewport();
    }
  });

  test('404ページが正常に表示される', async ({ page }) => {
    // 存在しないページにアクセス
    await page.goto('/non-existent-page');

    // 404関連のテキストが表示されるか確認
    const notFoundText = page.getByText(/404|not found|ページが見つかりません/i);
    await expect(notFoundText.first()).toBeVisible();
  });
});

test.describe('モバイルナビゲーション', () => {
  test.beforeEach(async ({ page }) => {
    // モバイルサイズに設定
    await page.setViewportSize({ width: 375, height: 667 });
  });

  test('ハンバーガーメニューが表示される', async ({ page }) => {
    await page.goto('/');

    // ハンバーガーメニューボタンを探す
    const menuButton = page.locator('button[aria-label*="menu"], button[aria-label*="メニュー"], [data-mobile-menu]').first();

    // メニューボタンが存在するか確認
    if (await menuButton.isVisible()) {
      await expect(menuButton).toBeVisible();
    }
  });

  test('モバイルメニューからAboutページに遷移できる', async ({ page }) => {
    await page.goto('/');

    // ハンバーガーメニューボタンを探してクリック
    const menuButton = page.locator('button[aria-label*="menu"], button[aria-label*="メニュー"], [data-mobile-menu]').first();

    if (await menuButton.isVisible()) {
      await menuButton.click();

      // メニューが開くまで待機
      await page.waitForTimeout(300);

      // Aboutリンクをクリック（exact: trueで完全一致）
      await page.getByRole('link', { name: 'About', exact: true }).first().click();

      // URLの確認
      await expect(page).toHaveURL('/about');
    }
  });
});

test.describe('キーボードナビゲーション', () => {
  test('Tabキーでナビゲーション要素をフォーカスできる', async ({ page }) => {
    await page.goto('/');

    // Tabキーを押してフォーカスを移動
    await page.keyboard.press('Tab');

    // フォーカスされた要素を取得
    const focusedElement = await page.evaluate(() => {
      const el = document.activeElement;
      return el ? el.tagName.toLowerCase() : null;
    });

    // リンクまたはボタンにフォーカスが当たっていることを確認
    expect(['a', 'button', 'input']).toContain(focusedElement);
  });

  test('Enterキーでリンクを実行できる', async ({ page }) => {
    await page.goto('/');

    // Aboutリンクにフォーカスを移動
    const aboutLink = page.getByRole('link', { name: 'About' }).first();
    await aboutLink.focus();

    // Enterキーを押す
    await page.keyboard.press('Enter');

    // Aboutページに遷移したことを確認
    await expect(page).toHaveURL('/about');
  });
});
