<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { TreeNode } from 'primevue/treenode'
import DmcLogo from '@/presentation/components/DmcLogo.vue'
import ExperienceTimeline from '@/presentation/components/ExperienceTimeline.vue'

const { t } = useI18n()

const skillNodes: TreeNode[] = [
  {
    key: 'frontend',
    data: { tech: t('skills.categories.frontend'), time: '' },
    children: [
      { key: 'frontend-1', data: { tech: 'Angular', time: t('skills.years', { n: 4 }) } },
      { key: 'frontend-2', data: { tech: 'React / Next.js', time: t('skills.years', { n: 2 }) } },
      { key: 'frontend-3', data: { tech: 'Vue 3', time: t('skills.years', { n: 1 }) } },
      { key: 'frontend-4', data: { tech: 'TypeScript', time: t('skills.years', { n: 4 }) } },
    ],
  },
  {
    key: 'backend',
    data: { tech: t('skills.categories.backend'), time: '' },
    children: [
      { key: 'backend-1', data: { tech: 'NestJS', time: t('skills.years', { n: 2 }) } },
      { key: 'backend-2', data: { tech: '.NET / C#', time: t('skills.years', { n: 1 }) } },
      { key: 'backend-3', data: { tech: 'Laravel / PHP', time: t('skills.years', { n: 4 }) } },
      { key: 'backend-4', data: { tech: 'Node.js', time: t('skills.years', { n: 4 }) } },
      { key: 'backend-5', data: { tech: 'Flask / Python', time: t('skills.years', { n: 1 }) } },
    ],
  },
  {
    key: 'database',
    data: { tech: t('skills.categories.database'), time: '' },
    children: [
      { key: 'db-1', data: { tech: 'PostgreSQL', time: t('skills.years', { n: 4 }) } },
      { key: 'db-2', data: { tech: 'MySQL', time: t('skills.years', { n: 4 }) } },
      { key: 'db-3', data: { tech: 'MongoDB Atlas', time: t('skills.years', { n: 4 }) } },
      { key: 'db-4', data: { tech: 'Azure SQL Server', time: t('skills.years', { n: 1 }) } },
    ],
  },
  {
    key: 'devops',
    data: { tech: t('skills.categories.devops'), time: '' },
    children: [
      { key: 'devops-1', data: { tech: 'Docker & AWS', time: t('skills.years', { n: 3 }) } },
      {
        key: 'devops-2',
        data: { tech: 'Azure (Functions, App Services)', time: t('skills.years', { n: 1 }) },
      },
    ],
  },
  {
    key: 'ai',
    data: { tech: t('skills.categories.ai'), time: '' },
    children: [
      { key: 'ai-1', data: { tech: 'Claude AI & LangGraph', time: t('skills.years', { n: 1 }) } },
      { key: 'ai-2', data: { tech: 'Shopify Development', time: t('skills.years', { n: 1 }) } },
    ],
  },
  {
    key: 'mobile',
    data: { tech: t('skills.categories.mobile'), time: '' },
    children: [
      {
        key: 'mob-1',
        data: { tech: 'Kotlin & Jetpack Compose', time: t('skills.years', { n: 1 }) },
      },
      { key: 'mob-2', data: { tech: 'Rust', time: t('skills.years', { n: 1 }) } },
    ],
  },
]

const studyNodes: TreeNode[] = [
  {
    key: 'education',
    data: { item: t('studies.degree'), period: '2018 - 2022' },
  },
  {
    key: 'languages',
    data: { item: t('studies.languages'), period: '' },
    children: [
      { key: 'lang-1', data: { item: t('studies.spanish'), period: t('studies.native') } },
      { key: 'lang-2', data: { item: t('studies.english'), period: t('studies.intermediate') } },
    ],
  },
]

const stats = [
  { value: '4+', label: 'stats.experience', icon: 'pi pi-briefcase' },
  { value: '10+', label: 'stats.projects', icon: 'pi pi-folder-open' },
  { value: '6+', label: 'stats.stacks', icon: 'pi pi-code' },
  { value: '3', label: 'stats.companies', icon: 'pi pi-building' },
]

const workAreas = [
  { icon: 'pi pi-desktop', title: 'areas.fullstack', desc: 'areas.fullstack_desc' },
  { icon: 'pi pi-cloud', title: 'areas.cloud', desc: 'areas.cloud_desc' },
  { icon: 'pi pi-android', title: 'areas.mobile', desc: 'areas.mobile_desc' },
]

const enterLeft = 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000'
const enterRight = 'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000'
const enterUp = 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000'
const enterFade = 'animate-enter fade-in-10 zoom-in-50 animate-duration-1000'
</script>

<template>
  <div class="flex flex-col">
    <!-- ░░ HERO ░░ -->
    <section id="home" class="max-w-5xl mx-auto px-6 py-24 w-full">
      <div
        v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-fadeout' }"
        class="flex flex-col gap-5"
      >
        <Tag :value="t('home.tag')" severity="secondary" class="w-fit" />
        <h1 class="text-5xl font-bold leading-tight">{{ t('home.title') }}</h1>
        <p class="text-xl text-muted-color max-w-2xl">{{ t('home.subtitle') }}</p>
        <div class="flex gap-3 mt-2">
          <Button :label="t('home.cta_projects')" icon="pi pi-folder-open" />
          <Button :label="t('home.cta_contact')" icon="pi pi-envelope" outlined />
        </div>
      </div>
    </section>

    <Divider />

    <!-- ░░ STATS ░░ -->
    <section class="max-w-5xl mx-auto px-6 py-16 w-full">
      <div class="flex flex-wrap justify-center gap-6">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          v-animateonscroll="{
            enterClass: 'animate-enter fade-in-10 zoom-in-50 animate-duration-1000',
          }"
          class="flex flex-col bg-primary text-primary-contrast shadow-lg justify-center items-center w-48 rounded-2xl p-8 gap-3"
        >
          <span class="bg-white/20 text-xl font-bold rounded-xl px-4 py-2">{{ stat.value }}</span>
          <i :class="[stat.icon, '!text-2xl']" />
          <span class="text-center font-medium">{{ t(stat.label) }}</span>
        </div>
      </div>
    </section>

    <Divider />

    <!-- ░░ ABOUT ME ░░ -->
    <section id="aboutme" class="max-w-5xl mx-auto px-6 py-16 w-full">
      <div class="flex flex-col md:flex-row gap-12 items-center">
        <!-- Avatar / logo lado izquierdo -->
        <div v-animateonscroll="{ enterClass: enterLeft }" class="flex-shrink-0">
          <DmcLogo :size="100" />
        </div>

        <!-- Texto lado derecho -->
        <div v-animateonscroll="{ enterClass: enterRight }" class="flex flex-col gap-4">
          <h2 class="text-3xl font-bold">{{ t('aboutme.title') }}</h2>
          <p class="text-muted-color leading-relaxed text-lg">
            {{ t('aboutme.description') }}
          </p>
          <div class="flex flex-wrap gap-2 mt-2">
            <Chip label="Puebla, MX" icon="pi pi-map-marker" />
            <Chip label="Full-Stack Dev" icon="pi pi-code" />
            <Chip :label="'+' + t('skills.years', { n: 4 }) + ' exp.'" icon="pi pi-calendar" />
          </div>
        </div>
      </div>
    </section>

    <Divider />

    <!-- ░░ ÁREAS DE TRABAJO ░░ -->
    <section class="max-w-5xl mx-auto px-6 py-16 w-full">
      <div v-animateonscroll="{ enterClass: 'animate-fadein' }" class="mb-10">
        <h2 class="text-3xl font-bold">{{ t('areas.title') }}</h2>
      </div>
      <div class="flex flex-wrap justify-center gap-8">
        <div
          v-for="(area, i) in workAreas"
          :key="i"
          v-animateonscroll="{
            enterClass: i === 0 ? enterLeft : i === 2 ? enterRight : enterFade,
            leaveClass: 'animate-leave fade-out-0',
          }"
          class="flex flex-col border border-surface shadow-lg justify-center items-center max-w-72 rounded-2xl p-8 gap-4"
        >
          <div
            class="rounded-full bg-primary text-primary-contrast w-14 h-14 flex items-center justify-center"
          >
            <i :class="[area.icon, '!text-2xl']" />
          </div>
          <span class="text-xl font-bold text-center">{{ t(area.title) }}</span>
          <span class="text-muted-color text-center text-sm">{{ t(area.desc) }}</span>
        </div>
      </div>
    </section>

    <Divider />

    <!-- ░░ SKILLS & ESTUDIOS ░░ -->
    <section id="skills" class="max-w-5xl mx-auto px-6 py-16 w-full">
      <div v-animateonscroll="{ enterClass: enterUp }" class="mb-8">
        <h2 class="text-3xl font-bold">{{ t('skills.title') }}</h2>
      </div>

      <div v-animateonscroll="{ enterClass: enterFade }">
        <Tabs value="skills">
          <TabList>
            <Tab value="skills"> <i class="pi pi-code mr-2" />{{ t('skills.title') }} </Tab>
            <Tab value="studies">
              <i class="pi pi-graduation-cap mr-2" />{{ t('studies.title') }}
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel value="skills">
              <TreeTable :value="skillNodes" class="mt-4" :pt="{ root: { class: 'text-sm' } }">
                <Column field="tech" :header="t('skills.col.tech')" expander style="width: 70%" />
                <Column field="time" :header="t('skills.col.time')" style="width: 30%" />
              </TreeTable>
            </TabPanel>

            <TabPanel value="studies">
              <TreeTable :value="studyNodes" class="mt-4" :pt="{ root: { class: 'text-sm' } }">
                <Column field="item" :header="t('studies.col.item')" expander style="width: 70%" />
                <Column field="period" :header="t('studies.col.period')" style="width: 30%" />
              </TreeTable>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </section>
  </div>

  <Divider />

  <!-- ░░ EXPERIENCIA ░░ -->
  <section
    id="experience"
    v-animateonscroll="{ enterClass: 'animate-fadein' }"
    class="max-w-5xl mx-auto px-6 py-16 w-full"
  >
    <ExperienceTimeline />
  </section>
</template>
