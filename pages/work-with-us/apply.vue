<script setup lang="ts">

definePageMeta({
    layout: 'recruit'
});

</script>

<template>
    <div class="page-container">

        <MainHeroCentredtop title="Join the BaseLink platform"
            description="Sign up to connect with local clients, get reliable jobs, and grow your business through one easy-to-use platform. We handle the admin so you can focus on what you do best."
            alt="Apply to join BaseLink as a cleaner or tradesperson" :dropdowns="[
                { icon: 'mdi-clock-outline', text: 'Work when and where you want' },
                { icon: 'mdi-calendar-remove-outline', text: 'Take time off when you need' },
                { icon: 'mdi-currency-gbp', text: 'Above-average industry pay rates' },
                { icon: 'mdi-map-marker-radius', text: 'Consistent, local job opportunities' },
                { icon: 'mdi-chart-line', text: 'Highly-rated pros earn more over time' },
                { icon: 'mdi-briefcase-account', text: 'Join as self-employed or private business' },
                { icon: 'mdi-file-document-multiple-outline', text: 'Easy-to-use platform — no paperwork' },
                { icon: 'mdi-headset', text: 'Dedicated support team' }
            ]">
        </MainHeroCentredtop>

        <hr class="divider" />


        <div class="px-[25px] py-[50px] md:py-[80px] w-full max-w-full mx-auto pt-0">
            <div class="flex flex-col lg:flex-row">
                <div class="flex-1 lg:w-2/3 lg:mr-10 mb-4 lg:mb-0">
                    <RecruitApply />
                </div>
                <div class="w-full lg:w-1/3 pt-10 lg:ps-10 space-y-5">
                    <div class="lg:sticky lg:top-20">
                        <div
                            class="p-5 bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 rounded-lg">
                            <RecruitFaqs service="home-cleaning" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>