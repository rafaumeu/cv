import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ExperienceCard } from './ExperienceCard'
import { IntlProvider } from 'react-intl'

const messages = {
  'skills.reactjs': 'React.js',
  'skills.typescript': 'TypeScript'
}

describe('ExperienceCard', () => {
  const renderWithIntl = (ui: React.ReactNode) => {
    return render(
      <IntlProvider messages={messages} locale="pt-BR" defaultLocale="pt-BR">
        {ui}
      </IntlProvider>
    )
  }

  const mockExperience = {
    role: 'Desenvolvedor Frontend',
    company: 'Empresa Teste',
    period: '2023 - Presente',
    location: 'Remoto',
    achievements: ['Conquista 1', 'Conquista 2'],
    skills: ['skills.reactjs', 'skills.typescript']
  }

  it('should render experience details', () => {
    renderWithIntl(<ExperienceCard {...mockExperience} />)
    
    expect(screen.getByText('Desenvolvedor Frontend')).toBeInTheDocument()
    expect(screen.getByText('Empresa Teste')).toBeInTheDocument()
    expect(screen.getByText('2023 - Presente')).toBeInTheDocument()
    expect(screen.getByText('Remoto')).toBeInTheDocument()
  })

  it('should render achievements', () => {
    renderWithIntl(<ExperienceCard {...mockExperience} />)
    
    expect(screen.getByText('Conquista 1')).toBeInTheDocument()
    expect(screen.getByText('Conquista 2')).toBeInTheDocument()
  })

  it('should render skills', () => {
    renderWithIntl(<ExperienceCard {...mockExperience} />)
    
    expect(screen.getByText('React.js')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })
}) 