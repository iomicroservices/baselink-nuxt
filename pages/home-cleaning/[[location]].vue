<script setup lang="ts">
import { useRoute, useAsyncData, useHead, createError } from '#imports'

const route = useRoute()

// Load the locations JSON from the content folder (e.g., /locations.json)
const { data: locationData } = await useAsyncData('locations', () =>
  queryContent('/locations').findOne()
)

// Try to find a location matching the slug in the URL
const location = computed(() => {
  if (route.params.location) {
    return locationData.value?.locations.find((loc: any) => loc.slug === route.params.location)
  }
  return null
})

// If a location parameter was provided but not found, throw a 404 error
if (route.params.location && !location.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Location not found'
  })
}

// Compute the page title: if a valid location exists, use it; otherwise use the fallback.
const effectiveTitle = computed(() => {
  return location.value
    ? `${location.value.name}'s best house cleaners`
    : 'Brilliant local cleaners'
})

// Optionally, compute a meta description in a similar way.
const effectiveMetaDescription = computed(() => {
  return location.value
    ? `Professional house cleaning services in ${location.value.name}. Serving ${location.value.region} and surrounding areas.`
    : 'Professional house cleaning services provided by brilliant local cleaners.'
})

// Set SEO meta tags using useHead
useHead({
  title: effectiveTitle.value,
  meta: [
    {
      name: 'description',
      content: effectiveMetaDescription.value
    }
  ]
})
</script>

<template>
  <main>
    <section class="container mx-auto px-4 py-12">
      <h1 class="heading1">
        {{ effectiveTitle }}
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-300">
        <span v-if="location">
          Serving {{ location.region }} and surrounding areas
        </span>
        <span v-else>
          Your local professional cleaning service.
        </span>
      </p>

      <!-- Your additional template content here -->
      <Features2 />

    </section>
  </main>
</template>
