<!-- components/main/subcategorystatic.vue -->
<script lang="ts" setup>
interface Props {
    title: string
    subcategoryData: Array<{
        published: boolean
        colour: string
        text: string
        path: string
        pathtxt: string
        image: string
    }>
}

const props = withDefaults(defineProps<Props>(), {
    title: 'Services',
    subcategoryData: () => []
})
</script>

<template>
    <section class="section relative mx-auto">
        <h2 class="heading2">
            {{ title }}
        </h2>

        <div class="grid gap-3 lg:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <template v-for="post in subcategoryData" :key="post.text">
                <FeaturesCard :text="post.text" :published="post.published" :colour="post.colour" :path="post.path">

                    <!-- Override the "card-image" slot -->
                    <template #card-image>
                        <FeaturesCardimage :colour="post.colour" :image="post.image" :alt="post.text" />
                    </template>

                    <!-- Override the "card-link" slot -->
                    <template #card-link>
                        <FeaturesCardlink :path="post.path" :pathtxt="post.pathtxt" />
                    </template>
                </FeaturesCard>
            </template>

            <template v-if="subcategoryData.length === 0">
                <BlogEmpty />
            </template>
        </div>
    </section>
</template>