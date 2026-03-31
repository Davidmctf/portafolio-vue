<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppTopBar from './presentation/layouts/AppTopBar.vue'
import AppFooter from './presentation/layouts/AppFooter.vue'
import { useIsHomeView } from './presentation/stores/useIsHomeView'
import { setupDI } from '@/infrastructure/di/container'

setupDI()

function handleScroll(section: string) {
  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <AppTopBar :is-home="useIsHomeView()" @scroll="handleScroll" />
  <RouterView />
  <AppFooter :is-home="useIsHomeView()" @scroll="handleScroll" />
</template>

<style scoped></style>
