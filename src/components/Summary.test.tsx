import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Summary } from './Summary'
import { IntlProvider } from 'react-intl'

const messages = {
  'summary.title': 'Sobre',
  'summary.description.frontend': 'Desenvolvedor Frontend Junior com experiência em React',
  'summary.description.backend': 'Desenvolvedor Backend Junior com experiência em Node.js',
  'summary.description.fullstack': 'Desenvolvedor Full Stack Junior com experiência em React e Node.js'
}

describe('Summary', () => {
  const renderWithIntl = (ui: React.ReactNode) => {
    return render(
      <IntlProvider messages={messages} locale="pt-BR" defaultLocale="pt-BR">
        {ui}
      </IntlProvider>
    )
  }

  it('should render frontend summary', () => {
    renderWithIntl(<Summary profile="frontend" />)
    
    expect(screen.getByText('Sobre')).toBeInTheDocument()
    expect(screen.getByText('Desenvolvedor Frontend Junior com experiência em React')).toBeInTheDocument()
  })

  it('should render backend summary', () => {
    renderWithIntl(<Summary profile="backend" />)
    expect(screen.getByText('Desenvolvedor Backend Junior com experiência em Node.js')).toBeInTheDocument()
  })

  it('should render fullstack summary', () => {
    renderWithIntl(<Summary profile="fullstack" />)
    expect(screen.getByText('Desenvolvedor Full Stack Junior com experiência em React e Node.js')).toBeInTheDocument()
  })
}) 