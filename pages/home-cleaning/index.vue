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

        <MainHeroStandard badge="badge" title="home cleaning" description="description" alt="alt"
            ogImage="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            button1="Get connected 🚀" button2="Find out more 👇" path1="/" path2="/" />

        <!-- Pass the formattedData to the subcategorystatic component -->
        <MainSubcategorystatic :title="category" :subcategory-data="formattedData" />

        <MainFaqside v-if="!hasError">
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
    </div>
</template>