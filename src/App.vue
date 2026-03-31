<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppTopBar from './presentation/layouts/AppTopBar.vue'
import AppFooter from './presentation/layouts/AppFooter.vue'

function handleScroll(section: string) {
  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <AppTopBar :is-home="true" @scroll="handleScroll" />
  <RouterView />
  <AppFooter :is-home="true" @scroll="handleScroll" />
</template>

<style scoped></style>
