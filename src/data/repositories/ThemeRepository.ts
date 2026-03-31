import type { IThemeRepository } from '@/core/interfaces/IThemeRepository'
import { readonly, ref } from 'vue'

const DARK_CLASS = 'theme-dark'
const STORAGE_KEY = 'theme'

export function createThemeRepository(): IThemeRepository {
  const isDark = ref(false)

  function applyTheme() {
    document.documentElement.classList.toggle(DARK_CLASS, isDark.value)
    localStorage.setItem(STORAGE_KEY, isDark.value ? 'dark' : 'light')
  }

  function toggleTheme() {
    isDark.value = !isDark.value
    applyTheme()
  }

  const saved = localStorage.getItem(STORAGE_KEY)
  isDark.value = saved
    ? saved === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches
  applyTheme()

  return {
    isDark: readonly(isDark),
    toggleTheme,
    applyTheme,
  }
}
