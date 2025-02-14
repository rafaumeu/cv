import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
  }
});

export interface GithubProject {
  name: string;
  description: string;
  url: string;
  homepage: string | null;
  stars: number;
  languages: string[];
  topics: string[];
  updatedAt: string;
}

const getRepoLanguages = async (username: string, repo: string): Promise<string[]> => {
  const { data } = await api.get(`/repos/${username}/${repo}/languages`);
  return Object.keys(data);
};

export const getProfileProjects = async (username: string, profile: 'frontend' | 'backend' | 'fullstack'): Promise<GithubProject[]> => {
  try {
    const { data: repos } = await api.get(`/users/${username}/repos?sort=updated&per_page=10`);
    
    const projectsWithDetails = await Promise.all(
      repos.map(async (repo: any) => {
        const languages = await getRepoLanguages(username, repo.name);
        
        return {
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
          homepage: repo.homepage,
          stars: repo.stargazers_count,
          languages,
          topics: repo.topics || [],
          updatedAt: repo.updated_at
        };
      })
    );

    // Filtrar projetos baseado no perfil
    return projectsWithDetails.filter(project => {
      const langs = project.languages.map(l => l.toLowerCase());
      const topics = project.topics.map(t => t.toLowerCase());

      switch (profile) {
        case 'frontend':
          return langs.some(l => ['javascript', 'typescript', 'react', 'vue', 'html', 'css'].includes(l)) ||
                 topics.some(t => ['frontend', 'react', 'nextjs', 'vue'].includes(t));
        
        case 'backend':
          return langs.some(l => ['javascript', 'typescript', 'python', 'java', 'go'].includes(l)) ||
                 topics.some(t => ['backend', 'api', 'nodejs', 'express'].includes(t));
        
        case 'fullstack':
          return true; // Retorna todos os projetos para perfil fullstack
        
        default:
          return false;
      }
    });
  } catch (error) {
    console.error('Erro ao buscar projetos:', error);
    throw error;
  }
}; 