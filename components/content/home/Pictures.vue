<template>
    <div class="flex container space-x-4 items-center justify-between">
        <div class="rounded-lg overflow-hidden">
            <ContentSlot unwrap="p" name="left" />
        </div>
        <div class="rounded-lg overflow-hidden">
            <ContentSlot unwrap="p" name="center" />
        </div>
        <div class="rounded-lg overflow-hidden">
            <ContentSlot unwrap="p" name="right" />
        </div>
    </div>
</template>