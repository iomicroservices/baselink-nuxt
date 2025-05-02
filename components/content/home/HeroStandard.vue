<script setup lang="ts">
const { getStarted, route } = useGetStarted();

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

const props = defineProps<Props>()
//store route info in route const
const { params } = route
//create pathCategory const if [category] param exists, otherwise return empty string
const pathCategory = params.category ? params.category : props.path1

</script>

<template>
    <section class="section-hero relative mx-auto">
        <div class="grid lg:grid-cols-2 gap-8 items-center">
            <!-- Content Column -->
            <div class="text-left">
                <!-- Badge -->
                <div class="inline-flex">
                    <span
                        class="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-200/20 text-xs text-blue-600 dark:text-blue-200 font-semibold relative border border-blue-200 dark:border-gray-700">
                        <ContentSlot unwrap="p" name="badge">
                            {{ badge || "Default badge" }}
                        </ContentSlot>
                    </span>
                </div>

                <!-- Main Content -->
                <div class="max-w-2xl lg:mx-0">
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
                    <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

                        <NuxtLink v-if="pathCategory" :to=getStarted class="btn-primary">
                            {{ button1 || "Request a quote" }}
                        </NuxtLink>

                        <a :href="path2 || 'tel:03330388288'" class="btn-secondary">
                            {{ button2 || "03330 388 288" }}
                        </a>

                    </div>

                </div>
            </div>

            <!-- Image Column -->
            <div class="relative w-full">
                <ContentSlot unwrap="p" name="image">
                    <NuxtImg class="w-full h-auto rounded-lg object-cover"
                        :src="`/${pathCategory}/${params.subcategory}.webp`" :alt="alt" format="webp" loading="eager"
                        quality="90" />
                </ContentSlot>
            </div>

            <!-- below uses route details instead of props - needs improvement to isolate category, subcategory, task from route
            <div class="relative w-full">
                <ContentSlot unwrap="p" name="image">
                    <NuxtImg class="w-full h-auto rounded-lg object-cover" :src="`/${pathCategory}/${params.subcategory}.webp`" alt="alt" format="webp"
                        loading="eager" quality="90" />
                </ContentSlot>
            </div>
            -->

        </div>
    </section>
</template>