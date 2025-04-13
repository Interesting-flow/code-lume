import { create } from 'zustand';

interface ThemeState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setSystemTheme: () => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  theme: (typeof globalThis !== 'undefined' && localStorage.getItem('theme') as 'light' | 'dark') || 
    (globalThis.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    return { theme: newTheme };
  }),

  setSystemTheme: () => {
    const systemTheme = globalThis.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    localStorage.removeItem('theme');
    return { theme: systemTheme };
  }
}));

export default useThemeStore;