<script setup lang="ts">
interface Props {
    title: string
}

withDefaults(defineProps<Props>(), {
    title: 'How to book a trusted professional',
})
</script>

<template>
    <section class="section">
        <div class="mx-auto">
            <h2 class="heading2">
                {{ title }}
            </h2>
            <div class="flex flex-wrap">
                <slot />
            </div>
        </div>
    </section>
</template>