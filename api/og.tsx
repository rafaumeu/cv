import { ImageResponse } from '@vercel/og';
export const config = {
  runtime: 'edge'
};

export default async function handler() {
  try {
    return new ImageResponse(
      {
        type: 'div',
        props: {
          style: {
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(to right, #0f172a, #1e293b)',
            padding: '40px 60px',
          },
          children: [
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '40px'
                },
                children: [
                  {
                    type: 'img',
                    props: {
                      src: 'https://github.com/rafaumeu.png',
                      alt: 'Profile',
                      style: {
                        width: '160px',
                        height: '160px',
                        borderRadius: '80px',
                        border: '4px solid #ffffff',
                      }
                    }
                  },
                  {
                    type: 'div',
                    props: {
                      style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px'
                      },
                      children: [
                        {
                          type: 'h1',
                          props: {
                            style: {
                              fontSize: '60px',
                              margin: 0,
                              color: '#ffffff',
                            },
                            children: 'Rafael Dias Zendron'
                          }
                        },
                        {
                          type: 'h2',
                          props: {
                            style: {
                              fontSize: '32px',
                              margin: 0,
                              color: '#94a3b8',
                            },
                            children: 'Desenvolvedor Full Stack & Arquiteto de Software'
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: Error | unknown) {
    const error = e instanceof Error ? e : new Error('Unknown error');
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}