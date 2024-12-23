import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export const Header = () => (
  <header className="mb-8 text-center">
    <h1 className="text-4xl font-bold text-gray-900">Rafael Dias Zendron</h1>
    <h2 className="text-xl text-blue-600">Full Stack Developer Student</h2>
    <div className="flex justify-center gap-4 mt-4 text-gray-600">
      <a 
        href="https://linkedin.com/in/rafael-dias-zendron-528290132" 
        className="flex items-center gap-1 hover:text-blue-600 transition-colors"
      >
        <Linkedin size={18} /> LinkedIn
      </a>
      <a 
        href="https://github.com/rafaumeu" 
        className="flex items-center gap-1 hover:text-blue-600 transition-colors"
      >
        <Github size={18} /> GitHub
      </a>
      <a 
        href="mailto:rafael.zendron22@gmail.com" 
        className="flex items-center gap-1 hover:text-blue-600 transition-colors"
      >
        <Mail size={18} /> Email
      </a>
    </div>
  </header>
);