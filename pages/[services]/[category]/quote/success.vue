<script setup lang="ts">
</script>

<template>
    <div class="page-container">
        <header class="section-hero">
            <div class="relative mx-auto">
                <div class="container mx-auto">
                    <div class="max-w-2xl mx-auto text-center items-center">

                        <!-- hero image section START -->
                        <NuxtImg src="/commercial-cleaning/thank-you-light.png"
                            alt="Quick commercial cleaning quote with baselink.uk" width="250"
                            class="mb-5 mx-auto transition-opacity dark:opacity-0" format="webp" />

                        <NuxtImg src="/commercial-cleaning/thank-you-dark.png"
                            alt="Quick commercial cleaning quote with baselink.uk" width="250"
                            class="mb-5 mx-auto absolute top-0 left-1/2 -translate-x-1/2 transition-opacity opacity-0 dark:opacity-100"
                            format="webp" />
                        <!-- hero image section END -->

                        <!-- main hero section START -->
                        <div class="max-w-lg sm:max-w-xl lg:max-w-none mx-auto">
                            <h1 class="heading1">
                                Nice one! We've received your quote request
                            </h1>

                            <p class="dark:text-zinc-300 text-base mx-auto mb-5">
                                Thanks for sending that over. Our team's on it and will be in touch within 1 business
                                day. We'll email over your quote, then follow up with a quick call to chat through the
                                details and answer any questions you might have. Got a question while you wait? Ping us
                                an email at <a class="font-semibold underline text-green-500"
                                    href="mailto:hello@baselink.uk">hello@baselink.uk</a>
                            </p>


                            <!-- Buttons container 
                            <div class="flex flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">

                                <DropDown>
                                    <template #custom-content>
                                        <div class="flex items-start" v-for="(dropdown, index) in dropdowns" :key="index">
                                            <span class="mr-2">{{ dropdown.icon }}</span>
                                            <p>{{ dropdown.text }}</p>
                                        </div>

                                    </template>
                                </DropDown>

                            </div>-->
                        </div>
                        <!-- main hero section END -->
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>