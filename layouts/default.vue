<script setup>
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
</script>

<template>
  <div class="gd-container font-spacegrotesk">
    <header class="fixed w-full bg-[#F1F2F4] dark:bg-slate-950 z-10">
      <AHeader />
      <SpeedInsights />
    </header>
    <main role="main" class="max-w-7xl mx-auto text-zinc-600">
      <div class="p-6" />
      <slot />
    </main>
    <footer>
      <AFooter />
    </footer>
  </div>
</template>

<style scoped>
.gd-container {
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
}
</style>
