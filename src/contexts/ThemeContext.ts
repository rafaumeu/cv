import { createContext } from 'react';

type Theme = 'light' | 'dark';

export const ThemeContext = createContext({
  theme: 'light' as Theme,
  toggleTheme: () => {}
}); 