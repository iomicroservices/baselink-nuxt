<script lang="ts" setup>
definePageMeta({
    layout: 'minimal', // Specify the layout name here
    middleware: ['auth']
});

await navigateTo('/auth/login')

</script>

<template>
    <div class="page-container">
        <section class="section relative mx-auto">
            <h1 class="heading1">
                Auth index page
            </h1>
        </section>
    </div>
</template>