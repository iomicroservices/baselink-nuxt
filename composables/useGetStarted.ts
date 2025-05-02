// composables/useGetStarted.ts

export function useGetStarted() {
    const route = useRoute();

    const getStarted = computed(() => {
        const query = route.params.task
            ? `?selection=${route.params.task}`
            : route.params.subcategory
                ? `?selection=${route.params.subcategory}`
                : '';

        const baseUrl = route.params.subcategory === 'single-visit-cleaning' && route.params.task
            ? `/services/${route.params.subcategory}/quote`
            : route.params.category
                ? `/services/${route.params.category}/quote`
                : '/services';

        return baseUrl + query;
    });

    return {
        getStarted,
        route
    };
}