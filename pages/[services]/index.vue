<script setup lang="ts">
// Import the usePathData composable
import { usePathData } from '~/composables/usePathData';

// Get the path data from the composable
const { pathData } = usePathData();

const locality = ref({ name: 'London' });

const { data: servicespage, error } = await useAsyncData(`${pathData.asyncDynamicName}`, () => queryContent(`${pathData.queryUrl}`).findOne())

if (error.value)
    navigateTo('/404')

</script>


<template>

    <div class="page-container">
        <p>
            {{ pathData }}
        </p>

        <ContentRenderer v-if="servicespage" :value="servicespage" :data="locality" />
    </div>

</template>