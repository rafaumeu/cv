import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Summary } from '@/components/Summary';
import { LanguageProvider } from '@/i18n/LanguageContext';
import { ThemeProvider } from '@/hooks/theme';
import { MainLayout } from '@/layouts/MainLayout';
import { LanguageTitle } from '@/components/LanguageTitle';
import '@/styles/print.css';

// Lazy loading dos componentes mais pesados
const Education = React.lazy(() => import('@/components/Education'));
const Experience = React.lazy(() => import('@/components/Experience'));
const Projects = React.lazy(() => import('@/components/Projects'));
const Skills = React.lazy(() => import('@/components/Skills'));

import { education, experiences, projects, skills, certifications, languages } from '@/data/cv-data';

const CV = React.memo(() => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <LanguageTitle />
          <div className="min-h-screen bg-background text-text transition-colors duration-200">
            <MainLayout>
              <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-card rounded-lg shadow-lg">
                <Header />
                <div className="space-y-6 sm:space-y-8">
                  <Summary />
                  <Suspense fallback={<div>Carregando...</div>}>
                    <Education education={education} />
                    <Experience experiences={experiences} />
                    <Projects projects={projects} />
                    <Skills 
                      skills={skills}
                      certifications={certifications}
                      languages={languages}
                    />
                  </Suspense>
                </div>
              </div>
            </MainLayout>
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
});

CV.displayName = 'CV';

export default CV;