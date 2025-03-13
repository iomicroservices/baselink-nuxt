<template>
    <section class="section relative mx-auto">
        <h2 class="heading2">
            <slot name="title">
                Frequently Asked Questions
            </slot>
        </h2>
        <div id="faqs" class=" space-y-2">
            <!-- insert FaqItem here in parent -->
            <slot />
        </div>
    </section>
</template>