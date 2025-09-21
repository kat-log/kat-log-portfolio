/**
 * ポートフォリオサイト 型定義
 * @version 1.0.0
 */

// ===========================
// 基本的な型定義
// ===========================

/**
 * プロジェクトのタイプ
 */
export type ProjectType =
  | "website"
  | "extension"
  | "mobile"
  | "desktop"
  | "other";

/**
 * プロジェクトのタグ（フィルタリング用）
 */
export type ProjectTag =
  | "frontend"
  | "backend"
  | "fullstack"
  | "design"
  | "opensource"
  | "personal"
  | "client";

/**
 * プロジェクトのステータス
 */
export type ProjectStatus = "completed" | "in-progress" | "maintenance";

/**
 * スキルレベル
 */
export type SkillLevel = 1 | 2 | 3 | 4 | 5; // 1: 初級, 5: 上級

/**
 * スキルカテゴリ
 */
export type SkillCategory = "language" | "framework" | "tool" | "other";

/**
 * SNSプラットフォーム
 */
export type SocialPlatform =
  | "github"
  | "x"
  | "linkedin"
  | "qiita"
  | "zenn"
  | "other";

// ===========================
// インターフェース定義
// ===========================

/**
 * 技術スタックの分類
 * プロジェクトタイプに応じて柔軟に使用
 */
export interface TechnologyStack {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  deploy?: string[];
  tools?: string[];
  // その他のカテゴリも追加可能
  [key: string]: string[] | undefined;
}

/**
 * 外部リンク
 */
export interface ProjectLinks {
  github?: string;
  demo?: string;
  store?: string;
  article?: string; // Qiitaやブログ記事など
  video?: string; // デモ動画など
}

/**
 * スクリーンショット情報
 */
export interface Screenshot {
  url: string;
  alt: string;
  caption?: string;
  isMobile?: boolean; // モバイル版のスクリーンショットかどうか
}

/**
 * プロジェクトの基本情報
 */
export interface Project {
  id: string;
  title: string;
  type: ProjectType;
  description: string;
  longDescription?: string; // モーダルで表示する詳細説明
  tags: ProjectTag[];
  technologies: TechnologyStack | string[]; // シンプルな配列も許容
  links: ProjectLinks;
  screenshots: Screenshot[] | string[]; // 文字列配列でのシンプルな指定も可
  featured?: boolean; // 注目プロジェクトとして表示
  date: string; // YYYY-MM形式
  status?: ProjectStatus;
}

/**
 * スキル情報
 */
export interface Skill {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  icon?: string; // アイコンのURL or クラス名
}

/**
 * SNSリンク
 */
export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  username: string;
  icon?: string;
}

/**
 * プロフィール情報
 */
export interface Profile {
  name: string;
  title: string; // 例: "Frontend Developer"
  bio: string;
  longBio?: string; // Aboutページ用の詳細な自己紹介
  avatar: string;
  email?: string;
  location?: string;
  skills: Skill[];
  socialLinks: SocialLink[];
}

/**
 * フィルタリング用の型
 */
export interface FilterOptions {
  type?: ProjectType;
  tags?: ProjectTag[];
  searchQuery?: string;
}

/**
 * ページメタデータ
 */
export interface PageMeta {
  title: string;
  description: string;
  ogImage?: string;
  keywords?: string[];
}

// ===========================
// UI関連の型
// ===========================

/**
 * モーダル状態
 */
export interface ModalState {
  isOpen: boolean;
  projectId: string | null;
}

// ===========================
// 型ガード関数
// ===========================

/**
 * TechnologyStackかどうかを判定
 */
export const isTechnologyStack = (
  tech: TechnologyStack | string[]
): tech is TechnologyStack => {
  return !Array.isArray(tech);
};

/**
 * Screenshotオブジェクトかどうかを判定
 */
export const isScreenshotObject = (
  screenshot: Screenshot | string
): screenshot is Screenshot => {
  return typeof screenshot === "object" && "url" in screenshot;
};

/**
 * 有効なプロジェクト日付かどうかを判定
 */
export const isValidProjectDate = (date: string): boolean => {
  return /^\d{4}-\d{2}$/.test(date);
};

// ===========================
// デフォルト値
// ===========================

/**
 * プロジェクトのデフォルト値
 */
export const DEFAULT_PROJECT: Partial<Project> = {
  tags: [],
  links: {},
  screenshots: [],
  status: "completed",
  featured: false,
};

/**
 * スキルのデフォルト値
 */
export const DEFAULT_SKILL: Partial<Skill> = {
  level: 1,
  category: "other",
};

/**
 * ページメタデータのデフォルト値
 */
export const DEFAULT_PAGE_META: PageMeta = {
  title: "ポートフォリオ",
  description: "モダンな技術で構築されたポートフォリオサイト",
  keywords: ["portfolio", "web development", "frontend"],
};

// ===========================
// ヘルパー関数
// ===========================

/**
 * プロジェクトを作成（デフォルト値を適用）
 */
export const createProject = (
  project: Omit<Project, "status" | "featured"> & Partial<Project>
): Project => {
  return {
    ...DEFAULT_PROJECT,
    ...project,
  } as Project;
};

/**
 * 技術スタックを正規化（配列・オブジェクト両対応）
 */
export const normalizeTechnologies = (
  technologies: TechnologyStack | string[]
): TechnologyStack => {
  if (isTechnologyStack(technologies)) {
    return technologies;
  }
  return { tools: technologies };
};

/**
 * スクリーンショットを正規化
 */
export const normalizeScreenshots = (
  screenshots: (Screenshot | string)[]
): Screenshot[] => {
  return screenshots.map((screenshot, index) => {
    if (isScreenshotObject(screenshot)) {
      return screenshot;
    }
    return {
      url: screenshot,
      alt: `スクリーンショット ${index + 1}`,
    };
  });
};

// ===========================
// 定数
// ===========================

/**
 * プロジェクトタイプの表示名
 */
export const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
  website: "Webサイト",
  extension: "ブラウザ拡張機能",
  mobile: "モバイルアプリ",
  desktop: "デスクトップアプリ",
  other: "その他",
};

/**
 * プロジェクトタグの表示名
 */
export const PROJECT_TAG_LABELS: Record<ProjectTag, string> = {
  frontend: "フロントエンド",
  backend: "バックエンド",
  fullstack: "フルスタック",
  design: "デザイン",
  opensource: "オープンソース",
  personal: "個人プロジェクト",
  client: "クライアントワーク",
};

/**
 * スキルレベルの表示名
 */
export const SKILL_LEVEL_LABELS: Record<SkillLevel, string> = {
  1: "初級",
  2: "初中級",
  3: "中級",
  4: "中上級",
  5: "上級",
};

/**
 * プロジェクトステータスの表示名
 */
export const PROJECT_STATUS_LABELS: Record<ProjectStatus, string> = {
  completed: "完成",
  "in-progress": "開発中",
  maintenance: "メンテナンス中",
};