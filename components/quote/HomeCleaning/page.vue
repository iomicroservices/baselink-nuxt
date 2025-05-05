<script setup lang="ts">
const { bookingBreakdown, totalPrice, bookingDate, bookingTime } = useBookingFormState();
</script>

<template>
    <div>
        <div class="section mx-auto py-0">
            <h1 class="heading1 md:max-w-[75%]">
                Instantly book your home clean
            </h1>
        </div>
        <div class="px-[25px] py-[50px] md:py-[80px] w-full max-w-full mx-auto pt-0">
            <div class="flex flex-col lg:flex-row">
                <div class="flex-1 lg:w-2/3 lg:mr-10 mb-4 lg:mb-0">
                    <QuoteHomeCleaningForm />
                </div>
                <div class="w-full lg:w-1/3 pt-10 lg:ps-10 space-y-5">
                    <div class="p-5 bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 rounded-lg">
                        <QuoteFaqs service="home-cleaning" />
                    </div>
                    <div class="lg:sticky lg:top-20">
                        <ClientOnly>
                            <div
                                class="p-5 bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 rounded-lg">
                                <QuoteBookingSummary v-if="bookingBreakdown.length || totalPrice"
                                    :breakdown="bookingBreakdown" :total="totalPrice" :date="bookingDate"
                                    :time="bookingTime" />
                            </div>
                        </ClientOnly>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>