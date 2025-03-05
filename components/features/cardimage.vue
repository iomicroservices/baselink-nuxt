<script lang="ts" setup>
interface Props {
    colour: string
    image: string
    alt: string
}
withDefaults(defineProps<Props>(), {
    colour: 'blue',
    image: '/blog-img/blog.jpg',
    alt: 'image alt text',
})
</script>

<template>
    <div
        :class="`border border-${colour}-500/10 flex relative rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-${colour}-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950`">
        <!-- Use a 16:9 container -->
        <div class="w-full aspect-w-16 aspect-h-9">
            <NuxtImg format="webp" :src="image" :alt="`${alt}`" class="object-cover w-full h-full rounded-lg" />
        </div>
    </div>
</template>

