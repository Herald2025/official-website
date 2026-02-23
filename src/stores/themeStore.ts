import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';

export type DarkMode = 'dark' | 'light';

const PRIMARY_COLOR = '#845ec2';

export const useThemeStore = defineStore('theme', () => {
  // State
  const darkMode = ref<DarkMode>('dark');

  // Getters
  const primaryColor = computed(() => PRIMARY_COLOR);
  const isDark = computed(() => darkMode.value === 'dark');

  // Actions
  function setDarkMode(mode: DarkMode) {
    darkMode.value = mode;
    localStorage.setItem('darkMode', mode);
    updateCSSVariables();
    updateDarkModeClass();
  }

  function toggleDarkMode() {
    setDarkMode(darkMode.value === 'dark' ? 'light' : 'dark');
  }

  function updateCSSVariables() {
    if (typeof document !== 'undefined') {
      document.documentElement.style.setProperty('--primary-color', PRIMARY_COLOR);
    }
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

      updateCSSVariables();
      updateDarkModeClass();
    }
  }

  // Watch for changes
  watch(darkMode, () => {
    updateCSSVariables();
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
