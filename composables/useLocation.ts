import { computed } from 'vue'
import { useRoute, createError, useAsyncData, queryContent } from '#imports'

export async function useLocation() {
    // 1. Access the current route and its parameters
    const route = useRoute()
    // Expecting route.params.city and optionally route.params.area

    // 2. Load the locations JSON (from /content/data.json in this example)
    const { data: locationData } = await useAsyncData('locations', () =>
        queryContent('/data').findOne()
    )

    // 3. Find the city object by comparing the JSON's city.slug with route.params.city i.e. Compute the city based on the route parameter.
    const city = computed(() => {
        if (route.params.city && locationData.value) {
            return locationData.value.city.slug === route.params.city
                ? locationData.value.city
                : null
        }
        return null
    })

    // 4. If a city slug is provided but no matching city is found, throw a 404 error.
    if (route.params.city && !city.value) {
        throw createError({
            statusCode: 404,
            statusMessage: 'City not found'
        })
    }

    // 5. If the route includes an area parameter, search through the city’s regions for a matching area.
    // We assume that area slugs are unique across all regions.
    // Compute the area from all regions in the city.
    const area = computed(() => {
        if (route.params.area && city.value) {
            for (const region of city.value.region) {
                const found = region.areas.find((a: any) => a.slug === route.params.area)
                if (found) {
                    // Attach the region name (or slug) if needed.
                    return { ...found, regionName: region.name }
                }
            }
        }
        return null
    })

    // 6. If an area slug is provided but no matching area is found, throw a 404.
    if (route.params.area && !area.value) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Area not found'
        })
    }

    return { city, area }
}