import { Skill } from '@/constants/skills';

export interface ProjectItemProps {
  title: string;
  description: string;
  skills: Skill[];
  highlights?: string[];
  link?: string;
  github: string;
  stars?: number;
  updatedAt: string;
} 