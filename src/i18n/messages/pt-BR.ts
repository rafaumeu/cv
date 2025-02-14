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
      backend: 'Desenvolvedor Backend Junior com base sólida em Node.js e TypeScript. Experiência prática com Express, NestJS e Fastify, junto com bancos de dados SQL (PostgreSQL) e NoSQL (MongoDB, Redis). Proficiente em desenvolvimento de APIs REST, autenticação JWT e práticas de Clean Architecture e DDD. Certificado em metodologias ágeis pela Rocketseat, com foco em qualidade de código e testes automatizados. Comprometido com aprendizado contínuo e trabalho em equipe.',
      frontend: 'Desenvolvedor Frontend Junior com base sólida em React e TypeScript. Experiência com Next.js, Tailwind CSS e React Native para construção de interfaces responsivas e acessíveis. Conhecimento em testes com React Testing Library e Vitest. Foco em performance, SEO e melhores práticas de desenvolvimento frontend. Comprometido com código limpo e experiência do usuário.',
      fullstack: 'Desenvolvedor Full Stack Junior com experiência em React e Node.js. Capaz de desenvolver aplicações end-to-end usando TypeScript e práticas modernas de desenvolvimento. Experiência com Next.js, Express, bancos de dados SQL/NoSQL e implantações em nuvem. Conhecimento em CI/CD, Docker e metodologias ágeis. Habilidade em trabalhar em todas as camadas da aplicação mantendo código limpo e testável.'
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
    mongodb: 'MongoDB',
    redis: 'Redis',
    'jwt-auth': 'Autenticação JWT',
    docker: 'Docker',
    git: 'Git',
    'github-actions': 'GitHub Actions',
    aws: 'AWS',
    'clean-architecture': 'Clean Architecture',
    'clean-code': 'Clean Code',
    'rest-api': 'API REST',
    microservices: 'Microsserviços',
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
      expert: 'Especialista Técnico',
      customer: 'Especialista em Experiência do Cliente',
      production: 'Assistente de Produção de Tintas',
      analyst: 'Analista de Suporte'
    },
    company: {
      self: 'Desenvolvimento Independente & Iniciativas Open Source',
      debem: 'De Bem Tintas',
      teleperformance: 'Teleperformance',
      tempo: 'Tempo Assist'
    },
    period: {
      debem: 'Fevereiro 2021 - Dezembro 2023',
      teleperformance: 'Julho 2024 - Novembro 2024',
      tempo: 'Janeiro 2020 - Dezembro 2020'
    },
    location: {
      debem: 'Jaú, São Paulo',
      teleperformance: 'Remoto, Brasil',
      tempo: 'São Paulo, Brasil',
      remote: 'Remoto, Brasil'
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
      tempo: {
        0: 'Excelência no atendimento ao cliente',
        1: 'Análise de dados e relatórios',
        2: 'Otimização de processos',
        3: 'Colaboração em equipe'
      },
      teleperformance: {
        0: 'Suporte técnico especializado para usuários de software',
        1: 'Resolução eficiente de problemas complexos',
        2: 'Treinamento e mentoria de novos membros da equipe'
      },
      debem: {
        0: 'Otimização dos processos de produção',
        1: 'Controle de qualidade e padronização',
        2: 'Redução de desperdício e custos operacionais'
      },
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
      technologist: 'Tecnólogo em Sistemas para Internet'
    },
    institution: {
      fatec: 'Fatec Jahu - Faculdade de Tecnologia de Jaú'
    }
  }
};

export default translations;