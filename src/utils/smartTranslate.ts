import { translationTemplates } from './translationTemplates';
import { RESERVED_WORDS } from './reservedWords';
import { sanitizeDescription } from './github';

interface TranslationContext {
  projectType?: 'app' | 'api' | 'library' | 'platform' | 'backend' | 'frontend' | 'template' | 'system';
  mainTech?: string[];
  features?: string[];
}

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

export const smartTranslate = (
  description: string, 
  locale: 'pt-BR' | 'en-US',
  metrics?: { stars: number; language: string }
): string => {
  if (!description) return '';
  
  const clean = sanitizeDescription(description);
  if (locale === 'en-US') return clean;
  
  const context = analyzeDescription(clean, metrics);
  let translated = '';

  // Templates específicos mais fiéis
  if (clean.includes('gamified')) {
    translated = 'Uma plataforma gamificada que transforma a Escola Sabatina em uma experiência de aprendizado envolvente. Possui pontos, conquistas e recompensas para motivar estudantes enquanto mantém o foco espiritual';
  } else if (clean.includes('scheduling')) {
    translated = 'Um aplicativo de agendamento construído com Next.js e TypeScript. Oferece atualizações de disponibilidade em tempo real, agendamento inteligente, integração com Google Calendar, interface elegante, Design System personalizado e autenticação OAuth segura para uma experiência de agendamento suave e eficiente';
  } else if (clean.includes('transaction')) {
    translated = 'Um gerenciador de transações pessoais que ajuda usuários a acompanhar suas finanças de forma simples e efetiva. Recursos principais: Criação de Transações (créditos e débitos), Resumo de Conta para decisões financeiras informadas, Listagem de Transações e Visualização de Transação Específica';
  } else if (clean.includes('template')) {
    translated = 'Um template React moderno alimentado por Vite e TypeScript, com suporte a internacionalização, componentes de UI responsivos e ferramentas amigáveis para desenvolvedores. Inclui TailwindCSS para estilização, ícones Lucide e configuração abrangente do ESLint. Perfeito para construir aplicações web escaláveis com as melhores práticas';
  } else if (clean.includes('Design System')) {
    translated = 'Design System modular construído com TypeScript e ESLint. Perfeito para criar UIs consistentes e escaláveis entre aplicações';
  } else if (clean.includes('high-performance backend')) {
    translated = 'InOrbit é um backend de alta performance construído com TypeScript, Fastify e PostgreSQL. ' +
      'Possui Drizzle ORM, autenticação JWT e integração com Docker, garantindo implantação contínua e escalabilidade. ' +
      'A plataforma oferece gerenciamento eficiente de dados, autenticação e acompanhamento de metas para uma experiência aprimorada do usuário!';
  } else if (clean.includes('Modern goal tracking')) {
    translated = 'InOrbit: Sistema moderno de acompanhamento de metas construído com React + TypeScript + Vite + TailwindCSS. ' +
      'Transforme suas aspirações em conquistas com uma aplicação elegante, performática e type-safe projetada para o futuro.';
  } else {
    translated = `${clean.split(' ')[0]} é ${getProjectTypeText(context.projectType)}`;
  }

  // Adiciona tecnologias se ainda não foram mencionadas
  const technologies = Array.from(new Set(context.mainTech))
    .filter(tech => !translated.toLowerCase().includes(tech.toLowerCase()));
  
  if (technologies.length > 0) {
    translated += `. Construíd${context.projectType === 'platform' ? 'a' : 'o'} com ${formatTechnologies(technologies)}`;
  }

  // Adiciona features específicas
  if (clean.includes('features') || clean.includes('offers')) {
    const features = [];
    
    if (clean.includes('real-time')) features.push('atualizações em tempo real');
    if (clean.includes('Google Calendar')) features.push('integração com Google Calendar');
    if (clean.includes('OAuth')) features.push('autenticação OAuth segura');
    if (clean.includes('tracking')) features.push('acompanhamento de metas');
    if (clean.includes('scalability')) features.push('alta escalabilidade');
    if (clean.includes('Docker')) features.push('integração com Docker');
    
    if (features.length > 0) {
      translated += `. Oferece ${formatTechnologies(features)}`;
    }
  }

  // Adiciona métricas
  if (context.metrics) {
    const metricParts = [];
    
    if (context.metrics.stars && context.metrics.stars > 0) {
      metricParts.push(`⭐ ${context.metrics.stars} stars`);
    }
    
    if (context.metrics.language) {
      metricParts.push(`Principal: ${context.metrics.language}`);
    }
    
    if (metricParts.length > 0) {
      translated += ` (${metricParts.join(' | ')})`;
    }
  }

  return translated.trim() + '.';
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

const formatTechnologies = (techs: string[]): string => {
  if (techs.length === 0) return '';
  if (techs.length === 1) return techs[0];
  
  const lastTech = techs.pop();
  return `${techs.join(', ')} e ${lastTech}`;
};

const translateTechnicalDescription = (description: string, locale: 'pt-BR' | 'en-US'): string => {
  if (locale === 'en-US') return description;
  
  const clean = sanitizeDescription(description);
  const template = projectTemplates[locale].technical;
  
  // Exemplo para o InOrbit:
  return `InOrbit é uma aplicação backend desenvolvida com TypeScript, Fastify e PostgreSQL. 
          A plataforma utiliza Drizzle ORM para gerenciamento de dados, possui autenticação JWT 
          e integração com Docker, garantindo implantação simplificada e alta escalabilidade. 
          Oferece gerenciamento eficiente de dados, autenticação segura e acompanhamento de metas 
          para uma melhor experiência do usuário.`;
}; 