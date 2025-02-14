import { frontendProfile } from './profiles/frontend';
import { backendProfile } from './profiles/backend';
import { fullstackProfile } from './profiles/fullstack';
import { type Profiles } from '@/types/cv';
import { type GithubProject } from '@/api/github-projects';
import { type EducationItem } from '@/types/cv';

export const profiles: Profiles = {
  frontend: frontendProfile,
  backend: backendProfile,
  fullstack: fullstackProfile
} as const;

export type ProfileType = keyof typeof profiles;

export const experiences = [
  {
    role: 'experience.role.expert',
    company: 'experience.company.teleperformance',
    period: 'experience.period.teleperformance',
    location: 'experience.location.teleperformance',
    achievements: [
      'experience.achievements.teleperformance.0',
      'experience.achievements.teleperformance.1',
      'experience.achievements.teleperformance.2'
    ],
    metrics: [
      'experience.metrics.teleperformance.0',
      'experience.metrics.teleperformance.1',
      'experience.metrics.teleperformance.2'
    ],
    skills: ['Gestão de Conflitos', 'Comunicação Técnica', 'Resolução de Problemas']
  },
  {
    role: 'experience.role.production',
    company: 'experience.company.debem',
    period: 'experience.period.debem',
    location: 'experience.location.debem',
    achievements: [
      'experience.achievements.debem.0',
      'experience.achievements.debem.1',
      'experience.achievements.debem.2'
    ],
    skills: ['Trabalho em Equipe', 'Processos Produtivos', 'Controle de Qualidade']
  },
  {
    role: 'experience.role.analyst',
    company: 'experience.company.tempo',
    period: 'experience.period.tempo',
    location: 'experience.location.tempo',
    achievements: [
      'experience.achievements.tempo.0',
      'experience.achievements.tempo.1',
      'experience.achievements.tempo.2',
      'experience.achievements.tempo.3'
    ],
    skills: ['Atendimento ao Cliente', 'Análise de Dados', 'Retenção de Clientes']
  }
];

export const projects = [
  {
    title: 'projects.forum.title',
    description: 'projects.forum.description',
    skills: ['Node.js', 'TypeScript', 'DDD', 'Clean Architecture', 'PostgreSQL'],
    metrics: [
      'projects.forum.metrics.0',
      'projects.forum.metrics.1',
      'projects.forum.metrics.2'
    ],
    link: 'https://github.com/rafaumeu/forum'
  },
  {
    title: 'projects.inorbit.title',
    description: 'projects.inorbit.description',
    skills: ['React.js', 'TypeScript', 'TailwindCSS', 'Radix UI', 'React Query'],
    highlights: [
      'projects.inorbit.highlight1',
      'projects.inorbit.highlight2',
      'projects.inorbit.highlight3'
    ],
    link: 'https://github.com/rafaumeu/inorbit-front'
  },
  {
    title: 'projects.ignitecall.title',
    description: 'projects.ignitecall.description',
    skills: ['Next.js', 'TypeScript', 'Prisma', 'NextAuth.js', 'Google APIs'],
    highlights: [
      'projects.ignitecall.highlight1',
      'projects.ignitecall.highlight2',
      'projects.ignitecall.highlight3'
    ],
    link: 'https://github.com/rafaumeu/ignite-call'
  }
];

export const skills = {
  backend: [
    'skills.nodejs',
    'skills.expressjs',
    'skills.nestjs',
    'skills.fastify',
    'skills.postgresql',
    'skills.mongodb',
    'skills.redis',
    'skills.jwt-auth'
  ],
  architecture: [
    'skills.clean-architecture',
    'skills.ddd',
    'skills.rest-api'
  ],
  soft: [
    'skills.soft.teamwork',
    'skills.soft.communication',
    'skills.soft.learning'
  ]
};

export const certifications = [
  {
    title: 'Node.js e Backend Development',
    issuer: 'Rocketseat',
    year: 2024,
    skills: [
      'skills.nodejs',
      'skills.typescript',
      'skills.clean-architecture',
      'skills.ddd',
      'skills.rest-api',
      'skills.jwt-auth'
    ],
    link: 'https://app.rocketseat.com.br/certificates/ad52c13b-44e5-4cfa-aced-0db19184e28e'
  },
  {
    title: 'NestJS Framework',
    issuer: 'Rocketseat',
    year: 2024,
    skills: [
      'skills.nestjs',
      'skills.typescript',
      'skills.postgresql',
      'skills.mongodb'
    ],
    link: 'https://app.rocketseat.com.br/certificates/e4c15186-1a42-4f44-b327-554036bf400a'
  },
  {
    title: 'Docker e DevOps',
    issuer: 'Rocketseat',
    year: 2025,
    skills: [
      'skills.docker',
      'skills.cicd'
    ],
    link: 'https://app.rocketseat.com.br/certificates/a5a42e68-ac42-4fac-b98e-c29f7d00dcca'
  },
  {
    title: 'Comunicação e Metodologias Ágeis',
    issuer: 'Rocketseat',
    year: 2025,
    skills: [
      'skills.soft.communication',
      'skills.soft.teamwork'
    ],
    link: 'https://app.rocketseat.com.br/certificates/a6dfccf8-d059-426e-8930-9697b8b17dec'
  }
];

export const languages = [
  {
    name: 'languages.portuguese',
    level: 'Nativo'
  },
  {
    name: 'languages.english',
    level: 'Intermediário'
  }
];

export const education: EducationItem[] = [
  {
    degree: 'education.degree.technologist',
    institution: 'education.institution.rocketseat',
    course: 'education.course.ignite',
    period: 'education.period.ignite',
    description: [
      'education.course.description.0',
      'education.course.description.1',
      'education.course.description.2'
    ],
    subjects: []
  }
];

export const getProjectsForProfile = (githubProjects: GithubProject[]) => {
  return githubProjects.map(project => ({
    title: project.name,
    description: project.description || '',
    skills: project.languages,
    highlights: project.topics,
    link: project.url
  }));
};

// Função auxiliar para pegar o perfil atual
export const getCurrentProfile = (profile: ProfileType) => {
  return profiles[profile];
};
