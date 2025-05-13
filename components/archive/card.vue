<script lang="ts" setup>
interface Props {
  path?: string
  title?: string
  date?: string
  description?: string
  image?: string
  alt?: string
  ogImage?: string
  tags?: Array<string>
  published?: boolean
}

withDefaults(defineProps<Props>(), {
  path: '/',
  title: 'no-title',
  date: 'no-date',
  description: 'no-description',
  image: '/images/blogs-img/blog.jpg',
  alt: 'no-alt',
  ogImage: '/images/blogs-img/blog.jpg',
  tags: () => [],
  published: false,
})
</script>

<template>
  <article
    class="group border dark:border-gray-800 hover:dark:border-pink-400 m-2 overflow-hidden rounded-xl shadow-sm hover:shadow-md text-zinc-700 dark:text-zinc-300">
    <NuxtLink :to="path" class="flex flex-col lg:flex-row h-full">
      <!-- Image Container -->
      <div class="relative w-full lg:w-1/3 aspect-[16/9] lg:aspect-auto">
        <NuxtImg
          class="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
          :src="image" :alt="alt" width="400" height="300" format="webp" loading="lazy" />
      </div>

      <!-- Content Container -->
      <div class="flex-1 p-5 flex flex-col bg-white dark:bg-gray-900 hover:dark:bg-slate-800">
        <h2
          class="text-xl font-semibold text-gray-900 dark:text-zinc-300 group-hover:text-indigo-700 dark:group-hover:text-pink-400 line-clamp-2">
          {{ title }}
        </h2>

        <p class="mt-2 text-zinc-700 dark:text-zinc-400 line-clamp-2">
          {{ description }}
        </p>

        <!-- Meta Information -->
        <div class="mt-4 flex flex-wrap gap-4 text-sm text-gray-900 dark:text-zinc-300">
          <div class="flex items-center gap-1">
            <LogoDate />
            <span>{{ date }}</span>
          </div>

          <div class="flex items-center flex-wrap gap-2">
            <LogoTag />
            <span v-for="tag in tags" :key="tag" class="inline-flex items-center">
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Read More Link -->
        <div class="mt-auto pt-4 flex items-center text-indigo-700 dark:text-pink-400 group-hover:underline">
          <span>Read More</span>
          <LogoArrow />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
