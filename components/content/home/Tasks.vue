<script setup lang="ts">

interface Props {
    title?: string
    description?: string
    path?: string
}

const props = defineProps<Props>()
//store route info in route const
const { params } = useRoute()
//create pathCategory const if [category] param exists, otherwise return empty string
const pathCategory = params.category ? params.category : props.path

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

                    <!--
                    <div>
                        <span class="me-3 text-gray-500 dark:text-neutral-400">From</span>
                        <span class="text-4xl font-bold text-gray-800 dark:text-neutral-200">£19</span>
                        <span class="text-lg font-bold text-gray-800 dark:text-neutral-200">.00</span>
                        <span class="ms-3 text-gray-500 dark:text-neutral-400">/ hour</span>
                    </div>
                    -->

                    <div class="grid grid-cols-1 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">

                        <!-- List -->
                        <ul class="space-y-2">
                            <ContentSlot unwrap="p" name="items" />
                        </ul>
                        <!-- End List -->
                    </div>

                    <!-- Buttons -->
                    <div class="pt-4 flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
                        <NuxtLink v-if="pathCategory" :to="`/services/${pathCategory}/quote`" class="btn-primary">
                            Get a quote
                        </NuxtLink>
                    </div>
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
