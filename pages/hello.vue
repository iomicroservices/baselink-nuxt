<template>
    <div class="page-container">

        <ContentRenderer v-if="page" :value="page" />

        <MainSubcategory :title="page?.title || 'none'" category="commercial-cleaning" />

    </div>

</template>

<script setup lang="ts">
const { data: page } = await useAsyncData('hello', () => queryContent('/hello/').findOne())

if (!page.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page not found'
    })
}

</script>