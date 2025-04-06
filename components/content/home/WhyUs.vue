<script setup lang="ts">
    interface Props {
        title?: string
        description?: string
    }
    defineProps<Props>()
</script>

<template>
    <!-- Features -->
    <section class="section relative mx-auto">

        <!-- Grid -->
        <div class="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div class="lg:col-span-1">

                <h2 class="heading2">
                    <ContentSlot unwrap="p" name="title">
                        {{ title || 'Default Title' }}
                    </ContentSlot>
                </h2>

                <p class="text-xl mb-10">
                    <ContentSlot unwrap="p" name="description">
                        {{ description || 'Default Description' }}
                    </ContentSlot>
                </p>

            </div>
            <!-- End Col -->

            <div class="lg:col-span-2">
                <div class="grid sm:grid-cols-2 gap-8 md:gap-12">

                    <!-- Icon Block -->
                     <ContentSlot unwrap="p" name="items" />
                </div>
            </div>
            <!-- End Col -->
        </div>
        <!-- End Grid -->
    </section>
    <!-- End Features -->
</template>
