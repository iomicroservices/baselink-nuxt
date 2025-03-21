<script setup lang="ts">
interface Props {
    name?: string
    image?: string
    path?: string
}

withDefaults(defineProps<Props>(), {
    name: "Contact",
    image: "https://example.com/contact-icon.png",
    path: "/",
})
</script>

<template>
    <NuxtLink :to="path"
        class="flex flex-col items-center justify-center pb-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 cursor-pointer bg-gray-50 border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
        <!-- Use the 'image' prop for the image source -->
        <img :src="image" :alt="name" class="mb-4 w-24 h-24 object-cover" />
        <!-- Use the 'name' prop for the text -->
        <span class="text-lg font-semibold dark:text-white">{{ name }}</span>
    </NuxtLink>
</template>