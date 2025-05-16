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
            <CategoryItem name="Home cleaning" emoji="material-symbols-light:cleaning-outline-rounded"
                :path="`/services/home-cleaning${pathExtension}`" />
            <CategoryItem name="Housekeeping" emoji="material-symbols-light:dry-cleaning-rounded"
                :path="`/services/home-cleaning/housekeeping${pathExtension}`" />
            <CategoryItem name="Commercial cleaning" emoji="material-symbols-light:cleaning-bucket-outline-rounded"
                :path="`/services/commercial-cleaning${pathExtension}`" />
            <CategoryItem name="Mobile car wash" emoji="material-symbols-light:local-car-wash-outline-rounded"
                :path="`/services/mobile-car-wash${pathExtension}`" />
            <CategoryItem name="Tradespeople" emoji="material-symbols-light:handyman-outline"
                :path="`/services/tradespeople${pathExtension}`" />
            <CategoryItem name="Handyman" emoji="material-symbols-light:tools-pliers-wire-stripper-outline"
                :path="`/services/tradespeople/handyman${pathExtension}`" />
            <CategoryItem name="TV wall mounting" emoji="material-symbols-light:tv-displays-outline"
                :path="`/services/tradespeople/handyman/tv-wall-mounting${pathExtension}`" />
            <CategoryItem name="Network engineer" emoji="material-symbols-light:network-wifi-3-bar-locked-rounded"
                :path="`/services/tradespeople/network-engineer${pathExtension}`" />
            <CategoryItem name="CCTV installation" emoji="material-symbols-light:speed-camera-outline-rounded"
                :path="`/services/tradespeople/network-engineer/cctv-installation${pathExtension}`" />
            <CategoryItem name="Smart home" emoji="material-symbols-light:broadcast-on-home"
                :path="`/services/tradespeople/network-engineer/smart-home-automation${pathExtension}`" />
            <CategoryItem name="Gas & heating" emoji="material-symbols-light:device-thermostat"
                :path="`/services/tradespeople/gas-heating-engineer${pathExtension}`" />
            <CategoryItem name="Boiler installation" emoji="material-symbols-light:water-heater"
                :path="`/services/tradespeople/gas-heating-engineer${pathExtension}`" />
            <CategoryItem name="Plumber" emoji="material-symbols-light:water-pump-outline-rounded"
                :path="`/services/tradespeople/plumber${pathExtension}`" />
            <CategoryItem name="Locksmith" emoji="material-symbols-light:vpn-key-outline-rounded"
                :path="`/services/tradespeople/locksmith${pathExtension}`" />
            <CategoryItem name="Carpenter" emoji="material-symbols-light:carpenter"
                :path="`/services/tradespeople/carpenter${pathExtension}`" />
            <CategoryItem name="Painter & decorator" emoji="material-symbols-light:format-paint-outline-rounded"
                :path="`/services/tradespeople/painter-decorator${pathExtension}`" />
            <CategoryItem name="Gardener" emoji="material-symbols-light:park-outline-rounded"
                :path="`/services/tradespeople/gardener${pathExtension}`" />
            <CategoryItem name="Certification" emoji="material-symbols-light:edit-document-outline-rounded"
                :path="`/services/tradespeople/certificates-reports${pathExtension}`" />
            <CategoryItem name="Removals" emoji="material-symbols-light:delivery-truck-speed-outline-rounded"
                :path="`/services/tradespeople/removals${pathExtension}`" />
        </div>
    </section>
</template>