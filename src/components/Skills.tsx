import React from 'react';
import { SkillCategory } from './SkillCategory';
import { CertificationList } from './CertificationList';
import { LanguageList } from './LanguageList';
import { Skills as SkillsType, Certification, Language } from '@/types/cv';

interface SkillsProps {
  skills: SkillsType;
  certifications: Certification[];
  languages: Language[];
}

export const Skills: React.FC<SkillsProps> = ({
  skills,
  certifications,
  languages,
}) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4">Skills & Qualifications</h2>
    
    <div className="space-y-6">
      {Object.entries(skills).map(([category, skillList]) => (
        <SkillCategory key={category} title={category} skills={skillList} />
      ))}
      
      <CertificationList certifications={certifications} />
      <LanguageList languages={languages} />
    </div>
  </section>
);