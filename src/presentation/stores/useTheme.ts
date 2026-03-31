import type { IThemeRepository } from '@/core/interfaces/IThemeRepository'
import { THEME_REPO_KEY } from '@/infrastructure/di/keys'
import { inject } from 'vue'

export function useTheme(): IThemeRepository {
  const repo = inject(THEME_REPO_KEY)
  if (!repo) throw new Error('ThemeRepository not provided — did you call setupDI()?')
  return repo
}
