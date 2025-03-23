<script setup lang="ts">

// Import the usePathData composable
import { usePathData } from '~/composables/usePathData';

// Get the path data from the composable
const { pathData } = usePathData();

const { data: categorylocal, error } = await useAsyncData(`${pathData.asyncDynamicName}`, () => queryContent(`${pathData.queryUrl}`).findOne())

if (!categorylocal.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page not found'
    })
}

</script>

<template>
    <div class="page-container">
        <p>
            {{ pathData }}
        </p>

        <ContentRenderer v-if="categorylocal" :value="categorylocal" />

    </div>

</template>