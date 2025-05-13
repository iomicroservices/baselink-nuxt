<script setup lang="ts">

interface Props {
    images?: string[],
    basis?: string,
    mdbasis?: string,
    lgbasis?: string,
}

const props = withDefaults(defineProps<Props>(), {
    images: () => [
        '/images/home-cleaning/regular-cleaning.webp',
        '/images/commercial-cleaning/airbnb-rental-cleaning.webp',
        '/images/tradespeople/network-engineer/cctv-installation.webp',
        '/images/tradespeople/gas-heating-engineer/boiler-installation.webp',
        '/images/tradespeople/carpenter/carpenter.webp',
        '/images/tradespeople/removals/home-removals.webp',
        '/images/tradespeople/gardener/gardener.webp',
        '/images/mobile-car-wash/exterior-car-wash.webp',
    ],
    basis: 'basis-full',
    mdbasis: 'md:basis-1/2',
    lgbasis: 'lg:basis-1/3',
})

const carouselRef = ref()

onMounted(() => {
    setInterval(() => {
        if (!carouselRef.value) return

        if (carouselRef.value.page === carouselRef.value.pages) {
            return carouselRef.value.select(0)
        }

        carouselRef.value.next()
    }, 3000)
})
</script>

<template>
    <UCarousel
    ref="carouselRef"
    v-slot="{ item }"
    :items="props.images"
    :ui="{ item: `${props.basis} ${props.mdbasis} ${props.lgbasis}` }"
    class="rounded-lg overflow-hidden" indicators>
        <img :src="item" class="w-full" draggable="false">
    </UCarousel>
</template>