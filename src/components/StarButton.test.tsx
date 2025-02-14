import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { StarButton } from './StarButton'
import { IntlProvider } from 'react-intl'
import { ThemeProvider } from '@/providers/ThemeProvider'

const messages = {
  'projects.star.tooltip': 'Ver pessoas que deram estrela',
  'projects.star.empty': 'Seja o primeiro a dar uma estrela!'
}

describe('StarButton', () => {
  const renderWithProviders = (ui: React.ReactNode) => {
    return render(
      <ThemeProvider>
        <IntlProvider messages={messages} locale="pt-BR" defaultLocale="pt-BR">
          {ui}
        </IntlProvider>
      </ThemeProvider>
    )
  }

  it('should render star count', () => {
    renderWithProviders(
      <StarButton 
        stars={10} 
        repoUrl="https://github.com/user/repo" 
      />
    )
    
    expect(screen.getByText('10')).toBeInTheDocument()
  })

  it('should render empty state message', () => {
    renderWithProviders(
      <StarButton 
        stars={0} 
        repoUrl="https://github.com/user/repo" 
      />
    )
    
    const tooltip = screen.getByRole('tooltip')
    expect(tooltip).toHaveTextContent('Seja o primeiro a dar uma estrela!')
  })

  it('should render link with correct attributes', () => {
    renderWithProviders(
      <StarButton 
        stars={5} 
        repoUrl="https://github.com/user/repo" 
      />
    )
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://github.com/user/repo/stargazers')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
}) 