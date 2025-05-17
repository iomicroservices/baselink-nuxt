<script lang="ts" setup>
useHead({
  title: 'eLandline | Virtual Landline Services for UK Small Businesses',
  meta: [
    {
      name: 'description',
      content:
        'eLandline specialises in virtual landlines and call management solutions, designed for the evolving needs of UK\'s small businesses. Effortless setup, superior service.',
    },
  ],
  titleTemplate: '%s | BaseLink',
})

// Generate OG Image
defineOgImageComponent('About', {
  headline: 'Greetings 👋',
  title: 'eLandline | UK Local & National Telephone Numbers for Businesses',
  description: 'eLandline delivers flexible UK local and national telephone numbers to enhance your business presence. Join and enjoy bespoke virtual landline services with easy management.',
  link: '/baselink-logo.png',
})

const { data: homepage, error } = await useAsyncData('homepage', () => queryContent('/').findOne())

</script>

<template>
  <div class="page-container">

    <ContentRenderer v-if="homepage" :value="homepage" />

    <hr class="divider" />

    <MainRecent />

  </div>
</template>
