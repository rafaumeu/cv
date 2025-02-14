import { Repository } from '@/types/github'

export const formatRepositoryName = (name: string): string => {
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export const sanitizeDescription = (desc: string | null): string => {
  if (!desc) return '';
  
  // Remove emojis e duplicatas de tecnologias
  const cleanDesc = desc
    .replace(/[\u{1F000}-\u{1F9FF}]|\p{Emoji_Presentation}|\p{Extended_Pictographic}/gu, '')
    .replace(/\s+/g, ' ')
    .trim();

  // Remove menções duplicadas de tecnologias
  const techTerms = ['React', 'TypeScript', 'Next.js', 'Node.js'];
  let finalDesc = cleanDesc;
  
  techTerms.forEach(term => {
    const regex = new RegExp(`${term}.*?${term}`, 'gi');
    finalDesc = finalDesc.replace(regex, term);
  });

  return finalDesc;
} 