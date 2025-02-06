import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler() {
  try {
    const interBold = await fetch(
      new URL('../../assets/fonts/Inter-Bold.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer());

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
            backgroundColor: '#fff',
            padding: '40px 60px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '40px'
            }}
          >
            <img
              src="https://github.com/rafaumeu.png"
              alt="Profile"
              style={{
                width: '160px',
                height: '160px',
                borderRadius: '80px',
              }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <h1
                style={{
                  fontSize: '60px',
                  fontFamily: 'Inter Bold',
                  margin: 0,
                  color: '#1a1a1a',
                }}
              >
                Rafael Dias Zendron
              </h1>
              <h2
                style={{
                  fontSize: '32px',
                  fontFamily: 'Inter',
                  margin: 0,
                  color: '#666666',
                }}
              >
                Desenvolvedor Full Stack & Arquiteto de Software
              </h2>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter Bold',
            data: interBold,
            style: 'normal',
          },
        ],
      }
    );
  } catch (e) {
    console.error(e);
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
} 