<!-- components/MainLocations.vue -->
<template>
    <section class="locations-section">
        <p> {{ path }} </p>
        <h2>Regions in London</h2>
        <ul>
            <li v-for="region in regions" :key="region.slug">
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

<script setup lang="ts">

const path = useRoute()

// Define interfaces for the data structure

interface City {
    name: string;
    slug: string;
    region: Region[];
}

interface Region {
    name: string;
    slug: string;
    areas: Area[];
}

interface Area {
    name: string;
    postcodes: string[];
    slug: string;
}

const regions = ref<Region[]>([]); // Explicitly type the regions variable

// Fetch the locations data from the content directory
const { data: locationdata, error } = await useAsyncData('locations', () =>
    queryContent('/locations').findOne()
);

if (error.value) {
    console.error('Error fetching locations:', error.value);
} else {
    // Check if the city is London and extract the regions
    if (locationdata.value && locationdata.value.city.slug === 'london') {
        regions.value = locationdata.value.city.region; // Accessing the regions array
    }
}
</script>

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