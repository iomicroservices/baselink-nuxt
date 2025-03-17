<!-- components/main/subcategorystatic.vue -->
<script lang="ts" setup>

interface Props {
    title: string
    subcategorydata: Array<{
        published: boolean
        colour: string
        description: string
        path: string
        pathtxt: string
        image: string
    }>
}

const props = withDefaults(defineProps<Props>(), {
    title: 'Services',
    subcategorydata: () => []
})
</script>

<template>
    <section class="section relative mx-auto">
        <h2 class="heading2">
            {{ title }}
        </h2>

        <div class="grid gap-3 lg:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <template v-for="post in subcategorydata" :key="post.pathtxt">
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

            <template v-if="subcategorydata.length === 0">
                <BlogEmpty />
            </template>
        </div>
    </section>
</template>