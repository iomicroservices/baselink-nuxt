<template>
    <div class="page-container">

        <ContentRenderer v-if="page" :value="page" />

    </div>

</template>

<script setup lang="ts">

const route = useRoute(); // Get the current route
const service = route.params.category; // Extract the category from the route parameters


const { data: page } = await useAsyncData(`category-${service}`, () => queryContent(`${route.path }`).findOne()) // changed from ...(`/services/${service}`).findOne())

if (!page.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page not found'
    })
}

</script>