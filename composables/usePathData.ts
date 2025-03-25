export const usePathData = async () => {

    const route = useRoute(); // Get the current route

    // Destructure and extract parameters from the route (category, subcategory, task, etc.)
    const { services, category, subcategory, task, type, city, area } = route.params;

    // Build the queryUrl dynamically based on available params
    const queryUrl = [
        services || 'services', // Fallback to '/services' if empty or undefined
        category || null,
        subcategory || null,
        task || null
    ]
        .filter(Boolean) // Remove any null or undefined values
        .join('/'); // Concatenate with "/"
    
    // Build the queryUrl dynamically based on available params
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
        .join('-'); // Concatenate with "/"
    
    // Use `useAsyncData` to fetch content based on dynamic URL
    const { data: pageData } = await useAsyncData(
        `${asyncDynamicName}`,
        () => queryContent(`${queryUrl}`).findOne()
    );
    
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

export const useLocationData = async () => {
    // Destructure and extract parameters from the route (category, subcategory, task, etc.)

    const route = useRoute(); // Get the current route
    const { task, type, city, area } = route.params;

};