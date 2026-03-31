import { onMounted } from 'vue'

let isHomeViewRef = true

export function useIsHomeView() {
  onMounted(() => {
    const path = window.location.pathname
    if (path === '/' || path === '/home') {
      isHomeViewRef = true
    } else {
      isHomeViewRef = false
    }
  })

  return isHomeViewRef
}
