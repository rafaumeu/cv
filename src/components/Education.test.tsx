import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Education } from './Education'
import { IntlProvider } from 'react-intl'
import { EducationItem } from '@/types/cv'

const messages = {
  'education.title': 'Educação',
  'education.course.analysis': 'Análise e Desenvolvimento de Sistemas',
  'education.institution': 'Universidade XYZ',
  'education.period': '2022 - 2024',
  'education.current_subjects': 'Disciplinas Atuais',
  'education.future_subjects': 'Próximas Disciplinas',
  'education.degree.technologist': 'Tecnólogo',
  'education.description.analysis.1': 'Descrição do curso 1',
  'education.description.analysis.2': 'Descrição do curso 2',
  'subject1': 'Disciplina 1',
  'subject2': 'Disciplina 2'
}

describe('Education', () => {
  const renderWithIntl = (ui: React.ReactNode) => {
    return render(
      <IntlProvider messages={messages} locale="pt-BR" defaultLocale="pt-BR">
        {ui}
      </IntlProvider>
    )
  }

  const mockEducation: EducationItem[] = [{
    course: 'education.course.analysis',
    institution: 'education.institution',
    period: 'education.period',
    degree: 'education.degree.technologist',
    description: [
      'education.description.analysis.1',
      'education.description.analysis.2'
    ],
    subjects: [
      { id: 'subject1', status: 'in-progress' },
      { id: 'subject2', status: 'planned' }
    ]
  }]

  it('should render education section', () => {
    renderWithIntl(<Education education={mockEducation} />)
    
    expect(screen.getByText('Educação')).toBeInTheDocument()
    expect(screen.getByText('Análise e Desenvolvimento de Sistemas')).toBeInTheDocument()
    expect(screen.getByText('Universidade XYZ')).toBeInTheDocument()
    expect(screen.getByText('2022 - 2024')).toBeInTheDocument()
    expect(screen.getByText('Tecnólogo')).toBeInTheDocument()
  })

  it('should render descriptions', () => {
    renderWithIntl(<Education education={mockEducation} />)
    
    expect(screen.getByText('Descrição do curso 1')).toBeInTheDocument()
    expect(screen.getByText('Descrição do curso 2')).toBeInTheDocument()
  })

  it('should render current and future subjects', () => {
    renderWithIntl(<Education education={mockEducation} />)
    
    expect(screen.getByText('Disciplinas Atuais')).toBeInTheDocument()
    expect(screen.getByText('Próximas Disciplinas')).toBeInTheDocument()
    expect(screen.getByText('Disciplina 1')).toBeInTheDocument()
    expect(screen.getByText('Disciplina 2')).toBeInTheDocument()
  })

  it('should handle education without subjects', () => {
    const educationWithoutSubjects: EducationItem[] = [{
      course: 'education.course.analysis',
      institution: 'education.institution',
      period: 'education.period',
      degree: 'education.degree.technologist',
      description: [
        'education.description.analysis.1',
        'education.description.analysis.2'
      ],
      subjects: undefined
    }]

    renderWithIntl(<Education education={educationWithoutSubjects} />)
    
    expect(screen.queryByText('Disciplinas Atuais')).not.toBeInTheDocument()
    expect(screen.queryByText('Próximas Disciplinas')).not.toBeInTheDocument()
  })
}) 