<script setup>

const title = 'Property Services in London | BaseLink'
const description = 'Find cleaners or tradespeople near you now. London`s best property services business. BaseLink is built by a family, powered by tech and run with heart. Competitive rates.'
const keywords = 'cleaning, domestic cleaning, cleaner near me, tradespeople, security services, baselink, housekeeper, online, london'
const ogTitle = 'Property Services in London | BaseLink'
const twitterDescription = 'Find cleaners or tradespeople near you now. London`s best property services business. BaseLink is built by a family, powered by tech and run with heart. Competitive rates.'
const image = 'https://baselink.uk/baselink-logo-dark.png'
const mySite = 'https://baselink.uk/'

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: title,
  meta: [
    {
      name: 'description',
      content: description,
    },
    {
      name: 'keywords',
      content: keywords,
    },
    // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
    { property: 'og:site_name', content: mySite },
    { property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: mySite,
    },
    {
      property: 'og:title',
      content: ogTitle,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: image,
    },
    // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
    { name: 'twitter:site', content: '@hellobaselink' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:url',
      content: mySite,
    },
    {
      name: 'twitter:title',
      content: ogTitle,
    },
    {
      name: 'twitter:description',
      content: twitterDescription,
    },
    {
      name: 'twitter:image',
      content: image,
    },
  ],
})
</script>

<template>
  <div class="bg-[#F1F2F4] text-zinc-800 dark:text-zinc-300 dark:bg-slate-950">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

html.dark{
  color-scheme: dark;
}
</style>
