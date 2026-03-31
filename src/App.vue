<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppTopBar from './presentation/layouts/AppTopBar.vue'

function handleScroll(section: string) {
  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <AppTopBar :is-home="true" @scroll="handleScroll" />
  <RouterView />
</template>

<style scoped></style>
