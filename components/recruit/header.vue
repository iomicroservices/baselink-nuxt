<script setup lang="ts">
const route = useRoute();

const colorMode = useColorMode();
function onClick(val: string) {
    colorMode.preference = val
};

const navigation = [
    { name: 'How to join', path: '/work-with-us#how-to-join' },
    { name: 'Why join', path: '/work-with-us#why-join' },
    { name: 'Eligibility', path: '/work-with-us#eligibility' },
];

const isHidden = computed(() => {
    return route.path.endsWith('/apply');
});

</script>

<template>
    <nav class="border-b shadow-md dark:border-gray-800">
        <div class="mx-auto max-w-6xl px-4 sm:px-6">
            <div class="relative flex h-14 items-center justify-between">
                <div name="logo" class="flex shrink-0 items-center">
                    <ClientOnly>
                        <NuxtLink to="/">
                            <img class="h-8 w-auto"
                                :src="colorMode.value === 'dark' ? '/baselink-logo-white.png' : '/baselink-logo.png'"
                                alt=" BaseLink">
                        </NuxtLink>
                    </ClientOnly>
                </div>

                <div v-if="!isHidden" class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div name="nav-items" class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-3">
                            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                            <NuxtLink v-for="item in navigation" :key="item.name" :to="item.path"
                                class="rounded-md px-3 py-2 text-sm font-semibold hover:bg-slate-300 hover:dark:bg-slate-800"
                                aria-current="page">{{ item.name }}</NuxtLink>
                        </div>
                    </div>
            </div>

            <div name="buttons" class="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6">

                <div v-if="!isHidden" class="flex items-center space-x-3 text-sm h-8">
                    <NuxtLink class="flex btn-primary h-8 px-3" to="/work-with-us/apply">
                        Apply to join
                    </NuxtLink>
                </div>

                <!-- Light/Dark Mode -->
                <div class="relative ml-3">
                    <ClientOnly>
                        <button v-if="colorMode.value === 'light'" type="button" name="light-mode" title="Light"
                            class="transition-all ease-out hover:cursor-pointer flex" @click="onClick('dark')">
                            <span class="absolute -inset-1.5"></span>
                            <span class="sr-only">Switch to light mode</span>
                            <Icon name="i-ph-moon-duotone" size="25" style="color: #5145cf" />
                        </button>
                        <button v-if="colorMode.value === 'dark'" name="dark-mode" title="Dark"
                            class="transition-all ease-out hover:cursor-pointer flex" @click="onClick('light')">
                            <span class="absolute -inset-1.5"></span>
                            <span class="sr-only">Switch to dark mode</span>
                            <Icon name="i-ph-sun-duotone" size="25" style="color: #ffcf00" />
                        </button>
                        <template #fallback>
                            <!-- this will be rendered on server side -->
                            <Icon name="svg-spinners:180-ring" size="20" />
                        </template>
                    </ClientOnly>
                </div>
            </div>
        </div>
        </div>
    </nav>

</template>