<script setup lang="ts">

const selectedCity = "london" as string;

// Fetch the locations data from the content directory
const { data: locationdata, error } = await useAsyncData('locations', () =>
    queryContent('/locations').findOne()
);

// Create a ref to hold the city data
const cityData = ref(locationdata.value?.cities[selectedCity]);

if (error.value) {
    console.error('Error fetching locations:', error.value);
}
</script>

<template>
    <section class="locations-section">
        <h2>Regions in {{ cityData?.name }}</h2>
        <ul>
            <li v-for="region in cityData?.regions" :key="region.slug">
                <h3>{{ region.name }}</h3>
                <ul>
                    <li v-for="area in region.areas" :key="area.slug">
                        {{ area.name }} (Postcodes: {{ area.postcodes.join(', ') }})
                    </li>
                </ul>
            </li>
        </ul>
    </section>
</template>

<style scoped>
.locations-section {
    padding: 20px;
}

h2 {
    font-size: 24px;
}

h3 {
    font-size: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
}
</style>