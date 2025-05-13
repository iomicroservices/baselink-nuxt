<script setup lang="ts">
import { footerData, socialLinks } from '@/data/index'
</script>

<template>
    <!-- ========== FOOTER ========== -->
    <div class="py-5 border-t bg-white dark:bg-slate-950 dark:border-gray-800 mt-5 text-zinc-700 dark:text-zinc-300">
        <div class="px-6 container max-w-6xl mx-auto">
            <!-- Grid -->
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
                <div class="col-span-full hidden lg:col-span-1 lg:block">
                    <FooterSite />
                </div>
                <!-- End Col -->

                <div>
                    <h4 class="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
                        Company
                    </h4>
                    <FooterLink :items="footerData.company" />

                    <h4 class="mt-7 text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
                        Resources
                    </h4>
                    <FooterLink :items="footerData.resources" />

                </div>
                <!-- End Col -->

                <div>
                    <h4 class="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
                        Services
                    </h4>
                    <FooterLink :items="footerData.services" />
                </div>
                <!-- End Col -->

                <div>
                    <h4 class="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
                        Coverage
                    </h4>
                    <FooterLink :items="footerData.locations" />
                </div>
                <!-- End Col -->

                <div>
                    <h4 class="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
                        Sectors
                    </h4>
                    <FooterLink :items="footerData.sectors" />
                </div>
                <!-- End Col -->

            </div>
            <!-- End Grid -->

            <div class="pt-5 mt-5 border-t border-gray-200 dark:border-neutral-700">
                <div class="sm:flex sm:justify-between sm:items-center">
                    <div class="flex flex-wrap items-center gap-3">

                        <UButton to="/" target="_blank" label="Work with us"
                            class="btn-primary h-10 font-semibold dark:text-white" />

                        <div class="space-x-4">
                            <NuxtLink
                                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                href="/legal/terms-of-service">Terms</NuxtLink>
                            <NuxtLink
                                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                href="/legal/privacy-policy">Privacy</NuxtLink>
                            <NuxtLink
                                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                href="/legal/cookie-policy">Cookies</NuxtLink>
                        </div>
                    </div>

                    <div class="flex flex-wrap justify-between items-center gap-3">
                        <div class="mt-3 sm:hidden">
                            <FooterSite />
                        </div>
                        <!-- Social Brands -->
                        <FooterConnect :items="socialLinks" />
                        <!-- End Social Brands -->
                    </div>
                    <!-- End Col -->
                </div>
            </div>
        </div>
    </div>
    <!-- ========== END FOOTER ========== -->
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