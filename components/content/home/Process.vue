<script setup lang="ts">
interface Props {
    title?: string
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
        <div class="flex flex-wrap">
            <ContentSlot unwrap="p" name="items" />
        </div>
    </section>
</template>