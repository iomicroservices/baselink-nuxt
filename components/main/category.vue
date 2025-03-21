<script lang="ts" setup>
interface Props {
    title?: string
}
withDefaults(defineProps<Props>(), {
    title: 'service name',
})
</script>

<template>
    <section class="section relative mx-auto">
        <h2 class="heading2">
            {{ title }}
        </h2>

        <div class="grid gap-3 lg:gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <CategoryItem name="Home cleaning" emoji="material-symbols-light:cleaning-outline-rounded"
                path="/services/home-cleaning/" />
            <CategoryItem name="Commercial cleaning" emoji="material-symbols-light:cleaning-bucket-outline-rounded"
                path="/services/commercial-cleaning/" />
            <CategoryItem name="Mobile car cleaning" emoji="material-symbols-light:local-car-wash-outline-rounded"
                path="/services/mobile-car-wash/" />
            <CategoryItem name="Handyman" emoji="material-symbols-light:handyman-outline"
                path="/services/tradespeople/handyman/" />
            <CategoryItem name="Plumber" emoji="material-symbols-light:water-pump-outline-rounded"
                path="/services/tradespeople/plumber/" />
            <CategoryItem name="Locksmith" emoji="material-symbols-light:vpn-key-outline-rounded"
                path="/services/tradespeople/locksmith/" />
            <CategoryItem name="Security guard" emoji="material-symbols-light:shield-person-outline-rounded"
                path="/services/security-guard/" />
            <CategoryItem name="Carpenter" emoji="material-symbols-light:carpenter"
                path="/services/tradespeople/carpenter/" />
            <CategoryItem name="Painter & decorator" emoji="material-symbols-light:format-paint-outline-rounded"
                path="/services/tradespeople/painter-decorator/" />
            <CategoryItem name="Housekeeper" emoji="material-symbols-light:dry-cleaning-rounded" path="/housekeeper/" />
            <CategoryItem name="Gas & heating" emoji="material-symbols-light:water-heater-outline"
                path="/services/tradespeople/gas-and-heating/" />
            <CategoryItem name="CCTV installation" emoji="material-symbols-light:speed-camera-outline-rounded"
                path="/services/tradespeople/network-engineer/cctv-installation/" />
            <CategoryItem name="TV wall mounting" emoji="material-symbols-light:tv-displays-outline"
                path="/services/tradespeople/handyman/tv-wall-mounting/" />
            <CategoryItem name="Smart home" emoji="material-symbols-light:broadcast-on-home"
                path="/services/tradespeople/network-engineer/smart-home/" />
        </div>
    </section>
</template>