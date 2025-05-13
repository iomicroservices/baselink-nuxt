<script setup lang="ts">
interface Props {
    title?: string
    description?: string
}

defineProps<Props>()

</script>

<template>
    <section class="section relative mx-auto">
        <h2 class="heading2">
            <ContentSlot unwrap="p" name="title">
                {{ title || "Default process title" }}
            </ContentSlot>
        </h2>
        <p class="text-lg max-w-[75%]">
            <ContentSlot unwrap="p" name="description">
                {{ description || "" }}
            </ContentSlot>
        </p>
        <div class="flex flex-wrap">
            <ContentSlot unwrap="p" name="items" />
        </div>
    </section>
</template>