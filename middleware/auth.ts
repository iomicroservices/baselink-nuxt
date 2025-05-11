export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser()

    const isAccountRoute = to.path.startsWith('/account')
    const isAuthRoute = to.path.startsWith('/auth')

    if (isAccountRoute && !user.value) {
        return navigateTo('/auth/login')
    }

    if (isAuthRoute && user.value) {
        return navigateTo('/account')
    }
});

// export default defineNuxtRouteMiddleware(() => {
//     const user = useSupabaseUser();
//     if (!user.value) {
//         return navigateTo('auth/login')
//     }
// });

// export default defineNuxtRouteMiddleware(async (to, from) => {
//     const supabase = useSupabaseClient()
//     const { data: user } = await supabase.auth.getUser()

//     if (!user?.user) {
//         return navigateTo('/auth/login')
//     }
// })
// But this is only necessary if you're seeing hydration issues — your current useSupabaseUser() approach is totally fine for most client-rendered flows.