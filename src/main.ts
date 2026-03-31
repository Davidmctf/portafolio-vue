import { i18n } from '@/infrastructure/plugins/i18n'
import { THEME_CONFIG } from '@/presentation/composables/PresetTheme'
import { createPinia } from 'pinia'
import 'primeicons/primeicons.css'
import AnimateOnScroll from 'primevue/animateonscroll'
import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, THEME_CONFIG)
app.use(ToastService)
app.use(ConfirmationService)
app.directive('animateonscroll', AnimateOnScroll)
app.use(i18n)

app.mount('#app')
