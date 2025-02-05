export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  skills: string[];
  highlights?: string[];
  link?: string;
  github?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: number;
  skills: string[];
  link?: string;
  hours: number;
}

export interface Language {
  name: string;
  level: string;
}

export interface Skills {
  [category: string]: string[];
}