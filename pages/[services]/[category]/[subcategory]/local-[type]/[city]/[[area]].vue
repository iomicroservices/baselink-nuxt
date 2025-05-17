<script setup lang="ts">

const { pathData } = await usePathData(); // Get pathData from the usePathData composable
const { locationData } = await useLocationData(); // Get locationData from the useLocationData composable

const serviceData = pathData.pageData; // Access the page-specific service data
const locality = ref({ location: locationData.inLocation ?? '' });

if (!serviceData.value) {
    await navigateTo('/404')
};

// if (!serviceData.value) {
//     throw createError({
//         statusCode: 404,
//         statusMessage: 'Page not found'
//     })
// }

</script>

<template>
    <div class="page-container">

        <ContentRenderer v-if="serviceData" :value="serviceData" :data="locality ?? ''" />

        <MainCta />

        <MainCategory />

        <hr class="divider" />

        <MainContact />

    </div>
</template>