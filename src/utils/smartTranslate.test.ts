import { describe, it, expect } from 'vitest';
import { smartTranslate } from './smartTranslate';




describe('smartTranslate', () => {
  describe('Filtragem de Projetos Backend', () => {
    it('deve retornar string vazia para projetos backend no perfil frontend', () => {
      const result = smartTranslate('Uma API REST para gerenciamento de transações', {
        profile: 'frontend',
        repoName: 'pocket-api',
        topics: ['api', 'rest', 'nodejs']
      });
      
      expect(result).toBe('');
    });

    it('deve manter projetos backend para perfil backend', () => {
      const result = smartTranslate('Uma API REST para gerenciamento de transações', {
        profile: 'backend',
        repoName: 'pocket-api',
        topics: ['api', 'rest', 'nodejs']
      });
      
      expect(result).not.toBe('');
      expect(result).toContain('gerenciamento de transações');
    });

    it('deve identificar projetos backend por palavras-chave no nome', () => {
      const cases = [
        'api-example',
        'my-server',
        'auth-service',
        'pocket-backend',
        'graphql-api'
      ];

      cases.forEach(repoName => {
        const result = smartTranslate('Descrição qualquer', {
          profile: 'frontend',
          repoName,
          topics: []
        });
        
        expect(result).toBe('');
      });
    });
  });

  describe('Traduções Específicas', () => {
    it('deve traduzir corretamente projetos de transações', () => {
      const result = smartTranslate(
        'A personal transaction manager that helps users track their finances effectively',
        {}
      );
      
      expect(result).toContain('gerenciador de transações pessoais');
      expect(result).toContain('acompanhar suas finanças');
    });

    it('deve traduzir corretamente templates', () => {
      const result = smartTranslate(
        'A modern React template with TypeScript and Vite',
        {}
      );
      
      expect(result).toContain('template React moderno');
      expect(result).toContain('TypeScript');
      expect(result).toContain('Vite');
    });

    it('deve traduzir corretamente design systems', () => {
      const result = smartTranslate(
        'Modular Design System built with TypeScript',
        {}
      );
      
      expect(result).toContain('Design System modular');
      expect(result).toContain('TypeScript');
    });
  });

  describe('Limpeza de Texto', () => {
    it('deve remover informações técnicas do final', () => {
      const cases = [
        'Projeto legal (10 stars | Principal: TypeScript)',
        'App incrível | Principal: JavaScript',
        'Sistema massa Construído com Node.js'
      ];

      cases.forEach(description => {
        const result = smartTranslate(description, {});
        expect(result).not.toContain('stars');
        expect(result).not.toContain('Principal:');
        expect(result).not.toContain('Construído com');
      });
    });
  });

  describe('Adição de Tecnologias', () => {
    it('deve adicionar tecnologias relevantes ao final', () => {
      const result = smartTranslate('Um projeto legal', {
        mainTech: ['TypeScript', 'React', 'Node.js']
      });
      
      expect(result).toContain('Tecnologias:');
      expect(result).toContain('TypeScript');
      expect(result).toContain('React');
      expect(result).toContain('Node.js');
    });

    it('não deve duplicar tecnologias já mencionadas', () => {
      const result = smartTranslate(
        'Um projeto React com TypeScript',
        {
          mainTech: ['React', 'TypeScript', 'Vite']
        }
      );
      
      expect(result.match(/React/g)?.length).toBe(1);
      expect(result.match(/TypeScript/g)?.length).toBe(1);
      expect(result).toContain('Vite');
    });
  });

  describe('Tratamento de Entradas Inválidas', () => {
    it('deve lidar com arrays de tecnologias vazios', () => {
      const result = smartTranslate('Um projeto legal', {
        mainTech: []
      });
      
      expect(result).not.toContain('Tecnologias:');
    });

    it('deve lidar com descrição vazia', () => {
      const result = smartTranslate('', {});
      expect(result).toBe('');
    });

    it('deve lidar com tópicos undefined', () => {
      const result = smartTranslate('Descrição teste', {
        profile: 'frontend',
        repoName: 'test-repo'
      });
      
      expect(typeof result).toBe('string');
    });
  });
}); 