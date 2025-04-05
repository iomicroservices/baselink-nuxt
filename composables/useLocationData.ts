export const useLocationData = async () => {
    // Destructure and extract parameters from the route (type, city, area)
    const { params } = useRoute();
    const { type, city, area } = params as { type: string; city: string; area: string };

    // Fetch the locations data from the content directory
    const { data: locationsData, error } = await useAsyncData('locations', () =>
        queryContent('/locations').findOne()
    );
    // If there's an error, log it to the console
    if (error.value) {
        console.error('Error fetching locationData in useLocationData composable:', error.value);
    }

    // Create a ref to hold the city data
    const cityData = ref(locationsData.value?.cities[city]);

    // Retrieve the area and/or region data based on url params
    let selectedRegion = null;
    let selectedArea = null;

    if (params.type === 'region' && params.area) {
        selectedRegion = cityData.value?.regions.find((region: { slug: string }) => region.slug === params.area) || null;
    } else if (params.type === 'area' && params.area) {
        // Find area directly by searching through all regions' areas
        for (const region of cityData.value?.regions || []) {
            const area = region.areas.find((area: { slug: string }) => area.slug === params.area);
            if (area) {
                selectedArea = area;
                selectedRegion = region; // Store the parent region if needed
                break;
            }
        }
    }

    // If a region slug is provided but no matching region is found, throw a 404 error.
    if (params.type === 'region' && params.area && !selectedRegion) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Region not found'
        })
    }

    // If an area slug is provided but no matching area is found, throw a 404 error.
    if (params.type === 'area' && params.area && !selectedArea) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Area not found'
        })
    }

    // one value of either the city, region or area name to be used in content
    const inLocation = computed(() => {
        if (params.type === 'city') {
            return `in ${cityData.value?.name}`;
        } else if (params.type === 'region') {
            return `in ${selectedRegion?.name}`;
        } else if (params.type === 'area') {
            return `in ${selectedArea?.name}`;
        }
        return null;
    });

    // Return a nested object under contentData
    return {
        locationData: {
            routeLocations: {
                routeLocalType: params.type,
                routeCity: params.city,
                routeArea: params.area
            },
            selectedLocations: {
                selectedRegion,
                selectedArea
            },
            // cityData, removed but may be needed for other places
            inLocation
        }
    };
};