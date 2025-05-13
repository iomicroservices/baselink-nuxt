<script setup lang="ts">
defineProps<{
  items?: { name: string; link: string; icon: string }[]
}>()
</script>

<template>
  <div class="flex gap-4">
    <NuxtLink
      v-for="item in items || []" :key="item.link"
      :to="item.link"
      target="_blank"
      rel="noopener"
      :aria-label="item.name">
      <Icon
        :name="item.icon"
        class="w-6 h-6 text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
      />
    </NuxtLink>
  </div>
</template>