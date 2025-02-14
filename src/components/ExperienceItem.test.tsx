import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ExperienceItem } from './ExperienceItem'
import { IntlProvider } from 'react-intl'

const messages = {
  'skills.reactjs': 'React.js',
  'skills.typescript': 'TypeScript',
  'experience.role.frontend': 'Desenvolvedor Frontend',
  'experience.company.test': 'Empresa Teste',
  'experience.period.test': '2023 - Presente',
  'experience.location.test': 'Remoto',
  'experience.achievements.test': 'Conquista teste'
}

describe('ExperienceItem', () => {
  const renderWithIntl = (ui: React.ReactNode) => {
    return render(
      <IntlProvider messages={messages} locale="pt-BR" defaultLocale="pt-BR">
        {ui}
      </IntlProvider>
    )
  }

  const mockExperience = {
    role: 'experience.role.frontend',
    company: 'experience.company.test',
    period: 'experience.period.test',
    location: 'experience.location.test',
    achievements: ['experience.achievements.test'],
    skills: ['skills.reactjs', 'skills.typescript']
  }

  it('should render experience details', () => {
    renderWithIntl(<ExperienceItem {...mockExperience} />)
    
    expect(screen.getByText('Desenvolvedor Frontend')).toBeInTheDocument()
    expect(screen.getByText('Empresa Teste')).toBeInTheDocument()
    expect(screen.getByText('2023 - Presente')).toBeInTheDocument()
    expect(screen.getByText('Remoto')).toBeInTheDocument()
  })

  it('should render achievements', () => {
    renderWithIntl(<ExperienceItem {...mockExperience} />)
    expect(screen.getByText('Conquista teste')).toBeInTheDocument()
  })

  it('should render skills', () => {
    renderWithIntl(<ExperienceItem {...mockExperience} />)
    
    expect(screen.getByText('React.js')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })
}) 