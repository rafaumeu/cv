import { EducationItem } from '@/types/cv';

export const education: EducationItem[] = [
  {
    institution: 'Fatec Jahu',
    course: 'Sistemas para Internet',
    degree: 'Tecnólogo',
    period: '2024 - 2026',
    description: [
      'education.description.fatec.1',
      'education.description.fatec.2'
    ],
    subjects: [
      {
        id: 'react',
        status: 'completed'
      },
      {
        id: 'node',
        status: 'completed'
      },
      {
        id: 'react-native',
        status: 'in-progress'
      }
    ]
  }
]; 