import { onMounted, ref } from 'vue'

const isDark = ref(false)

export function useTheme() {
  onMounted(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      isDark.value = saved === 'dark'
    } else {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    applyTheme()
  })

  function applyTheme() {
    document.documentElement.classList.toggle('theme-dark', isDark.value) // ← tu selector
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  function toggleTheme() {
    isDark.value = !isDark.value
    applyTheme()
  }

  return { isDark, toggleTheme }
}
