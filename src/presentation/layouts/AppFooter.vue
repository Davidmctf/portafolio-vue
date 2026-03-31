<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useLanguage } from '@/presentation/stores/useLanguage'
import DownlaadCvButton from '@/presentation/components/DownloadCvButton.vue'

const { t } = useI18n()
const router = useRouter()
const { isSpanish, toggleLocale } = useLanguage()

defineProps<{
  isHome?: boolean
}>()

const emit = defineEmits<{
  scroll: [section: string]
}>()
</script>

<template>
  <footer class="border-t border-surface mt-16">
    <div class="max-w-5xl mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- Col 1 — Brand -->
        <div class="flex flex-col gap-3">
          <span
            class="text-3xl font-bold tracking-tight text-primary cursor-pointer"
            @click="router.push('/')"
          >
            DVZ<span class="opacity-50">•</span>
          </span>
          <p class="leading-relaxed">
            {{ t('footer.tagline') }}
          </p>
        </div>

        <!-- Col 2 — Nav links -->
        <div class="flex flex-col gap-2">
          <span class="text-xs uppercase tracking-widest mb-1">
            {{ t('footer.links') }}
          </span>

          <a class="footer-link" @click="router.push('/')">
            {{ t('nav.home') }}
          </a>

          <template v-if="isHome">
            <a class="footer-link" @click="emit('scroll', 'aboutme')">
              {{ t('nav.aboutme') }}
            </a>
            <a class="footer-link" @click="emit('scroll', 'experience')">
              {{ t('nav.experience') }}
            </a>
          </template>

          <RouterLink class="footer-link" to="/proyectos">
            {{ t('nav.projects') }}
          </RouterLink>
          <RouterLink class="footer-link" to="/sfd-project"> SFD </RouterLink>
          <RouterLink class="footer-link" to="/profile">
            {{ t('nav.profile') }}
          </RouterLink>
        </div>

        <!-- Col 3 — Social + CV + Language -->
        <div class="flex flex-col gap-5">
          <!-- Redes sociales -->
          <div class="flex flex-col gap-2">
            <span class="text-xs uppercase tracking-widest">
              {{ t('footer.follow') }}
            </span>
            <div class="flex gap-2">
              <a href="https://linkedin.com/in/davidmct" target="_blank">
                <Button icon="pi pi-linkedin" text rounded aria-label="LinkedIn" />
              </a>
              <a href="https://github.com/Davidmctf" target="_blank">
                <Button icon="pi pi-github" text rounded aria-label="GitHub" />
              </a>
            </div>
          </div>

          <!-- Descargar CV -->
          <div class="flex flex-col gap-2">
            <span class="text-xs uppercase tracking-widest">
              {{ t('footer.download_cv') }}
            </span>
            <DownlaadCvButton />
          </div>

          <!-- Idioma -->
          <div class="flex flex-col gap-2">
            <span class="text-xs uppercase tracking-widest">
              {{ t('footer.language') }}
            </span>
            <Button
              :label="isSpanish ? 'Switch to English' : 'Cambiar a Español'"
              :icon="isSpanish ? 'pi pi-globe' : 'pi pi-globe'"
              text
              size="small"
              @click="toggleLocale"
            />
          </div>
        </div>
      </div>

      <Divider />

      <!-- Copyright -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-2 text-xs">
        <span>© {{ new Date().getFullYear() }} David Cruz. {{ t('footer.rights') }}</span>
        <span>Made with <i class="pi pi-heart text-primary text-xs" /> & Vue 3 + PrimeVue</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  @apply cursor-pointer transition-colors duration-150;
}
</style>
