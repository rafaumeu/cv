import { Header } from '@/components/Header';
import { Summary } from '@/components/Summary';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { education, experiences, projects, skills, certifications, languages } from '@/data/cv-data';
import { LanguageProvider } from '@/i18n/LanguageContext';

const CV = () => {
  return (
    <LanguageProvider>
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-white text-gray-800">
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
    </LanguageProvider>
  );
};

export default CV;