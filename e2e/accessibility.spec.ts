import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * アクセシビリティテスト
 * axe-core を使用して WCAG 2.1 AA 準拠を検証
 */

test.describe('アクセシビリティ - axe-core 自動テスト', () => {
  // 全テストでアニメーションを無効化
  test.beforeEach(async ({ page }) => {
    // Framer Motion用
    await page.emulateMedia({ reducedMotion: 'reduce' });
    // CSSトランジション/アニメーションも完全に無効化（Webkit対策）
    await page.addInitScript(() => {
      const style = document.createElement('style');
      style.textContent = `
        *, *::before, *::after {
          transition: none !important;
          animation: none !important;
          transition-duration: 0s !important;
          animation-duration: 0s !important;
        }
      `;
      document.head.appendChild(style);
    });
  });

  test('ホームページがアクセシビリティ基準を満たす', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Aboutページがアクセシビリティ基準を満たす', async ({ page }) => {
    await page.goto('/about');
    await page.waitForLoadState('networkidle');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('404ページがアクセシビリティ基準を満たす', async ({ page }) => {
    await page.goto('/non-existent-page');
    await page.waitForLoadState('networkidle');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('ダークモードでアクセシビリティ基準を満たす', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // テーマ切り替えボタンをクリック
    const themeButton = page.locator('button[aria-label*="theme"], button[aria-label*="ダーク"], button[aria-label*="ライト"]').first();
    if (await themeButton.isVisible()) {
      await themeButton.click();
      // テーマ切り替え完了を待機
      await page.waitForTimeout(300);
    }

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('モーダルが開いた状態でアクセシビリティ基準を満たす', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // プロジェクトセクションまでスクロール
    await page.locator('#projects').scrollIntoViewIfNeeded();

    // プロジェクトカードをクリック
    const projectCard = page.locator('[data-project-card], article').first();
    if (await projectCard.isVisible()) {
      await projectCard.click();
      // モーダルが開くまで待機
      const modal = page.locator('[role="dialog"]');
      await modal.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});

      if (await modal.count() > 0) {
        const accessibilityScanResults = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
          .analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
      }
    }
  });
});

test.describe('アクセシビリティ - モバイルビュー', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    // Framer Motion用
    await page.emulateMedia({ reducedMotion: 'reduce' });
    // CSSトランジション/アニメーションも完全に無効化（Webkit対策）
    await page.addInitScript(() => {
      const style = document.createElement('style');
      style.textContent = `
        *, *::before, *::after {
          transition: none !important;
          animation: none !important;
          transition-duration: 0s !important;
          animation-duration: 0s !important;
        }
      `;
      document.head.appendChild(style);
    });
  });

  test('モバイルホームページがアクセシビリティ基準を満たす', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('モバイルメニューが開いた状態でアクセシビリティ基準を満たす', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // ハンバーガーメニューを開く
    const menuButton = page.locator('button[aria-label*="menu"], button[aria-label*="メニュー"], [data-mobile-menu]').first();
    if (await menuButton.isVisible()) {
      await menuButton.click();
      await page.waitForTimeout(300);

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    }
  });
});

test.describe('キーボードナビゲーション - 詳細テスト', () => {
  test('すべてのインタラクティブ要素にフォーカスできる', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // フォーカス可能な要素を取得
    const tabbableSelector = 'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const allElements = await page.locator(tabbableSelector).all();

    // 可視の要素のみをフィルタリング
    const visibleElements = [];
    for (const element of allElements) {
      if (await element.isVisible()) {
        visibleElements.push(element);
      }
    }

    // 少なくとも1つ以上のフォーカス可能な可視要素があることを確認
    expect(visibleElements.length).toBeGreaterThan(0);

    // 各可視要素に直接フォーカスして確認（Tabキーに依存しない）
    for (const element of visibleElements.slice(0, 20)) {
      await element.focus();

      const isFocused = await element.evaluate(el => el === document.activeElement);
      expect(isFocused).toBeTruthy();
    }
  });

  test('フォーカスインジケーターが視認可能', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // 最初のインタラクティブ要素に直接フォーカス
    const firstInteractive = page.locator('a, button').first();
    await firstInteractive.focus();

    // フォーカスされた要素のアウトラインスタイルを確認
    const focusStyles = await firstInteractive.evaluate(el => {
      const styles = window.getComputedStyle(el);
      return {
        outline: styles.outline,
        outlineWidth: styles.outlineWidth,
        outlineColor: styles.outlineColor,
        boxShadow: styles.boxShadow,
      };
    });

    // フォーカスインジケーターがあることを確認
    // outlineまたはbox-shadowでフォーカスを表示
    const hasVisibleFocus =
      (focusStyles?.outline && focusStyles.outline !== 'none' && focusStyles.outlineWidth !== '0px') ||
      (focusStyles?.boxShadow && focusStyles.boxShadow !== 'none');

    expect(hasVisibleFocus).toBeTruthy();
  });

  test('Escapeキーでモーダルを閉じられる', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // プロジェクトセクションまでスクロール
    await page.locator('#projects').scrollIntoViewIfNeeded();

    // プロジェクトカードをクリック
    const projectCard = page.locator('[data-project-card], article').first();
    if (await projectCard.isVisible()) {
      await projectCard.click();
      await page.waitForTimeout(500);

      // モーダルが開いていることを確認
      const modal = page.locator('[role="dialog"]');
      if (await modal.count() > 0) {
        await expect(modal).toBeVisible();

        // Escapeキーを押す
        await page.keyboard.press('Escape');
        await page.waitForTimeout(300);

        // モーダルが閉じていることを確認
        await expect(modal).not.toBeVisible();
      }
    }
  });

  test('モーダル内でフォーカストラップが機能する', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // プロジェクトセクションまでスクロール
    await page.locator('#projects').scrollIntoViewIfNeeded();

    // プロジェクトカードをクリック
    const projectCard = page.locator('[data-project-card], article').first();
    if (await projectCard.isVisible()) {
      await projectCard.click();
      await page.waitForTimeout(500);

      // モーダルが開いていることを確認
      const modal = page.locator('[role="dialog"]');
      if (await modal.count() > 0) {
        // モーダル内の要素にフォーカスが当たっていることを確認
        const isInsideModal = await page.evaluate(() => {
          const activeElement = document.activeElement;
          const modal = document.querySelector('[role="dialog"]');
          return modal?.contains(activeElement) || activeElement === modal;
        });

        expect(isInsideModal).toBeTruthy();

        // Tab を複数回押してもモーダル内に留まることを確認
        for (let i = 0; i < 10; i++) {
          await page.keyboard.press('Tab');
        }

        const stillInsideModal = await page.evaluate(() => {
          const activeElement = document.activeElement;
          const modal = document.querySelector('[role="dialog"]');
          return modal?.contains(activeElement) || activeElement === modal;
        });

        expect(stillInsideModal).toBeTruthy();
      }
    }
  });
});

test.describe('スクリーンリーダー対応', () => {
  test('すべての画像にalt属性がある', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const imagesWithoutAlt = await page.evaluate(() => {
      const images = document.querySelectorAll('img');
      return Array.from(images).filter(img => !img.alt && !img.getAttribute('aria-hidden')).length;
    });

    expect(imagesWithoutAlt).toBe(0);
  });

  test('フォーム要素にラベルがある', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const inputsWithoutLabel = await page.evaluate(() => {
      const inputs = document.querySelectorAll('input:not([type="hidden"]), textarea, select');
      return Array.from(inputs).filter(input => {
        const hasLabel = input.id && document.querySelector(`label[for="${input.id}"]`);
        const hasAriaLabel = input.getAttribute('aria-label') || input.getAttribute('aria-labelledby');
        const hasPlaceholder = input.getAttribute('placeholder');
        return !hasLabel && !hasAriaLabel && !hasPlaceholder;
      }).length;
    });

    expect(inputsWithoutLabel).toBe(0);
  });

  test('ページに適切な見出し階層がある', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const headingIssues = await page.evaluate(() => {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const issues: string[] = [];

      // h1が1つだけあることを確認
      const h1Count = document.querySelectorAll('h1').length;
      if (h1Count === 0) {
        issues.push('ページにh1がありません');
      } else if (h1Count > 1) {
        issues.push(`複数のh1があります (${h1Count}個)`);
      }

      // 見出しレベルのスキップをチェック
      let lastLevel = 0;
      headings.forEach(heading => {
        const currentLevel = parseInt(heading.tagName[1]);
        if (lastLevel > 0 && currentLevel > lastLevel + 1) {
          issues.push(`見出しレベルがスキップされています: h${lastLevel} → h${currentLevel}`);
        }
        lastLevel = currentLevel;
      });

      return issues;
    });

    expect(headingIssues).toEqual([]);
  });

  test('ランドマークが適切に配置されている', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const landmarks = await page.evaluate(() => {
      const results = {
        header: document.querySelectorAll('header, [role="banner"]').length,
        nav: document.querySelectorAll('nav, [role="navigation"]').length,
        main: document.querySelectorAll('main, [role="main"]').length,
        footer: document.querySelectorAll('footer, [role="contentinfo"]').length,
      };
      return results;
    });

    // 基本的なランドマークが存在することを確認
    expect(landmarks.header).toBeGreaterThanOrEqual(1);
    expect(landmarks.main).toBe(1);
    expect(landmarks.footer).toBeGreaterThanOrEqual(1);
  });

  test('リンクに識別可能なテキストがある', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const linksWithoutText = await page.evaluate(() => {
      const links = document.querySelectorAll('a');
      return Array.from(links).filter(link => {
        const text = link.textContent?.trim();
        const ariaLabel = link.getAttribute('aria-label');
        const title = link.getAttribute('title');
        const hasImage = link.querySelector('img[alt]');
        const ariaHidden = link.getAttribute('aria-hidden') === 'true';

        // 非表示のリンクは除外
        if (ariaHidden) return false;

        return !text && !ariaLabel && !title && !hasImage;
      }).length;
    });

    expect(linksWithoutText).toBe(0);
  });

  test('ボタンに識別可能なテキストがある', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const buttonsWithoutText = await page.evaluate(() => {
      const buttons = document.querySelectorAll('button');
      return Array.from(buttons).filter(button => {
        const text = button.textContent?.trim();
        const ariaLabel = button.getAttribute('aria-label');
        const title = button.getAttribute('title');
        const ariaHidden = button.getAttribute('aria-hidden') === 'true';

        // 非表示のボタンは除外
        if (ariaHidden) return false;

        return !text && !ariaLabel && !title;
      }).length;
    });

    expect(buttonsWithoutText).toBe(0);
  });
});

test.describe('カラーコントラスト', () => {
  test.beforeEach(async ({ page }) => {
    // Framer Motion用
    await page.emulateMedia({ reducedMotion: 'reduce' });
    // CSSトランジション/アニメーションも完全に無効化（Webkit対策）
    await page.addInitScript(() => {
      const style = document.createElement('style');
      style.textContent = `
        *, *::before, *::after {
          transition: none !important;
          animation: none !important;
          transition-duration: 0s !important;
          animation-duration: 0s !important;
        }
      `;
      document.head.appendChild(style);
    });
  });

  test('テキストのコントラスト比が十分である', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2aa'])
      .options({ runOnly: ['color-contrast'] })
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('ダークモードでもコントラスト比が十分である', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // テーマ切り替え
    const themeButton = page.locator('button[aria-label*="theme"], button[aria-label*="ダーク"], button[aria-label*="ライト"]').first();
    if (await themeButton.isVisible()) {
      await themeButton.click();
      // テーマ切り替え完了を待機
      await page.waitForTimeout(300);

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2aa'])
        .options({ runOnly: ['color-contrast'] })
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    }
  });
});
