<script lang="ts" setup>
definePageMeta({
    layout: 'minimal', // Specify the layout name here
});
const client = useSupabaseClient();
const email = ref<string>('');
const password = ref<string>('');
const errorMsg = ref<string | null>(null);
const successMsg = ref<string | null>(null);

const confirmPassword = ref('');
const acceptTerms = ref(false);

const handleSubmit = async () => {
    errorMsg.value = null;
    successMsg.value = null;

    if (password.value !== confirmPassword.value) {
        errorMsg.value = 'Passwords do not match.';
        return;
    }

    if (!acceptTerms.value) {
        errorMsg.value = 'You must accept the Terms and Conditions.';
        return;
    }

    try {
        const { data, error } = await client.auth.signUp({
            email: email.value,
            password: password.value,
        });

        if (error) throw error;

        successMsg.value = 'Check your email to confirm your account.';
    } catch (error) {
        errorMsg.value = error instanceof Error ? error.message : 'Something went wrong.';
    }
};
</script>

<template>

    <section class="section relative mx-auto min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8">
        <div
            class="flex w-full max-w-4xl rounded-xl shadow-2xs border border-gray-200 overflow-hidden dark:border-gray-800">

            <!-- Left column: Login form -->
            <div class="w-full lg:w-1/2 bg-white dark:bg-gray-900 p-5 lg:p-10">
                <div class="text-center">
                    <h1 class="text-2xl font-bold text-gray-800 dark:text-white">Create an account</h1>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        Already a customer?
                        <NuxtLink to="/auth/login"
                            class="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-400">
                            Log in here
                        </NuxtLink>
                    </p>
                </div>

                <div class="mt-5">

                    <!-- Form -->
                    <form @submit.prevent="handleSubmit">
                        <div class="grid gap-y-4">
                            <div>
                                <label for="email" class="block text-sm mb-2 dark:text-white">Email
                                    address</label>
                                <input v-model="email" type="email" id="email" required
                                    class="py-2.5 px-4 w-full border border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:border-gray-800 dark:text-gray-300 dark:placeholder-neutral-500" />
                            </div>

                            <div>
                                <label for="password" class="block text-sm mb-2 dark:text-white">Password</label>
                                <input v-model="password" type="password" id="password" required
                                    autocomplete="new-password"
                                    class="py-2.5 px-4 w-full border border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:border-gray-800 dark:text-gray-300 dark:placeholder-neutral-500" />
                            </div>

                            <div>
                                <label for="confirm-password" class="block text-sm mb-2 dark:text-white">Confirm
                                    Password</label>
                                <input v-model="confirmPassword" type="password" id="confirm-password" required
                                    autocomplete="new-password"
                                    class="py-2.5 px-4 w-full border border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:border-gray-800 dark:text-gray-300 dark:placeholder-neutral-500" />
                            </div>

                            <div class="flex items-center">
                                <input id="terms" type="checkbox" class="form-checkbox" v-model="acceptTerms" />
                                <label for="terms" class="ml-2 text-sm dark:text-white">
                                    I accept the
                                    <NuxtLink to="/legal/terms-of-service"
                                        class="text-blue-600 hover:underline dark:text-blue-400">
                                        Terms and Conditions</NuxtLink>
                                </label>
                            </div>

                            <button type="submit"
                                class="w-full py-3 px-4 flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                                Sign up
                            </button>

                            <p v-if="errorMsg" class="text-red-600 text-sm mt-2">{{ errorMsg }}</p>
                            <p v-if="successMsg" class="text-green-600 text-sm mt-2">{{ successMsg }}</p>
                        </div>
                    </form>

                    <!-- Divider -->
                    <div
                        class="py-5 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 after:flex-1 after:border-t after:border-gray-200 dark:text-neutral-300 dark:before:border-neutral-600 dark:after:border-neutral-600">
                        Or
                    </div>

                    <!-- Google Button -->
                    <UButton icon="i-logos-google-icon" type="button" label="Sign up with Google"
                        class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden dark:bg-indigo-700/40 dark:border-gray-800 dark:text-white dark:hover:bg-indigo-700/60" />

                </div>
            </div>

            <!-- Right column: Image (hidden on small screens) -->
            <div class="hidden lg:block lg:w-1/2">

                <NuxtImg src="/images/general/baselink-login-light.png" alt="Log in to your BaseLink account"
                    class="dark:hidden h-full w-full object-contain transition-opacity dark:opacity-0"
                    format="webp" />

                <NuxtImg src="/images/general/baselink-login-dark.png" alt="Log in to your BaseLink account"
                    class="hidden dark:block h-full w-full object-contain transition-opacity opacity-0 dark:opacity-100"
                    format="webp" />
            </div>
        </div>
    </section>
</template>
