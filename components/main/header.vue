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
        <div class="flex px-6 container max-w-6xl justify-between mx-auto items-baseline ">
            <ul class="flex items-baseline space-x-5">
                <li class="text-base sm:text-2xl font-bold">
                    <NuxtLink to="/" :class="{ underline: path === '' }">
                        baselink
                    </NuxtLink>
                </li>
            </ul>
            <ul class="flex items-center space-x-3 sm:space-x-6 text-sm sm:text-lg">
                <li>
                    <NuxtLink to="/blog" :class="{ underline: path === 'blog' }">
                        Blog
                    </NuxtLink>
                </li>
                <li title="About Me" :class="{ underline: path === 'about' }">
                    <NuxtLink to="/about" aria-label="About me">
                        About
                    </NuxtLink>
                </li>
                <li class="pt-1">
                    <ClientOnly>
                        <button v-if="colorMode.value === 'light'" name="light-mode" title="Light"
                            class="hover:scale-110 transition-all ease-out hover:cursor-pointer"
                            @click="onClick('dark')">
                            <Icon name="icon-park:moon" size="20" />
                        </button>
                        <button v-if="colorMode.value === 'dark'" name="dark-mode" title="Dark"
                            class="hover:scale-110 transition-all ease-out hover:cursor-pointer"
                            @click="onClick('light')">
                            <Icon name="icon-park-outline:sun" size="20" style="color: #ffcf00" />
                        </button>
                        <template #fallback>
                            <!-- this will be rendered on server side -->
                            <Icon name="svg-spinners:180-ring" size="20" />
                        </template>
                    </ClientOnly>
                </li>
            </ul>
        </div>
    </div>
</template>
