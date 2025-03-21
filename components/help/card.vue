<script setup lang="ts">
interface Props {
  title?: string
}

withDefaults(defineProps<Props>(), {
  title: 'No title available',
})
</script>

<template>
  <div
    class="text-[#F1F2F4] h-12 px-5 py-3 rounded hover:underline
    bg-sky-600 hover:scale-[1.02] transition-all duration-100"
  >
    <NuxtLink :to="`/help?cg=${title.toLocaleLowerCase()}`" class="text-lg font-extrabold">
      <h1>{{ title }}</h1>
    </NuxtLink>
  </div>
</template>
