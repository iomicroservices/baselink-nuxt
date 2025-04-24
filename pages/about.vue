<script setup lang="ts">

defineOgImageComponent('About', {
  headline: 'Greetings 👋',
  title: 'About BaseLink - Residential and commercial services in the UK',
  description: 'Find out more about BaseLink, the UK\'s leading digital-first residential and commercial services provider',
  link: '/baselink-logo.png',
})

const { path } = useRoute()

const { data: aboutarticle, error } = await useAsyncData(`about-post-${path}`, () => queryContent(path).findOne())

if (error.value)
  navigateTo('/404')

const data = computed(() => {
  return {
    title: aboutarticle.value?.title,
    description: aboutarticle.value?.description,
    image: aboutarticle.value?.image,
    alt: aboutarticle.value?.alt,
    ogImage: aboutarticle.value?.ogImage,
    date: aboutarticle.value?.date,
    tags: aboutarticle.value?.tags || [],
    published: aboutarticle.value?.published || false,
  }
})

</script>

<template>
  <article class="page-container px-[25px]">
    <div class="sm:grid grid-cols-12 gap-x-12">
      <div class="col-span-12 lg:col-span-9">
        <BlogHeader :title="data.title" :image="data.image" :alt="data.alt" :date="data.date"
          :description="data.description" :tags="data.tags" class=" pb-0 pt-5" />
        <section
          class="py-3 prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg prose-h1:no-underline max-w-6xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg">
          <ContentRenderer v-if="aboutarticle" :value="aboutarticle">
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
