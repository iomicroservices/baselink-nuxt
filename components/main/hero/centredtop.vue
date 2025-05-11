<script setup lang="ts">
interface Props {
    title?: string
    description?: string
    alt?: string
    ogImage?: string
    darkImage?: string
}

withDefaults(defineProps<Props>(), {
    title: 'Default title prop',
    description: 'Default description prop',
    alt: 'Default alt prop',
    ogImage: '/images/blogs-img/blog.jpg',
    darkImage: '/images/blogs-img/blog.jpg',
})
</script>

<template>
    <header class="section-hero">
        <div class="relative mx-auto">
            <div class="container px-4 mx-auto">
                <div class="max-w-2xl mx-auto text-center items-center">

                    <!-- hero image section START -->
                    <NuxtImg :src="ogImage" :alt="alt" width="300"
                        class="mb-5 mx-auto transition-opacity dark:opacity-0" format="webp" />

                    <NuxtImg :src="darkImage" :alt="alt" width="300"
                        class="mb-5 mx-auto absolute top-0 left-1/2 -translate-x-1/2 transition-opacity opacity-0 dark:opacity-100"
                        format="webp" />
                    <!-- hero image section END -->

                    <!-- main hero section START -->
                    <div class="max-w-lg sm:max-w-xl lg:max-w-none mx-auto">
                        <h1 class="heading1">
                            {{ title }}
                        </h1>
                        <p class="dark:text-zinc-300 mx-auto mb-5">
                            {{ description }}
                        </p>


                        <!-- Buttons container -->
                        <div class="flex flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">

                            <FeaturesDropdown>
                                <template #custom-content>
                                    <div class="flex items-start">
                                        <span class="mr-2">🏠</span>
                                        <p>SLOT your number home: Effortlessly transfer your existing number to
                                            eLandline.</p>
                                    </div>
                                </template>

                            </FeaturesDropdown>

                        </div>
                    </div>
                    <!-- main hero section END -->
                </div>
            </div>
        </div>
    </header>
</template>