import { Repository } from '@/types/github';
import { RESERVED_WORDS, ReservedWord } from './reservedWords';
import { commonTechTerms } from '@/i18n/techTerms';

const commonTechTerms: Record<string, Record<string, string>> = {
  'pt-BR': {
    'api': 'API',
    'rest': 'REST',
    'crud': 'CRUD',
    'authentication': 'autenticação',
    'authorization': 'autorização',
    'database': 'banco de dados',
    'testing': 'testes',
    'frontend': 'frontend',
    'backend': 'backend',
    'fullstack': 'fullstack',
    'responsive': 'responsivo',
    'design': 'design',
    'development': 'desenvolvimento',
    'web': 'web',
    'application': 'aplicação',
    'project': 'projeto',
    'management': 'gerenciamento',
    'system': 'sistema',
    'built': 'construído',
    'with': 'com',
    'using': 'usando',
    'and': 'e',
    'for': 'para',
    'in': 'em',
    'the': 'o',
    'a': 'uma',
    'an': 'um',
    'simple': 'simples',
    'modern': 'moderno',
    'fast': 'rápido',
    'easy': 'fácil',
    'powerful': 'poderoso',
    'scalable': 'escalável',
    'clean': 'limpo',
    'code': 'código',
    'based': 'baseado',
    'template': 'modelo',
    'boilerplate': 'boilerplate',
    'starter': 'inicial',
    'kit': 'kit',
    'tool': 'ferramenta',
    'tools': 'ferramentas',
    'package': 'pacote',
    'library': 'biblioteca',
    'framework': 'framework'
  },
  'en-US': {
    // termos em inglês permanecem iguais
  }
};

const additionalTerms: Record<string, Record<string, string>> = {
  'pt-BR': {
    // Termos específicos
    'gamified': 'gamificada',
    'platform': 'plataforma',
    'transforms': 'transforma',
    'learning': 'aprendizado',
    'experience': 'experiência',
    'features': 'possui',
    'points': 'pontos',
    'achievements': 'conquistas',
    'rewards': 'recompensas',
    'to': 'para',
    'motivate': 'motivar',
    'students': 'estudantes',
    'while': 'enquanto',
    'maintaining': 'mantém',
    'spiritual': 'espiritual',
    'focus': 'foco',
    'built': 'construída',
    'with': 'com',
    
    // Estruturas comuns
    'that': 'que',
    'into': 'em',
    'an': 'uma',
    'and': 'e',
    'or': 'ou',
    'of': 'de',
    'by': 'por',
    'from': 'de',
    'through': 'através',
    'using': 'usando',
    'based': 'baseado',
    'on': 'em'
  }
};

export const sanitizeDescription = (description: string | null): string => {
  if (!description) return '';
  
  const withoutEmojis = description.replace(
    /[\u{1F000}-\u{1F9FF}]|\p{Emoji_Presentation}|\p{Extended_Pictographic}/gu, 
    ''
  );
  
  // Preserva palavras reservadas e nomes próprios
  let translatedDesc = withoutEmojis;
  RESERVED_WORDS.forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    translatedDesc = translatedDesc.replace(regex, `__${word}__`);
  });
  
  // Traduz o texto preservando a estrutura
  const words = translatedDesc.split(/\s+/);
  const translatedWords = words.map(word => {
    // Mantém palavras reservadas
    if (word.startsWith('__') && word.endsWith('__')) {
      return word.slice(2, -2);
    }
    
    // Procura no dicionário expandido
    const normalized = word.toLowerCase();
    return additionalTerms['pt-BR'][normalized] || 
           commonTechTerms['pt-BR'][normalized] || 
           word;
  });
  
  return translatedWords
    .join(' ')
    .replace(/\s+/g, ' ')
    .replace(/\s+([.,!?])/g, '$1') // Corrige pontuação
    .trim();
};

export const translateTechTerm = (term: string, locale: string): string => {
  if (!term || locale === 'en-US') return term;
  
  const terms = commonTechTerms[locale];
  if (!terms) return term;

  const normalized = term.toLowerCase();
  return terms[normalized] || term;
};

export const autoTranslateDescription = (description: string, locale: string): string => {
  if (!description || locale === 'en-US') return description;

  const cleanDescription = sanitizeDescription(description);
  const words = cleanDescription.split(/(\s+|\b)/);
  
  return words
    .map(word => {
      if (/^\s+$/.test(word) || /^[.,!?;:]$/.test(word)) return word;
      
      return translateTechTerm(word.toLowerCase(), locale);
    })
    .join('')
    .replace(/\s+/g, ' ')
    .trim();
}; 