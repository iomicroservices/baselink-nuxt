<script setup lang="ts">
    interface Props {
        title?: string
        description?: string
        alt?: string
        ogImage?: string
        darkImage?: string
        dropdowns?: Array<{
            icon?: string
            text?: string
        }>
    }

    defineProps<Props>()

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
                            <ContentSlot unwrap="p" name="title">
                                {{ title || 'Default Title' }}
                            </ContentSlot>
                        </h1>

                        <p class="dark:text-zinc-300 text-xl mx-auto mb-5">
                            <ContentSlot unwrap="p" name="description">
                                {{ description || 'Default Description'}}
                            </ContentSlot>
                        </p>


                        <!-- Buttons container -->
                        <div class="flex flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">

                            <DropDown>
                                <template #custom-content>
                                    <div class="flex items-start" v-for="(dropdown, index) in dropdowns" :key="index">
                                        <span class="mr-2">{{ dropdown.icon }}</span>
                                        <p>{{ dropdown.text }}</p>
                                    </div>

                                </template>
                            </DropDown>

                        </div>
                    </div>
                    <!-- main hero section END -->
                </div>
            </div>
        </div>
    </header>
</template>