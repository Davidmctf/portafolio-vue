import { createLanguageRepository } from '@/data/repositories/LanguageRepository'
import { createThemeRepository } from '@/data/repositories/ThemeRepository'
import { provide } from 'vue'
import { LANGUAGE_REPO_KEY, THEME_REPO_KEY } from './keys'

export function setupDI() {
  provide(THEME_REPO_KEY, createThemeRepository())
  provide(LANGUAGE_REPO_KEY, createLanguageRepository())
}
