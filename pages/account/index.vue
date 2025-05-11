<script lang="ts" setup>
definePageMeta({
    layout: "account", // Specify the layout name here
    middleware: ["auth"]
});
const user = useSupabaseUser();
const client = useSupabaseClient();
const router = useRouter();

console.log(user.value);

const signOut = async () => {
    try {
        const { error } = await client.auth.signOut();
        if (error) throw error;
        router.push('/auth/login');
    } catch (error) {
        console.log(error instanceof Error ? error.message : 'Something went wrong.');
    }
};
</script>

<template>
    <div class="page-container">
        <section class="section relative mx-auto min-h-screen">
            <div class="bg-white h-[300px] w-[300px] items-center justify-center">
                <NuxtLink @click="signOut" label="logOut" block color="primary" size="sm">
                    Log out
                </NuxtLink>
            </div>
        </section>
    </div>
</template>