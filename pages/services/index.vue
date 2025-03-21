<template>
    <div class="page-container">

        <ContentRenderer v-if="page" :value="page" />

    </div>

</template>

<script setup lang="ts">

const route = useRoute(); // Get the current route


const { data: page } = await useAsyncData('category-services', () => queryContent('/services/').findOne())

if (!page.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page not found'
    })
}

</script>