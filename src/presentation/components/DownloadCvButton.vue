<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { downloadFile } from '@/data/utils/downloadFIle'

const { t } = useI18n()
function downloadCV(format: 'pdf' | 'html') {
  const url = `/assets/cv_resume/david_cv.${format}`
  const filename = `david_cv.${format}`
  downloadFile(url, filename)
}
</script>

<template>
  <button
    class="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors duration-150"
    @click="downloadCV('pdf')"
  >
    {{ t('footer.download_cv') }}
  </button>
</template>
