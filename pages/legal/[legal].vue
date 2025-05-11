<script setup lang="ts">

const { path } = useRoute()

const { data: legalarticles, error } = await useAsyncData(`legal-post-${path}`, () => queryContent(path).findOne())

if (error.value) {
  await navigateTo('/404')
}

const data = computed(() => {
  return {
    title: legalarticles.value?.title,
    description: legalarticles.value?.description,
    image: legalarticles.value?.image,
    alt: legalarticles.value?.alt,
    ogImage: legalarticles.value?.ogImage,
    date: legalarticles.value?.date,
    tags: legalarticles.value?.tags || [],
    published: legalarticles.value?.published || false,
  }
})
</script>

<template>
  <article class="page-container px-[25px]">
    <div class="sm:grid grid-cols-12 gap-x-12">
      <div class="col-span-12 lg:col-span-9">
        <BlogHeader :title="data.title" :description="`Last updated: ${data.date}`" class="pb-0 pt-5" />
        <section
          class="py-3 prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg prose-h1:no-underline max-w-6xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg">
          <ContentRenderer v-if="legalarticles" :value="legalarticles">
            <template #empty>
              <p>No content found.</p>
            </template>
          </ContentRenderer>
        </section>
      </div>
      <BlogToc />

    </div>
  </article>
</template>