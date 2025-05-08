<script setup lang="ts">

const { bookingBreakdown, totalPrice, bookingDate, bookingTime } = useBookingFormState();

const { query } = useRoute()

const userSelection = ref<string | null>(
    typeof query.selection === 'string' ? query.selection : null
)

const userTask = ref<string | null>(
    typeof query.task === 'string' ? query.task : null
)

// Clear bookingState on page load if no subcategory selected
onMounted(() => {
    if (userTask.value === null && userSelection.value === null) {
        totalPrice.value = 0
        bookingBreakdown.value = []
    }
});

</script>

<template>
    <div>
        <div class="section mx-auto py-0">
            <h1 class="heading1 md:max-w-[75%]">
                Your job details
            </h1>
        </div>
        <div class="px-[25px] py-[50px] md:py-[80px] w-full max-w-full mx-auto min-h-[1000px] pt-0">
            <div class="flex flex-col lg:flex-row">
                <div class="flex-1 lg:w-2/3 lg:mr-10 mb-4 lg:mb-0">

                    <QuoteTradespeopleCategory v-model:userSelection="userSelection"
                        :preselection="typeof query.selection === 'string' ? query.selection : undefined" />

                    <LazyQuoteTradespeopleCarpenterForm v-if="userSelection === 'carpenter'"
                        :task="userTask || undefined" />
                    <LazyQuoteTradespeopleCertificatesReportsForm v-if="userSelection === 'certificates-reports'"
                        :task="userTask || undefined" />
                    <LazyQuoteTradespeopleGardenerForm v-if="userSelection === 'gardener'"
                        :task="userTask || undefined" />
                    <LazyQuoteTradespeopleGasHeatingEngineerForm v-if="userSelection === 'gas-heating-engineer'"
                        :task="userTask || undefined" />
                    <LazyQuoteTradespeopleHandymanForm v-if="userSelection === 'handyman'"
                        :task="userTask || undefined" />
                    <LazyQuoteTradespeopleLocksmithForm v-if="userSelection === 'locksmith'"
                        :task="userTask || undefined" />
                    <LazyQuoteTradespeopleNetworkEngineerForm v-if="userSelection === 'network-engineer'"
                        :task="userTask || undefined" />
                    <LazyQuoteTradespeoplePainterDecoratorForm v-if="userSelection === 'painter-decorator'"
                        :task="userTask || undefined" />
                    <LazyQuoteTradespeoplePlumberForm v-if="userSelection === 'plumber'"
                        :task="userTask || undefined" />
                    <LazyQuoteTradespeopleRemovalsForm v-if="userSelection === 'removals'"
                        :task="userTask || undefined" />
                </div>

                <div class="w-full lg:w-1/3 pt-10 lg:ps-10 space-y-5">
                    <div class="p-5 bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 rounded-lg">
                        <QuoteFaqs :service='userSelection || undefined' />
                    </div>
                    <div class="lg:sticky lg:top-20">
                        <ClientOnly v-if="totalPrice > 0 || bookingBreakdown.length">
                            <div
                                class="p-5 bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 rounded-lg">
                                <QuoteBookingSummary :breakdown="bookingBreakdown" :total="totalPrice"
                                    :date="bookingDate" :time="bookingTime" />
                            </div>
                        </ClientOnly>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>