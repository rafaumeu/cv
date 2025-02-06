import { createContext } from 'react';


type ThemeContextType = ReturnType<typeof useTheme>;

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined); 