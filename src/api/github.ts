import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
  }
});

export interface GithubProfile {
  repos: number;
  followers: number;
  recentRepos: Array<{
    name: string;
    description: string | null;
    url: string;
    stars: number;
  }>;
  topLanguages: string[];
}

export const getGithubProfile = async (username: string): Promise<GithubProfile> => {
  try {
    const [userResponse, reposResponse] = await Promise.all([
      api.get(`/users/${username}`),
      api.get(`/users/${username}/repos?sort=updated&per_page=5`)
    ]);

    const languages = new Map<string, number>();
    await Promise.all(
      reposResponse.data.map(async (repo: any) => {
        const langResponse = await api.get(`/repos/${username}/${repo.name}/languages`);
        Object.keys(langResponse.data).forEach(lang => {
          languages.set(lang, (languages.get(lang) || 0) + 1);
        });
      })
    );

    return {
      repos: userResponse.data.public_repos,
      followers: userResponse.data.followers,
      recentRepos: reposResponse.data.map((repo: any) => ({
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        stars: repo.stargazers_count
      })),
      topLanguages: Array.from(languages.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([lang]) => lang)
    };
  } catch (error) {
    console.error('Erro ao buscar dados do GitHub:', error);
    throw error;
  }
}; 