<script setup lang="ts">

    const { pathData } = await usePathData(); // Get the path data from the composable
    const serviceData = pathData.pageData; // Access the page-specific service data

    if (!serviceData.value)
        navigateTo('/404')

    const locality = ref({ location: 'near me' });

</script>

<template>
    <div class="page-container">

        <ContentRenderer v-if="serviceData" :value="serviceData" :data="locality" />

    </div>

</template>