import Link from "next/link";
import { Mail } from "lucide-react";
import { siGithub, siX, siQiita } from "simple-icons";
import { profile } from "@/data/profile";

type SocialPlatform = 'github' | 'x' | 'qiita';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons: Record<SocialPlatform, typeof siGithub> = {
    github: siGithub,
    x: siX,
    qiita: siQiita,
  };

  return (
    <footer id="contact" className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Contact見出し */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              感想やフィードバックをお待ちしています
            </p>
          </div>

          {/* メールアドレス */}
          {profile.email && (
            <div className="text-center mb-8">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
                {profile.email}
              </a>
            </div>
          )}

          {/* SNSリンク */}
          <div className="flex justify-center items-center gap-6 mb-8">
            {profile.socialLinks.map((link) => {
              const icon = socialIcons[link.platform as SocialPlatform];

              return (
                <Link
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  aria-label={link.platform}
                  title={link.platform}
                >
                  <div
                    className="w-6 h-6"
                    dangerouslySetInnerHTML={{ __html: icon.svg }}
                    style={{ fill: 'currentColor' }}
                  />
                </Link>
              );
            })}
          </div>

          {/* コピーライト */}
          <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {currentYear} {profile.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
