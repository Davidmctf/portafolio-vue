import type { ILanguageRepository } from '@/core/interfaces/ILanguageRepository'
import type { IThemeRepository } from '@/core/interfaces/IThemeRepository'
import type { InjectionKey } from 'vue'

export const THEME_REPO_KEY: InjectionKey<IThemeRepository> = Symbol('ThemeRepository')
export const LANGUAGE_REPO_KEY: InjectionKey<ILanguageRepository> = Symbol('LanguageRepository')
