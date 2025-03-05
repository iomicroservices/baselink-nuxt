<script lang="ts" setup>
// Get Last 3 Publish Post from the content/blog directory
const { data } = await useAsyncData('feature-cards', () =>
    queryContent('/features').sort({ _id: -1 }).find(),
)

const formattedData = computed(() => {
    return data.value?.map((features) => {
        return {
            published: features.published || false,
            colour: features.colour || 'red',
            text: features.description || 'no-feature',
            path: features._path || '#',
            pathtxt: features.pathtxt || 'Read more',
            svg: features.svg || 'M64.142 102.96H39.24V78.522h24.903ZM39.24 122.131H20.373v-19.173H39.24Zm-18.866-19.173H4.53V87.167h15.843Zm43.394 24.814v-24.814c26.41 0 46.784-25.94 36.597-53.388c-3.775-10.15-11.694-18.42-22.26-22.181c-27.167-9.772-53.2 10.527-53.2 36.468H0c0-41.354 40.37-74.064 84.52-60.53c19.242 6.017 34.334 21.055 40.37 40.23c13.581 43.985-19.245 84.214-61.123 84.214Zm0 0',
        }
    }) || []
})
</script>

<template>
    <section class="container relative mx-auto">
        <div class="py-20 px-4">
            <div class="mx-auto text-gray-500">
                <div>
                    <h2 class="heading2">
                        Cleaners and tradespeople in London
                    </h2>
                </div>

                <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <template v-for="post in formattedData" :key="post.title">

                        <FeaturesCard :text="post.text" :published="post.published" :colour="post.colour"
                            :path="post.path" :pathtxt="post.pathtxt" :svg="post.svg">

                            <!-- Override the "card-link" slot -->
                            <template #card-link>
                                <FeaturesCardlink :path="post.path" :pathtxt="post.pathtxt" />
                            </template>

                            <!-- Override the "card-image" slot -->
                            <template #card-image>
                                <FeaturesCardsvg :colour="post.colour" :svg="post.svg" />
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