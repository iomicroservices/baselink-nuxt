<script lang="ts" setup>
// Get Last 6 Publish Post from the content/blog directory
const { data } = await useAsyncData('trending-post', () =>
  queryContent('/blog').limit(3).sort({ _id: 1 }).find(),
)

const formattedData = computed(() => {
  return data.value?.map((articles) => {
    return {
      path: articles._path,
      title: articles.title || 'no-title available',
      description: articles.description || 'no-description available',
      image: articles.image || '/not-found.jpg',
      alt: articles.alt || 'no alter data available',
      ogImage: articles.ogImage || '/not-found.jpg',
      date: articles.date || 'not-date-available',
      tags: articles.tags || [],
      published: articles.published || false,
    }
  })
})

useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content:
        'Explore eLandline\'s latest insights on virtual business numbers, UK landline solutions, and innovative call management strategies in our Blog.',
    },
  ],
  titleTemplate: 'eLandline Blog | %s',
})
</script>

<template>
  <section class="container">
    <div class="px-4">
      <div class="flex flex-row items-center space-x-3 pt-5 pb-3">
        <Icon name="mdi:star-three-points-outline" size="2em" class="text-black dark:text-zinc-300  " />
        <h2 class="text-4xl font-semibold text-black dark:text-zinc-300  ">
          Trending Posts
        </h2>
      </div>
      <div class="grid grid-cols-1 ">
        <template v-for="post in formattedData" :key="post.title">
          <ArchiveCard
            :path="post.path"
            :title="post.title"
            :date="post.date"
            :description="post.description"
            :image="post.image"
            :alt="post.alt"
            :og-image="post.ogImage"
            :tags="post.tags"
            :published="post.published"
          />
        </template>
        <template v-if="data?.length === 0">
          <BlogEmpty />
        </template>
      </div>
    </div>
  </section>
</template>
