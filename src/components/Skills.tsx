import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { SkillCategory } from './SkillCategory';
import { CertificationList } from './CertificationList';
import { LanguageList } from './LanguageList';
import { Skills as SkillsType, Certification, Language, ProfileType } from '@/types/cv';

interface SkillsProps {
  skills: SkillsType;
  certifications: Certification[];
  profile: ProfileType;
  languages: Language[];
}

export const Skills: React.FC<SkillsProps> = React.memo(({
  skills,
  certifications,
  languages,
  profile
}) => {
  const renderSkillCategory = useCallback((category: string, skillList: string[]) => {
    const categoryId = category === 'currentlyLearning' 
      ? `skills.${category}`
      : `skills.category.${category}`;
      
    if (!Array.isArray(skillList)) {
      console.warn(`Skills para categoria ${category} não é um array`);
      return null;
    }
    
    return (
      <SkillCategory 
        key={category} 
        title={<FormattedMessage id={categoryId} />} 
        skills={skillList} 
      />
    );
  }, []);

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">
        <FormattedMessage id="skills.title" />
      </h2>
      
      <div className="space-y-6">
        {Object.entries(skills).map(([category, skillList]) => 
          renderSkillCategory(category, skillList)
        )}
        
        <CertificationList certifications={certifications} profile={profile} />
        <LanguageList languages={languages} />
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';

export default Skills;