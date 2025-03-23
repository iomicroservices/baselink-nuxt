export const usePathData = () => {

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
            }
        }
    };
};

export async function useLocation() { }