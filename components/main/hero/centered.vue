<script setup lang="ts">
interface Props {
    alt?: string | undefined
    badge?: string | undefined
    title?: string | undefined
    description?: string | undefined
    ogImage?: string | undefined
    colour?: string | undefined
    path?: string | undefined
    button1?: string | undefined
    button2?: string | undefined
}

withDefaults(defineProps<Props>(), {
    badge: 'Badge prop',
    title: 'Hero title',
    description: 'Hero description',
    alt: 'Property services for domestic and commercial customers by BaseLink',
    ogImage: 'https://shuffle.dev/aurora-assets/headers/header-dark-theme-center.png',
    button1: '',
    button2: '',
})

</script>

<template>
    <header class="section-hero">
        <div class="relative mx-auto">
            <div class="mb-10 mx-auto text-left">
                <!-- badge section START -->
                <div v-if="$slots.badge || badge" class="inline-flex">
                    <span
                        class="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-xs text-blue-600 dark:text-blue-200 font-semibold relative border border-blue-200 dark:border-gray-700">
                        <ContentSlot unwrap="p" name="badge">
                            {{ badge || 'Default badge' }}
                        </ContentSlot>
                    </span>
                </div>
                <!-- badge section END -->

                <!-- main hero section START -->
                <div class="mx-auto">
                    <h1 class="heading1 md:max-w-[75%]">
                        <ContentSlot unwrap="p" name="title"">
                            {{ title || 'Default Title' }}
                        </ContentSlot>
                    </h1>

                    <p class=" dark:text-zinc-300 md:max-w-[75%] text-xl mb-5">
                        <ContentSlot unwrap="p" name="description">
                            {{ description || 'Default Description' }}
                        </ContentSlot>
                    </p>

                    <!-- Buttons container -->
                    <div v-if="button1 || button2"
                        class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">

                        <!-- Button 1 -->
                        <NuxtLink v-if="button1" :to="button1"
                            class="px-5 h-12 font-bold text-white inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-primary-600 to-violet-600 hover:from-violet-600 hover:to-primary-600 border border-transparent rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 dark:focus:ring-offset-gray-800">
                            Get started 🚀
                        </NuxtLink>

                        <!-- Button 2 -->
                        <NuxtLink v-if="button2" :to="button2"
                            class="px-5 h-12 font-bold text-gray-900 dark:text-gray-100 bg-slate-200 dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-lg flex items-center justify-center hover:bg-slate-300 hover:dark:bg-slate-800 transition-colors duration-300">
                            Find out more 👇
                        </NuxtLink>
                    </div>
                </div>
                <!-- main hero section END -->
            </div>

            <!-- hero image section START -->
            <div class="relative w-full">
                <ContentSlot unwrap="p" name="image">
                    <FeaturesCard :colour="colour" :path="path">
                        <template #card-image>
                            <NuxtImg :src="ogImage" :alt="alt"
                                class="w-full object-cover h-32 rounded-t-2xl shadow-2xl backdrop-blur-md" format="webp"
                                style="clip-path: inset(0 0 0 0);" />
                        </template>
                    </FeaturesCard>
                </ContentSlot>
            </div>
            <!-- hero image section END -->
        </div>
    </header>
</template>