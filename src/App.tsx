import { Header } from '@/components/Header';
import { Summary } from '@/components/Summary';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { education, experiences, projects, skills, certifications, languages } from '@/data/cv-data';
import { LanguageProvider } from '@/i18n/LanguageContext';
import { ThemeProvider } from '@/hooks/theme';
import { MainLayout } from '@/layouts/MainLayout';

const CV = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-text transition-colors duration-200">
          <MainLayout>
            <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-card rounded-lg shadow-lg">
              <Header />
              <div className="space-y-6 sm:space-y-8">
                <Summary />
                <Education education={education} />
                <Experience experiences={experiences} />
                <Projects projects={projects} />
                <Skills 
                  skills={skills}
                  certifications={certifications}
                  languages={languages}
                />
              </div>
            </div>
          </MainLayout>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default CV;