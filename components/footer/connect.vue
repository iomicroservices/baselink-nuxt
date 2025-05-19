<script setup lang="ts">
defineProps<{
  items?: { name: string; link: string; icon: string }[]
}>()
</script>

<template>
  <div class="space-x-4">
    <NuxtLink v-for="item in items || []" :key="item.link" :to="item.link" target="_blank" rel="noopener"
      :aria-label="item.name">
      <Icon :name="item.icon"
        class="w-6 h-6 text-gray-500 hover:text-indigo-700 focus:outline-none dark:text-neutral-400 dark:hover:text-pink-400 dark:focus:text-pink-400" />
    </NuxtLink>
  </div>
</template>