import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge'
};

export default async function handler() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            background: 'linear-gradient(to right, #0066cc, #3182ce)',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
          }}
        >
          <img
            src="https://github.com/rafaumeu.png"
            alt="Rafael Dias Zendron"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              marginBottom: '20px',
            }}
          />
          <h1 style={{ 
            color: 'white', 
            fontSize: '60px',
            marginBottom: '10px',
          }}>
            Rafael Dias Zendron
          </h1>
          <h2 style={{ 
            color: 'rgba(255,255,255,0.9)',
            fontSize: '35px',
            marginBottom: '30px',
          }}>
            Desenvolvedor Full Stack & Arquiteto de Software
          </h2>
          <div style={{
            display: 'flex',
            gap: '20px',
          }}>
            {['React', 'Node.js', 'TypeScript', 'Clean Architecture'].map((tech) => (
              <span
                key={tech}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  padding: '10px 20px',
                  borderRadius: '20px',
                  color: 'white',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e) {
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
} 