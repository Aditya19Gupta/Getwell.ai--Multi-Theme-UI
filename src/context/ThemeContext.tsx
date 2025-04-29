
import React, { createContext, useState, useContext, useEffect } from 'react';

type ThemeName = 'default' | 'pediatrics' | 'cardiology' | 'psychiatry' | 'general-practice';

interface ThemeOption {
  name: ThemeName;
  label: string;
  description: string;
}

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  themeOptions: ThemeOption[];
}

const themeOptions: ThemeOption[] = [
  {
    name: 'default',
    label: 'Default',
    description: 'Standard GoGetWell.ai theme'
  },
  {
    name: 'pediatrics',
    label: 'Pediatrics',
    description: 'Child-friendly theme with playful colors'
  },
  {
    name: 'cardiology',
    label: 'Cardiology',
    description: 'Heart health focused with red tones'
  },
  {
    name: 'psychiatry',
    label: 'Psychiatry',
    description: 'Calming blues for mental health'
  },
  {
    name: 'general-practice',
    label: 'General Practice',
    description: 'Professional theme for general medicine'
  }
];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeName>('default');

  // Load theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('gogetwell-theme') as ThemeName;
    if (savedTheme && themeOptions.some(option => option.name === savedTheme)) {
      setThemeState(savedTheme);
    }
  }, []);

  // Apply theme class to body
  useEffect(() => {
    // Remove all theme classes
    document.body.classList.remove('theme-default', 'theme-pediatrics', 'theme-cardiology', 'theme-psychiatry', 'theme-general-practice');
    
    // Add the current theme class
    if (theme !== 'default') {
      document.body.classList.add(`theme-${theme}`);
    }
    
    // Save to localStorage
    localStorage.setItem('gogetwell-theme', theme);
  }, [theme]);

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeOptions }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
