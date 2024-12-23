import React from 'react';
import { Header } from '@/components/Header';
import { Summary } from '@/components/Summary';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { education, experiences, projects, skills, certifications, languages } from '@/data/cv-data';

const CV = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800">
      <Header />
      
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
  );
};

export default CV;