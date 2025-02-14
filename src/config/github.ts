export const GITHUB_CONFIG = {
  USERNAME: import.meta.env.VITE_GITHUB_USERNAME || 'rafaumeu',
  API_URL: 'https://api.github.com',
  REPOS_PER_PAGE: 30,
  SORT: 'updated',
  RELEVANT_TOPICS: {
    frontend: [
      'react', 'nextjs', 'typescript', 'tailwindcss', 'frontend',
      'ui-components', 'responsive-design', 'material-design'
    ] as const,
    backend: [
      'api', 'nodejs', 'express', 'fastify', 'backend',
      'prisma', 'postgresql', 'authentication', 'rest-api'
    ] as const,
    fullstack: [
      'typescript', 'react', 'nodejs', 'fullstack',
      'docker', 'prisma', 'nextjs', 'postgresql'
    ] as const
  }
} as const;

export type RelevantTopic = typeof GITHUB_CONFIG.RELEVANT_TOPICS[keyof typeof GITHUB_CONFIG.RELEVANT_TOPICS][number]; 