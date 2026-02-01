/** @type {import('@lhci/cli').LighthouseConfig} */
module.exports = {
  ci: {
    collect: {
      // Next.js の本番ビルドを使用
      startServerCommand: 'pnpm start',
      startServerReadyPattern: 'Ready in',
      startServerReadyTimeout: 30000,
      url: ['http://localhost:3000/', 'http://localhost:3000/about'],
      numberOfRuns: 3,
      settings: {
        // CI環境ではデスクトッププリセットを使用（安定した計測のため）
        preset: 'desktop',
      },
    },
    assert: {
      assertions: {
        // パフォーマンス: モバイル基準 72 より余裕を持たせた閾値
        'categories:performance': ['warn', { minScore: 0.7 }],
        // アクセシビリティ: 現在のスコア 100 を維持（必須）
        'categories:accessibility': ['error', { minScore: 0.95 }],
        // ベストプラクティス: 現在のスコア 96 を基準
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        // SEO: 現在のスコア 100 を維持（必須）
        'categories:seo': ['error', { minScore: 0.95 }],
      },
    },
    // レポートは GitHub Actions のログで確認（temporary-public-storage は使用しない）
  },
};
