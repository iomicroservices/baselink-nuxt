<script setup lang="ts">

const route = useRoute();

const { bookingBreakdown, totalPrice, bookingDate, bookingTime } = useBookingFormState();
const showSummaryDropdown = ref(false);


// const logoLink = computed(() => route.params.category ? `/services/${route.params.category}` : '/services');

const logoLink = computed(() => {
    if (route.params.category === 'single-visit-cleaning') {
        return `/services/home-cleaning/single-visit-cleaning`;
    }
    return route.params.category ? `/services/${route.params.category}` : '/services';
});

const colorMode = useColorMode();

function onClick(val: string) {
    colorMode.preference = val
}

</script>

<template>
    <nav class="border-b shadow-md dark:border-gray-800">
        <div class="mx-auto max-w-6xl px-2 sm:px-6 lg:px-6">
            <div class="relative flex h-14 items-center justify-between mx-2 sm:mx-0">
                <div class="flex flex-1 items-stretch justify-start">
                    <div name="logo" class="flex shrink-0">
                        <ClientOnly>
                            <NuxtLink :to="logoLink">
                                <img class="h-8 w-auto"
                                    :src="colorMode.value === 'dark' ? '/baselink-logo-dark.png' : '/baselink-logo.png'"
                                    alt=" BaseLink">
                            </NuxtLink>
                        </ClientOnly>
                    </div>
                </div>

                <div name="buttons"
                    class="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto space-x-3">
                    <div class="flex items-center space-x-3 text-sm">
                        <!-- Booking summary toggle on quote pages -->
                        <ClientOnly>
                            <div v-if="totalPrice > 0" class="lg:hidden relative">
                                <button class="btn-secondary h-8 px-3"
                                    @click="showSummaryDropdown = !showSummaryDropdown">
                                    {{ useFormatPrice(totalPrice) }}
                                </button>
                            </div>
                            <NuxtLink
                                :class="totalPrice > 0 ? 'hidden md:flex btn-secondary h-8 px-3' : 'flex btn-secondary h-8 px-3'"
                                to="tel:03330388288">
                                03330 388 288
                            </NuxtLink>
                        </ClientOnly>
                    </div>

                    <!-- Light/Dark Mode -->
                    <div class="relative">
                        <ClientOnly>
                            <button v-if="colorMode.value === 'light'" type="button" name="light-mode" title="Light"
                                class="transition-all ease-out hover:cursor-pointer flex" @click="onClick('dark')">
                                <span class="absolute -inset-1.5"></span>
                                <span class="sr-only">Switch to light mode</span>
                                <Icon name="i-ph-moon-duotone" size="25" style="color: #4f46e5" />
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
        <ClientOnly>
            <div v-if="showSummaryDropdown"
                class="lg:hidden transition ease-out duration-100 transform opacity-100 scale-100 bg-white dark:bg-gray-900 border-t shadow-lg"
                id="mobile-menu">
                <div class="space-y-1 p-5 md:px-10">
                    <QuoteBookingSummary :breakdown="bookingBreakdown" :total="totalPrice" :date="bookingDate"
                        :time="bookingTime" />
                </div>
            </div>
        </ClientOnly>
    </nav>
</template>