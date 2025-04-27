<script setup lang="ts">
const items = [{
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
}]
</script>

<template>
    <p class="text-center font-semibold text-lg">Service overview</p>
    <UAccordion :items="items" :ui="{ wrapper: 'flex flex-col w-full' }">
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
                    <UIcon name="i-heroicons-chevron-right-20-solid"
                        class="w-5 h-5 ms-auto transform transition-transform duration-200"
                        :class="[open && 'rotate-90']" />
                </template>
            </UButton>
        </template>
    </UAccordion>
</template>