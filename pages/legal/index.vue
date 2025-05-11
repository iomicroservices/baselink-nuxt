<script lang="ts" setup>

const { data: legalarticle, error } = await useAsyncData('legal-posts', () => queryContent('/legal').sort({ title: -1 }).find())

if (error.value) {
  await navigateTo('/404')
}
</script>

<template>
  <div class="page-container">

    <h1 class="heading1 section-hero m-0 pb-5 max-w-[75%]">
      The legal bits
    </h1>

    <section class="section container mx-auto h-screen items-center ">

      <div class="grid gap-3 lg:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        <FeaturesCard v-for="item in legalarticle" :description="item.description" :published="item.published" :path="item._path">
            <!-- Override the "card-image" slot -->
            <template #card-image>
                <FeaturesCardimage :image="item.ogImage" :alt="item.description" />
            </template>

            <!-- Override the "card-link" slot -->
            <template #card-link>
                <FeaturesCardlink :path="item.path" :pathtxt="item.title" />
            </template>
        </FeaturesCard>

      </div>

    </section>
  </div>
</template>
