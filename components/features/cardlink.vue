<script lang="ts" setup>
interface Props {
    path: string
    pathtxt: string
}
withDefaults(defineProps<Props>(), {
    path: '/',
    pathtxt: 'Read more',
})
</script>

<template>
    <div class="flex gap-3 py-4 border-t border-gray-200 dark:border-gray-800">
        <NuxtLink :to="path"
            class="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
            <span>{{ pathtxt }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 7l5 5-5 5m5-5H6" />
            </svg>
        </NuxtLink>
    </div>
</template>