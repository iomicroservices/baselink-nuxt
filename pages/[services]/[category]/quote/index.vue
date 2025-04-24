<script setup lang="ts">
definePageMeta({
    layout: 'quote' // Specify the layout name here
});

const { params } = useRoute()

</script>

<template>
    <div class="page-container">
        <QuoteCommercialCleaningPage v-if="params.category === 'commercial-cleaning'" />
        <QuoteHomeCleaningPage v-else />
    </div>
</template>