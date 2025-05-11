<script setup lang="ts">
import type { HowToGuide } from '~/types/howto'

const { path } = useRoute()

const { data: articles, error } = await useAsyncData(`how-to-${path}`, () => queryContent(path).findOne())

if (error.value) {
  await navigateTo('/404')
}

const data = computed<HowToGuide>(() => {
  return {
    title: articles.value?.title || 'no-title available',
    description: articles.value?.description || 'no-description available',
    image: articles.value?.image || '/images/not-found.jpg',
    alt: articles.value?.alt || 'no-alt-data',
    ogImage: articles.value?.ogImage || '/images/not-found.jpg',
    colour: articles.value?.colour || 'no-colour-available',
    pathtxt: articles.value?.pathtxt || 'Read more',
    svg: articles.value?.svg || 'no-svg',
    published: articles.value?.published || false,
  }
})

useHead({
  title: data.value.title || '',
  meta: [
    { name: 'description', content: data.value.description },
    {
      name: 'description',
      content: data.value.description,
    },
    // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
    { property: 'og:site_name', content: 'BaseLink' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: `https://www.baselink.uk/${path}`,
    },
    {
      property: 'og:title',
      content: data.value.title,
    },
    {
      property: 'og:description',
      content: data.value.description,
    },
    {
      property: 'og:image',
      content: data.value.ogImage || data.value.image,
    },
    // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
    { name: 'twitter:site', content: '@qdnvubp' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:url',
      content: `https://www.baselink.uk/${path}`,
    },
    {
      name: 'twitter:title',
      content: data.value.title,
    },
    {
      name: 'twitter:description',
      content: data.value.description,
    },
    {
      name: 'twitter:image',
      content: data.value.ogImage || data.value.image,
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `https://www.baselink.uk/${path}`,
    },
  ],
})

// Generate OG Image
defineOgImageComponent('Test', {
  headline: 'Greetings 👋',
  title: data.value.title || '',
  description: data.value.description || '',
  link: data.value.ogImage,

})
</script>

<template>
  <div class="px-6 container max-w-6xl mx-auto sm:grid grid-cols-12 gap-x-12 ">
    <div class="col-span-12 lg:col-span-9">
      <!-- features header -->
      <FeaturesHeader
        :title="data.title"
        :image="data.image"
        :alt="data.alt"
        :description="data.description"
      />

      <!-- feature content -->
      <div
        class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg
        prose-h1:no-underline max-w-6xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg"
      >
        <ContentRenderer v-if="articles" :value="articles">
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </div>
    </div>

    <!-- sidebar -->
    <FeaturesToc />
  </div>
</template>
