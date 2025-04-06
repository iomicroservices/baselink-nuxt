<script lang="ts" setup>

interface Props {
    name?: string
    emoji?: string
    path?: string
}
withDefaults(defineProps<Props>(), {
    name: 'service name',
    emoji: '👋',
    path: '/',
})
</script>

<template>
    <div>
        <NuxtLink :to="path"
            class="relative group overflow-hidden block h-full rounded-xl group hover:shadow-lg bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">

            <!-- Change flex to column layout -->
            <div class="flex flex-col items-center p-6">

                <!-- Icon on top -->
                <span
                    class="flex items-end justify-center flex-shrink-0 w-20 h-20 rounded bg-indigo-50 dark:bg-gray-800 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-500">
                    <span class="text-5xl" role="img" :aria-label="`${name} category`">
                        <Icon :name="emoji" size="64" />
                    </span>
                </span>
                <!-- Add some margin top for separation; remove ml-6 because we're no longer in a row -->
                <span class="mt-4">
                    <h3 class="text-sm font-semibold text-center dark:text-white">
                        {{ name }}
                    </h3>
                </span>
            </div>
        </NuxtLink>
    </div>
</template>