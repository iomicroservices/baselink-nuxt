<script lang="ts" setup>

interface Props {
    title: string
    service: string
}
const props = withDefaults(defineProps<Props>(), {
    title: 'Services',
    service: 'commercial-cleaning',
})

// Get the contents of content/services directory sorted by most recent and filter by service
const { data } = await useAsyncData('service-cards', () =>
    queryContent('/services')
        .where({ service: props.service})
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
        <div class="mx-auto text-gray-500">
            <div>
                <h2 class="heading2">
                    {{ title }}
                </h2>
            </div>

            <div class="mt-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <template v-for="post in formattedData" :key="post.title">
                    
                    <FeaturesCard :text="post.text" :published="post.published" :colour="post.colour" :path="post.path">

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
    </section>
</template>
