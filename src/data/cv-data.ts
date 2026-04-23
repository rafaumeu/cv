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
    skills: ['Mediação', 'Empatia', 'Atendimento ao Cliente', 'Negociação']
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
    skills: ['Trabalho em Equipe', 'Atenção aos Detalhes', 'Controle de Qualidade']
  },
  {
    role: 'experience.role.analyst',
    company: 'experience.company.tempo',
    period: 'experience.period.tempo',
    location: 'experience.location.tempo',
    achievements: [
      'experience.achievements.tempo.0',
      'experience.achievements.tempo.1',
      'experience.achievements.tempo.2'
    ],
    skills: ['Atendimento ao Cliente', 'Análise de Dados', 'Seguros Automotivos']
  }
];

export const projects = [
  {
    title: 'projects.tesouros.title',
    description: 'projects.tesouros.description',
    skills: ['React', 'TypeScript', 'PWA', 'PostgreSQL', 'TailwindCSS'],
    highlights: [
      'projects.tesouros.highlight1',
      'projects.tesouros.highlight2',
      'projects.tesouros.highlight3'
    ],
    link: 'https://github.com/rafaumeu/tesouros-portal',
    demo: 'https://tesouros-portal.vercel.app'
  },
  {
    title: 'projects.ignitecall.title',
    description: 'projects.ignitecall.description',
    skills: ['Next.js', 'TypeScript', 'OAuth', 'Prisma', 'Google APIs'],
    highlights: [
      'projects.ignitecall.highlight1',
      'projects.ignitecall.highlight2',
      'projects.ignitecall.highlight3'
    ],
    link: 'https://github.com/rafaumeu/ignitecall-app',
    demo: 'https://ignitecall-app.vercel.app'
  },
  {
    title: 'projects.devstore.title',
    description: 'projects.devstore.description',
    skills: ['Next.js', 'TypeScript', 'Stripe', 'TailwindCSS', 'SSR'],
    highlights: [
      'projects.devstore.highlight1',
      'projects.devstore.highlight2'
    ],
    link: 'https://github.com/rafaumeu/ecommerce-next',
    demo: 'https://devstorerdz.netlify.app'
  },
  {
    title: 'projects.pizzashop.title',
    description: 'projects.pizzashop.description',
    skills: ['React', 'TypeScript', 'TailwindCSS', 'Vitest', 'Playwright'],
    highlights: [
      'projects.pizzashop.highlight1',
      'projects.pizzashop.highlight2'
    ],
    link: 'https://github.com/rafaumeu/pizza-shop',
    demo: 'https://pizza-shop-five-sigma.vercel.app'
  },
  {
    title: 'projects.forum.title',
    description: 'projects.forum.description',
    skills: ['TypeScript', 'Node.js', 'DDD', 'Clean Architecture', 'Vitest'],
    highlights: [
      'projects.forum.highlight1',
      'projects.forum.highlight2'
    ],
    link: 'https://github.com/rafaumeu/forum'
  },
  {
    title: 'projects.inorbit.title',
    description: 'projects.inorbit.description',
    skills: ['Fastify', 'TypeScript', 'Drizzle ORM', 'PostgreSQL', 'Zod'],
    highlights: [
      'projects.inorbit.highlight1',
      'projects.inorbit.highlight2'
    ],
    link: 'https://github.com/rafaumeu/inorbit-api'
  }
];

export const skills = {
  frontend: [
    'skills.reactjs',
    'skills.nextjs',
    'skills.typescript',
    'skills.tailwindcss',
    'skills.html5',
    'skills.css3',
    'skills.javascript'
  ],
  backend: [
    'skills.nodejs',
    'skills.fastify',
    'skills.postgresql',
    'skills.prisma',
    'skills.drizzle',
    'skills.rest-api'
  ],
  architecture: [
    'skills.clean-architecture',
    'skills.ddd',
    'skills.tdd'
  ],
  devops: [
    'skills.docker',
    'skills.git',
    'skills.vercel'
  ],
  testing: [
    'skills.vitest',
    'skills.playwright',
    'skills.testing-library'
  ],
  soft: [
    'skills.soft.teamwork',
    'skills.soft.communication',
    'skills.soft.learning',
    'skills.soft.mediation'
  ]
};

export const certifications = [
  {
    title: 'Node.js e Backend Development',
    issuer: 'Rocketseat',
    year: 2024,
    skills: ['skills.nodejs', 'skills.typescript', 'skills.rest-api']
  },
  {
    title: 'ReactJS',
    issuer: 'Rocketseat',
    year: 2025,
    skills: ['skills.reactjs', 'skills.typescript']
  },
  {
    title: 'Aprofundando em Next.js',
    issuer: 'Rocketseat',
    year: 2025,
    skills: ['skills.nextjs', 'skills.reactjs']
  },
  {
    title: 'Fundamentos do React',
    issuer: 'Rocketseat',
    year: 2024,
    skills: ['skills.reactjs', 'skills.javascript']
  },
  {
    title: 'Fundamentos do Next.js',
    issuer: 'Rocketseat',
    year: 2024,
    skills: ['skills.nextjs', 'skills.reactjs']
  },
  {
    title: 'DDD no Node.js',
    issuer: 'Rocketseat',
    year: 2024,
    skills: ['skills.ddd', 'skills.nodejs', 'skills.clean-architecture']
  },
  {
    title: 'Containers com Docker e Docker Compose',
    issuer: 'Rocketseat',
    year: 2025,
    skills: ['skills.docker']
  },
  {
    title: 'IAC com Terraform',
    issuer: 'Rocketseat',
    year: 2025,
    skills: ['skills.terraform']
  },
  {
    title: 'Design System',
    issuer: 'Rocketseat',
    year: 2025,
    skills: ['skills.reactjs', 'skills.typescript']
  },
  {
    title: 'Metodologias Ágeis',
    issuer: 'Rocketseat',
    year: 2025,
    skills: ['skills.soft.teamwork', 'skills.soft.communication']
  },
  {
    title: 'Aprofundando em Hooks',
    issuer: 'Rocketseat',
    year: 2024,
    skills: ['skills.reactjs']
  },
  {
    title: 'HTTP e Performance',
    issuer: 'Rocketseat',
    year: 2024,
    skills: ['skills.rest-api']
  },
  {
    title: 'Integrando Frontend e Backend',
    issuer: 'Rocketseat',
    year: 2024,
    skills: ['skills.reactjs', 'skills.nodejs']
  },
  {
    title: 'NestJS',
    issuer: 'Rocketseat',
    year: 2024,
    skills: ['skills.nodejs', 'skills.typescript']
  },
  {
    title: 'Fundamentos da Cultura DevOps',
    issuer: 'Rocketseat',
    year: 2024,
    skills: ['skills.docker', 'skills.cicd']
  },
  {
    title: 'Comunicação Assertiva',
    issuer: 'Rocketseat',
    year: 2025,
    skills: ['skills.soft.communication']
  },
  {
    title: 'Posicionamento nas Redes Sociais',
    issuer: 'Rocketseat',
    year: 2024,
    skills: ['skills.soft.communication']
  },
  {
    title: 'Desenvolvendo Chatbots',
    issuer: 'Rocketseat',
    year: 2025,
    skills: ['skills.ai']
  },
  {
    title: 'Otimizando LLMs com Fine Tuning',
    issuer: 'Rocketseat',
    year: 2025,
    skills: ['skills.ai']
  },
  {
    title: 'Otimizando LLMs com RAG',
    issuer: 'Rocketseat',
    year: 2025,
    skills: ['skills.ai']
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
  },
  {
    name: 'languages.spanish',
    level: 'Básico'
  }
];

export const education: EducationItem[] = [
  {
    degree: 'education.degree.btech',
    institution: 'education.institution.estacio',
    course: 'education.course.ads',
    period: 'education.period.estacio',
    description: [
      'education.description.estacio.0'
    ],
    subjects: []
  },
  {
    degree: 'education.degree.certification',
    institution: 'education.institution.rocketseat',
    course: 'education.course.ignite',
    period: 'education.period.rocketseat',
    description: [
      'education.description.rocketseat.0'
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

export const getCurrentProfile = (profile: ProfileType) => {
  return profiles[profile];
};
