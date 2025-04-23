<script setup lang="ts">
const items = [{
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
}]
</script>

<template>
  <p class="text-center font-semibold text-lg">Service overview</p>
  <UAccordion :items="items" :ui="{ wrapper: 'flex flex-col w-full' }">
    <template #default="{ item, index, open }">
      <UButton color="gray" variant="ghost" class="border-b border-gray-200 dark:border-gray-800"
        :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }">
        <template #leading>
          <div class="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-600 flex items-center justify-center -my-1">
            <UIcon :name="item.icon" class="w-4 h-4 text-gray-900 dark:text-white" />
          </div>
        </template>

        <span class="text-left">{{ index + 1 }}. {{ item.label }}</span>

        <template #trailing>
          <UIcon name="i-heroicons-chevron-right-20-solid"
            class="w-5 h-5 ms-auto transform transition-transform duration-200" :class="[open && 'rotate-90']" />
        </template>
      </UButton>
    </template>
  </UAccordion>
</template>