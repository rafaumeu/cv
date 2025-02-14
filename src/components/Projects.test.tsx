import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Projects } from './Projects'
import { IntlProvider } from 'react-intl'

const messages = {
  'projects.title': 'Projetos',
  'projects.portfolio.title': 'Portfólio',
  'projects.portfolio.description': 'Descrição do portfólio',
  'projects.link.tooltip': 'Abrir projeto',
  'projects.github.tooltip': 'Ver código',
  'skills.reactjs': 'React.js',
  'skills.typescript': 'TypeScript'
}

describe('Projects', () => {
  const renderWithIntl = (ui: React.ReactNode) => {
    return render(
      <IntlProvider messages={messages} locale="pt-BR" defaultLocale="pt-BR">
        {ui}
      </IntlProvider>
    )
  }

  it('should render projects section', () => {
    renderWithIntl(<Projects profile="frontend" />)
    
    expect(screen.getByText('Projetos')).toBeInTheDocument()
    expect(screen.getByText('Portfólio')).toBeInTheDocument()
    expect(screen.getByText('Descrição do portfólio')).toBeInTheDocument()
  })

  it('should render project skills', () => {
    renderWithIntl(<Projects profile="frontend" />)
    
    expect(screen.getByText('React.js')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  it('should render project links', () => {
    renderWithIntl(<Projects profile="frontend" />)
    
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
    expect(links[0]).toHaveAttribute('target', '_blank')
    expect(links[0]).toHaveAttribute('rel', 'noopener noreferrer')
  })
}) 