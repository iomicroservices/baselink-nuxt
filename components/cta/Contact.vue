<script setup lang="ts">
interface Props {
    title: string
    description: string
}

withDefaults(defineProps<Props>(), {
    title: "Want to get in touch?",
    description: "We're here for you, Monday- Friday from 08:00 to 18:00, and on weekends from 08:00 to 17:00.",
})
</script>

<template>
    <section class="section">
        <div class="mx-auto max-w-[600px]">
            <!-- Title and Description Section -->
            <div class="text-center mb-12">
                <h2 class="heading2">{{ title }}</h2>
                <p class="text-lg">
                    {{ description }}
                </p>
            </div>

            <!-- Grid for Live Chat and Email Support Boxes -->
            <div class="grid grid-cols-2 gap-5">

                <CtaItem name="Live chat" image="https://picsum.photos/seed/picsum/500/500" path="/" />
                <CtaItem name="Email support" image="https://picsum.photos/seed/picsum/300/300" path="/" />

            </div>
        </div>
    </section>
</template>