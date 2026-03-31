import type { Locale } from '@/infrastructure/plugins/i18n'
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const STORAGE_KEY = 'locale'

export function useLanguage() {
  const { locale } = useI18n()

  const currentLocale = computed(() => locale.value as Locale)
  const isSpanish = computed(() => locale.value === 'es')

  function setLocale(lang: Locale) {
    locale.value = lang
    localStorage.setItem(STORAGE_KEY, lang)
  }

  function toggleLocale() {
    setLocale(locale.value === 'es' ? 'en' : 'es')
  }

  onMounted(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale
    if (saved) setLocale(saved)
  })

  return { currentLocale, isSpanish, setLocale, toggleLocale }
}
