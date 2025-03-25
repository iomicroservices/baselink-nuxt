export default defineNuxtRouteMiddleware((to, from) => {

  const { type, city, area } = to.params; // Extract parameters

    if (to.path.includes('/local-')) // Check if the path includes 'local-'
    {
        if (
            !type ||
            !['city', 'region', 'area'].includes(type as string) || // Check if [type] param is invalid
            !city || // Check if [city] param is missing
            ((type === 'region' || type === 'area') && !area) // Check if [area] param is missing for 'region' or 'area' values for [type] param
        ) {
            // Remove everything after '/local-[type]
            const newPath = to.path.replace(/\/local-.*$/, '');

            // Perform a 301 permanent redirect to the new path without local-[type]
            return navigateTo(newPath, { redirectCode: 301 }) // Permanent redirect (301)
        }
    }
})
