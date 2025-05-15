// composables/useGetStarted.ts

export function useGetStarted() {
    const route = useRoute();

    const job = computed(() => {
        const category = route.params.category;
        if (category === 'home-cleaning' || category === 'commercial-cleaning' || category === 'single-visit-cleaning') {
            return 'clean';
        } else if (category === 'tradespeople') {
            return 'job';
        } else if (category === 'mobile-car-wash') {
            return 'car wash';
        } else {
            return 'job';
        }
    });

    const getStarted = computed(() => {
        const queryParams = new URLSearchParams();

        if (route.params.subcategory) {
            queryParams.set('selection', route.params.subcategory.toString());
        }

        if (route.params.task) {
            queryParams.set('task', route.params.task.toString());
        }

        const queryString = queryParams.toString();
        const query = queryString ? `?${queryString}` : '';

        const baseUrl = route.params.subcategory === 'single-visit-cleaning' //&& route.params.task
            ? `/services/${route.params.subcategory}/quote`
            : route.params.category
                ? `/services/${route.params.category}/quote`
                : '/services';

        return baseUrl + query;
    });

    return {
        getStarted,
        route,
        job
    };
}
