<script setup lang="ts">
defineProps<{
    image: string
    imageAlt: string
    darkImage: string
    darkImageAlt: string
}>()
</script>

<template>
    <header class="section-hero">
        <div class="relative mx-auto">
            <div class="container px-4 mx-auto">
                <div class="max-w-2xl mx-auto text-center items-center">

                    <!-- hero image section START -->
                    <NuxtImg :src="image" :alt="imageAlt" width="300"
                        class="mb-5 mx-auto transition-opacity dark:opacity-0 rounded-lg" format="webp" />

                    <NuxtImg :src="darkImage" :alt="darkImageAlt" width="300"
                        class="mb-5 mx-auto absolute top-0 left-1/2 -translate-x-1/2 transition-opacity opacity-0 dark:opacity-100 rounded-lg"
                        format="webp" />
                    <!-- hero image section END -->

                    <!-- main hero section START -->
                    <div class="max-w-lg sm:max-w-xl lg:max-w-none mx-auto">
                        <h1 class="heading1">
                            <slot name="title" />
                        </h1>
                        <p class="dark:text-zinc-300 mx-auto mb-5">
                            <slot name="description" />
                        </p>


                        <!-- Buttons container -->
                        <div class="flex flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">

                            <FeaturesDropdown>
                                <template #custom-content>
                                    <div class="flex items-start">
                                        <span class="mr-2">
                                            😊</span>
                                        <p>slot ddd</p>
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