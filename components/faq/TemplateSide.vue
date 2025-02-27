<template>
    <section class="section">
        <!-- FAQ -->
        <div class="mx-auto">
            <!-- Grid -->
            <div class="grid md:grid-cols-5 md:gap-10">
                <div class="md:col-span-2">
                    <div class="max-w-md">
                        <h2 class="heading2">Frequently asked questions</h2>
                    </div>
                </div>
                <!-- End Col -->

                <div class="md:col-span-3">
                    <!-- Accordion -->
                    <div class="space-y-2" id="faqs">
                        <!-- insert FaqItem here in parent -->
                        <slot />
                    </div>
                    <!-- End Accordion -->
                </div>
                <!-- End Col -->
            </div>
            <!-- End Grid -->
        </div>
        <!-- End FAQ -->
    </section>
</template>