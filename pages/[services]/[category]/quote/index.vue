<script setup lang="ts">
definePageMeta({
    layout: 'quote' // Specify the layout name here
});

const { params } = useRoute()

// QuoteHeader and MainHeader amended to accomodate for single-visit-cleaning as category instead of subcategory param

</script>

<template>
    <div class="page-container">
        <QuoteCommercialCleaningPage v-if="params.category === 'commercial-cleaning'" />
        <QuoteTradespeoplePage v-else-if="params.category === 'tradespeople'" />
        <QuoteMobileCarWashPage v-else-if="params.category === 'mobile-car-wash'" />
        <QuoteSingleCleaningPage v-else-if="params.category === 'single-visit-cleaning'" />
        <QuoteHomeCleaningPage v-else-if="params.category === 'home-cleaning'" />
        <QuoteHomeCleaningPage v-else />
    </div>
</template>