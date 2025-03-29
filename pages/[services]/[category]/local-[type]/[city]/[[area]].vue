<script setup lang="ts">

import { usePathData } from '~/composables/usePathData'; // Import the usePathData composable
import { useLocationData } from '~/composables/useLocationData'; // Import the useLocationData composable

const { pathData } = await usePathData(); // Get pathData from the usePathData composable
const { locationData } = await useLocationData(); // Get locationData from the useLocationData composable

const serviceData = pathData.pageData; // Access the page-specific service data
if (!serviceData.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page not found'
    })
}

const locality = ref({ location: locationData.locationName ?? '' });

</script>

<template>

    <div class="page-container">

        <ContentRenderer v-if="serviceData" :value="serviceData" :data="locality ?? ''" />

    </div>

</template>