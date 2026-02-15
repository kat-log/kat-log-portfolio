import { Profile } from '@/types'
import { skills } from './skills'

/**
 * プロフィール情報
 * ホームページとAboutページで表示する個人情報
 */
export const profile: Profile = {
  name: 'Kat Log',
  title: 'Web Developer',
  bio: 'Web開発を学びながら、実際にアプリケーションを作っています。',
  longBio:
    'Web開発を学んでいます。これまでの制作物をまとめていますのでご覧ください。',
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
