export default defineNuxtRouteMiddleware((to) => {
    // Middleware to redirect any url fauls and url paths with trailing / whilst keeping query and hash values

    const { path, query, hash } = to

    // all below to.path values replaced to just path based on above

    // Check if the path includes '/local-'
    if (path === '/') {
        return; // No further action needed
    }

    // Remove trailing '/'
    const cleanPath = path.replace(/\/+$/, '');

    // Check if the path includes '/local-'
    if (!path.includes('/local-')) {
        // If path is not the same as cleanPath
        if (path !== cleanPath) {
            // add query and has in url to cleanPath to create nextRoute
            const nextRoute = { path: cleanPath, query, hash };
            // Redirect to cleanPath without trailing '/'
            return navigateTo(nextRoute, { redirectCode: 301 });
        }
        return; // No further action needed
    }

    // Extract parameters
    const { type, city, area } = to.params;

    if (path.includes('/local-')) { // Check if the path includes 'local-'
        if (
            !type || // Check if [type] param is missing
            !['city', 'region', 'area'].includes(type as string) || // Check if [type] param is invalid
            !city || // Check if [city] param is missing
            ((type === 'region' || type === 'area') && !area) // Check if [area] param is missing for 'region' or 'area' values for [type] param
        ) {
            // Remove everything from '/local-[type]
            const nextPath = cleanPath.replace(/\/local-.*$/, '');
            // add query and has in url to cleanPath to create nextRoute
            const nextRoute = { path: nextPath, query, hash };
            // Perform a 301 permanent redirect
            return navigateTo(nextRoute, { redirectCode: 301 });
        }

        // Check if [type] is 'city' and [area] exists
        if (type === 'city' && area) {
            // Remove everything after '/local-[type]/[city]
            const nextPath = cleanPath.replace(/\/local-.*$/, '/local-' + type + '/' + city);
            // add query and has in url to cleanPath to create nextRoute
            const nextRoute = { path: nextPath, query, hash };
            // Perform a 301 permanent redirect to .../local-city/[city]
            return navigateTo(nextRoute, { redirectCode: 301 });
        }

        // After parameter validation, check if the path ends with '/' and remove it
        if (path !== cleanPath) {
            // add query and has in url to cleanPath to create nextRoute
            const nextRoute = { path: cleanPath, query, hash };
            // Perform a redirect if the path had a trailing slash
            return navigateTo(nextRoute, { redirectCode: 301 });
        }
    }
});