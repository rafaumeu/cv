import { SKILLS, Skill } from '@/constants/skills';

export const validateSkills = (skills: string[]): {
  valid: boolean;
  invalidSkills: string[];
  suggestions: Record<string, Skill[]>;
} => {
  const allSkills = Object.values(SKILLS).flat();
  const invalidSkills: string[] = [];
  const suggestions: Record<string, Skill[]> = {};

  skills.forEach(skill => {
    if (!allSkills.includes(skill as Skill)) {
      invalidSkills.push(skill);
      
      // Encontra sugestões similares
      suggestions[skill] = allSkills.filter(validSkill => 
        validSkill.toLowerCase().includes(skill.toLowerCase()) ||
        skill.toLowerCase().includes(validSkill.toLowerCase())
      );
    }
  });

  return {
    valid: invalidSkills.length === 0,
    invalidSkills,
    suggestions
  };
}; 