<script setup lang="ts">
import { computed } from 'vue'
import { cleanLocation } from '~/composables/cleanLocation'
import { useRoute } from '#imports'

const route = useRoute()
const { city, area } = await cleanLocation()

// Check if this is the base commercial-cleaning page
const isBasePage = computed(() => {
    return !route.params.slug || route.params.slug.length === 0
})

const effectiveTitle = computed(() => {
    if (isBasePage.value) {
        return 'Commercial Cleaning Services'
    }
    if (area.value) {
        return `Commercial Cleaning Services in ${area.value.name}, ${city.value.name}`
    } else if (city.value) {
        return `Commercial Cleaning Services in ${city.value.name}`
    }
    return 'Commercial Cleaning Services'
})

const effectiveMetaDescription = computed(() => {
    if (isBasePage.value) {
        return 'Professional commercial cleaning services across the UK'
    }
    if (area.value) {
        return `Professional commercial cleaning services in ${area.value.name}, ${city.value.name}. Serving ${area.value.regionName} and surrounding areas.`
    } else if (city.value) {
        return `Professional commercial cleaning services in ${city.value.name}.`
    }
    return 'Professional commercial cleaning services provided by brilliant local cleaners.'
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
        <MainHeroCentred badge="Commercial Cleaning Services" :title="effectiveTitle"
            :description="effectiveMetaDescription" alt="Commercial cleaning services"
            og-image="https://shuffle.dev/aurora-assets/headers/header-dark-theme-center.png" button1="/" button2="/" />

        <!-- Category-specific content -->
    </div>
</template>