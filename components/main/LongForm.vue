<script setup lang="ts">

interface Props {
    title?: string
    description?: string
};

defineProps<Props>()

</script>

<template>
    <section class="section relative mx-auto">
        <slot name="title">
            {{ title || "Default long form title" }}
        </slot>
        <div class="md:max-w-[75%]">
            <slot name="description">
                {{ description || "Default long form description" }}
            </slot>
        </div>
    </section>
</template>