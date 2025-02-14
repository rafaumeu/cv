import React from 'react';

interface PrintLayoutProps {
  children: React.ReactNode;
}

export const PrintLayout: React.FC<PrintLayoutProps> = () => {
  return (
    <div className="print:flex print:flex-row print:gap-2">
      <main className="print:w-[70%] print:pr-2">
        <div id="header" className="print-section print:mb-2" />
        <div id="summary" className="print-section print:mb-2" />
        <div id="experience" className="print-section print:mb-2" />
        <div id="projects" className="print-section print:mb-2" />
      </main>
      
      <aside className="print:w-[30%] print:pl-2 print:border-l print:border-gray-200">
        <div id="skills" className="print-section print:mb-2" />
        <div id="education" className="print-section print:mb-2" />
        <div id="certifications" className="print-section print:mb-2" />
        <div id="languages" className="print-section print:mb-2" />
      </aside>

      {/* Keywords ocultas para ATS */}
      <div className="ats-keywords" aria-hidden="true">
        node.js express.js nestjs fastify postgresql mongodb redis jwt oauth backend-development sql nosql api-rest clean-architecture ddd docker comunicação-efetiva trabalho-em-equipe feedback continuous-learning
      </div>
    </div>
  );
}; 