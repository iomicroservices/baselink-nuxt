export const usePathData = async () => {
    const route = useRoute(); // Get the current route
    // Destructure and extract parameters from the route (category, subcategory, task, etc.)
    const { services, category, subcategory, task, type, city, area } = route.params;

    // Only run this logic if the path starts with /services
    if (!route.path.startsWith('/services')) return { pathData: null as any };

    // // Only run this logic if the `services` param is exactly "services"
    // if (services !== 'services') return { pathData: null };

    // Build the queryUrl dynamically based on url params
    const queryUrl = [
        services || 'services', // Fallback to '/services' if empty or undefined
        category || null,
        subcategory || null,
        task || null
    ]
        .filter(Boolean) // Remove any null or undefined values
        .join('/'); // Concatenate with "/"
    
    // Build the asyncDynamicName based on url params
    const asyncDynamicName = [
        services || 'services', // Fallback to '/services' if empty or undefined
        category || null,
        subcategory || null,
        task || null,
        type || null,
        city || null,
        area || null
    ]
        .filter(Boolean) // Remove any null or undefined values
        .join('-'); // Concatenate with "-"
    
    // Use `useAsyncData` to fetch content based on dynamic URL
    const { data: pageData, error } = await useAsyncData(
        `${asyncDynamicName}`,
        () => queryContent(`${queryUrl}`).findOne()
    );

    // If there's an error, log it to the console
    if (error.value) {
        console.error('Error fetching pageData in usePathData composable:', error.value);
    }
    
    // Return a nested object under contentData
    return {
        pathData: {
            queryUrl,
            asyncDynamicName,
            routeServices: {
                routeCategory: category,
                routeSubcategory: subcategory,
                routeTask: task
            },
            routeLocations: {
                routeLocalType: type,
                routeCity: city,
                routeArea: area
            },
            pageData
        }
    };
};