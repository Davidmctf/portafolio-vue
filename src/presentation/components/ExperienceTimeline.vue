<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

interface TimelineEvent {
  title: string
  company: string
  period: string
  icon: string
  color: string
  image?: string
  description: string
}

const { t } = useI18n()

const workerEvents = ref<TimelineEvent[]>([
  {
    title: t('timeline.mobiik.title'),
    company: t('timeline.mobiik.company'),
    period: t('timeline.mobiik.period'),
    icon: 'pi pi-briefcase',
    color: '#7c3aed',
    description: t('timeline.mobiik.description'),
  },
  {
    title: t('timeline.rocket.title'),
    company: t('timeline.rocket.company'),
    period: t('timeline.rocket.period'),
    icon: 'pi pi-briefcase',
    color: '#050e2a',
    description: t('timeline.rocket.description'),
  },
  {
    title: t('timeline.blife.title'),
    company: t('timeline.blife.company'),
    period: t('timeline.blife.period'),
    icon: 'pi pi-briefcase',
    color: '#2d2d2d',
    description: t('timeline.blife.description'),
  },
  {
    title: t('timeline.midoc.title'),
    company: t('timeline.midoc.company'),
    period: t('timeline.midoc.period'),
    icon: 'pi pi-briefcase',
    color: '#0d8ef2',
    description: t('timeline.midoc.description'),
  },
  {
    title: t('timeline.skytex.title'),
    company: t('timeline.skytex.company'),
    period: t('timeline.skytex.period'),
    icon: 'pi pi-briefcase',
    color: '#017937',
    description: t('timeline.skytex.description'),
  },
  {
    title: t('timeline.veterinaria.title'),
    company: t('timeline.veterinaria.company'),
    period: t('timeline.veterinaria.period'),
    icon: 'pi pi-briefcase',
    color: '#5e72e4',
    image: 'vet.png',
    description: t('timeline.veterinaria.description'),
  },
])
</script>

<template>
  <div class="card">
    <Timeline :value="workerEvents" align="alternate" class="customized-timeline">
      <template #marker="slotProps">
        <span
          class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm"
          :style="{ backgroundColor: slotProps.item.color }"
        >
          <i :class="slotProps.item.icon"></i>
        </span>
      </template>
      <template #content="slotProps">
        <Card class="mt-4">
          <template #title>
            {{ slotProps.item.title }} -
            <span class="text-sm text-gray-500">{{ slotProps.item.company }}</span>
          </template>
          <template #subtitle>
            <span class="text-xs text-gray-400">{{ slotProps.item.period }}</span>
          </template>
          <template #content>
            <img
              v-if="slotProps.item.image"
              :src="`/assets/experience/${slotProps.item.image}`"
              :alt="slotProps.item.name"
              width="200"
              class="shadow-sm"
            />
            <p>
              {{ slotProps.item.description }}
            </p>
          </template>
        </Card>
      </template>
    </Timeline>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 960px) {
  ::v-deep(.customized-timeline) {
    .p-timeline-event:nth-child(even) {
      flex-direction: row;

      .p-timeline-event-content {
        text-align: left;
      }
    }

    .p-timeline-event-opposite {
      flex: 0;
    }
  }
}

.logo-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.8rem;
  letter-spacing: 0.4px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
}

.mobiik-logo {
  background: linear-gradient(135deg, #7c3aed, #ec4899);
  color: white;
  border: 2px solid #a78bfa;
}
.rocket-code-logo {
  background: linear-gradient(135deg, #050e2a, #1a1a2e);
  color: #a6f674;
  border: 2px solid #a6f674;
}
.blife-logo {
  background: linear-gradient(135deg, #2d2d2d, #4a4a4a);
  color: #00cbf0;
  border: 2px solid #00cbf0;
}
.midoc-logo {
  background: linear-gradient(135deg, #0d8ef2, #34e8e3);
  color: white;
  border: 2px solid #799ef9;
}
.skytex-logo {
  background: linear-gradient(135deg, #017937, #047835);
  color: white;
  border: 2px solid #2dce89;
}
.veterinaria-logo {
  background: linear-gradient(135deg, #5e72e4, #8965e0);
  color: white;
  border: 2px solid #f3a4b5;
}
</style>
