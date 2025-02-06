import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext deve ser usado dentro de um ThemeProvider');
  }
  return context;
}; 