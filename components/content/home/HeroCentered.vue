<script setup lang="ts">

interface Props {
    alt?: string
    badge?: string
    title?: string
    description?: string
    ogImage?: string
    colour?: string
    path?: string
    button1?: string
    button2?: string
}

defineProps<Props>()

</script>

<template>
    <header class="section-hero">
        <div class="relative container mx-auto">
            <div class="mb-10 mx-auto text-center">
                <!-- badge section START -->
                <div v-if="$slots.badge"
                    class="group relative inline-flex items-center rounded-full overflow-hidden shadow-3xl">
                    <div
                        class="animate-showLine absolute bottom-0 left-1/2 transform -translate-x-1/2 p-px mx-auto w-auto bg-gradient-to-r from-transparent via-yellowGreen-500 to-transparent" />
                    <div
                        class="flex flex-wrap sm:flex-nowrap items-center px-4 py-2 bg-primary-100 dark:bg-primary-200/20 rounded-full transition duration-300">
                        <span class="text-xs text-primary-600 dark:text-primary-200 font-semibold">
                            <ContentSlot unwrap="p" name="badge">
                                {{ badge || 'Default badge' }}
                            </ContentSlot>
                        </span>
                    </div>
                </div>
                <!-- badge section END -->

                <!-- main hero section START -->
                <div class="mx-auto">
                    <h1 class="heading1">
                        <ContentSlot unwrap="p" name="title"">
                            {{ title || 'Default Title' }}
                        </ContentSlot>
                    </h1>

                    <p class="dark:text-zinc-300 max-w-[90%] md:max-w-[75%] text-xl mx-auto mb-5">
                        <ContentSlot unwrap="p" name="description">
                            {{ description || 'Default Description' }}
                        </ContentSlot>
                    </p>

                    <!-- Buttons container -->
                    <div v-if="button1 || button2"
                        class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">

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
            <FeaturesCard :colour="colour" :path="path">
                <template #card-image>
                    <NuxtImg :src="ogImage" :alt="alt"
                        class="w-full object-cover h-32 rounded-t-2xl shadow-2xl backdrop-blur-md" format="webp"
                        style="clip-path: inset(0 0 0 0);" />
                </template>
            </FeaturesCard>
            <!-- hero image section END -->
        </div>
    </header>
</template>