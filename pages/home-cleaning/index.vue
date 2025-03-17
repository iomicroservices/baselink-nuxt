<!-- pages/[...slug].vue -->
<script lang="ts" setup>

// Handle routing logic in the page
const route = useRoute()
const routeSegments = route.path.split('/').filter(segment => segment)
const category = routeSegments[0] || ''
const subcategory = routeSegments[1] || category

// Use the composable with route-derived options
const {
    formattedData,
    selectedFaqs,
    faqStructuredData,
    hasError,
    errorMessage
} = serviceData({
    category,
    subcategory,
    sortDirection: 1
})


// Add the structured data to the page head
useHead(() => ({
    title: `${category} - ${subcategory}`,
    script: faqStructuredData.value ? [
        {
            type: 'application/ld+json',
            children: JSON.stringify(faqStructuredData.value)
        }
    ] : []
}))
</script>

<template>
    <div class="page-container">

        <MainHeroCentredtop title="Home cleaning"
            description="Looking for a workplace cleaning service that really works? We provide a reliable, high quality service that's tailored to your needs. Find your sector below for more information about how our service can work for you."
            alt="" ogImage="/mobile-car-wash/mobile-car-wash-light.png"
            darkImage="/mobile-car-wash/mobile-car-wash-dark.png" />

        <!-- Pass the formattedData to the subcategorystatic component -->
        <MainSubcategorystatic title="Hoem cleaning" :subcategorydata="formattedData.flatMap(item => item.subcategorydata)" />

        <MainFaqside v-if=" !hasError">
            <template #title>
                Frequently Asked Questions - {{ category }}
            </template>
            <template v-if="selectedFaqs.length">
                <FaqItem v-for="(faq, index) in selectedFaqs" :key="index" order="0" :question="faq.question"
                    :answer="faq.answer" />
            </template>
            <template v-else>
                <p>No FAQs available for this service.</p>
            </template>
            </MainFaqside>

            <div v-else class="text-red-600 p-4">
                {{ errorMessage }}
            </div>

            <MainCategory title="Cleaners and tradespeople near me " />

    </div>
</template>