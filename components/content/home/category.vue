<script lang="ts" setup>

import { getPathExtension } from '@/utils/helper'

const { params } = useRoute()

const routeLocalType = params.type
const routeCity = params.city
const routeRegion = routeLocalType === 'region' ? params.area : ''
const routeArea = routeLocalType === 'area' ? params.area : ''

// Get the path extension using the utility function
const pathExtension = getPathExtension(routeCity, routeRegion, routeArea);

interface Props {
    title?: string,
    description?: string,
}
defineProps<Props>()
</script>

<template>
    <section class="section relative  mx-auto">
        <h2 class="heading2">
            <ContentSlot unwrap="p" name="title">
                {{ title || 'Find the best local cleaners, housekeepers and tradespeople' }}
            </ContentSlot>
        </h2>
        <p class="text-lg md:max-w-[75%]">
            <ContentSlot unwrap="p" name="description">
                {{ description || '' }}
            </ContentSlot>
        </p>
        <!-- turn the below into a slot and populate programmatically ?  -->
        <div class="grid gap-3 lg:gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <CategoryItem name="Home cleaning" emoji="mdi:spray-bottle"
                :path="`/services/home-cleaning${pathExtension}`" />
            <CategoryItem name="Housekeeping" emoji="mdi:hanger"
                :path="`/services/home-cleaning/housekeeping${pathExtension}`" />
            <CategoryItem name="Commercial cleaning" emoji="mdi:chart-bubble"
                :path="`/services/commercial-cleaning${pathExtension}`" />
            <CategoryItem name="Mobile car wash" emoji="mdi:car-wash"
                :path="`/services/mobile-car-wash${pathExtension}`" />
            <CategoryItem name="Tradespeople" emoji="mdi:tools" :path="`/services/tradespeople${pathExtension}`" />
            <CategoryItem name="Handyman" emoji="mdi:pliers"
                :path="`/services/tradespeople/handyman${pathExtension}`" />
            <CategoryItem name="TV wall mounting" emoji="mdi:television-classic"
                :path="`/services/tradespeople/handyman/tv-wall-mounting${pathExtension}`" />
            <CategoryItem name="Network engineer" emoji="mdi:wifi-strength-3-lock"
                :path="`/services/tradespeople/network-engineer${pathExtension}`" />
            <CategoryItem name="CCTV installation" emoji="mdi:cctv"
                :path="`/services/tradespeople/network-engineer/cctv-installation${pathExtension}`" />
            <CategoryItem name="Smart home" emoji="mdi:cast-connected"
                :path="`/services/tradespeople/network-engineer/smart-home-automation${pathExtension}`" />
            <CategoryItem name="Gas & heating" emoji="mdi:thermometer-lines"
                :path="`/services/tradespeople/gas-heating-engineer${pathExtension}`" />
            <CategoryItem name="Boiler installation" emoji="mdi:water-boiler"
                :path="`/services/tradespeople/gas-heating-engineer${pathExtension}`" />
            <CategoryItem name="Plumber" emoji="mdi:pipe-leak"
                :path="`/services/tradespeople/plumber${pathExtension}`" />
            <CategoryItem name="Locksmith" emoji="mdi:key-chain"
                :path="`/services/tradespeople/locksmith${pathExtension}`" />
            <CategoryItem name="Carpenter" emoji="mdi:hand-saw"
                :path="`/services/tradespeople/carpenter${pathExtension}`" />
            <CategoryItem name="Painter & decorator" emoji="mdi:brush-variant"
                :path="`/services/tradespeople/painter-decorator${pathExtension}`" />
            <CategoryItem name="Gardener" emoji="mdi:mower-bag"
                :path="`/services/tradespeople/gardener${pathExtension}`" />
            <CategoryItem name="Certification" emoji="mdi:certificate"
                :path="`/services/tradespeople/certificates-reports${pathExtension}`" />
            <CategoryItem name="Removals" emoji="mdi:van-utility"
                :path="`/services/tradespeople/removals${pathExtension}`" />
        </div>
    </section>
</template>