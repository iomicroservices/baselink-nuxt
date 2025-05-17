<script setup lang="ts">
interface Props {
    title?: string
    description?: string
}

withDefaults(defineProps<Props>(), {
    title: "Want to get in touch?",
    description: "We're here for you, Monday- Friday from 08:00 to 18:00, and on weekends from 08:00 to 17:00.",
})
</script>

<template>
    <section class="section relative mx-auto items-center">

        <!-- Title and Description Section -->
        <div class="text-center items-center justify-center">
            <h2 class="font-black text-gray-900 dark:text-zinc-200 text-4xl md:text-5xl mb-8">
                {{ title || "Want to getin touch?" }}
            </h2>
            <p class="text-lg md:max-w-[50%] mx-auto">
                {{ description || "We're here for you, Monday- Friday from 08:00 to 18:00, and on weekends from 08:00 to 17:00" }}
            </p>
        </div>

        <!-- Card Section -->
        <div class="max-w-4xl pt-10 px-5 mx-auto">
            <!-- Grid -->
            <div class="grid md:grid-cols-2 gap-3 sm:gap-6">
                <ContactCard icon="mdi:email-fast-outline" title="Email us" description="hello@baselink.uk"
                    path="mailto:hello@baselink.uk" />
                <ContactCard icon="mdi:phone-in-talk-outline" title="Call us" description="03330 388 288"
                    path="tel:+443330388288" />
            </div>
            <!-- End Grid -->
        </div>
        <!-- End Card Section -->

    </section>
</template>