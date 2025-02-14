import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SchemaMarkup } from './SchemaMarkup'
import { IntlProvider } from 'react-intl'

const messages = {
  'header.role.frontend': 'Desenvolvedor Frontend',
  'summary.description.frontend': 'Desenvolvedor Frontend com experiência em React'
}

describe('SchemaMarkup', () => {
  const renderWithIntl = (ui: React.ReactNode) => {
    return render(
      <IntlProvider messages={messages} locale="pt-BR" defaultLocale="pt-BR">
        {ui}
      </IntlProvider>
    )
  }

  it('should render schema script tag', () => {
    const { container } = renderWithIntl(<SchemaMarkup profile="frontend" />)
    const script = container.querySelector('script[type="application/ld+json"]')
    
    expect(script).toBeInTheDocument()
  })

  it('should contain correct schema data', () => {
    const { container } = renderWithIntl(<SchemaMarkup profile="frontend" />)
    const script = container.querySelector('script[type="application/ld+json"]')
    const schemaData = JSON.parse(script?.textContent || '{}')
    
    expect(schemaData['@type']).toBe('Person')
    expect(schemaData.name).toBe('Rafael Dias Zendron')
    expect(schemaData.jobTitle).toBe('Desenvolvedor Frontend')
    expect(schemaData.description).toBe('Desenvolvedor Frontend com experiência em React')
  })

  it('should include social profiles', () => {
    const { container } = renderWithIntl(<SchemaMarkup profile="frontend" />)
    const script = container.querySelector('script[type="application/ld+json"]')
    const schemaData = JSON.parse(script?.textContent || '{}')
    
    expect(schemaData.sameAs).toContain('https://github.com/rafaumeu')
    expect(schemaData.sameAs).toContain('https://linkedin.com/in/rafael-dias-zendron')
  })
}) 