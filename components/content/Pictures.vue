<template>
    <div class="flex space-x-4 items-center justify-between">
        <div>
            <slot name="left" />
        </div>
        <div>
            <slot name="center" />
        </div>
        <div>
            <slot name="right" />
        </div>
    </div>
</template>