<script setup lang="ts">

const { pathData } = await usePathData(); // Get the path data from the composable
const serviceData = pathData.pageData; // Access the page-specific service data

if (!serviceData.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page not found'
    })
}

const locality = ref({ location: '' });

</script>

<template>

    <div class="page-container">    
        <ContentRenderer v-if="serviceData" :value="serviceData" :data="locality" />
    </div>

</template>