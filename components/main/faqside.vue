<template>
    <section class="section relative mx-auto">
        <!-- Grid -->
        <div class="grid md:grid-cols-5 md:gap-10">
            <div class="md:col-span-2">
                <div class="max-w-md">
                    <h2 class="heading2">
                        <slot name="title">
                            Frequently asked questions
                        </slot>
                    </h2>
                </div>
            </div>
            <!-- End Col -->

            <div class="md:col-span-3">
                <!-- Accordion -->
                <div id="faqs" class="space-y-2">
                    <!-- insert FaqItem here in parent -->
                    <slot />
                </div>
                <!-- End Accordion -->
            </div>
            <!-- End Col -->
        </div>
        <!-- End Grid -->
    </section>
</template>