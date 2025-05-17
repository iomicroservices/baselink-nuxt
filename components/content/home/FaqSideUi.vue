<script lang="ts" setup>

defineProps<{
    title?: string,
    faqs?: { label?: string; content?: string; icon?: string }[],
}>()

</script>

<template>
    <section class="lg:px-[25px] w-full max-w-full overflow-hidden relative mx-auto">
        <div
            class="px-[25px] lg:px-[50px] py-[50px] lg:py-[80px] lg:rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
            <div class="grid lg:grid-cols-5 lg:gap-10">
                <!-- Grid -->
                <div class="lg:col-span-2">
                    <div class="max-w-md">
                        <h2 class="heading2">
                            <ContentSlot unwrap="p" name="title">
                                {{ title || 'Frequently asked questions' }}
                            </ContentSlot>
                        </h2>
                    </div>
                </div> <!-- End Col -->

                <div class="lg:pt-2 lg:col-span-3 px-0 md:px-14 lg:px-0">

                    <UAccordion :items="faqs" open-icon="mdi:plus" close-icon="mdi:minus" color="primary"
                        variant="solid" size="md">

                        <template #item=" { item }">
                            <p class="text-black dark:text-white px-3">
                                {{ item.content }}
                            </p>
                        </template>

                    </UAccordion>

                </div> <!-- End Col -->
            </div> <!-- End Grid -->
        </div>
    </section>
</template>