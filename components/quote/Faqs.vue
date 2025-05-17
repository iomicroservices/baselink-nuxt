<script setup lang="ts">

interface Props {
    service?: string
}

interface FaqItem {
    label: string
    icon: string
    content: string
}

const props = defineProps<Props>()

const faqMap: Record<string, FaqItem[]> = {
    'default': [{
        label: 'Default requirements',
        icon: 'i-line-md-alert-circle-loop',
        content: "Fill in the form with as much detail as you can. We'll tailor your quote based on your needs, and we'll also include rates for optional extras you can bolt on later (either one-off or regularly). Got special instructions? You can add those anytime, up front or as you go. No fuss."
    }, {
        label: 'Bespoke quotes',
        icon: 'i-line-md-phone-call-loop',
        content: "We'll be in touch within one working day with your custom quote — and follow it up with a quick call to chat through everything. There's no contract to lock you in. Change or cancel cleans anytime with 24 hours' notice, no fees. The more we work together, the better your rates and terms get. Fair and flexible — just how it should be."
    }],
    'handyman': [{
        label: 'Your requirements',
        icon: 'i-line-md-alert-circle-loop',
        content: "Fill in the form with as much detail as you can. We'll tailor your quote based on your needs, and we'll also include rates for optional extras you can bolt on later (either one-off or regularly). Got special instructions? You can add those anytime, up front or as you go. No fuss."
    }, {
        label: 'Bespoke quotes',
        icon: 'i-line-md-phone-call-loop',
        content: "We'll be in touch within one working day with your custom quote — and follow it up with a quick call to chat through everything. There's no contract to lock you in. Change or cancel cleans anytime with 24 hours' notice, no fees. The more we work together, the better your rates and terms get. Fair and flexible — just how it should be."
    }, {
        label: 'Brilliant cleaners',
        icon: 'i-line-md-star-pulsating-loop',
        content: "We'll match you with skilled, experienced cleaners from your local area — all fully vetted, reliable, and paid at or above the local living wage (because good people deserve it). We've built a platform that's easy and rewarding to work on, so you get the best people, every time."
    }, {
        label: 'Cleaning visits',
        icon: 'i-line-md-beer-alt-twotone-loop',
        content: "You can provide your own cleaning products, or we can bring ours for a small fee — your choice. For bulky kit like hoovers, mops or buckets, we'll need those available on-site. We can meet someone on arrival or access the site using keys, codes or entry instructions — whatever works best for you.To keep standards high, we carry out spot checks and regular quality reviews."
    }, {
        label: 'Easy management',
        icon: 'i-line-md-cog-loop',
        content: "Our platform is built to flex around your business, not the other way around. Need to change something? No problem. You can reschedule, skip or add cleans, update sites, bolt on extras, or add one-off jobs anytime through your online portal. Billing's simple, too — clear, consolidated, and easy to manage. You'll also have a single point of contact to make sure everything runs smoothly and any feedback is picked up and sorted, fast."
    }],
    'carpenter': [{
        label: 'Your requirements',
        icon: 'i-line-md-alert-circle-loop',
        content: "Fill in the form with as much detail as you can. We'll tailor your quote based on your needs, and we'll also include rates for optional extras you can bolt on later (either one-off or regularly). Got special instructions? You can add those anytime, up front or as you go. No fuss."
    }, {
        label: 'Bespoke quotes',
        icon: 'i-line-md-phone-call-loop',
        content: "We'll be in touch within one working day with your custom quote — and follow it up with a quick call to chat through everything. There's no contract to lock you in. Change or cancel cleans anytime with 24 hours' notice, no fees. The more we work together, the better your rates and terms get. Fair and flexible — just how it should be."
    }],
    'commercial-cleaning': [{
        label: 'Your requirements',
        icon: 'i-line-md-alert-circle-loop',
        content: "Fill in the form with as much detail as you can. We'll tailor your quote based on your needs, and we'll also include rates for optional extras you can bolt on later (either one-off or regularly). Got special instructions? You can add those anytime, up front or as you go. No fuss."
    }, {
        label: 'Bespoke quotes',
        icon: 'i-line-md-phone-call-loop',
        content: "We'll be in touch within one working day with your custom quote — and follow it up with a quick call to chat through everything. There's no contract to lock you in. Change or cancel cleans anytime with 24 hours' notice, no fees. The more we work together, the better your rates and terms get. Fair and flexible — just how it should be."
    }, {
        label: 'Brilliant cleaners',
        icon: 'i-line-md-star-pulsating-loop',
        content: "We'll match you with skilled, experienced cleaners from your local area — all fully vetted, reliable, and paid at or above the local living wage (because good people deserve it). We've built a platform that's easy and rewarding to work on, so you get the best people, every time."
    }, {
        label: 'Cleaning visits',
        icon: 'i-line-md-beer-alt-twotone-loop',
        content: "You can provide your own cleaning products, or we can bring ours for a small fee — your choice. For bulky kit like hoovers, mops or buckets, we'll need those available on-site. We can meet someone on arrival or access the site using keys, codes or entry instructions — whatever works best for you.To keep standards high, we carry out spot checks and regular quality reviews."
    }, {
        label: 'Easy management',
        icon: 'i-line-md-cog-loop',
        content: "Our platform is built to flex around your business, not the other way around. Need to change something? No problem. You can reschedule, skip or add cleans, update sites, bolt on extras, or add one-off jobs anytime through your online portal. Billing's simple, too — clear, consolidated, and easy to manage. You'll also have a single point of contact to make sure everything runs smoothly and any feedback is picked up and sorted, fast."
    }],
    'home-cleaning': [{
        label: 'Your requirements',
        icon: 'i-line-md-alert-circle-loop',
        content: "Choose your property type, number of bedrooms and bathrooms, and let us know how often you'd like a clean. You can also add extras like dishwashing or ironing — it's all up to you. We'll recommend the number of hours based on what you've told us — but you're free to adjust it to suit your needs."
    }, {
        label: 'Instant pricing',
        icon: 'i-line-md-speed-loop',
        content: "As you fill in the form, your price updates in real time — no waiting around. Everything's clear and upfront, with no hidden fees."
    }, {
        label: 'Brilliant cleaners',
        icon: 'i-line-md-star-pulsating-loop',
        content: "We'll match you with a reliable, background-checked cleaner in your local area. We've built a platform that's easy and rewarding to work on, so you get the best people every time. You'll see your cleaner's details in your account before the clean takes place."
    }, {
        label: 'Cleaning visits',
        icon: 'i-line-md-beer-alt-twotone-loop',
        content: "Pick a time and day that works for you — whether it's a one-off deep clean or a regular weekly tidy. You're in full control of your schedule. You can provide your own cleaning products, or we can bring ours for a small fee — your choice. We can meet someone on arrival or access the site using keys, codes or entry instructions — whatever works best for you."
    }, {
        label: 'Easy management',
        icon: 'i-line-md-cog-loop',
        content: "Our platform is built to flex around your needs, not the other way around. Need to change something? Need to reschedule or skip a clean? Want to update instructions? No problem. You can make changes anytime through your online account."
    }],
    'single-visit-cleaning': [{
        label: 'Your requirements',
        icon: 'i-line-md-alert-circle-loop',
        content: "Choose your property type, number of bedrooms and bathrooms, and let us know how often you'd like a clean. You can also add extras like dishwashing or ironing — it's all up to you. We'll recommend the number of hours based on what you've told us — but you're free to adjust it to suit your needs."
    }, {
        label: 'Instant pricing',
        icon: 'i-line-md-speed-loop',
        content: "As you fill in the form, your price updates in real time — no waiting around. Everything's clear and upfront, with no hidden fees."
    }, {
        label: 'Brilliant cleaners',
        icon: 'i-line-md-star-pulsating-loop',
        content: "We'll match you with a reliable, background-checked cleaner in your local area. We've built a platform that's easy and rewarding to work on, so you get the best people every time. You'll see your cleaner's details in your account before the clean takes place."
    }, {
        label: 'Cleaning visits',
        icon: 'i-line-md-beer-alt-twotone-loop',
        content: "Pick a time and day that works for you — whether it's a one-off deep clean or a regular weekly tidy. You're in full control of your schedule. You can provide your own cleaning products, or we can bring ours for a small fee — your choice. We can meet someone on arrival or access the site using keys, codes or entry instructions — whatever works best for you."
    }, {
        label: 'Easy management',
        icon: 'i-line-md-cog-loop',
        content: "Our platform is built to flex around your needs, not the other way around. Need to change something? Need to reschedule or skip a clean? Want to update instructions? No problem. You can make changes anytime through your online account."
    }],
    'mobile-car-wash': [{
        label: 'Mobile car wash',
        icon: 'i-line-md-alert-circle-loop',
        content: "Fill in the form with as much detail as you can. We'll tailor your quote based on your needs, and we'll also include rates for optional extras you can bolt on later (either one-off or regularly). Got special instructions? You can add those anytime, up front or as you go. No fuss."
    }, {
        label: 'Bespoke quotes',
        icon: 'i-line-md-phone-call-loop',
        content: "We'll be in touch within one working day with your custom quote — and follow it up with a quick call to chat through everything. There's no contract to lock you in. Change or cancel cleans anytime with 24 hours' notice, no fees. The more we work together, the better your rates and terms get. Fair and flexible — just how it should be."
    }],
}

const accordionItems = computed(() => {
    return faqMap[props.service ?? 'default'] ?? faqMap.default
})

</script>

<template>
    <p class="text-center font-semibold text-lg">Service overview</p>
    <UAccordion :items="accordionItems" :ui="{ wrapper: 'flex flex-col w-full' }">
        <template #default="{ item, index, open }">
            <UButton color="gray" variant="ghost" class="border-b border-gray-200 dark:border-gray-800"
                :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }">
                <template #leading>
                    <div
                        class="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-600 flex items-center justify-center -my-1">
                        <UIcon :name="item.icon" class="w-4 h-4 text-gray-900 dark:text-white" />
                    </div>
                </template>

                <span class="text-left">{{ index + 1 }}. {{ item.label }}</span>

                <template #trailing>
                    <UIcon name="mdi:chevron-right" class="w-5 h-5 ms-auto transform transition-transform duration-200"
                        :class="[open && 'rotate-90']" />
                </template>
            </UButton>
        </template>
    </UAccordion>
</template>