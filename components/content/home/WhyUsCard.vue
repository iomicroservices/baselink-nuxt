<script setup lang="ts">
interface Props {
    title?: string
    description?: string
    icon?: string
}

defineProps<Props>()
</script>

<template>
    <!-- Icon Block -->
    <div class="flex gap-x-3">

        <ContentSlot unwrap="p" name="icon">
            <Icon :name="icon || 'material-symbols:expand-circle-right-outline-rounded'" size="30"
                class="text-blue-500 dark:text-blue-400 mt-1" />
        </ContentSlot>

        <div class="grow">
            <h3 class="text-2xl font-semibold">
                <ContentSlot unwrap="p" name="title">
                    {{ title || 'Why BaseLink?' }}
                </ContentSlot>
            </h3>
            <p class="mt-1 text-gray-800 dark:text-slate-200">
                <ContentSlot unwrap="p" name="description">
                    {{ description || 'Choose BaseLink because...' }}
                </ContentSlot>
            </p>
        </div>

    </div>
    <!-- End Icon Block -->
</template>