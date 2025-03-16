<script lang="ts" setup>

// Generate heading content
useHead({
    title: 'Commercial Cleaning Services in London',
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
defineOgImageComponent('About', {
    headline: 'Greetings 👋',
    title: 'eLandline | UK Local & National Telephone Numbers for Businesses',
    description: 'eLandline delivers flexible UK local and national telephone numbers to enhance your business presence. Join and enjoy bespoke virtual landline services with easy management.',
    link: '/commercial-cleaning/commercial-cleaning-light.png',
})

</script>

<template>
    <div class="page-container">

        <MainHeroCentredtop title="Commercial cleaning"
            description="Looking for a workplace cleaning service that really works? We provide a reliable, high quality service that's tailored to your needs. Find your sector below for more information about how our service can work for you."
            alt="" ogImage="/commercial-cleaning/commercial-cleaning-light.png"
            darkImage="/commercial-cleaning/commercial-cleaning-dark.png" />


        <MainSubcategory title="Professional cleaning services for every business" :category="'removals'"
            :key="'category'" />

        <MainCategory title="Cleaners and tradespeople near me" />

        <MainFaqside>
            <!--Below is content for named slot Title; default value if not included-->
            <template #title>
                Frequently Asked Questions
            </template>
            <!--Below is default slot content-->
            <FaqItem order="0" question="1" answer="It's only £11 a month. It comes with lots of free features." />
            <FaqItem order="0" question="2" answer="It's only £11 a month. It comes with lots of free features." />
            <FaqItem order="0" question="3" answer="It's only £11 a month. It comes with lots of free features." />
            <FaqItem order="0" question="4" answer="It's only £11 a month. It comes with lots of free features." />
            <FaqItem order="0" question="5" answer="It's only £11 a month. It comes with lots of free features." />
            <FaqItem order="0" question="6" answer="It's only £11 a month. It comes with lots of free features." />
            <FaqItem order="0" question="7" answer="It's only £11 a month. It comes with lots of free features." />
            <FaqItem order="0" question="8" answer="It's only £11 a month. It comes with lots of free features." />
            <FaqItem order="0" question="9" answer="It's only £11 a month. It comes with lots of free features." />
            <FaqItem order="0" question="10" answer="It's only £11 a month. It comes with lots of free features." />
            <FaqItem order="0" question="11" answer="It's only £11 a month. It comes with lots of free features." />
        </MainFaqside>


    </div>
</template>