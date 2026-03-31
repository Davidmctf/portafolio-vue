import type { Ref } from 'vue'

export interface IThemeRepository {
  isDark: Readonly<Ref<boolean>>
  toggleTheme: () => void
  applyTheme: () => void
}
