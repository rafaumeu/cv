import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SkipLink } from './SkipLink'
import { IntlProvider } from 'react-intl'

const messages = {
  'skipLink.text': 'Pular para o conteúdo'
}

describe('SkipLink', () => {
  const renderWithIntl = (ui: React.ReactNode) => {
    return render(
      <IntlProvider messages={messages} locale="pt-BR" defaultLocale="pt-BR">
        {ui}
      </IntlProvider>
    )
  }

  it('should render skip link', () => {
    renderWithIntl(<SkipLink />)
    expect(screen.getByText('Pular para o conteúdo')).toBeInTheDocument()
  })

  it('should have correct href', () => {
    renderWithIntl(<SkipLink />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '#main-content')
  })
}) 