<script setup lang="ts">
import { ContentSlot } from '#components'

interface Props {
    badge?: string
    title?: string
    description?: string
    alt?: string
    ogImage?: string
    button1?: string
    button2?: string
    path1?: string
    path2?: string
}

withDefaults(defineProps<Props>(), {
    alt: 'Get a virtual landline number for your business in the UK',
    ogImage: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
    button1: 'Get connected 🚀',
    button2: 'Find out more 👇',
    path1: '/',
    path2: '/',
})
</script>

<template>
    <section class="section-hero relative mx-auto">
        <div class="grid lg:grid-cols-2 gap-8 items-center">
            <!-- Content Column -->
            <div class="text-center lg:text-left">
                <!-- Badge -->
                <div class="inline-flex">
                    <span
                        class="px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-200/20 text-xs text-primary-600 dark:text-primary-200 font-semibold">
                        <ContentSlot unwrap="p" name="badge">
                            {{ badge || "Only £11/month • Unlimited minutes" }}
                        </ContentSlot>
                    </span>
                </div>

                <!-- Main Content -->
                <div class="max-w-xl mx-auto lg:mx-0">
                    <h1 class="heading1">
                        <ContentSlot unwrap="p" name="title">
                            {{ title || 'Default Description' }}
                        </ContentSlot>
                    </h1>

                    <p class="text-lg pb-5">
                        <ContentSlot unwrap="p" name="description">
                            {{ description || 'Default Description' }}
                        </ContentSlot>
                    </p>

                    <!-- Buttons -->
                    <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <NuxtLink :to="path1" class="btn-primary">
                            {{ button1 }}
                        </NuxtLink>

                        <NuxtLink :to="path2" class="btn-secondary">
                            {{ button2 }}
                        </NuxtLink>
                    </div>

                </div>
            </div>

            <!-- Image Column -->
            <div class="relative w-full">
                <ContentSlot unwrap="p" name="image">
                    <NuxtImg class="w-full h-auto rounded-lg object-cover" :src="ogImage" :alt="alt" format="webp"
                        loading="eager" quality="90" />
                </ContentSlot>
            </div>
        </div>
    </section>
</template>