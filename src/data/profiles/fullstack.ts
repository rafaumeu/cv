export const fullstackProfile = {
  role: 'header.role.fullstack',
  summary: 'summary.description.fullstack',
  skills: {
    frontend: [
      'skills.reactjs',
      'skills.nextjs',
      'skills.typescript',
      'skills.tailwindcss'
    ],
    backend: [
      'skills.nodejs',
      'skills.fastify',
      'skills.postgresql',
      'skills.prisma',
      'skills.drizzle'
    ],
    devops: [
      'skills.docker',
      'skills.git',
      'skills.vercel'
    ],
    architecture: [
      'skills.clean-architecture',
      'skills.ddd',
      'skills.tdd'
    ],
    testing: [
      'skills.vitest',
      'skills.playwright'
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
        'experience.achievements.teleperformance.1',
        'experience.achievements.teleperformance.2'
      ],
      skills: ['Mediação', 'Comunicação', 'Resolução de Problemas']
    },
    {
      role: 'experience.role.production',
      company: 'experience.company.debem',
      period: 'experience.period.debem',
      location: 'experience.location.debem',
      achievements: [
        'experience.achievements.debem.0',
        'experience.achievements.debem.1'
      ],
      skills: ['Trabalho em Equipe', 'Atenção aos Detalhes']
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
      skills: ['Atendimento ao Cliente', 'Análise de Dados']
    }
  ],
  projects: [
    {
      title: 'projects.tesouros.title',
      description: 'projects.tesouros.description',
      skills: ['React', 'TypeScript', 'PWA', 'PostgreSQL', 'TailwindCSS'],
      link: 'https://github.com/rafaumeu/tesouros-portal',
      demo: 'https://tesouros-portal.vercel.app'
    },
    {
      title: 'projects.ignitecall.title',
      description: 'projects.ignitecall.description',
      skills: ['Next.js', 'TypeScript', 'OAuth', 'Prisma'],
      link: 'https://github.com/rafaumeu/ignitecall-app',
      demo: 'https://ignitecall-app.vercel.app'
    },
    {
      title: 'projects.devstore.title',
      description: 'projects.devstore.description',
      skills: ['Next.js', 'Stripe', 'TypeScript', 'TailwindCSS'],
      link: 'https://github.com/rafaumeu/ecommerce-next',
      demo: 'https://devstorerdz.netlify.app'
    }
  ],
  certifications: [
    {
      title: 'Node.js e Backend Development',
      issuer: 'Rocketseat',
      year: 2024,
      skills: ['skills.nodejs', 'skills.typescript']
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
      skills: ['skills.nextjs']
    },
    {
      title: 'DDD no Node.js',
      issuer: 'Rocketseat',
      year: 2024,
      skills: ['skills.ddd', 'skills.clean-architecture']
    }
  ],
  atsKeywords: 'react nextjs typescript node.js fastify postgresql prisma drizzle tailwindcss docker git fullstack'
};
