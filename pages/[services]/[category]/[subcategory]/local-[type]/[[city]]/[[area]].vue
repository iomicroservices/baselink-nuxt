<script setup lang="ts">

// Import the usePathData composable
import { usePathData } from '~/composables/usePathData';

// Get the path data from the composable
const { pathData } = await usePathData();

const { data: subcategorylocal, error } = await useAsyncData(`${pathData.asyncDynamicName}`, () => queryContent(`${pathData.queryUrl}`).findOne())

if (!subcategorylocal.value) {
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

        <ContentRenderer v-if="subcategorylocal" :value="subcategorylocal" />

    </div>

</template>