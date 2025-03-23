<script setup lang="ts">
// Import the usePathData composable
import { usePathData } from '~/composables/usePathData';

// Get the path data from the composable
const { pathData } = usePathData();

// const path = computed(() => route.fullPath.replace('/', ''))

const { data: categorypage, error } = await useAsyncData(`${pathData.asyncDynamicName}`, () => queryContent(`${pathData.queryUrl}`).findOne())

if (!categorypage.value)
    navigateTo('/404')

</script>

<template>
    <div class="page-container">
        <p>
            {{ pathData }}
        </p>

        <ContentRenderer v-if="categorypage" :value="categorypage" />

    </div>

</template>