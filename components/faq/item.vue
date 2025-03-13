<script setup lang="ts">
interface Props {
    question: string
    answer: string
    order: string
}

withDefaults(defineProps<Props>(), {
    question: 'question',
    answer: 'answer',
    order: '0',
})
</script>

<template>
    <div class="group flex flex-col rounded-lg bg-white dark:bg-slate-800 p-4 text-gray-800 dark:text-gray-200"
        :tabindex="order">
        <div class="font-semibold flex cursor-pointer items-center justify-between">
            <h3>{{ question }}</h3>
            <Icon name="material-symbols:expand-circle-right-outline-rounded" size="20"
                class="transition-all duration-500 group-focus:rotate-90" />
        </div>

        <div
            class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
            {{ answer }}
        </div>
    </div>
</template>
