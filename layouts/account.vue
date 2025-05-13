<script setup>
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
</script>

<template>
    <div class="font-spacegrotesk">
        <header class="fixed w-full bg-white dark:bg-slate-950 z-10">
            <MainHeader />
            <SpeedInsights />
        </header>
        <main role="main">
            <div class="p-9" />
            <slot />
        </main>
        <footer>
            <MainFooter />
        </footer>
    </div>
</template>

<style scoped>
.gd-container {
    display: grid;
    grid-template-rows: 1fr auto;
    min-height: 100vh;
}
</style>
