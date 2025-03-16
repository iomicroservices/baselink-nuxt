<script lang="ts" setup>

// Get the contents of content/services directory sorted by most recent and filter by category
const { data } = await useAsyncData(`service-cards-test`, () =>
    queryContent('/services')
        .where({ category: 'commercial-cleaning' })
        .sort({ _id: 1 })
        .find(),
)

// Computed property to get values for each content file returned
const formattedData = computed(() => {
    return data.value?.map((services) => {
        return {
            published: services.published || false,
            colour: services.colour || 'blue',
            text: services.description || 'no-feature',
            path: services._path ? services._path.replace('/services', '') : '#',
            pathtxt: services.pathtxt || 'Read more',
            image: services.image || '/blogs-img/blog.jpg',
            faqs: services.faqs || [], // Returns the array of FAQ objects
            subcategory: services.subcategory || '' // Help with filtering
        }
    }) || []
})

// Computed property to get specific FAQs by subcategory
const selectedFaqs = computed(() => {
    const serviceFaqs = formattedData.value.find(
        service => service.subcategory === 'airbnb-rental-cleaning'
    )
    return serviceFaqs?.faqs || []
})


// Add interface for FAQ type
interface FAQ {
    question: string;
    answer: string;
}

// Add a computed property for structured data
const faqStructuredData = computed(() => {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": selectedFaqs.value.map((faq: FAQ) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    }
})

// Add the structured data to the page head
useHead({
    script: [
        {
            type: 'application/ld+json',
            children: computed(() => JSON.stringify(faqStructuredData.value))
        }
    ]
})

</script>

<template>
    <div class="page-container">
        <MainFaqside>
            <template #title>
                Frequently Asked Questions
            </template>
            <!-- Use the filtered FAQs -->
            <template v-if="selectedFaqs.length">
                <FaqItem v-for="(faq, index) in selectedFaqs" :key="index" order="0" :question="faq.question"
                    :answer="faq.answer" />
            </template>
            <template v-else>
                <p>No FAQs available</p>
            </template>
        </MainFaqside>
    </div>
</template>