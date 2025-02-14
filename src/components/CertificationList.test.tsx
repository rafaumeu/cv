import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CertificationList } from './CertificationList'
import { IntlProvider } from 'react-intl'

const messages = {
  'certifications.title': 'Certificações',
  'certifications.view': 'Ver Certificado',
  'certifications.skills.title': 'Habilidades',
  'skills.reactjs': 'React.js',
  'skills.typescript': 'TypeScript'
}

describe('CertificationList', () => {
  const renderWithIntl = (ui: React.ReactNode) => {
    return render(
      <IntlProvider messages={messages} locale="pt-BR" defaultLocale="pt-BR">
        {ui}
      </IntlProvider>
    )
  }

  const mockCertifications = [
    {
      title: 'React Developer',
      issuer: 'Rocketseat',
      year: 2024,
      skills: ['skills.reactjs', 'skills.typescript'],
      link: 'https://cert.com/1'
    }
  ]

  it('should render certification details', () => {
    renderWithIntl(
      <CertificationList 
        certifications={mockCertifications}
        profile="frontend"
      />
    )
    
    expect(screen.getByText('Certificações')).toBeInTheDocument()
    expect(screen.getByText('React Developer')).toBeInTheDocument()
    expect(screen.getByText('Rocketseat')).toBeInTheDocument()
    expect(screen.getByText('2024')).toBeInTheDocument()
  })

  it('should render certification skills', () => {
    renderWithIntl(
      <CertificationList 
        certifications={mockCertifications}
        profile="frontend"
      />
    )
    
    expect(screen.getByText('Habilidades')).toBeInTheDocument()
    expect(screen.getByText('React.js')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  it('should render certification link', () => {
    renderWithIntl(
      <CertificationList 
        certifications={mockCertifications}
        profile="frontend"
      />
    )
    
    const link = screen.getByRole('link', { name: 'Ver Certificado' })
    expect(link).toHaveAttribute('href', 'https://cert.com/1')
  })
}) 