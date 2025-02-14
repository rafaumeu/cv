import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { LanguageTitle } from './LanguageTitle'
import { HelmetProvider } from 'react-helmet-async'
import { IntlProvider } from 'react-intl'

const messages = {
  'page.title.frontend': 'CV - Desenvolvedor Frontend',
  'page.title.backend': 'CV - Desenvolvedor Backend',
  'page.title.fullstack': 'CV - Desenvolvedor Full Stack'
}

describe('LanguageTitle', () => {
  const renderWithProviders = (ui: React.ReactNode) => {
    return render(
      <HelmetProvider>
        <IntlProvider messages={messages} locale="pt-BR" defaultLocale="pt-BR">
          {ui}
        </IntlProvider>
      </HelmetProvider>
    )
  }

  it('should set frontend title', () => {
    renderWithProviders(<LanguageTitle profile="frontend" />)
    expect(document.title).toBe('CV - Desenvolvedor Frontend')
  })

  it('should set backend title', () => {
    renderWithProviders(<LanguageTitle profile="backend" />)
    expect(document.title).toBe('CV - Desenvolvedor Backend')
  })

  it('should set fullstack title', () => {
    renderWithProviders(<LanguageTitle profile="fullstack" />)
    expect(document.title).toBe('CV - Desenvolvedor Full Stack')
  })
}) 