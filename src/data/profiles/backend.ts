export const backendProfile = {
  role: 'header.role.backend',
  summary: 'summary.description.backend',
  skills: {
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
    testing: [
      'skills.vitest',
      'skills.playwright'
    ],
    devops: [
      'skills.docker',
      'skills.git',
      'skills.vercel'
    ]
  },
  experiences: [
    {
      role: 'experience.role.expert',
      company: 'experience.company.teleperformance',
      period: 'experience.period.teleperformance',
      location: 'experience.location.teleperformance',
      achievements: [
        'experience.achievements.teleperformance.0',
        'experience.achievements.teleperformance.1'
      ],
      skills: ['Resolução de Problemas', 'Comunicação Técnica']
    },
    {
      role: 'experience.role.analyst',
      company: 'experience.company.tempo',
      period: 'experience.period.tempo',
      location: 'experience.location.tempo',
      achievements: [
        'experience.achievements.tempo.0',
        'experience.achievements.tempo.1'
      ],
      skills: ['Análise de Dados', 'Atendimento ao Cliente']
    }
  ],
  projects: [
    {
      title: 'projects.forum.title',
      description: 'projects.forum.description',
      skills: ['TypeScript', 'Node.js', 'DDD', 'Clean Architecture', 'Vitest'],
      link: 'https://github.com/rafaumeu/forum'
    },
    {
      title: 'projects.inorbit.title',
      description: 'projects.inorbit.description',
      skills: ['Fastify', 'TypeScript', 'Drizzle ORM', 'PostgreSQL', 'Zod'],
      link: 'https://github.com/rafaumeu/inorbit-api'
    },
    {
      title: 'projects.tesouros.title',
      description: 'projects.tesouros.description',
      skills: ['React', 'TypeScript', 'PostgreSQL', 'PWA', 'Node.js'],
      link: 'https://github.com/rafaumeu/tesouros-portal',
      demo: 'https://tesouros-portal.vercel.app'
    }
  ],
  certifications: [
    {
      title: 'Node.js e Backend Development',
      issuer: 'Rocketseat',
      year: 2024,
      skills: ['skills.nodejs', 'skills.typescript', 'skills.rest-api']
    },
    {
      title: 'DDD no Node.js',
      issuer: 'Rocketseat',
      year: 2024,
      skills: ['skills.ddd', 'skills.nodejs']
    },
    {
      title: 'Containers com Docker e Docker Compose',
      issuer: 'Rocketseat',
      year: 2025,
      skills: ['skills.docker']
    },
    {
      title: 'HTTP e Performance',
      issuer: 'Rocketseat',
      year: 2024,
      skills: ['skills.rest-api']
    }
  ],
  atsKeywords: 'node.js fastify postgresql prisma drizzle typescript ddd clean-architecture rest-api docker backend'
};
