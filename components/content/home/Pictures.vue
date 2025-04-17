<template>
    <div class="flex container space-x-4 items-center justify-between">
        <div v-if="$slots.left" class="rounded-lg overflow-hidden">
            <ContentSlot unwrap="p" name="left" />
        </div>
        <div v-if="$slots.center" class="rounded-lg overflow-hidden">
            <ContentSlot unwrap="p" name="center"/>
        </div>
        <div v-if="$slots.right" class="rounded-lg overflow-hidden">
            <ContentSlot unwrap="p" name="right" />
        </div>
    </div>
</template>