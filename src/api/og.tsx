import { ImageResponse } from '@vercel/og';
import { OgImage } from '@/components/OgImage';

export const config = {
  runtime: 'edge',
};

export default async function handler() {
  try {
    return new ImageResponse(
      <OgImage />,
      {
        width: 1200,
        height: 630,
      }
    );
  } catch {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
} 