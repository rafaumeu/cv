import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN
});

export async function GET() {
  try {
    const { data } = await octokit.repos.listForAuthenticatedUser({
      sort: 'updated',
      per_page: 100,
      visibility: 'public'
    });

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Erro ao buscar repositórios:', error);
    return new Response(JSON.stringify({ error: 'Falha ao carregar repositórios' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 