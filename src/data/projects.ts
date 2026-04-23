import { ProfileType } from '@/types/cv';

export interface ProjectMetrics {
  coverage?: string;
  tests?: string;
  bundlesize?: string;
}

export interface ProjectData {
  id: string;
  title: string;
  subtitle: { pt: string; en: string };
  description: { pt: string; en: string };
  highlights: { pt: string[]; en: string[] };
  techStack: string[];
  github: string;
  demo?: string;
  stars: number;
  featured: boolean;
  profiles: ProfileType[];
  metrics?: ProjectMetrics;
}

export const projects: ProjectData[] = [
  {
    id: 'tesouros-portal',
    title: 'Tesouros Portal',
    subtitle: {
      pt: 'Plataforma Enterprise de Membros e Gamificação',
      en: 'Enterprise Membership & Gamification Platform',
    },
    description: {
      pt: 'Plataforma oficial do Clube de Aventureiros Tesouros de Jaú. Ecossistema full-stack robusto com PWA offline-first, motor de gamificação com XP/níveis/streaks, RBAC com 5 perfis de acesso, conformidade LGPD com deleção em cascata, e integração Google Drive para auditoria de requisitos.',
      en: 'Official platform for Clube de Aventureiros Tesouros de Jaú. Robust full-stack ecosystem with offline-first PWA, gamification engine with XP/levels/streaks, RBAC with 5 access profiles, LGPD compliance with cascade deletion, and Google Drive integration for requirement auditing.',
    },
    highlights: {
      pt: [
        'PWA offline-first com motor IndexedDB para sincronização sem conexão',
        'Motor de gamificação: XP, Níveis, Streaks, Achievements dinâmicos',
        'RBAC granular: Aventureiro, Conselheiro, Instrutor, Pais, Admin',
        'Conformidade LGPD com deleção em cascata e limpeza de arquivos',
        'Vitest + Playwright + Stryker mutation testing (qualidade radical)',
      ],
      en: [
        'Offline-first PWA with IndexedDB sync engine for no-signal areas',
        'Gamification engine: XP, Levels, Streaks, dynamic Achievements',
        'Granular RBAC: Adventurer, Counselor, Instructor, Parents, Admin',
        'LGPD compliance with cascade deletion and file cleanup',
        'Vitest + Playwright + Stryker mutation testing (radical quality)',
      ],
    },
    techStack: [
      'React 19',
      'TypeScript',
      'Tailwind v4',
      'Vercel Postgres',
      'PWA',
      'Vitest',
      'Playwright',
      'Sentry',
    ],
    github: 'https://github.com/rafaumeu/tesouros-portal',
    demo: 'https://tesouros-portal.vercel.app',
    stars: 0,
    featured: true,
    profiles: ['frontend', 'backend', 'fullstack'],
    metrics: { tests: '1000+ unitários + E2E + mutação' },
  },
  {
    id: 'ignitecall-app',
    title: 'IgniteCall',
    subtitle: {
      pt: 'Plataforma Full-Stack de Agendamento',
      en: 'Full-Stack Scheduling Platform',
    },
    description: {
      pt: 'Aplicativo completo de agendamento com integração Google Calendar OAuth, Design System próprio publicado no NPM, e CI/CD automatizado. Agendamentos em tempo real com geração automática de Google Meet links.',
      en: 'Full-stack scheduling app with Google Calendar OAuth integration, custom Design System published on NPM, and automated CI/CD. Real-time scheduling with automatic Google Meet link generation.',
    },
    highlights: {
      pt: [
        'Google Calendar OAuth com agendamento em tempo real',
        'Design System próprio (ignit-ui) publicado no NPM com Storybook',
        'CI/CD com GitHub Actions + Codecov (cobertura de testes)',
      ],
      en: [
        'Google Calendar OAuth with real-time scheduling',
        'Custom Design System (ignit-ui) published on NPM with Storybook',
        'CI/CD with GitHub Actions + Codecov (test coverage)',
      ],
    },
    techStack: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'React Hook Form',
      'Zod',
      'OAuth 2.0',
    ],
    github: 'https://github.com/rafaumeu/ignitecall-app',
    demo: 'https://ignitecall-app.vercel.app',
    stars: 4,
    featured: true,
    profiles: ['frontend', 'fullstack'],
    metrics: { coverage: 'Codecov integrado' },
  },
  {
    id: 'ecommerce-next',
    title: 'E-Commerce Next.js',
    subtitle: {
      pt: 'E-Commerce SSR com Stripe',
      en: 'SSR E-Commerce with Stripe',
    },
    description: {
      pt: 'E-commerce server-side rendered com integração Stripe para pagamentos reais, catálogo de produtos dinâmico, carrinho de compras e design responsivo. Otimizado para SEO com SSR.',
      en: 'Server-side rendered e-commerce with Stripe integration for real payments, dynamic product catalog, shopping cart, and responsive design. SEO-optimized with SSR.',
    },
    highlights: {
      pt: [
        'Integração Stripe para processamento de pagamentos em produção',
        'Server-Side Rendering para SEO e performance',
        'Catálogo dinâmico com busca e filtros',
      ],
      en: [
        'Stripe integration for production payment processing',
        'Server-Side Rendering for SEO and performance',
        'Dynamic catalog with search and filters',
      ],
    },
    techStack: ['Next.js', 'TypeScript', 'Stripe', 'TailwindCSS', 'Zod'],
    github: 'https://github.com/rafaumeu/ecommerce-next',
    demo: 'https://devstorerdz.netlify.app',
    stars: 1,
    featured: true,
    profiles: ['frontend', 'fullstack'],
  },
  {
    id: 'pizza-shop',
    title: 'Pizza Shop',
    subtitle: {
      pt: 'Monorepo Full-Stack com Testes Radicais',
      en: 'Full-Stack Monorepo with Radical Testing',
    },
    description: {
      pt: 'Monorepo full-stack enterprise-grade com React, TypeScript e Tailwind. Destaque para a estratégia de testes: 95% unitário, 100% E2E com Playwright, incluindo testes de acessibilidade. Autenticação via magic link.',
      en: 'Enterprise-grade full-stack monorepo with React, TypeScript, and Tailwind. Standout testing strategy: 95% unit, 100% E2E with Playwright, including accessibility tests. Magic link authentication.',
    },
    highlights: {
      pt: [
        '95% cobertura unitária + 100% E2E com Playwright',
        'Autenticação via magic link (sem senha)',
        'Monorepo com API + Frontend integrados',
      ],
      en: [
        '95% unit coverage + 100% E2E with Playwright',
        'Magic link authentication (passwordless)',
        'Monorepo with integrated API + Frontend',
      ],
    },
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Vitest', 'Playwright'],
    github: 'https://github.com/rafaumeu/pizza-shop',
    demo: 'https://pizza-shop-five-sigma.vercel.app',
    stars: 2,
    featured: false,
    profiles: ['frontend', 'fullstack'],
    metrics: { coverage: '95% unit / 100% E2E' },
  },
  {
    id: 'forum',
    title: 'Forum DDD',
    subtitle: {
      pt: 'Referência de DDD + Clean Architecture',
      en: 'DDD + Clean Architecture Reference',
    },
    description: {
      pt: 'Camada de domínio pura implementando Domain-Driven Design com entidades, value objects, aggregate roots e domain events. Error handling funcional com Either pattern. Referência de arquitetura.',
      en: 'Pure domain layer implementing Domain-Driven Design with entities, value objects, aggregate roots, and domain events. Functional error handling with Either pattern. Architecture reference.',
    },
    highlights: {
      pt: [
        'DDD puro: Entities, Value Objects, Aggregate Roots, Domain Events',
        'Error handling funcional com Either (functional programming)',
        '95%+ cobertura com Vitest',
      ],
      en: [
        'Pure DDD: Entities, Value Objects, Aggregate Roots, Domain Events',
        'Functional error handling with Either pattern',
        '95%+ coverage with Vitest',
      ],
    },
    techStack: ['TypeScript', 'Node.js', 'Prisma', 'Vitest'],
    github: 'https://github.com/rafaumeu/forum',
    stars: 0,
    featured: false,
    profiles: ['backend', 'fullstack'],
    metrics: { coverage: '95%+' },
  },
  {
    id: 'inorbit-api',
    title: 'InOrbit API',
    subtitle: {
      pt: 'API REST de Alta Performance',
      en: 'High-Performance REST API',
    },
    description: {
      pt: 'API REST de alta performance para rastreamento de metas semanais. Fastify 5 com Drizzle ORM, PostgreSQL, autenticação JWT, documentação Swagger automática e Docker para deployment.',
      en: 'High-performance REST API for weekly goal tracking. Fastify 5 with Drizzle ORM, PostgreSQL, JWT authentication, auto-generated Swagger docs, and Docker deployment.',
    },
    highlights: {
      pt: [
        'Fastify 5 — um dos frameworks Node.js mais rápidos',
        'Drizzle ORM com type-safe queries e migrations',
        'Swagger automático + validação Zod em todas as rotas',
      ],
      en: [
        'Fastify 5 — one of the fastest Node.js frameworks',
        'Drizzle ORM with type-safe queries and migrations',
        'Auto-generated Swagger + Zod validation on all routes',
      ],
    },
    techStack: [
      'Fastify',
      'TypeScript',
      'Drizzle ORM',
      'PostgreSQL',
      'JWT',
      'Swagger',
      'Docker',
    ],
    github: 'https://github.com/rafaumeu/inorbit-api',
    stars: 1,
    featured: false,
    profiles: ['backend'],
  },
];

export function getProjectsByProfile(
  profile: ProfileType,
  locale: string
): (ProjectData & {
  localizedSubtitle: string;
  localizedDescription: string;
  localizedHighlights: string[];
})[] {
  const lang = locale.startsWith('pt') ? 'pt' : 'en';

  return projects
    .filter((p) => p.profiles.includes(profile))
    .sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return b.stars - a.stars;
    })
    .map((p) => ({
      ...p,
      localizedSubtitle: p.subtitle[lang as 'pt' | 'en'],
      localizedDescription: p.description[lang as 'pt' | 'en'],
      localizedHighlights: p.highlights[lang as 'pt' | 'en'],
    }));
}
