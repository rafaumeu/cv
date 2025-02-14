import React, { Suspense, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Summary } from '@/components/Summary';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import { ThemeProvider } from '@/hooks/theme';
import { MainLayout } from '@/layouts/MainLayout';
import { LanguageTitle } from '@/components/LanguageTitle';
import { type Subject } from '@/types/education';
import '@/styles/print.css';
import { ProfileType } from '@/types/cv';
import { certifications, profiles } from '@/data/cv-data';
import { education } from '@/data/education';
import { languages } from '@/data/languages';



// Lazy loading dos componentes mais pesados
const Education = React.lazy(() => import('@/components/Education').then(module => ({ default: module.Education })));
const Experience = React.lazy(() => import('@/components/Experience').then(module => ({ default: module.Experience })));
const Projects = React.lazy(() => import('@/components/Projects').then(module => ({ default: module.Projects })));
const Skills = React.lazy(() => import('@/components/Skills').then(module => ({ default: module.Skills })));

const CV: React.FC = () => {
  const [profile, setProfile] = useState<ProfileType>('backend');
  
  const handleProfileChange = (newProfile: ProfileType) => {
    setProfile(newProfile);
  };

  const currentProfile = profiles[profile];

  if (!currentProfile) {
    return <div>Carregando...</div>;
  }

  // Validação do tipo das disciplinas
  const validatedEducation = education.map(edu => ({
    ...edu,
    subjects: edu.subjects?.map(sub => ({
      id: sub.id,
      status: sub.status as Subject['status']
    }))
  }));

  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <LanguageTitle profile={profile} />
          <div className="min-h-screen bg-background text-text transition-colors duration-200">
            <MainLayout>
              <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-card rounded-lg shadow-lg print:shadow-none print:p-0">
                <div className="space-y-6 sm:space-y-8 print:space-y-4">
                  <Header profile={profile} onProfileChange={handleProfileChange} />
                  <Summary profile={profile} />
                  <Suspense fallback={<div>Carregando...</div>}>
                    <Experience experiences={currentProfile.experiences} />
                    <Projects profile={profile} />
                    <Skills 
                      skills={currentProfile.skills}
                      certifications={certifications}
                      languages={languages}
                      profile={profile}
                    />
                    <Education education={validatedEducation} />
                  </Suspense>
                </div>
              </div>
            </MainLayout>
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

CV.displayName = 'CurriculumVitae';

export default CV;