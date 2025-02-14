interface RepositoryTranslations {
  [key: string]: {
    description: string;
    topics?: {
      [key: string]: string;
    };
  };
}

export const repositoryTranslations: Record<string, RepositoryTranslations> = {
  'pt-BR': {
    'portfolio-cv': {
      description: 'Currículo online responsivo construído com Next.js e TailwindCSS',
      topics: {
        'web-development': 'desenvolvimento-web',
        'responsive-design': 'design-responsivo',
        'portfolio': 'portfólio'
      }
    },
    'ignite-call': {
      description: 'Sistema de agendamento com integração ao Google Calendar',
      topics: {
        'scheduling': 'agendamento',
        'calendar-integration': 'integração-calendario',
        'real-time': 'tempo-real'
      }
    },
    'inorbit': {
      description: 'InOrbit é uma aplicação backend desenvolvida com TypeScript, Fastify e PostgreSQL. A plataforma utiliza Drizzle ORM para gerenciamento de dados, possui autenticação JWT e integração com Docker, garantindo implantação simplificada e alta escalabilidade. Oferece gerenciamento eficiente de dados, autenticação segura e acompanhamento de metas para uma melhor experiência do usuário.',
      topics: {
        'high-performance': 'alta-performance',
        'authentication': 'autenticacao',
        'data-management': 'gerenciamento-dados',
        'docker': 'docker',
        'typescript': 'typescript'
      }
    },
    // Adicione outros repositórios aqui
  },
  'en-US': {
    'portfolio-cv': {
      description: 'Responsive online CV built with Next.js and TailwindCSS',
      topics: {
        'web-development': 'web-development',
        'responsive-design': 'responsive-design',
        'portfolio': 'portfolio'
      }
    }
  }
}; 