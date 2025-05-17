<script lang="ts" setup>
const client = useSupabaseClient();

const registerFormState = reactive({
    email: '' as string,
    password: '' as string,
    confirmPassword: '' as string,
    termsCheckbox: false as boolean
})

const errorMsg = ref<string | null>(null);
const successMsg = ref<string | null>(null);
const isSubmitting = ref(false);
const showPassword = ref(false);
const showConfirmPassword = ref(false);

const passwordsMatch = computed(() => {
    const { password, confirmPassword } = registerFormState
    // Wait until both fields have input
    if (!password || !confirmPassword) {
        return null
    }
    return password === confirmPassword
})

const formSubmitted = computed(() => !!successMsg.value);

const handleSubmit = async () => {
    isSubmitting.value = true;
    errorMsg.value = null;
    successMsg.value = null;

    if (registerFormState.password !== registerFormState.confirmPassword) {
        errorMsg.value = 'Passwords do not match.';
        isSubmitting.value = false
        return;
    }

    if (!registerFormState.termsCheckbox) {
        errorMsg.value = 'You must accept the Terms of Service.';
        isSubmitting.value = false
        return;
    }

    try {
        const { data, error } = await client.auth.signUp({
            email: registerFormState.email,
            password: registerFormState.password,
        });

        if (error) throw error;

        successMsg.value = 'Check your email to confirm your account.';
    } catch (error) {
        errorMsg.value = error instanceof Error ? error.message : 'Something went wrong.';
    } finally {
        isSubmitting.value = false
    }
};
</script>

<template>
    <div
        class="flex w-fullx max-w-4xl rounded-xl shadow-2xs border border-gray-200 overflow-hidden dark:border-gray-800">

        <!-- Left column: Login form or success message -->
        <div class="w-full lg:w-1/2 bg-white dark:bg-gray-900 p-5 lg:p-10 flex items-center justify-center">
            <div v-if="formSubmitted" class="text-center space-y-4">
                <UIcon name="mdi:check" class="w-14 h-14 text-green-500 mx-auto" />
                <p class="text-lg font-normal text-gray-800 dark:text-white">{{ successMsg }}</p>
            </div>

            <div v-else class="w-full">
                <div class="text-center">
                    <h1 class="text-2xl font-bold text-gray-800 dark:text-white">Create an account</h1>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        Already a customer?
                        <NuxtLink to="/auth/login" class="text-blue-600 hover:underline font-medium dark:text-blue-400">
                            Log in here
                        </NuxtLink>
                    </p>
                </div>

                <div class="mt-5">
                    <UForm :state="registerFormState" class="grid gap-y-4" @submit.prevent="handleSubmit">

                        <UFormGroup size="xl" name="email" label="Email" required>
                            <UInput v-model="registerFormState.email" autocomplete="email" icon="mdi:email-outline" />
                        </UFormGroup>

                        <UFormGroup size="xl" name="password" label="Password" required>
                            <UInput v-model="registerFormState.password" :type="showPassword ? 'text' : 'password'"
                                icon="mdi:lock-outline" autocomplete="new-password"
                                :ui="{ icon: { trailing: { pointer: '' } } }">
                                <template #trailing>
                                    <UButton color="gray" variant="link"
                                        :icon="showPassword ? 'mdi:eye-off-outline' : 'mdi:eye-outline'" :padded="false"
                                        @click="showPassword = !showPassword" />
                                </template>
                            </UInput>
                        </UFormGroup>

                        <UFormGroup size="xl" name="confirmPassword" label="Confirm Password" required>
                            <UInput v-model="registerFormState.confirmPassword"
                                :type="showConfirmPassword ? 'text' : 'password'"
                                :disabled="!registerFormState.password"
                                :icon="passwordsMatch ? 'mdi:check-circle-outline' : 'mdi:alert-circle-outline'"
                                :color="!registerFormState.password ? 'gray' : (passwordsMatch === null ? 'white' : passwordsMatch ? 'green' : 'red')"
                                :ui="{ icon: { trailing: { pointer: '' } } }">
                                <template #trailing>
                                    <UButton color="gray" variant="link"
                                        :icon="showConfirmPassword ? 'mdi:eye-off-outline' : 'mdi:eye-outline'"
                                        :padded="false" @click="showConfirmPassword = !showConfirmPassword" />
                                </template>
                            </UInput>
                        </UFormGroup>

                        <UFormGroup size="xl" name="termsCheckbox" required class="py-2">
                            <div class="flex items-start">
                                <UToggle v-model="registerFormState.termsCheckbox" on-icon="mdi:check"
                                    off-icon="mdi:close" color="green" />
                                <label for="termsCheckbox" class="ml-2 text-sm dark:text-white">
                                    I accept the
                                    <NuxtLink to="/legal/terms-of-service"
                                        class="text-blue-600 hover:underline dark:text-blue-400">
                                        Terms of Service
                                    </NuxtLink>
                                </label>
                            </div>
                        </UFormGroup>

                        <UButton block type="submit" icon="mdi:account-plus" class="w-full py-3 px-4 font-semibold"
                            :disabled="isSubmitting || !passwordsMatch || formSubmitted" :loading="isSubmitting">
                            <template v-if="formSubmitted">
                                <span>Sign up successful</span>
                            </template>
                            <template v-else-if="isSubmitting">
                                <span>Loading...</span>
                            </template>
                            <template v-else>
                                <span>Sign up</span>
                            </template>
                        </UButton>

                        <p v-if="errorMsg" class="text-red-600 text-sm mt-2">{{ errorMsg }}</p>
                        <p v-if="successMsg && !formSubmitted" class="text-green-600 text-sm mt-2">{{ successMsg }}</p>
                    </UForm>

                    <UDivider label="OR" size="sm" class="py-5 flex items-center text-2xs" />

                    <UButton icon="i-logos-google-icon" type="button" variant="outline" label="Sign up with Google"
                        class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium" />
                </div>
            </div>
        </div>

        <!-- Right column: Image (hidden on small screens) -->
        <div class="hidden p-5 lg:block lg:w-1/2">

            <NuxtImg src="/images/general/baselink-login-light.png" alt="Sign up with BaseLink"
                class="dark:hidden h-full w-full object-contain transition-opacity dark:opacity-0" format="webp" />

            <NuxtImg src="/images/general/baselink-login-dark.png" alt="Sign up with BaseLink"
                class="hidden dark:block h-full w-full object-contain transition-opacity opacity-0 dark:opacity-100"
                format="webp" />
        </div>
    </div>
</template>
