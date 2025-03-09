<script setup lang="ts">
import { cleanLocation } from '~/composables/cleanLocation'

const { city, area } = await cleanLocation()

const effectiveTitle = computed(() => {
    if (area.value) {
        return `CATEGORY Commercial Cleaning Services in ${area.value.name}, ${city.value.name}`
    } else if (city.value) {
        return `CATEGORY Commercial Cleaning Services in ${city.value.name}`
    }
    return 'CATEGORY Commercial Cleaning Services'
})

const effectiveMetaDescription = computed(() => {
    if (area.value) {
        return `CATEGORY Professional commercial cleaning services in ${area.value.name}, ${city.value.name}. Serving ${area.value.regionName} and surrounding areas.`
    } else if (city.value) {
        return `CATEGORY Professional commercial cleaning services in ${city.value.name}.`
    }
    return 'CATEGORY Professional commercial cleaning services provided by brilliant local cleaners.'
})

useHead({
    title: effectiveTitle.value,
    meta: [
        { name: 'description', content: effectiveMetaDescription.value }
    ]
})
</script>

<template>
    <div class="page-container">
        <!-- Category-specific template -->
        <MainHeroCentred badge="CATEGORY Commercial Cleaning Services" :title="effectiveTitle"
            :description="effectiveMetaDescription" alt="Commercial cleaning services"
            og-image="https://shuffle.dev/aurora-assets/headers/header-dark-theme-center.png" button1="/" button2="/" />

        <!-- Add category-specific content here -->

    </div>
</template>