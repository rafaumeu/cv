import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { SkillCategory } from './SkillCategory'
import { IntlProvider } from 'react-intl'

const messages = {
  'skills.category.frontend': 'Frontend',
  'skills.reactjs': 'React.js',
  'skills.typescript': 'TypeScript'
}

describe('SkillCategory', () => {
  const renderWithIntl = (ui: React.ReactNode) => {
    return render(
      <IntlProvider messages={messages} locale="pt-BR" defaultLocale="pt-BR">
        {ui}
      </IntlProvider>
    )
  }

  const mockSkills: string[] = ['skills.reactjs', 'skills.typescript']

  it('should render category title', () => {
    renderWithIntl(
      <SkillCategory 
        title="skills.category.frontend"
        skills={mockSkills}
      />
    )
    
    expect(screen.getByText('Frontend')).toBeInTheDocument()
  })

  it('should render skills list', () => {
    renderWithIntl(
      <SkillCategory 
        title="skills.category.frontend"
        skills={mockSkills}
      />
    )
    
    expect(screen.getByText('React.js')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  it('should handle empty skills array', () => {
    renderWithIntl(
      <SkillCategory 
        title="skills.category.frontend"
        skills={[] as string[]}
      />
    )
    
    expect(screen.getByText('Frontend')).toBeInTheDocument()
    const skillsList = screen.queryByRole('list')
    expect(skillsList).toBeNull()
  })

  it('should handle invalid skills array', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    
    const invalidSkills = 'not-an-array'
    renderWithIntl(
      <SkillCategory 
        title="skills.category.frontend" 
        skills={invalidSkills as unknown as string[]} 
      />
    )
    
    expect(consoleSpy).toHaveBeenCalled()
    consoleSpy.mockRestore()
  })

  it('should handle missing translations', () => {
    const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    
    renderWithIntl(
      <SkillCategory 
        title="skills.category.frontend" 
        skills={['skills.invalid']} 
      />
    )
    
    expect(consoleSpy).toHaveBeenCalledWith('Translation not found for skill: skills.invalid')
    consoleSpy.mockRestore()
  })
}) 