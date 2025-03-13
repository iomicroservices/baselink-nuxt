<script setup lang="ts">
import { computed } from 'vue'
import { useHead } from '#imports'
import { useLocation } from '~/composables/useLocation'

// Call the composable (note: since it uses asyncData, we await it here) which include Steps 1 to 6
const { city, area } = await useLocation()

// 7. Compute the effective title based on whether an area exists.
// Compute the effective title.
const effectiveTitle = computed(() => {
    if (area.value) {
        return `${area.value.name}'s best house cleaners`
    } else if (city.value) {
        return `${city.value.name}'s best house cleaners`
    }
    return 'Brilliant local cleaners'
})

// 8. Compute the meta description based on whether an area exists.
// Compute the meta description.
const effectiveMetaDescription = computed(() => {
    if (area.value) {
        return `Professional house cleaning services in ${area.value.name}, ${city.value.name}. Serving ${area.value.regionName} and surrounding areas.`
    } else if (city.value) {
        return `Professional house cleaning services in ${city.value.name}.`
    }
    return 'Professional house cleaning services provided by brilliant local cleaners.'
})

// 9. Set SEO meta tags.
useHead({
    title: effectiveTitle.value,
    meta: [
        { name: 'description', content: effectiveMetaDescription.value }
    ]
})
</script>


<template>
    <main>
        <section class="container mx-auto px-4 py-12">
            <h1 class="heading1">{{ effectiveTitle }}</h1>
            <p class="text-lg text-gray-600 dark:text-gray-300">
                <span v-if="area">
                    Serving {{ area.name }} and the surrounding areas in {{ area.regionName }}
                </span>
                <span v-else-if="city">
                    Serving {{ city.name }} and the surrounding areas
                </span>
                <span v-else>
                    Your local professional cleaning service.
                </span>
            </p>
        </section>
    </main>
</template>
