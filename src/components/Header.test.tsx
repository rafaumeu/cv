import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Header } from './Header'
import { IntlProvider } from 'react-intl'
import { ProfileType } from '@/types/cv'
import { ThemeProvider } from '@/providers/ThemeProvider'

const messages = {
  'header.role.frontend': 'Desenvolvedor Frontend',
  'header.role.backend': 'Desenvolvedor Backend',
  'header.role.fullstack': 'Desenvolvedor Full Stack',
  'profile.select': 'Selecionar Perfil',
  'profile.frontend': 'Frontend',
  'profile.backend': 'Backend',
  'profile.fullstack': 'Full Stack'
}

describe('Header', () => {
  const renderWithProviders = (ui: React.ReactNode) => {
    return render(
      <ThemeProvider>
        <IntlProvider messages={messages} locale="pt-BR" defaultLocale="pt-BR">
          {ui}
        </IntlProvider>
      </ThemeProvider>
    )
  }

  const mockOnProfileChange = vi.fn()

  it('should render current profile role', () => {
    renderWithProviders(
      <Header 
        profile="frontend" 
        onProfileChange={mockOnProfileChange}
      />
    )
    
    expect(screen.getByText('Desenvolvedor Frontend')).toBeInTheDocument()
  })

  it('should handle profile change', () => {
    renderWithProviders(
      <Header 
        profile="frontend" 
        onProfileChange={mockOnProfileChange}
      />
    )

    const select = screen.getByRole('combobox')
    fireEvent.change(select, { target: { value: 'backend' } })
    
    expect(mockOnProfileChange).toHaveBeenCalledWith('backend' as ProfileType)
  })

  it('should render profile selector', () => {
    renderWithProviders(
      <Header 
        profile="frontend" 
        onProfileChange={mockOnProfileChange}
      />
    )

    expect(screen.getByText('Selecionar Perfil')).toBeInTheDocument()
    expect(screen.getByText('Frontend')).toBeInTheDocument()
    expect(screen.getByText('Backend')).toBeInTheDocument()
    expect(screen.getByText('Full Stack')).toBeInTheDocument()
  })
}) 