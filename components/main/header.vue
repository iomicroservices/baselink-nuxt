<script setup lang="ts">
const user = useSupabaseUser();

const { getStarted, route } = useGetStarted();

const open = ref(false);
// Watch for route changes and set open to false
watch(route, () => {
    open.value = false;
});

const colorMode = useColorMode();

function onClick(val: string) {
    colorMode.preference = val
}

const navigation = computed(() => [
    { name: 'Services', path: '/services', current: route.path.startsWith('/services') },
    { name: 'Blog', path: '/blog', current: route.path.startsWith('/blog') },
    { name: 'About', path: '/about', current: route.path.startsWith('/about') },
]);

</script>

<template>
    <nav class="border-b shadow-md dark:border-gray-800">
        <div class="mx-auto max-w-6xl px-2 sm:px-6 lg:px-6">
            <div class="relative flex h-14 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <ClientOnly>
                        <!-- Mobile menu button-->
                        <button type="button"
                            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu" :aria-expanded="open ? open : 'false'">
                            <span class="sr-only">Open main menu</span>
                            <!-- Icon when menu is closed.
                        Menu open: "hidden", Menu closed: "block"-->
                            <svg @click="open = true" :class="open ? 'hidden' : 'block'" class="size-6" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <!-- Icon when menu is open.
                         Menu open: "block", Menu closed: "hidden"-->
                            <svg @click="open = false" :class="open ? 'block' : 'hidden'" class="size-6" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </ClientOnly>
                </div>

                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div name="logo" class="flex shrink-0 items-center">
                        <ClientOnly>
                            <NuxtLink to="/">
                                <img class="h-8 w-auto"
                                    :src="colorMode.value === 'dark' ? '/baselink-logo-white.png' : '/baselink-logo.png'"
                                    alt=" BaseLink">
                            </NuxtLink>
                        </ClientOnly>
                    </div>

                    <div name="nav-items" class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-3">
                            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                            <NuxtLink v-for="item in navigation" :key="item.name" :to="item.path"
                                class="rounded-md px-3 py-2 text-sm font-semibold"
                                :class="item.current ? 'bg-slate-200 dark:bg-slate-900' : 'hover:bg-slate-300 hover:dark:bg-slate-800'"
                                aria-current="page">{{ item.name }}</NuxtLink>
                        </div>
                    </div>
                </div>

                <div name="buttons"
                    class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                    <div class="flex items-center space-x-3 text-sm h-8">
                        <NuxtLink v-if="route.path.startsWith('/services')"
                            class="hidden sm:flex btn-secondary h-8 px-3" to="tel:03330388288">
                            03330 388 288
                        </NuxtLink>
                        <NuxtLink v-else-if="!user" class="hidden sm:flex btn-secondary h-8 px-3" to="/auth/login">
                            Login
                        </NuxtLink>
                        <NuxtLink v-if="user && !route.path.startsWith('/services')" to="/account" class="h-8 w-8">
                            <UAvatar chip-color="green" chip-text="" chip-position="top-right" size="sm" src=""
                                icon="mdi:account" alt="Avatar">
                            </UAvatar>
                        </NuxtLink>
                        <NuxtLink class="hidden sm:flex btn-primary h-8 px-3" :to="getStarted">
                            Get started
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

        <!-- Mobile menu, show/hide based on menu state. -->
        <div v-if="open" class="sm:hidden transition ease-out duration-100 transform opacity-100 scale-100"
            id="mobile-menu">
            <div class="space-y-1 px-2 pb-3 pt-2">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <NuxtLink v-for="item in navigation" :key="item.name" :to="item.path"
                    class="block rounded-md px-3 py-2 text-base font-semibold"
                    :class="item.current ? 'bg-slate-200 dark:bg-slate-900' : 'hover:bg-slate-300 hover:dark:bg-slate-800'"
                    aria-current="page">{{ item.name }}
                </NuxtLink>
                <div class="space-y-2">
                    <NuxtLink v-if="route.path.startsWith('/services')" class="w-full btn-secondary h-8 px-3"
                        to="tel:03330388288">
                        03330 388 288
                    </NuxtLink>
                    <NuxtLink class="w-full btn-secondary h-8 px-3" :to="user ? '/account' : '/auth/login'">
                        {{ user ? 'Account' : 'Login' }}
                    </NuxtLink>
                    <NuxtLink class="w-full btn-primary h-8 px-3" :to="getStarted">
                        Get started
                    </NuxtLink>
                </div>
            </div>
        </div>
    </nav>

</template>