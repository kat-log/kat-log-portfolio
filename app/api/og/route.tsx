import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    // URLパラメータから情報を取得
    const title = searchParams.get('title') || 'Kat Log - Web Developer Portfolio'
    const description =
      searchParams.get('description') ||
      'Web開発を学びながら、実際にアプリケーションを作っています'
    const type = searchParams.get('type') || 'website' // website, project, about

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          {/* グラスモーフィズム風のカード */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '24px',
              padding: '60px 80px',
              width: '1040px',
              height: '470px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            }}
          >
            {/* ヘッダー部分 */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              {/* タイプバッジ */}
              {type !== 'website' && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: 'rgba(255, 255, 255, 0.2)',
                    padding: '8px 20px',
                    borderRadius: '50px',
                    fontSize: '20px',
                    fontWeight: '600',
                    color: 'white',
                    alignSelf: 'flex-start',
                  }}
                >
                  {type === 'project' ? '📂 Project' : '👤 About'}
                </div>
              )}

              {/* タイトル */}
              <div
                style={{
                  fontSize: '64px',
                  fontWeight: '800',
                  color: 'white',
                  lineHeight: '1.2',
                  maxWidth: '900px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {title}
              </div>

              {/* 説明 */}
              <div
                style={{
                  fontSize: '28px',
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: '1.5',
                  maxWidth: '900px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {description}
              </div>
            </div>

            {/* フッター部分 */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              {/* ブランド名 */}
              <div
                style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <span
                  style={{
                    background: 'white',
                    width: '8px',
                    height: '40px',
                    borderRadius: '4px',
                  }}
                />
                Kat Log
              </div>

              {/* URL */}
              <div
                style={{
                  fontSize: '24px',
                  color: 'rgba(255, 255, 255, 0.8)',
                }}
              >
                kat-log-portfolio.vercel.app
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (error) {
    console.error('OG Image generation error:', error)
    return new Response(`Failed to generate image`, {
      status: 500,
    })
  }
}
