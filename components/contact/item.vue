<script setup lang="ts">
interface Props {
    title?: string
    icon?: string
    path?: string
}

defineProps<Props>()
</script>

<template>

    <!-- Card -->
    <NuxtLink :to="path"
        class="group flex flex-col shadow-2xs rounded-xl hover:shadow-md focus:outline-hidden focus:shadow-md bg-white border border-gray-200 dark:bg-gray-900 hover:dark:bg-slate-800 dark:border-gray-800 hover:dark:border-green-400">
        <div class="p-4">
            <div class="flex gap-x-5">
                <svg class="shrink-0 size-6 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>

                <h3
                    class="grow group-hover:text-indigo-700 font-semibold text-gray-800 dark:group-hover:text-green-500 dark:text-neutral-200">
                    {{ title || "Ask our community"}}
                </h3>

                <Icon :name="icon as string" size="20" />

            </div>
        </div>
    </NuxtLink>
    <!-- End Card -->

</template>