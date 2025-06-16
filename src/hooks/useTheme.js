import { useEffect } from 'react';

export const useTheme = () => {
  useEffect(() => {
    // Always set theme to 'dark' in localStorage
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark');
  }, []);

  // Return only 'dark' as the current theme, no toggle
  return { theme: 'dark' };
};
