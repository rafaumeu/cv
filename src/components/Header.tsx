import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export const Header = () => (
  <header className="mb-8 text-center">
    <h1 className="text-4xl font-bold text-gray-900">Rafael Dias Zendron</h1>
    <h2 className="text-xl text-blue-600">Full Stack Developer Student</h2>
    <p className="text-lg">Phone: +55 11 96489-7587</p>
    <div className="flex flex-col items-center mt-4 text-gray-600">
      <a 
        href="https://linkedin.com/in/rafael-dias-zendron-528290132" 
        className="flex items-center gap-1 hover:text-blue-600 transition-colors"
      >
        <Linkedin size={18} /> 
        <span className="text-sm">https://linkedin.com/in/rafael-dias-zendron-528290132</span>
      </a>
      <a 
        href="https://github.com/rafaumeu" 
        className="flex items-center gap-1 hover:text-blue-600 transition-colors mt-2"
      >
        <Github size={18} /> 
        <span className="text-sm">https://github.com/rafaumeu</span>
      </a>
      <a 
        href="mailto:rafael.zendron22@gmail.com" 
        className="flex items-center gap-1 hover:text-blue-600 transition-colors mt-2"
      >
        <Mail size={18} /> 
        <span className="text-sm">rafael.zendron22@gmail.com</span>
      </a>
    </div>
  </header>
);
