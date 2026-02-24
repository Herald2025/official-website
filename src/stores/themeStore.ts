import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';

export type DarkMode = 'dark' | 'light';

export const useThemeStore = defineStore('theme', () => {
  // State
  const darkMode = ref<DarkMode>('dark');

  // Getters — read primary color from CSS variable at runtime
  const primaryColor = computed(() => {
    if (typeof document !== 'undefined') {
      return getComputedStyle(document.documentElement)
        .getPropertyValue('--primary-color')
        .trim();
    }
    return '';
  });
  const isDark = computed(() => darkMode.value === 'dark');

  // Actions
  function setDarkMode(mode: DarkMode) {
    darkMode.value = mode;
    localStorage.setItem('darkMode', mode);
    updateDarkModeClass();
  }

  function toggleDarkMode() {
    setDarkMode(darkMode.value === 'dark' ? 'light' : 'dark');
  }


  function updateDarkModeClass() {
    if (typeof document !== 'undefined') {
      if (darkMode.value === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }

  function init() {
    if (typeof window !== 'undefined') {
      // Load dark mode from localStorage
      const savedDarkMode = localStorage.getItem('darkMode') as DarkMode;

      if (savedDarkMode) {
        darkMode.value = savedDarkMode;
      } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        darkMode.value = prefersDark ? 'dark' : 'light';
      }

      updateDarkModeClass();
    }
  }

  // Watch for changes
  watch(darkMode, () => {
    updateDarkModeClass();
  });

  return {
    darkMode,
    primaryColor,
    isDark,
    setDarkMode,
    toggleDarkMode,
    init,
  };
});
