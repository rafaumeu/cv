import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ProfileSelector } from './ProfileSelector'
import { IntlProvider } from 'react-intl'

const messages = {
  'profile.frontend': 'Frontend',
  'profile.backend': 'Backend',
  'profile.fullstack': 'Full Stack',
  'profile.select': 'Selecione um perfil'
}

describe('ProfileSelector', () => {
  const renderWithIntl = (ui: React.ReactNode) => {
    return render(
      <IntlProvider messages={messages} locale="pt-BR" defaultLocale="pt-BR">
        {ui}
      </IntlProvider>
    )
  }

  it('should render profile options', () => {
    const onSelect = vi.fn()
    renderWithIntl(<ProfileSelector onSelect={onSelect} />)
    
    expect(screen.getByText('Frontend')).toBeInTheDocument()
    expect(screen.getByText('Backend')).toBeInTheDocument()
    expect(screen.getByText('Full Stack')).toBeInTheDocument()
  })

  it('should call onSelect when profile is clicked', () => {
    const onSelect = vi.fn()
    renderWithIntl(<ProfileSelector onSelect={onSelect} />)
    
    fireEvent.click(screen.getByText('Frontend'))
    expect(onSelect).toHaveBeenCalledWith('frontend')
    
    fireEvent.click(screen.getByText('Backend'))
    expect(onSelect).toHaveBeenCalledWith('backend')
    
    fireEvent.click(screen.getByText('Full Stack'))
    expect(onSelect).toHaveBeenCalledWith('fullstack')
  })

  it('should highlight selected profile', () => {
    const onSelect = vi.fn()
    renderWithIntl(<ProfileSelector onSelect={onSelect} selectedProfile="frontend" />)
    
    const frontendButton = screen.getByText('Frontend').closest('button')
    expect(frontendButton).toHaveClass('bg-primary')
  })

  it('should show select profile message when no profile is selected', () => {
    const onSelect = vi.fn()
    renderWithIntl(<ProfileSelector onSelect={onSelect} />)
    
    expect(screen.getByText('Selecione um perfil')).toBeInTheDocument()
  })
}) 