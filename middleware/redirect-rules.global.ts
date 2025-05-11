export default defineNuxtRouteMiddleware((to) => {
    // Middleware to redirect any url fauls and url paths with trailing / whilst keeping query and hash values

    const { path, query, hash, params } = to

    // If route path, then do nothing
    if (path === '/') {
        return; // No further action needed
    }

    // Skip public/images paths that shouldn't be handled by middleware
    if (path.startsWith('/images')) return;

    // Remove trailing '/'
    const cleanPath = path.replace(/\/+$/, '');

    // If path is clean, then do nothing
    if (path === cleanPath && !path.includes('/local-')) return;

    // Check path is not the same as cleanPath & path doesn't include '/local-'
    if (path !== cleanPath && !path.includes('/local-')) {
        // Redirect to cleanPath without trailing '/'
        return navigateTo({ path: cleanPath, query, hash }, { redirectCode: 301 });
    }

    // Check if the path includes 'local-' and ensure correct url structure
    if (path.includes('/local-')) {
        // Extract parameters
        const { type, city, area } = params;

        if (
            !type || // Check if [type] param is missing, or
            !['city', 'region', 'area'].includes(type as string) || // Check if [type] param is invalid
            !city || // Check if [city] param is missing, or
            ((type === 'region' || type === 'area') && !area) // Check if [area] param is missing for 'region' or 'area' values for [type] param
        ) {
            // Remove everything from '/local-[type]
            const nextPath = cleanPath.replace(/\/local-.*$/, '');
            // Perform a 301 permanent redirect
            return navigateTo({ path: nextPath, query, hash }, { redirectCode: 301 });
        }

        // Check if [type] is 'city' and [area] exists
        if (type === 'city' && area) {
            // Remove everything after '/local-[type]/[city]
            const nextPath = cleanPath.replace(/\/local-.*$/, '/local-' + type + '/' + city);
            // Perform a 301 permanent redirect to .../local-city/[city]
            return navigateTo({ path: nextPath, query, hash }, { redirectCode: 301 });
        }

        // After parameter validation, check if the path ends with '/' and remove it
        if (path !== cleanPath) {
            // Perform a redirect if the path had a trailing slash
            return navigateTo({ path: cleanPath, query, hash }, { redirectCode: 301 });
        }
    }
});