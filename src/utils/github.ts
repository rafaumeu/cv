import { Repository, TranslatedContent } from '@/types/github'
import { backendProfile } from '@/data/profiles/backend';
import { frontendProfile } from '@/data/profiles/frontend';

export const formatRepositoryName = (name: string): string => {
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export const sanitizeDescription = (desc: string | null): string => {
  if (!desc) return '';
  
  // Remove emojis e duplicatas de tecnologias
  const cleanDesc = desc
    .replace(/[\u{1F000}-\u{1F9FF}]|\p{Emoji_Presentation}|\p{Extended_Pictographic}/gu, '')
    .replace(/\s+/g, ' ')
    .trim();

  // Remove menções duplicadas de tecnologias
  const techTerms = ['React', 'TypeScript', 'Next.js', 'Node.js'];
  let finalDesc = cleanDesc;
  
  techTerms.forEach(term => {
    const regex = new RegExp(`${term}.*?${term}`, 'gi');
    finalDesc = finalDesc.replace(regex, term);
  });

  return finalDesc;
}

export const translateContent = (repo: Repository, locale: string): TranslatedContent => {
  // Se o idioma for português, retorna o conteúdo original
  if (locale === 'pt-BR') {
    return {
      description: repo.description || '',
      topics: repo.topics || []
    };
  }

  // Para outros idiomas, poderia implementar tradução automática
  // Por enquanto retorna o conteúdo original
  return {
    description: repo.description || '',
    topics: repo.topics || []
  };
};

export const sanitizeRepositoryName = (name: string): string => {
  // Remove caracteres especiais e hífens
  const cleanName = name
    .replace(/[-_]/g, ' ')
    .replace(/[^\w\s]/g, '');

  // Capitaliza cada palavra
  return cleanName
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};


// Extrai todas as skills dos perfis
const PROFILE_SKILLS = new Set([
  ...Object.values(backendProfile.skills).flat(),
  ...Object.values(frontendProfile.skills).flat()
].map(skill => skill.replace('skills.', '')));

const SKILL_ALIASES: Record<string, string> = {
  // Linguagens e Frameworks
  'react': 'reactjs',
  'react-components': 'reactjs',
  'react-hooks': 'reactjs',
  'typescript-react': 'typescript',
  'vanilla-javascript': 'javascript',
  'api-rest': 'rest-api',
  'jwt-authentication': 'jwt-auth',
  'calendar': 'rest-api',
  'appointment-booking': 'rest-api',
  'scheduling-system': 'rest-api',
  'goal-setting': 'clean-architecture',
  'goals-management': 'clean-architecture',
  'goals-tracker': 'clean-architecture',
  
  // Ferramentas e Práticas
  'ci-cd': 'github-actions',
  'api-docs': 'rest-api',
  'test-coverage': 'testing-library',
  'database-migrations': 'postgresql',
  'mobile-first': 'responsive-design',
  'performance-optimization': 'clean-code',
  'component-library': 'reactjs',
  'design-system': 'reactjs',
  'modern-web': 'frontend',
  'biomejs': 'clean-code',
  'drizzle': 'postgresql',
  'prisma': 'postgresql',
  'zod': 'typescript',
  'material-design': 'ui-components',
  'web-development': 'frontend',
  'eco-friendly': 'clean-code',
  'high-performance': 'clean-code'
};

export const normalizeSkills = (
  skills: string[], 
  repoName: string, 
  topics: string[]
): string[] => {
  const normalizedSkills = new Set<string>();

  // Adiciona skills com base no nome do repositório
  if (repoName.includes('api')) {
    normalizedSkills.add('rest-api');
    normalizedSkills.add('nodejs');
  }

  // Processa cada skill e tópico
  [...skills, ...topics].forEach(skill => {
    const normalized = skill.toLowerCase().replace(/\./g, '');
    
    // Verifica aliases primeiro
    const aliasMatch = SKILL_ALIASES[normalized];
    if (aliasMatch && PROFILE_SKILLS.has(aliasMatch)) {
      normalizedSkills.add(aliasMatch);
      return;
    }

    // Verifica match direto com skills disponíveis
    const directMatch = Array.from(PROFILE_SKILLS).find(
      availableSkill => availableSkill.toLowerCase() === normalized
    );
    if (directMatch) {
      normalizedSkills.add(directMatch);
    }
  });

  return Array.from(normalizedSkills);
}; 