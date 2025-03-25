export default defineNuxtRouteMiddleware((to) => {

    // Remove trailing '/'
    const cleanPath = to.path.replace(/\/$/, '');

    // Check if the path includes '/local-'
    if (!to.path.includes('/local-')) {
        // If path is not the same as cleanPath
        if (to.path !== cleanPath) {
            // Redirect to cleanPath without trailing '/'
            return navigateTo(cleanPath, { redirectCode: 301 });
        }
        return; // No further action needed
    }

    // Extract parameters
    const { type, city, area } = to.params;

    if (
        !type || // Check if [type] param is missing
        !['city', 'region', 'area'].includes(type as string) || // Check if [type] param is invalid
        !city || // Check if [city] param is missing
        ((type === 'region' || type === 'area') && !area) // Check if [area] param is missing for 'region' or 'area' values for [type] param
    ) {
        // Remove everything from '/local-[type]
        const aPath = to.path.replace(/\/local-.*$/, '');
        // Perform a 301 permanent redirect
        return navigateTo(aPath, { redirectCode: 301 });
    }

    // Check if [type] is 'city' and [area] exists
    if (type === 'city' && area) {
        // Remove everything after '/local-[type]/[city]
        const bPath = to.path.replace(/\/local-.*$/, '/local-' + type + '/' + city);
        // Perform a 301 permanent redirect to .../local-city/[city]
        return navigateTo(bPath, { redirectCode: 301 });
    }

    // After parameter validation, check if the path ends with '/' and remove it
    if (to.path.endsWith('/')) {
        // Perform a redirect if the path had a trailing slash
        return navigateTo(cleanPath, { redirectCode: 301 });
    }
});