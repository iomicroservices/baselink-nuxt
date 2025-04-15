<script setup lang="ts">
interface Props {
    title?: string
    description?: string
}

defineProps<Props>()
</script>

<template>
    <section class="section">
        <div class="mx-auto max-w-[600px]">

            <!-- Title and Description Section -->
            <div class="md:text-center mb-10">

                <h2 class="heading2">
                    <ContentSlot unwrap="p" name="title">
                        {{ title || "Want to get in touch?"}}
                    </ContentSlot>
                </h2>

                <p class="text-lg">
                    <ContentSlot unwrap="p" name="description">
                        {{ description || "We're here for you, Monday-Friday from 08:00 to 18:00, and on weekends from 09:00 to 17:00" }}
                    </ContentSlot>
                </p>

            </div>

            <!-- Grid for Live Chat and Email Support Boxes -->
            <div class="grid grid-cols-1 gap-3 ">

                <ContactItem name="Live chat" image="https://picsum.photos/seed/picsum/500/500" path="/" />
                <ContactItem name="Email support" image="https://picsum.photos/seed/picsum/300/300" path="/" />
                <ContactItem name="Email support" image="https://picsum.photos/seed/picsum/300/300" path="/" />

            </div>
        </div>
    </section>
</template>