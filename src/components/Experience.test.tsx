import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Experience } from './Experience'
import { IntlProvider } from 'react-intl'

const messages = {
  'experience.title': 'Experiência Profissional',
  'experience.role.frontend': 'Desenvolvedor Frontend',
  'experience.company.teleperformance': 'Teleperformance',
  'experience.period.teleperformance': '2023 - Presente',
  'experience.location.teleperformance': 'Remoto',
  'experience.achievements.frontend.1': 'Conquista 1',
  'skills.reactjs': 'React.js',
  'skills.typescript': 'TypeScript'
}

describe('Experience', () => {
  const renderWithIntl = (ui: React.ReactNode) => {
    return render(
      <IntlProvider messages={messages} locale="pt-BR" defaultLocale="pt-BR">
        {ui}
      </IntlProvider>
    )
  }

  const mockExperiences = [{
    role: 'experience.role.frontend',
    company: 'experience.company.teleperformance',
    period: 'experience.period.teleperformance',
    location: 'experience.location.teleperformance',
    achievements: ['experience.achievements.frontend.1'],
    skills: ['skills.reactjs', 'skills.typescript']
  }]

  it('should render experience section', () => {
    renderWithIntl(<Experience experiences={mockExperiences} />)
    
    expect(screen.getByText('Experiência Profissional')).toBeInTheDocument()
    expect(screen.getByText('Desenvolvedor Frontend')).toBeInTheDocument()
    expect(screen.getByText('Teleperformance')).toBeInTheDocument()
    expect(screen.getByText('2023 - Presente')).toBeInTheDocument()
    expect(screen.getByText('Remoto')).toBeInTheDocument()
  })

  it('should render achievements', () => {
    renderWithIntl(<Experience experiences={mockExperiences} />)
    expect(screen.getByText('Conquista 1')).toBeInTheDocument()
  })

  it('should render skills', () => {
    renderWithIntl(<Experience experiences={mockExperiences} />)
    
    expect(screen.getByText('React.js')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })
}) 