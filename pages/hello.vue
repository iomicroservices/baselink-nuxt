<template>
    <ContentRenderer v-if="page" :value="page" />

</template>

<script setup lang="ts">
const { data: page } = await useAsyncData('home', () => queryContent('/hello/').findOne())

if (!page.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page not found'
    })
}
</script>