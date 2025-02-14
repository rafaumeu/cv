export interface Repository {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string;
  stargazers_count: number;
  topics: string[];
  updated_at: string;
  visibility?: 'public' | 'private';
  fork?: boolean;
  archived?: boolean;
}

export interface FormattedRepository {
  title: string;
  description: string;
  link: string;
  github: string;
  skills: string[];
  highlights: string[];
  metrics: string[];
  updatedAt: string;
}

export interface TranslatedContent {
  description: string;
  topics: string[];
} 