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
                {{ title || "Default long form title" }}
            </ContentSlot>
        </h2>
        <div class="md:max-w-[75%] prose-a:text-primary-500 dark:prose-a:text-primary-400 prose-a:font-semibold hover:prose-a:underline">
            <ContentSlot name="description">
                {{ description || "Default long form description" }}
            </ContentSlot>
        </div>
    </section>
</template>