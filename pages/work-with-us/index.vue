<script setup lang="ts">

definePageMeta({
    layout: 'recruit'
});

const benefits = [
    [
        { benefit: "Work when and where you want", icon: "mdi-clock-outline" },
        { benefit: "Take time off when you need", icon: "mdi-calendar-remove-outline" },
        { benefit: "Above-average industry pay rates", icon: "mdi-currency-gbp" },
        { benefit: "Consistent, local job opportunities", icon: "mdi-map-marker-radius" }
    ],
    [
        { benefit: "Highly-rated pros earn more over time", icon: "mdi-chart-line" },
        { benefit: "Join as self-employed or private business", icon: "mdi-briefcase-account" },
        { benefit: "Easy-to-use platform — no paperwork", icon: "mdi-file-document-multiple-outline" },
        { benefit: "Dedicated support team", icon: "mdi-headset" }
    ]
]

</script>

<template>
    <div class="page-container">

        <MainHeroCentered badge="Work with us" title="Work with BaseLink as a cleaner or tradesperson"
            description="Join BaseLink's growing network of trusted professionals and get access to quality, local jobs across cleaning, maintenance, repairs and more. We'll handle the admin — you focus on what you do best."
            button1="/work-with-us/apply" button2="#why-join"
            alt="Work with BaseLink — Cleaners and tradespeople wanted">

            <template #image>
                <MainSlider />
            </template>

        </MainHeroCentered>

        <hr class="divider" />

        <RecruitProcess />

        <hr class="divider" />

        <MainLongForm class="-mb-8">

            <template #title>
                <h2 id="why-join" class="heading2">Why you should join BaseLink</h2>
            </template>

            <template #description>
                <p>BaseLink is a fast-growing, family-run property services platform based in London. We serve domestic
                    and commercial clients across major cities in the UK. We connect experienced professionals with
                    reliable, local customers — giving you total control over where and when you work.</p>
                <p>Whether you want full-time bookings, part-time flexibility or time off whenever it suits you, our
                    platform makes it easy. Join as a self-employed individual or a registered business and enjoy one of
                    the best-paying setups in the industry, with above-average rates and no franchise fees.</p>

                <p class="font-semibold pt-3">For cleaners:</p>
                <p>Looking for flexible, rewarding cleaning work? BaseLink offers consistent jobs with great pay, no
                    paperwork, and the freedom to choose your own schedule. Work close to home, take breaks when you
                    want, and focus on delivering great service — we'll handle the rest.</p>

                <p class="font-semibold pt-3">For tradespeople:</p>
                <p>Whether you're a plumber, handyman, network engineer or decorator, BaseLink helps you grow your trade
                    business on your own terms. We match you with quality customers nearby, keep your calendar filled,
                    and support you with bookings, payments, and customer comms — so you can get on with the job.</p>

                <p>Ready to work smarter?
                    <NuxtLink class=" text-primary-500 dark:text-primary-400 font-semibold hover:underline"
                        to="work-with-us/apply">
                        Join BaseLink today.
                    </NuxtLink>
                </p>
            </template>

        </MainLongForm>

        <section class="section pt-0 lg:max-w-[75%]">
            <div class="grid space-y-3 sm:gap-5 md:grid-cols-2 sm:space-y-0">
                <ul v-for="(column, colIndex) in benefits" :key="colIndex" class="space-y-3">
                    <li v-for="(item, itemIndex) in column" :key="itemIndex" class="flex max-w-85">
                        <span class="mr-3">
                            <UIcon :name="item.icon" size="20" class="text-indigo-600 dark:text-indigo-400" />
                        </span>
                        {{ item.benefit }}
                    </li>
                </ul>
            </div>
        </section>

        <hr class="divider" />

        <RecruitEligibility />

    </div>
</template>