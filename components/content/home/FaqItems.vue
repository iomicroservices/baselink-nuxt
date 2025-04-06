<script setup lang="ts">

    interface Props {
        question?: string
        answer?: string
    }

    defineProps<Props>()
    
</script>

<template>
    <div class="group flex flex-col rounded-lg  py-3 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
        tabindex="0">
        <div class="font-semibold flex cursor-pointer items-center justify-between">
            <h3>
                <ContentSlot unwrap="p" name="question">
                    {{ question || 'Default Question' }}
                </ContentSlot>
            </h3>
            <Icon name="material-symbols:expand-circle-right-outline-rounded" size="20"
                class="transition-all duration-500 group-focus:rotate-90" />
        </div>

        <div
            class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 text-gray-800 dark:text-slate-200">
            <ContentSlot name="answer">
                {{ answer || 'Default Answer' }}
            </ContentSlot>
        </div>
    </div>
</template>