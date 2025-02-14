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
    'vite-template': {
      description: 'Template React moderno com Vite e TypeScript, oferecendo suporte à internacionalização, componentes UI responsivos e ferramentas amigáveis para desenvolvedores. Inclui TailwindCSS para estilização, ícones Lucide e configuração ESLint abrangente. Perfeito para construir aplicações web escaláveis com as melhores práticas.',
      topics: {
        'modern-web': 'web-moderna',
        'developer-tools': 'ferramentas-desenvolvimento',
        'typescript': 'typescript',
        'frontend': 'frontend'
      }
    },
    'sabbath-school': {
      description: 'Plataforma gamificada que transforma a Escola Sabatina em uma experiência de aprendizado envolvente. Possui pontos, conquistas e recompensas para motivar os alunos mantendo o foco espiritual. Construído com Next.js, Fastify e TypeScript.',
      topics: {
        'gamification': 'gamificacao',
        'education': 'educacao',
        'nextjs': 'nextjs',
        'fastify': 'fastify'
      }
    },
    'ignite-call': {
      description: 'Ignite Call é um aplicativo de agendamento construído com Next.js e TypeScript. Oferece atualizações de disponibilidade em tempo real, agendamento inteligente, integração com Google Calendar, interface elegante, Design System personalizado e autenticação OAuth segura para uma experiência de reserva eficiente.',
      topics: {
        'scheduling-system': 'sistema-agendamento',
        'google-calendar': 'google-calendar',
        'design-system': 'design-system',
        'nextjs': 'nextjs'
      }
    },
    'ignite-ui': {
      description: 'Design System modular construído com TypeScript e ESLint. Perfeito para criar interfaces de usuário consistentes e escaláveis em diferentes aplicações.',
      topics: {
        'design-system': 'design-system',
        'ui-components': 'componentes-ui',
        'typescript': 'typescript',
        'monorepo': 'monorepo'
      }
    },
    'inorbit-web': {
      description: 'Sistema moderno de acompanhamento de metas construído com React, TypeScript, Vite e TailwindCSS. Transforme suas aspirações em conquistas com uma aplicação elegante, performática e type-safe projetada para o futuro.',
      topics: {
        'goal-tracking': 'acompanhamento-metas',
        'performance-optimization': 'otimizacao-performance',
        'modern-web': 'web-moderna',
        'typescript': 'typescript'
      }
    },
    'inorbit': {
      description: 'Backend de alta performance construído com TypeScript, Fastify e PostgreSQL. Possui Drizzle ORM, autenticação JWT e integração com Docker, garantindo implantação e escalabilidade contínuas. A plataforma oferece gerenciamento eficiente de dados, autenticação e acompanhamento de metas para uma experiência aprimorada do usuário!',
      topics: {
        'high-performance': 'alta-performance',
        'jwt-authentication': 'autenticacao-jwt',
        'postgresql': 'postgresql',
        'docker': 'docker'
      }
    },
    'ecoleta': {
      description: 'Ecoleta é um marketplace de coleta de resíduos conectando pessoas a pontos de coleta. Construído com HTML, CSS e JavaScript puros, possui design mobile-first, registro de pontos com integração à API do IBGE e interface de busca intuitiva. O front-end está completo e otimizado para todos os tamanhos de tela.',
      topics: {
        'eco-friendly': 'eco-friendly',
        'responsive-design': 'design-responsivo',
        'web-api': 'api-web',
        'marketplace': 'marketplace'
      }
    }
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