// composables/serviceData.ts

// Define interfaces for type safety
interface ServiceDataOptions {
    category: string
    subcategory: string  // Required since we'll handle the default in the page
    sortDirection?: 1 | -1
    limit?: number
}

interface FAQ {
    question: string
    answer: string
}

export const serviceData = (options: ServiceDataOptions) => {
    const {
        category,
        subcategory,
        sortDirection = 1,
        limit
    } = options

    // Get the contents of content/services directory
    const { data, error } = useAsyncData(
        `service-cards-${category}-${subcategory}`,
        () => {
            let query = queryContent('/services')
                .where({ category })
                .sort({ _id: sortDirection })

            if (limit) {
                query = query.limit(limit)
            }

            return query.find()
        }
    )

    // Error handling
    const hasError = computed(() => !!error.value)
    const errorMessage = computed(() => {
        if (error.value) {
            return 'Failed to load service data. Please try again later.'
        }
        return null
    })

    // Formatted data computed property
    const formattedData = computed(() => {
        if (!data.value) return []

        return data.value.map((services) => ({
            published: services.published || false,
            colour: services.colour || 'blue',
            text: services.description || 'no-feature',
            path: services._path ? services._path.replace('/services', '') : '#',
            pathtxt: services.pathtxt || 'Read more',
            image: services.image || '/blogs-img/blog.jpg',
            faqs: services.faqs || [],
            subcategory: services.subcategory || ''
        }))
    })

    // Selected FAQs computed property
    const selectedFaqs = computed(() => {
        const serviceFaqs = formattedData.value.find(
            service => service.subcategory === subcategory
        )
        return serviceFaqs?.faqs || []
    })

    // Structured data computed property
    const faqStructuredData = computed(() => {
        if (!selectedFaqs.value.length) return null

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

    return {
        formattedData,
        selectedFaqs,
        faqStructuredData,
        hasError,
        errorMessage,
        category,
        subcategory
    }
}