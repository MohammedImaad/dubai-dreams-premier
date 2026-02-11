import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ThemeColor = 'champagne-gold' | 'tiffany-blue' | 'copper-ivory';

interface ThemeContextType {
  theme: ThemeColor;
  setTheme: (theme: ThemeColor) => void;
}

const themeVariables: Record<ThemeColor, Record<string, string>> = {
  'champagne-gold': {
    '--primary': '43 74% 49%',
    '--primary-foreground': '0 0% 4%',
    '--accent': '38 60% 65%',
    '--accent-foreground': '0 0% 4%',
    '--ring': '43 74% 49%',
    '--border': '40 20% 18%',
    '--input': '40 20% 18%',
  },
  'tiffany-blue': {
    '--primary': '174 60% 51%',
    '--primary-foreground': '0 0% 4%',
    '--accent': '174 45% 65%',
    '--accent-foreground': '0 0% 4%',
    '--ring': '174 60% 51%',
    '--border': '174 15% 18%',
    '--input': '174 15% 18%',
  },
  'copper-ivory': {
    '--primary': '25 65% 52%',
    '--primary-foreground': '40 30% 96%',
    '--accent': '30 50% 65%',
    '--accent-foreground': '0 0% 4%',
    '--ring': '25 65% 52%',
    '--border': '25 20% 18%',
    '--input': '25 20% 18%',
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeColor>('champagne-gold');

  useEffect(() => {
    const root = document.documentElement;
    const vars = themeVariables[theme];
    Object.entries(vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
