<script lang="ts" setup>
import { getPathExtension } from '@/utils/helper'

interface Props {
    title?: string
    description?: string
    category?: string
}
const props = defineProps<Props>()

const { params } = useRoute()
const routeCategory = props.category ? props.category : params.category || ''
const routeSubcategory = params.subcategory || routeCategory
const routeTask = params.task || routeSubcategory
const routeLocalType = params.type
const routeCity = params.city
const routeRegion = routeLocalType === 'region' ? params.area : ''
const routeArea = routeLocalType === 'area' ? params.area : ''

// Get the contents of content directory sorted by most recent and filter by category
const { data, error } = await useAsyncData(`service-cards-${routeCategory}`, () =>
    queryContent(`/services/${routeCategory}`)
        .where({
            category: routeCategory,
            subcategory: { $ne: Array.isArray(routeCategory) ? routeCategory[0] : routeCategory }, // Use the first element if it's an array
            task: { $ne: Array.isArray(routeSubcategory) ? routeSubcategory[0] : routeSubcategory }, // Use the first element if it's an array
        })
        .sort({ _id: 1 })
        .find(),
)

// If an error occurs, log it
if (error.value) {
    console.error('Error fetching service-cards data in subcategory component:', error.value);
}

const formattedData = computed(() => {
    return data.value?.map((services) => {
        // Base path from services
        const basePath = services._path || '#';

        // Get the path extension using the utility function
        const pathExtension = getPathExtension(routeCity, routeRegion, routeArea);

        // Combine base path with the path extension
        const fullPath = `${basePath}${pathExtension}`;

        return {
            published: services.published || false,
            colour: services.colour || 'blue',
            description: services.description || 'no-feature',
            path: fullPath || '#',
            pathtxt: services.pathtxt || 'Read more',
            image: services.image || '/blogs-img/blog.jpg',
        }
    }) || []
})

</script>

<template>
    <section class="section relative mx-auto">

        <h2 class="heading2">
            <ContentSlot unwrap="p" name="title">
                {{ title || 'Default Title' }}
            </ContentSlot>
        </h2>

        <p class="lg:max-w-[75%] text-xl mb-10">
            <ContentSlot unwrap="p" name="description">
                {{ description }}
            </ContentSlot>
        </p>

        <div class="grid gap-3 lg:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <template v-for="post in formattedData" :key="post.title">

                <FeaturesCard :description="post.description" :published="post.published" :colour="post.colour"
                    :path="post.path">

                    <!-- Override the "card-image" slot -->
                    <template #card-image>
                        <FeaturesCardimage :colour="post.colour" :image="post.image" :alt="post.description" />
                    </template>

                    <!-- Override the "card-link" slot -->
                    <template #card-link>
                        <FeaturesCardlink :path="post.path" :pathtxt="post.pathtxt" />
                    </template>
                </FeaturesCard>
            </template>

            <template v-if="data?.length === 0">
                <BlogEmpty />
            </template>
        </div>
    </section>
</template>