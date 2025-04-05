<script setup lang="ts">

    const { pathData } = await usePathData(); // Get the path data from the composable
    const serviceData = pathData.pageData; // Access the page-specific service data

    if (!serviceData.value)
        navigateTo('/404')

// const path = computed(() => route.fullPath.replace('/', ''))
</script>


<template>

    <div class="page-container">
        <ContentRenderer v-if="serviceData" :value="serviceData" />
    </div>

</template>