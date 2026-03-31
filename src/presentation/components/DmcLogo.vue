<template>
  <svg :width="size" :height="size" viewBox="0 0 680 680" xmlns="http://www.w3.org/2000/svg">
    <circle fill="none" :stroke="color" cx="340" cy="340" r="295" stroke-width="6" />
    <circle fill="none" :stroke="color" cx="340" cy="340" r="274" stroke-width="10" />

    <path
      fill="none"
      :stroke="color"
      stroke-width="46"
      stroke-linecap="round"
      d="M 496,186 A 220,220 0 1 0 496,494"
    />

    <rect :fill="color" x="245" y="180" width="44" height="320" rx="4" />
    <path
      :fill="color"
      d="M 284,180 L 353,180 Q 495,180 495,340 Q 495,500 353,500
         L 284,500 L 284,455 L 353,455 Q 448,455 448,340
         Q 448,225 353,225 L 284,225 Z"
    />

    <path
      :fill="color"
      d="M 300,283 L 300,397 L 324,397 L 324,331 L 353,379
         L 382,331 L 382,397 L 406,397 L 406,283
         L 382,283 L 353,331 L 324,283 Z"
    />
  </svg>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: number
    color?: string
  }>(),
  {
    size: 36,
    color: 'var(--p-primary-color)',
  },
)
</script>
