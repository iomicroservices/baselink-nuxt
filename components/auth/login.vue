<script lang="ts" setup>

const client = useSupabaseClient();

const loginFormState = reactive({ 
    email: '' as string,
    password: '' as string,
    rememberMe: false as boolean
})

const errorMsg = ref<string | null>(null);
const isSubmitting = ref(false);
const showPassword = ref(false);

const logIn = async () => {
    errorMsg.value = null;
    isSubmitting.value = true;

    try {
        const { data, error } = await client.auth.signInWithPassword({
            email: loginFormState.email,
            password: loginFormState.password
        });
        if (error) throw error;
        await navigateTo('/account');
    } catch (error) {
        errorMsg.value = error instanceof Error ? error.message : 'Something went wrong.';
    } finally {
        isSubmitting.value = false
    }
};
</script>

<template>
    <div
        class="flex w-full max-w-4xl rounded-xl shadow-2xs border border-gray-200 overflow-hidden dark:border-gray-800">

        <!-- Left column: Login form -->
        <div class="w-full lg:w-1/2 bg-white dark:bg-gray-900 p-5 lg:p-10">
            <div class="text-center">
                <h1 class="text-2xl font-bold text-gray-800 dark:text-white">Access your account</h1>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    Don't have an account yet?
                    <NuxtLink to="/auth/register"
                        class="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-400">
                        Sign up here
                    </NuxtLink>
                </p>
            </div>

            <div class="mt-5">

                <UForm :state="loginFormState" class="grid gap-y-4" @submit.prevent="logIn">

                    <UFormGroup size="xl" name="email" label="Email" required>
                        <UInput v-model="loginFormState.email" autocomplete="email" icon="i-heroicons-envelope" />
                    </UFormGroup>

                    <UFormGroup size="xl" name="password" label="Password" required>
                        <UInput v-model="loginFormState.password" :type="showPassword ? 'text' : 'password'"
                            icon="i-heroicons-lock-closed" autocomplete="current-password"
                            :ui="{ icon: { trailing: { pointer: '' } } }">
                            <template #trailing>
                                <UButton color="gray" variant="link"
                                    :icon="showPassword ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'" :padded="false"
                                    @click="showPassword = !showPassword" />
                            </template>
                        </UInput>
                        <template #hint>
                            <NuxtLink to="/auth/password-reset"
                                class="text-blue-600 decoration-2 hover:underline text-sm font-medium dark:text-blue-400">
                                Forgot password?
                            </NuxtLink>
                        </template>
                    </UFormGroup>

                    <UFormGroup size="xl" name="rememberMe" class="py-2">
                        <div class="flex items-start">
                            <UToggle on-icon="i-heroicons-check-20-solid" off-icon="i-heroicons-x-mark-20-solid"
                                color="green" v-model="loginFormState.rememberMe">
                            </UToggle>
                            <p class="ml-2 mb-0 text-sm text-left">Remember me</p>
                        </div>
                    </UFormGroup>

                    <UButton block type="submit" icon="i-heroicons-user"
                        class="w-full py-3 px-4 md:flex-1 mr-0 md:mr-2 mb-2 md:mb-0 font-semibold"
                        :disabled="isSubmitting" :loading="isSubmitting">
                        <template v-if="isSubmitting">
                            <span>Loading...</span>
                        </template>
                        <template v-else>
                            <span>Log in</span>
                        </template>
                    </UButton>

                    <p v-if="errorMsg" class="text-red-600 text-sm mt-2">{{ errorMsg }}</p>
                </UForm>

                <UDivider label="OR" size="sm" class="py-5 flex items-center text-2xs" />

                <!-- Google Button -->
                <UButton icon="i-logos-google-icon" type="button" variant="outline" label="Log in with Google"
                    class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium md:flex-1 mr-0 md:mr-2 mb-2 md:mb-0" />

            </div>
        </div>

        <!-- Right column: Image (hidden on small screens) -->
        <div class="hidden lg:block lg:w-1/2">

            <NuxtImg src="/images/general/baselink-login-light.png" alt="Log in to your BaseLink account"
                class="dark:hidden h-full w-full object-contain transition-opacity dark:opacity-0" format="webp" />

            <NuxtImg src="/images/general/baselink-login-dark.png" alt="Log in to your BaseLink account"
                class="hidden dark:block h-full w-full object-contain transition-opacity opacity-0 dark:opacity-100"
                format="webp" />
        </div>
    </div>
</template>