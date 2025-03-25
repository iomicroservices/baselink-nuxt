<script setup lang="ts">

// Import the usePathData composable
import { usePathData } from '~/composables/usePathData';

// Get the path data from the composable
const { pathData } = await usePathData();

const { data: tasklocal, error } = await useAsyncData(`${pathData.asyncDynamicName}`, () => queryContent(`${pathData.queryUrl}`).findOne())

if (!tasklocal.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page not found'
    })
}

</script>

<template>
    <div class="page-container">
        
        <ContentRenderer v-if="tasklocal" :value="tasklocal" />

    </div>

</template>