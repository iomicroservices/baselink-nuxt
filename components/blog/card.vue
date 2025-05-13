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
    class="group border dark:border-gray-800 overflow-hidden rounded-2xl shadow-sm text-zinc-700 dark:text-zinc-300 bg-white dark:bg-gray-900 hover:dark:bg-slate-800 hover:dark:border-pink-400">
    <NuxtLink :to="path">
      <NuxtImg
        class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-2xl shadow-lg group-hover:scale-[1.02] transition-all duration-500"
        width="300" :src="image" :alt="alt" format="webp" loading="lazy" />
      <div class="px-3 pb-4">
        <div class="text-black dark:text-zinc-300 pt-3 pb-2">
          <div class="flex items-center">
            <LogoDate />
            {{ date }}
          </div>
          <div class="flex items-center gap-1 flex-wrap">
            <LogoTag />
            <template v-for="tag in tags" :key="tag">
              <span>{{ tag }}</span>
            </template>
          </div>
        </div>
        <h2
          class="text-xl font-semibold  text-black dark:text-zinc-300   pb-1 group-hover:text-indigo-700 dark:group-hover:text-pink-400">
          {{ title }}
        </h2>
        <p class="text-ellipsis line-clamp-2 text-base">
          {{ description }}
        </p>
        <div class="flex group-hover:underline text-indigo-700 dark:text-pink-400 items-center py-2">
          <p class="mb-0">Read More</p>
          <LogoArrow />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
