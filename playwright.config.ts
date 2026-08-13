import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright E2E テスト設定
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  // テストファイルのディレクトリ
  testDir: './e2e',

  // テスト全体のタイムアウト
  timeout: 30 * 1000,

  // expect のタイムアウト
  expect: {
    timeout: 5000,
  },

  // 全テストを並列実行
  fullyParallel: true,

  // CI環境ではリトライしない、ローカルでは1回リトライ
  retries: process.env.CI ? 0 : 1,

  // CI環境では並列実行を制限
  workers: process.env.CI ? 1 : undefined,

  // レポーター設定
  reporter: [
    ['html', { open: 'never' }],
    ['list'],
  ],

  // 全テスト共通の設定
  use: {
    // ベースURL
    baseURL: 'http://localhost:3000',

    // スクリーンショットとトレースの設定
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    video: 'on-first-retry',

    // ビューポート設定
    viewport: { width: 1280, height: 720 },
  },

  // ブラウザ設定
  projects: [
    // デスクトップブラウザ
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    // モバイルブラウザ
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'mobile-safari',
      use: { ...devices['iPhone 12'] },
    },
  ],

  // テスト対象サーバーの自動起動
  //
  // dev サーバーはオンデマンドコンパイルのため、負荷の高い環境では
  // レスポンスが 30 秒を超えてテストが間欠的にタイムアウトする。
  // 本番ビルドに対して実行することで安定させ、あわせて本番に近い状態を検証する。
  // ローカルで `pnpm dev` を起動済みの場合は reuseExistingServer によりそちらを再利用する。
  webServer: {
    command: 'pnpm build && pnpm start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    // ビルド時間を含むため長めに確保する
    timeout: 300 * 1000,
  },
});
