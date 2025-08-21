<script setup lang="ts">
</script>

<template>
    <div class="page-container">
        <header class="section-hero">
            <div class="relative mx-auto">
                <div class="container mx-auto">
                    <div class="max-w-2xl mx-auto text-center items-center">

                        <!-- hero image section START -->
                        <NuxtImg src="/images/commercial-cleaning/thank-you-light.png"
                            alt="Quick commercial cleaning quote with baselink.uk" width="250"
                            class="mb-5 mx-auto transition-opacity dark:opacity-0" format="webp" />

                        <NuxtImg src="/images/commercial-cleaning/thank-you-dark.png"
                            alt="Quick commercial cleaning quote with baselink.uk" width="250"
                            class="mb-5 mx-auto absolute top-0 left-1/2 -translate-x-1/2 transition-opacity opacity-0 dark:opacity-100"
                            format="webp" />
                        <!-- hero image section END -->

                        <!-- main hero section START -->
                        <div class="max-w-lg sm:max-w-xl lg:max-w-none mx-auto">
                            <h1 class="heading1">
                                Your payment has been processed successfully!
                            </h1>

                            <p class="dark:text-zinc-300 text-base mx-auto mb-5">
                                Thank you for completing payment. A receipt has been sent to your email address. We hope to see you again soon! Should you require any further assistance, you can do so by pinging us an email at <NuxtLink
                                    class="font-semibold underline text-green-500" to="mailto:hello@baselink.uk">
                                    hello@baselink.uk</NuxtLink>
                            </p>

                            <!-- add whilst you're here, which out our other services -->


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