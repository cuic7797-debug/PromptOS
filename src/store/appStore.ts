import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserSettings, PromptHistory, AppState } from '../types';

interface AppStore extends AppState {
  toggleSidebar: () => void;
  setCurrentPage: (page: string) => void;
  setIsMobile: (isMobile: boolean) => void;
  settings: UserSettings;
  updateSettings: (settings: Partial<UserSettings>) => void;
  history: PromptHistory[];
  addHistory: (item: PromptHistory) => void;
  removeHistory: (id: string) => void;
  toggleFavorite: (id: string) => void;
  clearHistory: () => void;
  favorites: PromptHistory[];
  getFavorites: () => PromptHistory[];
}

const getInitialTheme = (): 'dark' | 'light' | 'system' => {
  const saved = localStorage.getItem('promptos-theme');
  if (saved === 'dark' || saved === 'light' || saved === 'system') return saved;
  return 'dark';
};

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      sidebarOpen: false,
      currentPage: '/',
      isMobile: window.innerWidth < 768,
      settings: {
        theme: getInitialTheme(),
        language: 'zh-CN',
        autoSave: true,
        defaultModel: 'gpt-4',
        defaultMode: 'advanced',
      },
      history: [],
      favorites: [],
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      setCurrentPage: (page) => set({ currentPage: page }),
      setIsMobile: (isMobile) => set({ isMobile }),
      updateSettings: (newSettings) =>
        set((state) => {
          const settings = { ...state.settings, ...newSettings };
          if (newSettings.theme) localStorage.setItem('promptos-theme', newSettings.theme);
          return { settings };
        }),
      addHistory: (item) =>
        set((state) => ({
          history: [item, ...state.history].slice(0, 500),
        })),
      removeHistory: (id) =>
        set((state) => ({
          history: state.history.filter((h) => h.id !== id),
        })),
      toggleFavorite: (id) =>
        set((state) => {
          const history = state.history.map((h) =>
            h.id === id ? { ...h, favorite: !h.favorite } : h
          );
          return { history };
        }),
      clearHistory: () => set({ history: [] }),
      getFavorites: () => get().history.filter((h) => h.favorite),
    }),
    {
      name: 'promptos-storage',
      partialize: (state) => ({ settings: state.settings, history: state.history }),
    }
  )
);

window.addEventListener('resize', () => {
  useAppStore.getState().setIsMobile(window.innerWidth < 768);
});
