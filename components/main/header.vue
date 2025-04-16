<script setup lang="ts">
const route = useRoute()

const path = computed(() => route.fullPath.replace('/', ''))

const colorMode = useColorMode()
function onClick(val: string) {
    colorMode.preference = val
}
</script>

<template>
    <div class="py-3 border-b dark:border-gray-800 font-semibold">
        <div class="flex px-6 container max-w-6xl justify-between mx-auto items-center">
            <ul class="flex items-center space-x-5">
                <li class="text-base sm:text-xl font-bold">
                    <NuxtLink to="/" :class="{ underline: path === '' }">
                        baselink
                    </NuxtLink>
                </li>
            </ul>
            <ul class="flex items-center space-x-3 sm:space-x-6 text-sm sm:text-base">
                <li title="Services">
                    <NuxtLink to="/services" aria-label="Services" :class="{ underline: path === 'services' }">
                        Services
                    </NuxtLink>
                </li>
                <li title="Blog">
                    <NuxtLink to="/blog" aria-label="Blog" :class="{ underline: path === 'blog' }">
                        Blog
                    </NuxtLink>
                </li>
                <li title="About">
                    <NuxtLink to="/about" aria-label="About" :class="{ underline: path === 'about' }">
                        About
                    </NuxtLink>
                </li>
            </ul>
            <div class="flex items-center space-x-3 text-sm">
                <NuxtLink v-if="path !== ''" class="btn-secondary h-8 px-3" to="tel:03330388288">
                    03330 388 288
                </NuxtLink>
                <NuxtLink v-else class="btn-secondary h-8 px-3" to="/">
                    Login
                </NuxtLink>
                <NuxtLink class="btn-primary h-8 px-3" to="/">
                    Get started
                </NuxtLink>
                
                <ClientOnly>
                    <button v-if=" colorMode.value==='light'" name=" light-mode" title="Light"
                        class="transition-all ease-out hover:cursor-pointer flex" @click="onClick('dark')">
                        <Icon name="i-ph-moon-duotone" size="25" style="color: #4338ca" />
                    </button>
                    <button v-if="colorMode.value === 'dark'" name="dark-mode" title="Dark"
                        class="transition-all ease-out hover:cursor-pointer flex" @click="onClick('light')">
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
</template>
