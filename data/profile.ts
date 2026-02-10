import { Profile } from '@/types'
import { skills } from './skills'

/**
 * プロフィール情報
 * ホームページとAboutページで表示する個人情報
 */
export const profile: Profile = {
  name: 'Kat Log',
  title: 'Web Developer',
  bio: 'モダンな技術を使ってユーザー体験を向上させるWebアプリケーションを開発しています。',
  longBio:
    'フロントエンド開発を中心に、ユーザーにとって使いやすく、美しいWebアプリケーションの構築に情熱を注いでいます。Next.js、React、TypeScriptなどのモダンな技術スタックを活用し、パフォーマンスとアクセシビリティを重視した開発を心がけています。',
  avatar: '/images/avatar.png', // TODO: 実際のアバター画像に置き換え
  // email: 'contact@example.com', // TODO: 実際のメールアドレスに置き換え
  location: '京都, 日本',
  skills: skills,
  socialLinks: [
    {
      platform: 'github',
      url: 'https://github.com/kat-log',
      username: 'kat-log',
    },
    {
      platform: 'x',
      url: 'https://x.com/kat__log',
      username: '@kat__log',
    },
    {
      platform: 'qiita',
      url: 'https://qiita.com/kat_log',
      username: 'kat_log',
    },
  ],
}
