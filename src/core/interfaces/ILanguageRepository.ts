import type { Locale } from '@/infrastructure/plugins/i18n'
import type { Ref } from 'vue'

export interface ILanguageRepository {
  currentLocale: Readonly<Ref<Locale>>
  isSpanish: Readonly<Ref<boolean>>
  setLocale: (lang: Locale) => void
  toggleLocale: () => void
}
