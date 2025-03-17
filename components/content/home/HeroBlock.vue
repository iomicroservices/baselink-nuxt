<template>
    <header class="section-hero relative mx-auto">
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
                    <h1>
                        <slot name="heading" />
                    </h1>
                </template>
                <template v-else>
                        <ContentSlot name="heading" />
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