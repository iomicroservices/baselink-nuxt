<script setup lang="ts">
import { computed } from 'vue'
import { cleanLocation } from '~/composables/cleanLocation'

const { city, area, service } = await cleanLocation()

const effectiveTitle = computed(() => {
    const serviceTitle = service.value?.replace(/-/g, ' ') || ''
    if (area.value) {
        return `${serviceTitle} in ${area.value.name}, ${city.value.name}`
    } else if (city.value) {
        return `${serviceTitle} in ${city.value.name}`
    }
    return `Professional ${serviceTitle}`
})

const effectiveMetaDescription = computed(() => {
    if (area.value) {
        return `Professional ${service.value?.replace(/-/g, ' ')} services in ${area.value.name}, ${city.value.name}. Serving ${area.value.regionName} and surrounding areas.`
    } else if (city.value) {
        return `Professional ${service.value?.replace(/-/g, ' ')} services in ${city.value.name}.`
    }
    return `Professional ${service.value?.replace(/-/g, ' ')} services provided by brilliant local cleaners.`
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
        <MainHeroCentred :badge="`${service?.replace(/-/g, ' ')} Services`" :title="effectiveTitle"
            :description="effectiveMetaDescription" alt="Commercial cleaning services"
            og-image="https://shuffle.dev/aurora-assets/headers/header-dark-theme-center.png" button1="/" button2="/" />

        <!-- Service-specific content -->
    </div>
</template>