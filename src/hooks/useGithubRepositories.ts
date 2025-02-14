import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { Repository, FormattedRepository } from '@/types/github';
import { GITHUB_CONFIG } from '@/config/github';
import { formatRepositoryName, sanitizeDescription } from '@/utils/github';
import { repositoryTranslations } from '@/i18n/repositories';
import { translateTechTerm } from '@/utils/autoTranslate';
import { ProfileType } from '@/types/cv';
import { RelevantTopic } from '@/config/github';
import { smartTranslate } from '@/utils/smartTranslate';
import { validateSkills } from '@/utils/skillsValidator';

export const useGithubRepositories = (profile: ProfileType) => {
  const [repositories, setRepositories] = useState<FormattedRepository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const intl = useIntl();

  const getTranslatedContent = (repo: Repository) => {
    const manualTranslation = repositoryTranslations[intl.locale]?.[repo.name];
    
    if (manualTranslation) {
      return {
        description: manualTranslation.description,
        topics: repo.topics.map(topic => 
          manualTranslation.topics?.[topic] || translateTechTerm(topic, intl.locale)
        )
      };
    }

    return {
      description: smartTranslate(repo.description, intl.locale),
      topics: repo.topics.map(topic => translateTechTerm(topic, intl.locale))
    };
  };

  const formatRepositoryMetrics = (repo: Repository) => {
    const metrics = [];
    
    // Só adiciona o contador de stars se tiver alguma
    if (repo.stargazers_count > 0) {
      metrics.push(`⭐ ${repo.stargazers_count}`);
    }
    
    return metrics.join(' ');
  };

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${GITHUB_CONFIG.API_URL}/users/${GITHUB_CONFIG.USERNAME}/repos?sort=${GITHUB_CONFIG.SORT}&per_page=${GITHUB_CONFIG.REPOS_PER_PAGE}`
        );

        if (!response.ok) {
          throw new Error('Falha ao buscar repositórios');
        }

        const data: Repository[] = await response.json();
        const relevantTopics = GITHUB_CONFIG.RELEVANT_TOPICS[profile];

        const filteredRepos = data
          .filter(repo => !repo.fork && !repo.archived)
          .filter(repo => {
            const topics = repo.topics.map(t => t.toLowerCase()) as RelevantTopic[];
            return topics.some(topic => relevantTopics.includes(topic));
          })
          .sort((a, b) => {
            const aRelevance = a.topics.filter(t => relevantTopics.includes(t as RelevantTopic)).length;
            const bRelevance = b.topics.filter(t => relevantTopics.includes(t as RelevantTopic)).length;
            return bRelevance - aRelevance || b.stargazers_count - a.stargazers_count;
          })
          .slice(0, 6);

        const filterRelevantTopics = (topics: string[]): string[] => {
          const uniqueTopics = new Set(topics);
          return Array.from(uniqueTopics)
            .filter(topic => !topic.includes('system') && !topic.includes('app'))
            .slice(0, 5);
        };

        const formattedRepos = filteredRepos.map(repo => {
          const translated = getTranslatedContent(repo);
          const uniqueSkills = new Set([repo.language, ...translated.topics]);
          const metrics = formatRepositoryMetrics(repo);
          
          // Valida as skills
          const skillsArray = Array.from(uniqueSkills);
          const validation = validateSkills(skillsArray);
          
          if (!validation.valid) {
            console.warn(`Skills inválidas encontradas em ${repo.name}:`, {
              invalidSkills: validation.invalidSkills,
              suggestions: validation.suggestions
            });
          }
          
          return {
            title: formatRepositoryName(repo.name),
            description: translated.description,
            link: repo.homepage || repo.html_url,
            github: repo.html_url,
            skills: skillsArray.filter(skill => 
              !validation.invalidSkills.includes(skill)
            ),
            highlights: filterRelevantTopics(translated.topics),
            stars: repo.stargazers_count,
            updatedAt: repo.updated_at
          };
        });

        setRepositories(formattedRepos);
        setError(null);
      } catch (err) {
        setError('Erro ao carregar repositórios');
        console.error('Erro ao buscar repositórios:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepositories();
  }, [profile, intl.locale]);

  return { repositories, isLoading, error };
}; 