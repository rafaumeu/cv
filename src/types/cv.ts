export type ProfileType = 'backend' | 'frontend' | 'fullstack';

export interface Profile {
  role: string;
  summary: string;
  skills: {
    [key: string]: string[];
  };
  experiences: Experience[];
  projects: Project[];
  certifications: Certification[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  achievements: string[];
  skills: string[];
  metrics?: string[];
}

export interface Project {
  title: string;
  description: string;
  skills: string[];
  highlights?: string[];
  link: string;
  github?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: number;
  skills: string[];
  link: string;
  hours?: number;
}

export type Profiles = Record<ProfileType, Profile>;

export interface Language {
  name: string;
  level: string;
}

export interface Skills {
  [category: string]: string[];
}

export interface HeaderProps {
  profile: ProfileType;
  onProfileChange: (profile: ProfileType) => void;
}

export interface SkillsProps {
  skills: {
    [key: string]: string[];
  };
  certifications: Certification[];
  languages: Language[];
}

export interface GithubData {
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

export interface Subject {
  id: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export interface EducationItem {
  institution: string;
  course: string;
  degree: string;
  period: string;
  description?: string[];
  subjects?: Subject[];
}

export interface EducationProps {
  education: EducationItem[];
}

export interface Repository {
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  topics?: string[];
}