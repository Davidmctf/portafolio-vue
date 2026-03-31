<script setup lang="ts">
import { useTheme } from '@/presentation/stores/useTheme'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import type { MenuItem } from 'primevue/menuitem'
import DmcLogo from '@/presentation/components/DmcLogo.vue'
import { useI18n } from 'vue-i18n'
import { useLanguage } from '@/presentation/stores/useLanguage'

const { isSpanish, toggleLocale } = useLanguage()

const { t } = useI18n()

const props = defineProps<{
  isHome?: boolean
}>()

const emit = defineEmits<{
  scroll: [section: string]
}>()

const router = useRouter()
const { isDark, toggleTheme } = useTheme()

const navItems = computed<MenuItem[]>(() => [
  {
    label: t('nav.home'),
    icon: 'pi pi-home',
    command: () => router.push('/'),
  },
  ...(props.isHome
    ? [
        {
          label: t('nav.aboutme'),
          icon: 'pi pi-user',
          command: () => emit('scroll', 'aboutme'),
        },
        {
          label: t('nav.experience'),
          icon: 'pi pi-briefcase',
          command: () => emit('scroll', 'experience'),
        },
      ]
    : []),
  {
    label: t('nav.projects'),
    icon: 'pi pi-folder-open',
    command: () => router.push('/proyectos'),
  },
  {
    label: 'SFD',
    icon: 'pi pi-sitemap',
    command: () => router.push('/sfd-project'),
  },
  {
    label: t('nav.profile'),
    icon: 'pi pi-arrow-right-arrow-left',
    command: () => router.push('/profile'),
  },
])
</script>

<template>
  <Menubar :model="navItems">
    <!-- Logo slot izquierda -->
    <template #start>
      <div class="flex items-center gap-2 cursor-pointer" @click="router.push('/')">
        <DmcLogo :size="36" />
      </div>
    </template>

    <!-- Theme toggle slot derecha -->
    <template #end>
      <div class="flex items-center gap-1">
        <Button
          :label="isSpanish ? 'ES' : 'EN'"
          :aria-label="isSpanish ? 'Switch to English' : 'Cambiar a Español'"
          text
          rounded
          @click="toggleLocale"
        />
        <Button
          :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
          :aria-label="isDark ? 'Modo claro' : 'Modo oscuro'"
          text
          rounded
          @click="toggleTheme"
        />
      </div>
    </template>
  </Menubar>
</template>
