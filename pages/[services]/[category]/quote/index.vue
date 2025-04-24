<script setup lang="ts">
definePageMeta({
    layout: 'quote' // Specify the layout name here
});

const { pathData } = await usePathData(); // Get the path data from the composable
const serviceData = pathData.routeServices; // Access the page-specific service data

</script>

<template>
    <div class="page-container">
        <QuoteCommercialCleaningPage v-if="serviceData.routeCategory === 'commercial-cleaning'" />
        <QuoteHomeCleaningPage v-else />
    </div>
</template>