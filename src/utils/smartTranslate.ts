import { RESERVED_WORDS } from './reservedWords';

interface TranslationContext {
  projectType?: 'app' | 'api' | 'library' | 'platform' | 'backend' | 'frontend' | 'template' | 'system';
  mainTech?: string[];
  features?: string[];
  metrics?: { 
    stars: number; 
    language: string;
  };
}

// Palavras-chave que indicam projeto backend
const BACKEND_KEYWORDS = [
  'api',
  'server',
  'backend',
  'service',
  'pocket',
  'auth',
  'database',
  'graphql'
];

const isBackendProject = (name: string, description: string, topics: string[]): boolean => {
  const lowerName = name.toLowerCase();
  const lowerDesc = description.toLowerCase();
  
  return BACKEND_KEYWORDS.some(keyword => 
    lowerName.includes(keyword) ||
    lowerDesc.includes(keyword) ||
    topics.some(topic => topic.toLowerCase().includes(keyword))
  );
};

const analyzeDescription = (description: string, metrics?: { stars: number; language: string }): TranslationContext => {
  const context: TranslationContext = {};
  
  // Detecta o tipo de projeto
  if (description.toLowerCase().includes('template')) {
    context.projectType = 'template';
  } else if (description.toLowerCase().includes('system')) {
    context.projectType = 'system';
  } else if (description.toLowerCase().includes('platform')) {
    context.projectType = 'platform';
  } else if (description.toLowerCase().includes('library')) {
    context.projectType = 'library';
  } else if (description.toLowerCase().includes('backend')) {
    context.projectType = 'backend';
  } else if (description.toLowerCase().includes('app')) {
    context.projectType = 'app';
  }

  // Adiciona métricas
  if (metrics) {
    context.metrics = metrics;
  }

  // Detecta tecnologias
  context.mainTech = RESERVED_WORDS.filter(word => 
    description.toLowerCase().includes(word.toLowerCase())
  );

  // Detecta features
  const featureKeywords = [
    'high-performance', 'real-time', 'scheduling', 'authentication',
    'integration', 'tracking', 'management', 'scalable', 'responsive'
  ];
  
  context.features = featureKeywords.filter(feature =>
    description.toLowerCase().includes(feature.toLowerCase())
  );

  return context;
};

const formatTechList = (techs: string[]): string => {
  if (techs.length === 0) return '';
  if (techs.length === 1) return techs[0];
  
  const lastTech = techs[techs.length - 1];
  return `${techs.slice(0, -1).join(', ')} e ${lastTech}`;
};

export const smartTranslate = (
  description: string,
  context: { 
    stars?: number; 
    language?: string; 
    projectType?: string; 
    mainTech?: string[];
    repoName?: string;
    topics?: string[];
    profile?: 'frontend' | 'backend' | 'fullstack';
  } = {}
): string => {
  if (!description) return '';
  
  // Verifica se é um projeto backend e o perfil é frontend
  if (context.profile === 'frontend' && 
      context.repoName && 
      isBackendProject(context.repoName, description, context.topics || [])) {
    return '';
  }

  const clean = description.trim();
  let translated = '';

  // Remove informações técnicas do final
  const cleanDescription = clean.replace(/\s*\(\s*\d+\s*stars.*$/, '')
    .replace(/\s*\|\s*Principal:.*$/, '')
    .replace(/\s*Construído com.*$/, '')
    .trim();

  if (cleanDescription.includes('transaction')) {
    translated = 'Um gerenciador de transações pessoais que ajuda usuários a acompanhar suas finanças de forma simples e efetiva. Recursos principais: Criação de Transações (créditos e débitos), Resumo de Conta para decisões financeiras informadas, Listagem de Transações e Visualização de Transação Específica.';
  } else if (cleanDescription.includes('template')) {
    translated = 'Um template React moderno alimentado por Vite e TypeScript, com suporte a internacionalização, componentes de UI responsivos e ferramentas amigáveis para desenvolvedores. Inclui TailwindCSS para estilização, ícones Lucide e configuração abrangente do ESLint.';
  } else if (cleanDescription.includes('Design System')) {
    translated = 'Design System modular construído com TypeScript e ESLint. Perfeito para criar UIs consistentes e escaláveis entre aplicações.';
  } else if (cleanDescription.includes('high-performance backend')) {
    translated = 'InOrbit é um backend de alta performance construído com TypeScript, Fastify e PostgreSQL. Possui Drizzle ORM, autenticação JWT e integração com Docker, garantindo implantação contínua e escalabilidade.';
  } else if (cleanDescription.includes('Modern goal tracking')) {
    translated = 'InOrbit: Sistema moderno de acompanhamento de metas construído com React, TypeScript, Vite e TailwindCSS. Transforme suas aspirações em conquistas com uma aplicação elegante e performática.';
  } else if (cleanDescription.includes('gamified')) {
    translated = 'Uma plataforma gamificada que transforma a Escola Sabatina em uma experiência de aprendizado envolvente. Possui pontos, conquistas e recompensas para motivar estudantes enquanto mantém o foco espiritual.';
  } else if (cleanDescription.includes('scheduling')) {
    translated = 'Um aplicativo de agendamento construído com Next.js e TypeScript. Oferece atualizações de disponibilidade em tempo real, agendamento inteligente, integração com Google Calendar, interface elegante e autenticação segura.';
  } else {
    const projectContext = analyzeDescription(cleanDescription);
    translated = `${cleanDescription.split(' ')[0]} é ${getProjectTypeText(projectContext.projectType)}`;
  }

  // Adiciona tecnologias usando a nova função formatTechList
  if (context.mainTech?.length) {
    const techs = Array.from(new Set(context.mainTech))
      .filter(tech => !translated.toLowerCase().includes(tech.toLowerCase()));
    
    if (techs.length) {
      translated += ` Tecnologias: ${formatTechList(techs)}.`;
    }
  }

  return translated;
};

const getProjectTypeText = (type?: string): string => {
  const types: Record<string, string> = {
    'app': 'um aplicativo',
    'platform': 'uma plataforma',
    'system': 'um sistema',
    'template': 'um template',
    'library': 'uma biblioteca',
    'backend': 'uma aplicação backend'
  };
  
  return types[type || ''] || 'uma aplicação';
}; 