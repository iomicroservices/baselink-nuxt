<script setup lang="ts">

    // Get the path data from the composable
    const { pathData } = await usePathData();

    const { data: taskpage, error } = await useAsyncData(`${pathData.asyncDynamicName}`, () => queryContent(`${pathData.queryUrl}`).findOne())

    if (!taskpage.value) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Page not found'
        })
    }

    const locality = ref({ location: 'near me' });

</script>

<template>

    <div class="page-container">    
        <ContentRenderer v-if="taskpage" :value="taskpage" :data="locality" />
    </div>

</template>