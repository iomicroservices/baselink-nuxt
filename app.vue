<script setup>
const description
  = 'Discover eLandline\'s virtual numbers for UK small businesses. Streamline calls with our bespoke landline solutions, mobile divert, and WhatsApp Business integration.'
const ogTitle
  = 'Empower your UK business with reliable virtual telephone numbers, exceptional call handling, and seamless mobile connectivity with eLandline.'
const twitterDescription
  = 'Join UK\'s small businesses with eLandline\'s virtual landline numbers. Upgrade your communication with flexible, professional phone services.'
const image
  = 'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp'
const mySite = 'https://www.elandline.co.uk/'
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    {
      name: 'description',
      content: description,
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
    { name: 'twitter:site', content: '@debs_obrien' },
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
  <div class="bg-[#F1F2F4] dark:text-zinc-300   dark:bg-slate-950">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <CookieControl locale="en" />
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
