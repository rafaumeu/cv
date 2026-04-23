// Estrutura base de traduções
const translations = {
  header: {
    about: 'Perfil Profissional',
    experience: 'Experiência Profissional',
    projects: 'Projetos Significativos',
    skills: 'Habilidades Técnicas',
    education: 'Educação',
    role: {
      backend: 'Desenvolvedor Backend',
      frontend: 'Desenvolvedor Frontend',
      fullstack: 'Desenvolvedor Full Stack'
    }
  },
  profile: {
    select: 'Selecionar Perfil',
    backend: 'Backend',
    frontend: 'Frontend',
    fullstack: 'Full Stack'
  },
  summary: {
    title: 'Sobre',
    description: {
      backend: 'Desenvolvedor Backend com experiência em Node.js, TypeScript, Fastify e PostgreSQL. Desenvolve APIs REST com Clean Architecture, DDD e testes automatizados. Experiência com Drizzle ORM, Prisma e integração de serviços. Foco em qualidade de código e arquitetura escalável.',
      frontend: 'Desenvolvedor Frontend com experiência em React, Next.js, TypeScript e TailwindCSS. Constrói interfaces responsivas e acessíveis com foco em performance e SEO. Experiência com PWA, testes E2E (Playwright) e Design Systems. Comprometido com experiência do usuário e código limpo.',
      fullstack: 'Desenvolvedor Full Stack com experiência em React, Node.js e TypeScript. Constrói aplicações end-to-end usando Next.js, Fastify, PostgreSQL e práticas modernas. Experiência com PWA, gamificação, conformidade LGPD, testes automatizados e CI/CD. Comprometido com código limpo, Clean Architecture e aprendizado contínuo.'
    }
  },
  skills: {
    certifications: 'Certificados',
    languages: 'Idiomas',
    reactjs: 'React.js',
    nextjs: 'Next.js',
    typescript: 'TypeScript',
    tailwindcss: 'TailwindCSS',
    html5: 'HTML5',
    css3: 'CSS3',
    javascript: 'JavaScript',
    'react-native': 'React Native',
    nodejs: 'Node.js',
    expressjs: 'Express.js',
    nestjs: 'NestJS',
    fastify: 'Fastify',
    postgresql: 'PostgreSQL',
    'jwt-auth': 'Autenticação JWT',
    docker: 'Docker',
    git: 'Git',
    'github-actions': 'GitHub Actions',
    'clean-architecture': 'Clean Architecture',
    'clean-code': 'Clean Code',
    'rest-api': 'API REST',
    ddd: 'Domain-Driven Design',
    tdd: 'Test-Driven Development',
    'responsive-design': 'Design Responsivo',
    accessibility: 'Acessibilidade',
    seo: 'SEO',
    vitest: 'Vitest',
    'testing-library': 'Testing Library',
    jest: 'Jest',
    github: 'GitHub',
    vscode: 'VS Code',
    figma: 'Figma',
    prisma: 'Prisma ORM',
    drizzle: 'Drizzle ORM',
    playwright: 'Playwright',
    pwa: 'PWA',
    lgpd: 'LGPD',
    title: 'Competências',
    category: {
      frontend: 'Frontend',
      backend: 'Backend',
      devops: 'DevOps',
      version: 'Controle de Versão & DevOps',
      soft: 'Habilidades Interpessoais',
      architecture: 'Arquitetura & Design',
      testing: 'Testes',
      tools: 'Ferramentas'
    }
  },
  certifications: {
    title: 'Certificações',
    view: 'Ver Certificado',
    backend: {
      title: 'Desenvolvimento Backend com Node.js'
    },
    skills: {
      title: 'Competências'
    }
  },
  experience: {
    title: 'Experiência Profissional',
    remote: 'Ambiente Remoto',
    role: {
      frontend: 'Desenvolvedor Frontend',
      backend: 'Desenvolvedor Backend',
      fullstack: 'Desenvolvedor Full Stack',
      expert: 'Especialista em Interação',
      production: 'Assistente de Produção',
      analyst: 'Analista de Atendimento',
      analyst2: 'Analista de Transporte',
      distribution: 'Auxiliar de Distribuição',
      telemarketing: 'Operador de Telemarketing',
      feeder: 'Alimentador de Linha de Produção',
      footwear: 'Auxiliar de Calçados'
    },
    company: {
      self: 'Desenvolvimento Independente & Iniciativas Open Source',
      debem: 'De Bem Tintas',
      teleperformance: 'Teleperformance',
      tempo: 'Tempo Assist',
      randstad: 'Randstad Brasil',
      jobwork: 'Agência Job Work',
      parla: 'Parla Contact Center',
      dino: 'Dino Formas',
      mantelli: 'F. Mantelli Calçados'
    },
    period: {
      debem: 'Fevereiro 2021 - Dezembro 2023',
      teleperformance: 'Julho 2024 - Novembro 2024',
      tempo: 'Março 2015 - Junho 2020',
      randstad: 'Setembro 2014 - Dezembro 2014',
      jobwork: 'Maio 2014 - Agosto 2014',
      parla: 'Março 2014 - Abril 2014',
      dino: 'Julho 2013 - Setembro 2013',
      mantelli: 'Fevereiro 2013 - Maio 2013'
    },
    location: {
      debem: 'Jaú, São Paulo',
      teleperformance: 'Remoto, Brasil',
      tempo: 'São Paulo, Brasil',
      remote: 'Remoto, Brasil',
      randstad: 'Cajamar, São Paulo',
      jobwork: 'Cajamar, São Paulo',
      parla: 'Barueri, São Paulo',
      dino: 'Barueri, São Paulo',
      mantelli: 'Jaú, São Paulo'
    },
    achievements: {
      title: 'Principais Realizações',
      frontend: {
        1: 'Desenvolvimento de interfaces responsivas e acessíveis',
        2: 'Implementação de features usando React e TypeScript',
        3: 'Otimização de performance e SEO'
      },
      backend: {
        1: 'Desenvolvimento de APIs RESTful escaláveis',
        2: 'Implementação de Clean Architecture',
        3: 'Otimização de queries e performance'
      },
      fullstack: {
        1: 'Desenvolvimento de aplicações full-stack escaláveis',
        2: 'Implementação de arquitetura de microsserviços',
        3: 'Otimização de performance e SEO em aplicações React'
      },
      teleperformance: {
        0: 'Mediação de conflitos entre compradores e vendedores',
        1: 'Atendimento ao cliente com empatia e resolução de problemas',
        2: 'Negociação e comunicação assertiva'
      },
      debem: {
        0: 'Produção de acabamentos para construção civil',
        1: 'Controle de qualidade e padronização',
        2: 'Trabalho em equipe e atenção aos detalhes'
      },
      tempo: {
        0: 'Atendimento ao cliente de seguros Tokyo Marine',
        1: 'Análise de sinistros e processos de seguros',
        2: 'Trabalho em equipe e relatórios analíticos'
      },
      randstad: {
        0: 'Triagem de produtos no centro de distribuição'
      },
      jobwork: {
        0: 'Logística de carregamento e descarga'
      },
      parla: {
        0: 'Vendas de seguros por telefone'
      },
      dino: {
        0: 'Produção de fôrmas para construção'
      },
      mantelli: {
        0: 'Montagem de calçados em linha de produção'
      }
    },
    metrics: {
      title: 'Métricas Chave',
      teleperformance: {
        0: '95% de satisfação do cliente',
        1: 'Resolução de +500 tickets mensais',
        2: 'Tempo médio de resposta < 2 horas'
      }
    },
    skills: {
      title: 'Competências'
    }
  },
  projects: {
    loading: 'Carregando projetos...',
    error: 'Erro ao carregar projetos',
    empty: 'Nenhum projeto encontrado para este perfil',
    title: 'Projetos',
    view: 'Visualizar projeto',
    source: 'Ver código fonte no GitHub',
    lastUpdate: 'Última atualização: {date}',
    demo: 'Demo disponível',
    github: 'GitHub',
    skillsLabel: 'Tecnologias:',
    highlightsLabel: 'Destaques:',
    tesouros: {
      title: 'Tesouros Portal',
      description: 'Plataforma enterprise de gestão de clube com PWA offline-first, gamificação, RBAC e conformidade LGPD. Aplicação real com usuários ativos.'
    },
    ignitecall: {
      description: 'App de agendamento com Google Calendar OAuth, Design System próprio e CI/CD automatizado'
    },
    devstore: {
      title: 'DevStore',
      description: 'E-commerce SSR com pagamentos Stripe, catálogo de produtos e design responsivo'
    },
    pizzashop: {
      title: 'Pizza Shop',
      description: 'App de delivery com testes E2E automatizados (Playwright) e autenticação via magic link'
    },
    inorbit: {
      description: 'API REST com Fastify para rastreamento de metas semanais'
    },
    print: {
      link: 'Link: {url}',
      github: 'Código fonte: {url}'
    },
    star: {
      tooltip: 'Ver pessoas que deram estrela',
      empty: 'Seja o primeiro a dar uma estrela!'
    },
    link: {
      tooltip: 'Abrir projeto em nova aba'
    },
    github: {
      tooltip: 'Ver código no GitHub'
    },
    date: {
      tooltip: 'Data da última atualização'
    },
    skills: {
      tooltip: 'Tecnologias utilizadas'
    },
    highlights: {
      tooltip: 'Principais características'
    }
  },
  languages: {
    portuguese: 'Português',
    english: 'Inglês',
    title: 'Idiomas',
    level: {
      native: 'Nativo',
      intermediate: 'Intermediário'
    }
  },
  education: {
    title: 'Educação',
    current_subjects: 'Disciplinas Atuais',
    future_subjects: 'Próximas Disciplinas',
    description: {
      fatec: {
        1: 'Curso focado em desenvolvimento web e mobile com ênfase em tecnologias modernas',
        2: 'Projeto integrador com empresas da região para desenvolvimento de soluções reais'
      }
    },
    degree: {
      technologist: 'Tecnólogo em Sistemas para Internet',
      btech: 'Tecnólogo em Análise e Desenvolvimento de Sistemas'
    },
    institution: {
      fatec: 'Fatec Jahu - Faculdade de Tecnologia de Jaú',
      estacio: 'Estácio',
      rocketseat: 'Rocketseat'
    },
    course: {
      fullstack: 'Full Stack Developer'
    },
    period: {
      estacio: 'Janeiro 2025 - Julho 2027',
      rocketseat: 'Novembro 2024 - Novembro 2026'
    }
  }
};

export default translations;
