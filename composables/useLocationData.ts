export const useLocationData = async () => {
    // Destructure and extract parameters from the route (category, subcategory, task, etc.)

    const { params } = useRoute(); // Get the current route
    const { task, type, city, area } = params;

};