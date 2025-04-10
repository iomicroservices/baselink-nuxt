<script setup lang="ts">

    interface Props {
        title?: string
        stepNumber: number
        description?: string
    }

    const { stepNumber } = defineProps<Props>()

    // Convert the string number to an integer, and calculate the border class
    const borderClass = `border-primary-${stepNumber * 200}`;
    
</script>

<template>
    <div class="w-auto lg:w-1/3 pb-5 lg:pb-0">
        <div class="flex flex-wrap items-center lg:mb-2">
            <div class="w-auto py-3 lg:p-3">
                <div
                    :class="['flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 text-xl text-gray-900 dark:text-gray-200 font-black bg-white dark:bg-slate-800 border-4', borderClass, 'rounded-full']">
                    {{ stepNumber }}
                </div>
            </div>
            <!-- Conditionally render the separator line -->
            <div class="lg:flex-1 py-3">
                <div v-if="stepNumber !== 3" class="bg-gray-300 h-px" />
            </div>
        </div>
        <div class="md:w-4/5">
            <h3 class="md:mb-2 text-2xl font-bold">
                <ContentSlot unwrap="p" name="title">
                    {{ title || "default title" }}
                </ContentSlot>
            </h3>
            <p class="text-gray-800 dark:text-slate-200">
                <ContentSlot unwrap="p" name="description">
                    {{ description || "default description" }}
                </ContentSlot>
            </p>
        </div>
    </div>
</template>
