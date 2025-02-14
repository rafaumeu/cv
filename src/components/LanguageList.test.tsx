import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { LanguageList } from './LanguageList'
import { IntlProvider } from 'react-intl'

const messages = {
  'skills.languages': 'Idiomas',
  'languages.portuguese': 'Português',
  'languages.english': 'Inglês'
}

describe('LanguageList', () => {
  const renderWithIntl = (ui: React.ReactNode) => {
    return render(
      <IntlProvider messages={messages} locale="pt-BR" defaultLocale="pt-BR">
        {ui}
      </IntlProvider>
    )
  }

  const mockLanguages = [
    {
      name: 'languages.portuguese',
      level: 'Nativo'
    },
    {
      name: 'languages.english',
      level: 'Intermediário'
    }
  ]

  it('should render language list title', () => {
    renderWithIntl(<LanguageList languages={mockLanguages} />)
    expect(screen.getByText('Idiomas')).toBeInTheDocument()
  })

  it('should render languages with their levels', () => {
    renderWithIntl(<LanguageList languages={mockLanguages} />)
    
    expect(screen.getByText('Português')).toBeInTheDocument()
    expect(screen.getByText('Nativo')).toBeInTheDocument()
    expect(screen.getByText('Inglês')).toBeInTheDocument()
    expect(screen.getByText('Intermediário')).toBeInTheDocument()
  })

  it('should handle empty languages array', () => {
    renderWithIntl(<LanguageList languages={[]} />)
    expect(screen.getByText('Idiomas')).toBeInTheDocument()
  })
}) 