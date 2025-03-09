import { computed } from 'vue'
import { useRoute, createError, useAsyncData, queryContent } from '#imports'

export async function cleanLocation() {
    const route = useRoute()

    // Load the locations JSON
    const { data: locationData } = await useAsyncData('locations', () =>
        queryContent('/data').findOne()
    )

    // Get city from params, regardless of whether it's direct or under a service
    const citySlug = computed(() => {
        if (route.params.city) {
            return Array.isArray(route.params.city)
                ? route.params.city[0]
                : route.params.city
        }
        return null
    })

    // Find matching city
    const city = computed(() => {
        if (citySlug.value && locationData.value) {
            return locationData.value.city.slug === citySlug.value
                ? locationData.value.city
                : null
        }
        return null
    })

    // Throw 404 if city not found
    if (citySlug.value && !city.value) {
        throw createError({
            statusCode: 404,
            statusMessage: 'City not found'
        })
    }

    // Get area from params
    const areaSlug = computed(() => {
        if (route.params.area) {
            return Array.isArray(route.params.area)
                ? route.params.area[0]
                : route.params.area
        }
        return null
    })

    // Find matching area
    const area = computed(() => {
        if (areaSlug.value && city.value) {
            for (const region of city.value.region) {
                const found = region.areas.find((a: any) => a.slug === areaSlug.value)
                if (found) {
                    return { ...found, regionName: region.name }
                }
            }
        }
        return null
    })

    // Throw 404 if area not found when specified
    if (areaSlug.value && !area.value) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Area not found'
        })
    }

    // Get service from params
    const service = computed(() => {
        if (route.params.service) {
            return Array.isArray(route.params.service)
                ? route.params.service[0]
                : route.params.service
        }
        return null
    })

    return { city, area, service }
}