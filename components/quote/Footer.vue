<template>
    <div class="py-5 bg-[#fefefe] dark:bg-slate-950 border-t dark:border-gray-800 text-zinc-700 dark:text-zinc-300">
        <div class="px-6 container max-w-6xl mx-auto text-center">
            Copyright © {{ new Date().getFullYear() }} Netronix Limited All Rights reserved. Company reg: 14555438
        </div>
    </div>
</template>

<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: all 0.4s;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>
