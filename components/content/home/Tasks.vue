<script setup lang="ts">

interface Props {
    title?: string
    description?: string
    path?: string
}
const props = defineProps<Props>()

const { getStarted, route } = useGetStarted();
//create pathCategory const if [category] param exists, otherwise return empty string
const pathCategory = route.params.category ? route.params.category : props.path

</script>

<template>
    <!-- Features -->
    <section class="section relative mx-auto">

        <!-- Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>

                <h2 class="heading2">
                    <ContentSlot unwrap="p" name="title">
                        {{ title || 'Default Title' }}
                    </ContentSlot>
                </h2>

                <p class="text-xl max-w-[100%] md:max-w-[75%] lg:max-w-[100%]">
                    <ContentSlot unwrap="p" name="description">
                        {{ description || 'Default Description' }}
                    </ContentSlot>
                </p>

            </div>
            <!-- End Col -->

            <div class="justify-self-center lg:justify-self-end">
                <!-- Card -->
                <div
                    class="p-4 relative md:p-10 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">

                    <div class="grid grid-cols-1 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                        <!-- List -->
                        <ul class="space-y-3 text-lg">
                            <ContentSlot unwrap="p" name="items" />
                        </ul>
                        <!-- End List -->
                    </div>

                    <!-- Buttons -->
                    <ClientOnly>
                        <div v-if="pathCategory" class="pt-4 flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
                            <NuxtLink :to=getStarted class="btn-primary">
                                Get a quote
                            </NuxtLink>
                        </div>
                    </ClientOnly>
                    <!-- End of Buttons -->

                </div>
                <!-- End Card -->
            </div>
            <!-- End Col -->
        </div>
        <!-- End Grid -->
    </section>
    <!-- End Features -->
</template>
