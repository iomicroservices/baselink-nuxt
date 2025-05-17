<script setup lang="ts">

// Get the path data from the composable
const { pathData } = await usePathData();
const taskpage = pathData.pageData; // Access the page-specific service data

// const { data: taskpage, error } = await useAsyncData(`${pathData.asyncDynamicName}`, () => queryContent(`${pathData.queryUrl}`).findOne());

const locality = ref({ location: '' });

if (!taskpage.value) {
    await navigateTo('/404')
};

// if (!taskpage.value) {
//     throw createError({
//         statusCode: 404,
//         statusMessage: 'Page not found'
//     })
// }

</script>

<template>
    <div class="page-container">

        <ContentRenderer v-if="taskpage" :value="taskpage" :data="locality" />

        <MainCta />

        <MainCategory />

        <hr class="divider" />

        <MainContact />

    </div>
</template>