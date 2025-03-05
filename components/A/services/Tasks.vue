<script lang="ts" setup>
// Get Last 3 Publish Post from the content/blog directory
const { data } = await useAsyncData('service-cards', () =>
    queryContent('services')
        .where({ service: 'commercial-cleaning'})
        .sort({ _id: -1 })
        .find(),
)

const formattedData = computed(() => {
    return data.value?.map((services) => {
        return {
            published: services.published || false,
            colour: services.colour || 'red',
            text: services.alt || 'no-feature',
            path: services._path ? services._path.replace('/services', '') : '#',
            pathtxt: services.pathtxt || 'Read more',
            image: services.image || '/blogs-img/blog.jpg',
        }
    }) || []
})
</script>

<template>
    <section class="section container relative mx-auto">
        <div class="px-4">
            <div class="mx-auto text-gray-500">
                <div>
                    <h2 class="heading2">
                        Commercial cleaning services
                    </h2>
                </div>

                <div class="mt-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <template v-for="post in formattedData" :key="post.title">
                        <FeaturesCard :text="post.text" :published="post.published" :colour="post.colour">

                            <!-- Override the "card-image" slot -->
                            <template #card-image>
                                <FeaturesCardimage
                                    :colour="post.colour"
                                    :image="post.image"
                                    :alt="post.text"/>
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
            </div>
        </div>
    </section>
</template>
