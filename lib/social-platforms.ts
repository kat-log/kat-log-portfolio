import { siGithub, siX, siQiita, siZenn } from 'simple-icons'
import type { SocialPlatform } from '@/types'

type SimpleIcon = { svg: string; title: string }

export const SOCIAL_PLATFORM_CONFIG: Partial<Record<SocialPlatform, { label: string; icon: SimpleIcon }>> = {
  github:   { label: 'GitHub', icon: siGithub },
  x:        { label: 'X',      icon: siX },
  qiita:    { label: 'Qiita',  icon: siQiita },
  zenn:     { label: 'Zenn',   icon: siZenn },
  // linkedin: simple-icons v16 では未提供のため未定義
  // other: 汎用アイコンが存在しないため未定義
}
