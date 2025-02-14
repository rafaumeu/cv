import { useEffect, useState, useCallback } from 'react';
import { useIntl } from 'react-intl';
import { Repository } from '@/types/github';
import { ProfileType } from '@/types/cv';
import { repositoryTranslations } from '@/i18n/repositories';
import { GITHUB_CONFIG } from '@/config/github';
import { sanitizeDescription, sanitizeRepositoryName, normalizeSkills } from '@/utils/github';
import { smartTranslate } from '@/utils/smartTranslate';

export const useGithubRepositories = (profile: ProfileType) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const intl = useIntl();

  const getTranslatedContent = useCallback((repo: Repository) => {
    // Primeiro tenta usar as traduções manuais
    const manualTranslation = repositoryTranslations[intl.locale]?.[repo.name];
    if (manualTranslation) {
      const topicsArray = manualTranslation.topics 
        ? Object.values(manualTranslation.topics).filter(Boolean)
        : [];
        
      return {
        description: manualTranslation.description,
        topics: topicsArray
      };
    }

    // Se não houver tradução manual, usa a tradução inteligente
    const translatedDesc = smartTranslate(
      repo.description || '', 
      {
        stars: repo.stargazers_count,
        language: repo.language,
        repoName: repo.name,
        topics: repo.topics,
        profile
      }
    );

    return {
      description: translatedDesc,
      topics: repo.topics || []
    };
  }, [intl.locale, profile]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${GITHUB_CONFIG.API_URL}/users/${GITHUB_CONFIG.USERNAME}/repos?per_page=${GITHUB_CONFIG.REPOS_PER_PAGE}&sort=${GITHUB_CONFIG.SORT}`, 
          {
            headers: {
              'Accept': 'application/vnd.github.v3+json',
              ...(import.meta.env.VITE_GITHUB_TOKEN && {
                'Authorization': `token ${import.meta.env.VITE_GITHUB_TOKEN}`
              })
            },
          }
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setRepositories(data);
      } catch (err) {
        console.error('Erro ao carregar repositórios:', err);
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  const filteredRepos = repositories
    .filter(repo => {
      if (!repo.fork && !repo.archived && repo.visibility === 'public') {
        const relevantTopics = GITHUB_CONFIG.RELEVANT_TOPICS[profile] as string[];
        if (!repo.topics) return false;
        return repo.topics.some(topic => relevantTopics.includes(topic));
      }
      return false;
    })
    .map(repo => {
      const translatedContent = getTranslatedContent(repo);
      const sanitizedDescription = sanitizeDescription(translatedContent.description);
      const sanitizedTitle = sanitizeRepositoryName(repo.name);
      const normalizedSkills = normalizeSkills(
        [repo.language], 
        repo.name,
        translatedContent.topics
      );

      return {
        title: sanitizedTitle,
        description: sanitizedDescription,
        link: repo.homepage || '',
        github: repo.html_url,
        skills: normalizedSkills,
        stars: repo.stargazers_count,
        updatedAt: repo.updated_at
      };
    });

  return {
    repositories: filteredRepos,
    isLoading,
    error
  };
}; 