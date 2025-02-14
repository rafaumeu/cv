export const RESERVED_WORDS = [
  // Tecnologias
  'Next.js', 'TypeScript', 'React', 'Node.js', 'Fastify', 'SQL',
  'OAuth', 'API', 'UI', 'CSS', 'HTML', 'REST', 'GraphQL',
  'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Git',
  'Prisma', 'TailwindCSS', 'Radix UI', 'Design System',
  
  // Serviços
  'Google Calendar',
  
  // Nomes de Projetos
  'BudgetBuddy', 'Ignite Call',
  
  // Termos técnicos
  'frontend', 'backend', 'fullstack', 'hooks', 'props', 'state',
  'components', 'routing', 'authentication', 'authorization'
] as const;

export type ReservedWord = typeof RESERVED_WORDS[number]; 