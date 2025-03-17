<template>
    <section class="section mx-auto">
        <div class="flex container space-x-4 items-center justify-between">
            <div class="rounded-lg">
                <slot name="left" />
        </div>
        <div>
            <slot name="center" />
        </div>
        <div>
            <slot name="right" />
        </div>
        </div>
    </section>
</template>