<script setup lang="ts">
interface Props {
  title: string
  image: string
  alt: string
  description: string
}

withDefaults(defineProps<Props>(), {
  title: 'no-title',
  image: '#',
  alt: 'no-img',
  description: 'no description',
})
</script>

<template>
  <header>
    <div class="flex flex-col md:flex-row md:space-x-4 pt-10">
      <div class="md:w-2/3 flex flex-col justify-center text-left">
        <h1 class="text-xl dark:text-zinc-300 md:text-3xl lg:text-4xl my-3 font-bold">
          {{ title || '' }}
        </h1>
        <p class="text-xs sm:text-sm mb-3 max-w-md text-zinc-600 dark:text-zinc-400">
          {{ description }}
        </p>
      </div>
      <div class="md:w-1/3 flex justify-center md:justify-end items-center">
        <NuxtImg
          :src="image || ''"
          :alt="alt || ''"
          width="600"
          class="m-auto rounded-2xl shadow-lg h-32 md:h-32 w-4/6 md:w-full object-cover"
          format="webp"
          loading="lazy"
        />
      </div>
    </div>

    <!-- redundant? -->
    <div class="flex w-full justify-center text-xs md:text-base my-8">
      <div class="md:flex text-black dark:text-zinc-300 content-center gap-8 text-xs sm:text-sm" />
    </div>
  </header>
</template>
