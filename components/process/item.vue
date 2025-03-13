<script setup lang="ts">

interface Props {
    name: string
    stepNumber: string
    description: string
}

const props = withDefaults(defineProps<Props>(), {
    name: 'Step name',
    step: '1',
    description: 'Description of step details',
})

// Convert the string number to an integer, and calculate the border class
const borderClass = `border-primary-${parseInt(props.stepNumber) * 200}`;
</script>

<template>
    <div class="w-auto md:w-1/3 lg:w-1/3 pb-5 md:pb-0">
        <div class="flex flex-wrap items-center md:mb-2">
            <div class="w-auto py-3 md:p-3">
                <div
                    :class="['flex items-center justify-center w-12 h-12 md:w-16 md:h-16 text-xl text-gray-900 dark:text-gray-200 font-black bg-white dark:bg-slate-800 border-4', borderClass, 'rounded-full']">
                    {{ stepNumber }}
                </div>
            </div>
            <!-- Conditionally render the separator line -->
            <div class="md:flex-1 py-3">
                <div v-if="props.stepNumber !== '3'" class="bg-gray-300 h-px" />
            </div>
        </div>
        <div class="md:w-4/5">
            <h3 class="font-heading md:mb-2 text-2xl text-gray-900 dark:text-gray-200 font-bold">
                {{ name }}
            </h3>
            <p class="text-gray-700 dark:text-slate-300">
                {{ description }}
            </p>
        </div>
    </div>
</template>
