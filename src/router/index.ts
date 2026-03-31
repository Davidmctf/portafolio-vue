import HomeView from '@/presentation/pages/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: 'Portafolio' },
      component: HomeView,
    },
    {
      path: '/:pathMatch(.*)*', // wildcard
      redirect: '/',
    },
  ],
})

export default router
