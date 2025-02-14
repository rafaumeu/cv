export interface Subject {
  id: string;
  status: 'current' | 'future';
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description?: string;
  subjects?: Subject[];
} 