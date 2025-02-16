<template>
    <header class="hero-block relative py-20 mx-auto">
        <div class="container px-4 mx-auto text-center">
            <!-- Badge Section -->
            <div class="mb-4">
                <!-- Use provided slot content if available; otherwise fall back to ContentSlot -->
                <template v-if="$slots.badge">
                    <slot name="badge" />
                </template>
                <template v-else>
                    <ContentSlot name="badge" />
                </template>
            </div>

            <!-- Title Section -->
            <div class="mb-4">
                <!-- Prefer slot content over markdown frontmatter -->
                <template v-if="$slots.title">
                    <slot name="title" />
                </template>
                <template v-else>
                    <ContentSlot name="title" />
                </template>
            </div>

            <!-- Description Section -->
            <div>
                <!-- Prefer slot content over markdown frontmatter -->
                <template v-if="$slots.description">
                    <slot name="description" />
                </template>
                <template v-else>
                    <ContentSlot name="description" />
                </template>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
// No extra script logic is needed here unless you want to add reactive data
// or computed properties to adjust styling or behavior.
</script>

<style scoped>
.hero-block {
    /* Example styling similar to Nuxt UI Pro blocks */
    background-color: #f9fafb;
    padding: 2rem 0;
}

.hero-block .container {
    max-width: 800px;
    margin: 0 auto;
}

.hero-block .mb-4 {
    margin-bottom: 1rem;
}
</style>
