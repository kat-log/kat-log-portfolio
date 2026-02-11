import { test, expect } from '@playwright/test';
import { profile } from '../data/profile';

test.describe('Aboutページ', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
  });

  test('ページが正常に表示される', async ({ page }) => {
    // タイトルの確認
    await expect(page).toHaveTitle(/About.*Kat Log/);
  });

  test('プロフィール情報が表示される', async ({ page }) => {
    // 名前が表示される
    await expect(page.getByRole('heading', { name: 'Kat Log' })).toBeVisible();

    // 肩書きが表示される
    await expect(page.getByText('Web Developer')).toBeVisible();

    // 所在地が表示される
    await expect(page.getByText(profile.location!)).toBeVisible();
  });

  test('スキルセクションが表示される', async ({ page }) => {
    // スキルセクションの見出し確認
    await expect(page.getByRole('heading', { name: 'Skills' })).toBeVisible();

    // 各カテゴリの確認
    await expect(page.getByRole('heading', { name: 'Languages' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Frameworks & Libraries' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Tools' })).toBeVisible();
  });

  test('SNSリンクセクションが表示される', async ({ page }) => {
    // Connectセクションの見出し確認
    await expect(page.getByRole('heading', { name: 'Connect' })).toBeVisible();
  });

  test('CTAセクションが表示される', async ({ page }) => {
    // CTAセクションの見出し確認
    await expect(page.getByRole('heading', { name: "Let's Work Together" })).toBeVisible();

    // Get in Touchボタンはemail設定時のみ表示
    const contactButton = page.getByRole('link', { name: 'Get in Touch' });
    if (profile.email) {
      await expect(contactButton).toBeVisible();
    } else {
      await expect(contactButton).not.toBeVisible();
    }
  });

  test('Get in Touchボタンがメールリンクになっている', async ({ page }) => {
    test.skip(!profile.email, 'email未設定のためスキップ');
    const contactButton = page.getByRole('link', { name: 'Get in Touch' });
    await expect(contactButton).toHaveAttribute('href', /^mailto:/);
  });
});

test.describe('Aboutページのレスポンシブデザイン', () => {
  test('モバイルビューで正常に表示される', async ({ page }) => {
    // モバイルサイズに設定
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/about');

    // プロフィール情報が表示される
    await expect(page.getByRole('heading', { name: 'Kat Log' })).toBeVisible();

    // スキルセクションが表示される
    await expect(page.getByRole('heading', { name: 'Skills' })).toBeVisible();
  });

  test('タブレットビューで正常に表示される', async ({ page }) => {
    // タブレットサイズに設定
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/about');

    // プロフィール情報が表示される
    await expect(page.getByRole('heading', { name: 'Kat Log' })).toBeVisible();

    // スキルセクションが表示される
    await expect(page.getByRole('heading', { name: 'Skills' })).toBeVisible();
  });
});
