export const SKILL_CATEGORIES = {
  LANGUAGES: 'languages',
  FRONTEND: 'frontend',
  BACKEND: 'backend',
  DATABASE: 'database',
  TESTING: 'testing',
  TOOLS: 'tools',
  CLOUD: 'cloud',
} as const;

export const SKILLS = {
  [SKILL_CATEGORIES.LANGUAGES]: ['TypeScript', 'JavaScript', 'Python'],
  [SKILL_CATEGORIES.FRONTEND]: ['React', 'Next.js', 'TailwindCSS', 'Radix UI', 'React Query'],
  [SKILL_CATEGORIES.BACKEND]: ['Node.js', 'Express', 'NestJS', 'Fastify'],
  [SKILL_CATEGORIES.DATABASE]: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Drizzle'],
  [SKILL_CATEGORIES.TESTING]: ['Jest', 'Vitest', 'React Testing Library'],
  [SKILL_CATEGORIES.TOOLS]: ['Git', 'Docker', 'ESLint'],
  [SKILL_CATEGORIES.CLOUD]: ['Vercel', 'AWS', 'Digital Ocean'],
} as const;

export type SkillCategory = keyof typeof SKILLS;
export type Skill = typeof SKILLS[SkillCategory][number]; 