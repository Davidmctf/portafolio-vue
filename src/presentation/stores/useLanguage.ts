import type { ILanguageRepository } from '@/core/interfaces/ILanguageRepository'
import { LANGUAGE_REPO_KEY } from '@/infrastructure/di/keys'
import { inject } from 'vue'

export function useLanguage(): ILanguageRepository {
  const repo = inject(LANGUAGE_REPO_KEY)
  if (!repo) throw new Error('LanguageRepository not provided — did you call setupDI()?')
  return repo
}
