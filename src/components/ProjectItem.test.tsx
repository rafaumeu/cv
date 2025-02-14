import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ProjectItem } from './ProjectItem'
import { IntlProvider } from 'react-intl'
import { ThemeProvider } from '@/providers/ThemeProvider'

const messages = {
  'projects.link.tooltip': 'Abrir projeto em nova aba',
  'projects.github.tooltip': 'Ver código no GitHub',
  'projects.skillsLabel': 'Tecnologias:',
  'projects.highlightsLabel': 'Destaques:',
  'projects.star.tooltip': 'Ver pessoas que deram estrela',
  'projects.star.empty': 'Seja o primeiro a dar uma estrela!',
  'skills.reactjs': 'React.js',
  'skills.typescript': 'TypeScript'
}

describe('ProjectItem', () => {
  const renderWithProviders = (ui: React.ReactNode) => {
    return render(
      <ThemeProvider>
        <IntlProvider messages={messages} locale="pt-BR" defaultLocale="pt-BR">
          {ui}
        </IntlProvider>
      </ThemeProvider>
    )
  }

  const mockProject = {
    title: 'Projeto Teste',
    description: 'Descrição do projeto',
    skills: ['skills.reactjs', 'skills.typescript'],
    highlights: ['Feature 1', 'Feature 2'],
    github: 'https://github.com/user/repo',
    link: 'https://demo.com',
    stars: 10,
    updatedAt: '2024-03-20'
  }

  it('should render project details', () => {
    renderWithProviders(<ProjectItem {...mockProject} />)
    
    expect(screen.getByText('Projeto Teste')).toBeInTheDocument()
    expect(screen.getByText('Descrição do projeto')).toBeInTheDocument()
    expect(screen.getByText('React.js')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  it('should render links correctly', () => {
    renderWithProviders(<ProjectItem {...mockProject} />)
    
    const demoLink = screen.getByRole('link', { name: /abrir projeto em nova aba/i })
    const githubLink = screen.getByRole('link', { name: /ver código no github/i })
    
    expect(demoLink).toHaveAttribute('href', 'https://demo.com')
    expect(githubLink).toHaveAttribute('href', 'https://github.com/user/repo')
  })

  it('should render highlights', () => {
    renderWithProviders(<ProjectItem {...mockProject} />)
    
    expect(screen.getByText('Destaques:')).toBeInTheDocument()
    expect(screen.getByText('Feature 1')).toBeInTheDocument()
    expect(screen.getByText('Feature 2')).toBeInTheDocument()
  })

  it('should render star count', () => {
    renderWithProviders(<ProjectItem {...mockProject} />)
    
    expect(screen.getByText('10')).toBeInTheDocument()
  })

  it('should not render demo link when same as github', () => {
    const projectWithoutDemo = {
      ...mockProject,
      link: mockProject.github
    }
    
    renderWithProviders(<ProjectItem {...projectWithoutDemo} />)
    
    expect(screen.queryByRole('link', { name: /abrir projeto em nova aba/i })).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: /ver código no github/i })).toBeInTheDocument()
  })
}) 