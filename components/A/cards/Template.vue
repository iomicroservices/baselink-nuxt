<script lang="ts" setup>
interface Props {
    title: string
}
withDefaults(defineProps<Props>(), {
    title: 'service name',
})
</script>

<template>
    <section class="section container relative mx-auto">
        <h2 class="heading2">
            {{ title }}
        </h2>

        <div class="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <ACardsItem name="Home cleaning" emoji="✨" path="/home-cleaning/" />
            <ACardsItem name="Commercial cleaning" emoji="🫧" path="/commercial-cleaning/" />
            <ACardsItem name="Mobile car cleaning" emoji="🚗" path="/mobile-car-cleaning/" />
            <ACardsItem name="Handyman" emoji="👨‍🔧" path="/handyman/" />
            <ACardsItem name="Plumber" emoji="🪠" path="/plumber/" />
            <ACardsItem name="Locksmith" emoji="🗝️" path="/locksmith/" />
            <ACardsItem name="Security guard" emoji="👨‍✈️" path="/security-guard/" />
            <ACardsItem name="Carpenter" emoji="🪚" path="/carpenter/" />
            <ACardsItem name="Painter & decorator" emoji="🖌️" path="/painter-decorator/" />
            <ACardsItem name="Housekeeper" emoji="🧤" path="/housekeeper/" />
            <ACardsItem name="Gas & heating" emoji="🌡️" path="/gas-and-heating/" />
            <ACardsItem name="CCTV installation" emoji="📹" path="/cctv-installation/" />
            <ACardsItem name="TV wall mounting" emoji="📺" path="/tv-wall-mounting/" />
            <ACardsItem name="Smart home" emoji="🤖" path="/smart-home/" />
        </div>
    </section>
</template>