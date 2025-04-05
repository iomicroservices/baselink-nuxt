<script lang="ts" setup>

    interface Props {
        title?: string
        faqs?: Array<{
            question?: string
            answer?: string
        }>
    }

    defineProps<Props>()

</script>

<template>
    <section class="section relative mx-auto">
        <!-- Grid -->
        <div class="grid md:grid-cols-5 md:gap-10">
            <div class="md:col-span-2">
                <div class="max-w-md">
                    <h2 class="heading2">
                        <ContentSlot unwrap="p" name="title">
                            {{ title || 'Frequently asked questions' }}
                        </ContentSlot>
                    </h2>
                </div>
            </div>
            <!-- End Col -->

            <div class="md:col-span-3">
                <!-- Accordion -->
                <div id="faqs" class="space-y-2">
                    <ContentSlot v-if="!faqs || faqs.length === 0" unwrap="p" name="faqs">
                        <p>No FAQs available.</p>
                    </ContentSlot>
                    <!-- insert FaqItem here in parent -->
                    <div v-else v-for="(faq, index) in faqs" :key="index">
                        <!-- Pass the faq data to FaqItems component -->
                        <FaqItems :question="faq.question" :answer="faq.answer" />
                    </div>
                    <!-- End Accordion -->
                </div>
                <!-- End Col -->
            </div>
            <!-- End Grid -->
        </div>
    </section>
</template>