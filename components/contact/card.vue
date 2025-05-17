<script setup lang="ts">
interface Props {
    title?: string
    description?: string
    icon?: string | undefined
    path?: string
}

withDefaults(defineProps<Props>(), {
    title: "Contact method",
    description: "Contact details",
    icon: "mdi:email-outline",
    path: "/"
})
</script>

<template>
    <!-- Card -->
    <NuxtLink :to="path"
        class="group flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl hover:shadow-md focus:outline-hidden focus:shadow-md dark:bg-gray-900 dark:border-gray-800 hover:dark:bg-slate-800 hover:dark:border-green-400">
        <div class="p-4 md:p-5">
            <div class="flex gap-x-5">

                <UIcon :name="icon" class="w-8 h-8 md:w-10 md:h-10" />

                <div class="grow">
                    <h3
                        class="text-lg md:text-2xl group-hover:text-primary-600 font-semibold text-gray-800 dark:group-hover:text-green-500 dark:text-gray-200">
                        {{ title }}
                    </h3>
                    <p class="text-md md:text-xl mb-0 text-gray-700 dark:text-gray-300">
                        {{ description }}
                    </p>
                </div>
            </div>
        </div>
    </NuxtLink>
    <!-- End Card -->
</template>