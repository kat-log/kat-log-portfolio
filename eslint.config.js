// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

// eslint-config-next 16 は flat config をネイティブに提供するため FlatCompat は不要。
// core-web-vitals には TypeScript 用の parser/plugin のベースしか含まれないため、
// typescript-eslint の推奨ルールを得るには typescript も併せて読み込む必要がある。
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

const config = [
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "public/**",
      "next-env.d.ts",
      "storybook-static/**",
      "stories/**",
      "playwright-report/**",
      "test-results/**",
      ".claude/worktrees/**"
    ],
  },
  ...storybook.configs["flat/recommended"]
];

export default config;
