<script setup>

// Generate heading content
useHead({
    title: 'Mobile Car Wash Services in London',
    meta: [
        {
            name: 'description',
            content:
                'eLandline specialises in virtual landlines and call management solutions, designed for the evolving needs of UK\'s small businesses. Effortless setup, superior service.',
        },
        {
            name: 'keywords',
            content: 'commercial cleaners, office cleaning, airbnb cleaning'
        }
    ],
    titleTemplate: '%s | BaseLink ',
})

// Generate OG Image
defineOgImageComponent('MobileCarWash', {
    headline: 'Greetings 👋',
    title: 'eLandline | UK Local & National Telephone Numbers for Businesses',
    description: 'eLandline delivers flexible UK local and national telephone numbers to enhance your business presence. Join and enjoy bespoke virtual landline services with easy management.',
    link: '/commercial-cleaning/commercial-cleaning-light.png',
})

</script>

<template>
    <div class="page-container">

        <MainHeroCentredtop title="Mobile car wash"
            description="Looking for a workplace cleaning service that really works? We provide a reliable, high quality service that's tailored to your needs. Find your sector below for more information about how our service can work for you."
            alt="" ogImage="/mobile-car-wash/mobile-car-wash-light.png"
            darkImage="/mobile-car-wash/mobile-car-wash-dark.png" />


        <MainSubcategory title="Professional cleaning services for every business" category="mobile-car-wash" />

        <MainCategory title="Cleaners and tradespeople near me " />


    </div>
</template>