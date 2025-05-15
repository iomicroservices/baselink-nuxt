<script setup lang="ts">
defineProps<{
  items?: { name: string; link: string }[]
}>()
</script>

<template>
  <div class="mt-3 grid">

    <p v-for="item in items" :key="item.link">
      <NuxtLink :to="item.link"
        class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-300 dark:hover:text-white">
        {{ item.name }}
      </NuxtLink>
    </p>

  </div>
</template>