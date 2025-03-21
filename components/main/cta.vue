<script setup lang="ts">
interface Props {
    title?: string
    button?: string
    path?: string
}

withDefaults(defineProps<Props>(), {
    title: 'What are you waiting for?',
    button: 'Get a quote',
    path: '/',
})
</script>

<template>
    <section class="section mx-auto">
        <div class="relative p-8 lg:p-6 xl:p-8 rounded-2xl dark:bg-slate-800">
            <div
                class="absolute inset-0 w-full h-full transform translate-x-2 translate-y-2 bg-primary-400/20 rounded-2xl" />
            <div class="absolute inset-0 w-full h-full border-2 border-slate-800 rounded-2xl" />

            <div class="py-12 flex flex-col items-center">
                <h2 class="heading2 text-center relative">
                    {{ title }}
                </h2>

                <NuxtLink :to="path"
                    class="relative inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-white rounded-xl group">
                    <span
                        class="absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-out duration-200 rounded-xl bg-primary-600" />
                    <span class="absolute inset-0 border-2 border-slate-800 dark:border-slate-500 rounded-xl" />
                    <span class="relative">{{ button }}</span>
                    <svg class="w-5 h-5 ml-2 transition-all duration-200 ease-out transform group-hover:translate-x-1"
                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                    </svg>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
