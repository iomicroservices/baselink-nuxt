<script setup>
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
</script>

<template>
    <div class="font-spacegrotesk">
        <header>
            <SpeedInsights />
        </header>
        <main role="main">
            <slot />
        </main>
        <footer>
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
