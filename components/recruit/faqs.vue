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
        label: 'Work your way',
        icon: 'i-line-md-calendar',
        content: "Fill in the form with as much detail as you can. We'll tailor your quote based on your needs, and we'll also include rates for optional extras you can bolt on later (either one-off or regularly). Got special instructions? You can add those anytime, up front or as you go. No fuss."
    }, {
        label: 'Above-average pay',
        icon: 'i-line-md-briefcase-plus-twotone',
        content: "We'll be in touch within one working day with your custom quote — and follow it up with a quick call to chat through everything. There's no contract to lock you in. Change or cancel cleans anytime with 24 hours' notice, no fees. The more we work together, the better your rates and terms get. Fair and flexible — just how it should be."
    }, {
        label: 'Flexible hours',
        icon: 'i-line-md-clock-loop',
        content: "We'll be in touch within one working day with your custom quote — and follow it up with a quick call to chat through everything. There's no contract to lock you in. Change or cancel cleans anytime with 24 hours' notice, no fees. The more we work together, the better your rates and terms get. Fair and flexible — just how it should be."
    }, {
        label: 'Local jobs',
        icon: 'i-line-md-map-marker-loop',
        content: "We'll be in touch within one working day with your custom quote — and follow it up with a quick call to chat through everything. There's no contract to lock you in. Change or cancel cleans anytime with 24 hours' notice, no fees. The more we work together, the better your rates and terms get. Fair and flexible — just how it should be."
    }, {
        label: 'Easy to use platform',
        icon: 'i-line-md-coffee-half-empty-twotone-loop',
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