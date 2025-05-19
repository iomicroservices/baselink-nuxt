<script setup lang="ts">
import { footerData, socialLinks } from '@/data/index'
</script>

<template>
    <div class="py-5 border-t bg-white dark:bg-slate-700 dark:border-gray-600 mt-5 text-zinc-700 dark:text-zinc-300">
        <div class="px-6 container max-w-6xl mx-auto">
            <div class="flex justify-between gap-3">
                <div class="space-x-4">
                    <NuxtLink v-for="item in footerData.legal" :key="item.link" :to="item.link"
                        class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                        {{ item.name }}
                    </NuxtLink>
                </div>
                <FooterConnect :items="socialLinks" />
            </div>
        </div>
    </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
    transition: all 0.4s;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>