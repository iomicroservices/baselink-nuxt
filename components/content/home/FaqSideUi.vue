<script lang="ts" setup>

defineProps<{
    title?: string,
    faqs?: { label?: string; content?: string; icon?: string }[],
}>()

</script>

<template>
    <section
        class="section relative mx-auto rounded-none xl:rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
        <div class="grid md:grid-cols-6 md:gap-10"><!-- Grid -->
        <div class="md:col-span-3">
            <div class="max-w-md">
                <h2 class="heading2">
                    <ContentSlot unwrap="p" name="title">
                        {{ title || 'Frequently asked questions' }}
                    </ContentSlot>
                </h2>
            </div>
        </div> <!-- End Col -->

        <div class="md:pt-2 md:col-span-3">

            <UAccordion :items="faqs" open-icon="i-heroicons-plus" close-icon="i-heroicons-minus" color="primary"
                variant="solid" size="md">

                <template #item=" { item }">
                    <p class="text-black dark:text-white px-3">
                        {{ item.content }}
                    </p>
                </template>

            </UAccordion>

        </div> <!-- End Col -->
        </div> <!-- End Grid -->
    </section>
</template>