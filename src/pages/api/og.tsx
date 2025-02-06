import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler() {
  try {
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
            background: 'linear-gradient(to right, #0f172a, #1e293b)',
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
                border: '4px solid #ffffff',
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
                  margin: 0,
                  color: '#ffffff',
                }}
              >
                Rafael Dias Zendron
              </h1>
              <h2
                style={{
                  fontSize: '32px',
                  margin: 0,
                  color: '#94a3b8',
                }}
              >
                Desenvolvedor Full Stack & Arquiteto de Software
              </h2>
            </div>
          </div>
          <div
            style={{
              marginTop: '40px',
              display: 'flex',
              gap: '16px',
            }}
          >
            {['React', 'Node.js', 'TypeScript', 'Clean Architecture'].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: '12px 24px',
                  borderRadius: '24px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  fontSize: '24px',
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    const error = e instanceof Error ? e.message : 'Unknown error';
    console.log(error);
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
} 