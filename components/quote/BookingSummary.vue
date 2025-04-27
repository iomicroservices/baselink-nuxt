<script setup lang="ts">

// Props
const props = defineProps<{
    breakdown: { label: string; price: number, units: number }[];
    total: number;
    date?: string;
    time?: string;
}>();
</script>

<template>
    <div class="w-full rounded-lg">

        <h2 class="text-center font-semibold text-lg mb-4">Booking Summary</h2>

        <!-- ✨ Show date/time if available -->
        <div v-if="props.date || props.time" class="mb-4 text-sm px-3">
            <div v-if="props.date" class="flex justify-between items-center">
                <span class="font-semibold">Booking Date</span> {{ formatShortDate(props.date) }}
            </div>
            <div v-if="props.time" class="flex justify-between items-center">
                <span class="font-semibold">Time</span> {{ props.time }}
            </div>
        </div>

        <div v-if="props.breakdown.length" class="space-y-2 text-sm px-3">
            <div v-for="(item, index) in props.breakdown" :key="index" class="flex justify-between items-center">
                <span>
                    {{ item.label }}
                    <template v-if="item.units && item.units > 1">
                        ({{ item.units }})
                    </template>
                </span>
                <span class="font-semibold">{{ useFormatPrice(item.price) }}</span>
            </div>
        </div>

        <div v-else class="text-center text-gray-500 px-3 py-4">
            No items to show.
        </div>

        <div class="mt-4 pt-4 border-t border-gray-300 dark:border-gray-700 flex justify-between items-center">
            <span class="font-bold">Total</span>
            <span class="font-bold">{{ useFormatPrice(props.total) }}</span>
        </div>

    </div>
</template>
