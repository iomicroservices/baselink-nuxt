<script lang="ts" setup>
interface Props {
    name: string
    emoji: string
    path: string
    stats: string
}
withDefaults(defineProps<Props>(), {
    name: 'service name',
    emoji: '👋',
    path: '/',
    stats: '644 tools',
})
</script>

<template>
    <div>
        <NuxtLink :to="path" data-clickable="Category:5:category-card"
            class="relative group overflow-hidden block h-full bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 rounded-xl group hover:shadow-lg hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500/20 dark:hover:ring-indigo-500">
            <div class="flex items-center p-6">
                <div
                    class="flex items-center justify-center flex-shrink-0 w-16 h-16 rounded bg-indigo-50 dark:bg-gray-800 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500">
                    <span class="text-4xl" role="img" aria-label="Business category">{{ emoji }}</span>
                </div>

                <div class="flex-grow ml-6">
                    <h3
                        class="text-lg font-semibold line-clamp-1 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-white">
                        {{ name }}
                    </h3>

                    <div class="inline-flex items-center mt-1">
                        <span class="text-gray-600 dark:text-gray-400 rounded">
                            {{ stats }}
                        </span>
                    </div>
                </div>

                <div class="flex-shrink-0 ml-4">
                    <svg class="w-5 h-5 text-gray-400 group-hover:text-indigo-500 transition-colors duration-200"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">
                        </path>
                    </svg>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>