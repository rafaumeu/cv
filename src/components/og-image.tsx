/** @jsxImportSource react */
import { ImageResponse } from '@vercel/og';

// Gera a imagem uma vez durante o build
export async function generateOgImage() {
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
        Rafael Dias Zendron - Full Stack Developer
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
} 