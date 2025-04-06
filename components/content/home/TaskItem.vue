<script setup lang="ts">
interface Props {
    title?: string
}

defineProps<Props>()
</script>

<template>
    <!-- Icon Block -->
    <li class="flex gap-x-3">
        <span
            class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-700 dark:bg-blue-800/30 dark:text-blue-300">
            <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12" />
            </svg>
        </span>
        <span class="text-gray-800 dark:text-neutral-200">
            <ContentSlot unwrap="p">
                {{ title || 'Task detail 1' }}
            </ContentSlot>
        </span>
    </li>
</template>