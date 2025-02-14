import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Skills } from './Skills'
import { IntlProvider } from 'react-intl'

const messages = {
  'skills.title': 'Habilidades',
  'skills.category.frontend': 'Frontend',
  'skills.category.backend': 'Backend',
  'skills.react': 'React',
  'skills.node': 'Node.js',
  'skills.currentlyLearning': 'Aprendendo'
}

const mockSkills = {
  frontend: ['skills.react'],
  backend: ['skills.node'],
  currentlyLearning: ['skills.typescript']
}

interface InvalidSkillsType {
  frontend: string | string[];
}

const invalidSkills: InvalidSkillsType = {
  frontend: 'not-an-array'
};

describe('Skills', () => {
  const renderWithIntl = (ui: React.ReactNode) => {
    return render(
      <IntlProvider messages={messages} locale="pt-BR" defaultLocale="pt-BR">
        {ui}
      </IntlProvider>
    )
  }

  it('should render skills categories', () => {
    renderWithIntl(
      <Skills 
        skills={mockSkills}
        certifications={[]}
        languages={[]}
        profile="frontend"
      />
    )

    expect(screen.getByText('Habilidades')).toBeInTheDocument()
    expect(screen.getByText('Frontend')).toBeInTheDocument()
    expect(screen.getByText('Backend')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
  })

  it('should handle invalid skill list', () => {
    const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    
    renderWithIntl(
      <Skills 
        skills={invalidSkills}
        certifications={[]}
        languages={[]}
        profile="frontend"
      />
    )

    expect(consoleSpy).toHaveBeenCalledWith('Skills para categoria frontend não é um array')
    consoleSpy.mockRestore()
  })

  it('should render currently learning skills correctly', () => {
    renderWithIntl(
      <Skills 
        skills={{ currentlyLearning: ['skills.node'] }}
        certifications={[]}
        languages={[]}
        profile="frontend"
      />
    )

    expect(screen.getByText('Aprendendo')).toBeInTheDocument()
  })
}) 