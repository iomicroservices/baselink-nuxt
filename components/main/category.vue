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

        <div class="grid gap-3 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <CategoryItem name="Home cleaning" emoji="✨" path="/home-cleaning/" />
            <CategoryItem name="Commercial cleaning" emoji="🫧" path="/commercial-cleaning/" />
            <CategoryItem name="Mobile car cleaning" emoji="🚗" path="/mobile-car-cleaning/" />
            <CategoryItem name="Handyman" emoji="👨‍🔧" path="/handyman/" />
            <CategoryItem name="Plumber" emoji="🪠" path="/plumber/" />
            <CategoryItem name="Locksmith" emoji="🗝️" path="/locksmith/" />
            <CategoryItem name="Security guard" emoji="👨‍✈️" path="/security-guard/" />
            <CategoryItem name="Carpenter" emoji="🪚" path="/carpenter/" />
            <CategoryItem name="Painter & decorator" emoji="🖌️" path="/painter-decorator/" />
            <CategoryItem name="Housekeeper" emoji="🧤" path="/housekeeper/" />
            <CategoryItem name="Gas & heating" emoji="🌡️" path="/gas-and-heating/" />
            <CategoryItem name="CCTV installation" emoji="📹" path="/cctv-installation/" />
            <CategoryItem name="TV wall mounting" emoji="📺" path="/tv-wall-mounting/" />
            <CategoryItem name="Smart home" emoji="🤖" path="/smart-home/" />
        </div>
    </section>
</template>