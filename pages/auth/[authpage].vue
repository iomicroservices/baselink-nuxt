<script lang="ts" setup>
definePageMeta({
    layout: 'minimal', // Specify the layout name here
    middleware: ['auth']
});
const { params } = useRoute();

// Check if the authpage is valid, otherwise redirect to /404
if (!['login', 'password-reset', 'register'].includes(params.authpage as string)) {
    await navigateTo('/404') // Redirect to /404 page
}
</script>

<template>
    <section class="section relative mx-auto min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8">
        <AuthLogin v-if="params.authpage === 'login'" />
        <AuthPasswordreset v-if="params.authpage === 'password-reset'" />
        <AuthRegister v-if="params.authpage === 'register'" />
    </section>
</template>