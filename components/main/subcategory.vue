<script lang="ts" setup>

interface Props {
    title: string
    category: string
}
const props = withDefaults(defineProps<Props>(), {
    title: 'Services',
    category: 'commercial-cleaning',
})

// Get the contents of content directory sorted by most recent and filter by category
const { data } = await useAsyncData(`service-cards-${props.category}`, () =>
    queryContent('/services')
        .where({ category: props.category })
        .sort({ _id: 1 })
        .find(),
)

const formattedData = computed(() => {
    return data.value?.map((services) => {
        return {
            published: services.published || false,
            colour: services.colour || 'blue',
            description: services.description || 'no-feature',
            path: services._path || '#',
            pathtxt: services.pathtxt || 'Read more',
            image: services.image || '/blogs-img/blog.jpg',
        }
    }) || []
})

</script>

<!-- to exclude /services/ from url path, replace path valye above with the following
            path: services._path ? services._path.replace('/services', '') : '#',
-->

<template>
    <section class="section relative mx-auto">
        <h2 class="heading2">
            {{ title }}
        </h2>

        <div class="grid gap-3 lg:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <template v-for="post in formattedData" :key="post.title">

                <FeaturesCard 
                    :description="post.description"
                    :published="post.published"
                    :colour="post.colour"
                    :path="post.path">

                    <!-- Override the "card-image" slot -->
                    <template #card-image>
                        <FeaturesCardimage
                            :colour="post.colour"
                            :image="post.image"
                            :alt="post.description" />
                    </template>

                    <!-- Override the "card-link" slot -->
                    <template #card-link>
                        <FeaturesCardlink
                            :path="post.path"
                            :pathtxt="post.pathtxt" />
                    </template>
                </FeaturesCard>
            </template>

            <template v-if="data?.length === 0">
                <BlogEmpty />
            </template>
        </div>
    </section>
</template>