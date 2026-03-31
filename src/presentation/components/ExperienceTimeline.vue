<script setup lang="ts">
import { ref } from 'vue'

const events = ref([
  {
    status: 'Ordered',
    date: '15/10/2020 10:30',
    icon: 'pi pi-shopping-cart',
    color: '#9C27B0',
    image: 'game-controller.jpg',
  },
  { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
  { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
  { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' },
])
</script>

<template>
  <div class="card">
    <Timeline :value="events" align="alternate" class="customized-timeline">
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
            {{ slotProps.item.status }}
          </template>
          <template #subtitle>
            {{ slotProps.item.date }}
          </template>
          <template #content>
            <img
              v-if="slotProps.item.image"
              :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.item.image}`"
              :alt="slotProps.item.name"
              width="200"
              class="shadow-sm"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur
              error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam
              nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </p>
            <Button label="Read more" variant="text"></Button>
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
