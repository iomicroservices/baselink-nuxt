<script setup lang="ts">
const { path } = useRoute()
const articles = await queryContent(path).findOne()

const links = articles?.body?.toc?.links || []
</script>

<template>
  <div class="lg:col-span-3 sticky top-28 h-96 hidden lg:block justify-self-end">
    <div class="border dark:border-gray-800 p-3 rounded-md max-w-[210px] min-w-[200px] bg-white dark:bg-slate-900">
      <h1 class="text-sm font-bold mb-3 border-b dark:border-gray-800 pb-2">
        Contents
      </h1>
      <NuxtLink v-for="link in links" :key="link.id" :to="`#${link.id}`" class="block text-xs mb-3 hover:underline">
        {{ link.text }}
      </NuxtLink>
    </div>
  </div>
</template>
