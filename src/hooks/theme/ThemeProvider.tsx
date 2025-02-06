import { PropsWithChildren } from 'react';
import { ThemeContext } from './ThemeContext';
import { useTheme } from './useTheme';

export function ThemeProvider({ children }: PropsWithChildren) {
  const theme = useTheme();

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}