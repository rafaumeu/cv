import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ProjectCard } from './ProjectCard'
import { IntlProvider } from 'react-intl'
import { ThemeProvider } from '@/providers/ThemeProvider'

const messages = {
  'projects.link.tooltip': 'Abrir projeto em nova aba',
  'projects.github.tooltip': 'Ver código no GitHub',
  'projects.skillsLabel': 'Tecnologias:',
  'projects.highlightsLabel': 'Destaques:',
  'skills.reactjs': 'React.js',
  'skills.typescript': 'TypeScript'
}

describe('ProjectCard', () => {
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
    link: 'https://demo.com'
  }

  it('should render project details', () => {
    renderWithProviders(<ProjectCard {...mockProject} />)
    
    expect(screen.getByText('Projeto Teste')).toBeInTheDocument()
    expect(screen.getByText('Descrição do projeto')).toBeInTheDocument()
  })

  it('should render project skills', () => {
    renderWithProviders(<ProjectCard {...mockProject} />)
    
    expect(screen.getByText('Tecnologias:')).toBeInTheDocument()
    expect(screen.getByText('React.js')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  it('should render project highlights', () => {
    renderWithProviders(<ProjectCard {...mockProject} />)
    
    expect(screen.getByText('Destaques:')).toBeInTheDocument()
    expect(screen.getByText('Feature 1')).toBeInTheDocument()
    expect(screen.getByText('Feature 2')).toBeInTheDocument()
  })

  it('should render project links', () => {
    renderWithProviders(<ProjectCard {...mockProject} />)
    
    const demoLink = screen.getByRole('link', { name: /abrir projeto em nova aba/i })
    const githubLink = screen.getByRole('link', { name: /ver código no github/i })
    
    expect(demoLink).toHaveAttribute('href', 'https://demo.com')
    expect(githubLink).toHaveAttribute('href', 'https://github.com/user/repo')
    expect(demoLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('target', '_blank')
  })
}) 