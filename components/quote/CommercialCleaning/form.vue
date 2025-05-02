<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import { commercialCleaningOptions } from '~/utils/forms/formOptions';
import { generateSchema } from '~/utils/forms/generateSchema'
import { commercialCleaningDefaults } from '@/utils/forms/formDefaults'

// Form options data stored in utils
const {
    propertyOptions,
    daysOptions,
    frequencyOptions,
    unitHoursOptions,
    timeOptions
} = commercialCleaningOptions;

//Store data from user inputs to form
const formState = reactive({
    ...commercialCleaningDefaults
})

const formSchema = generateSchema(
    Object.keys(commercialCleaningDefaults) as (keyof typeof commercialCleaningDefaults)[]);

type Schema = z.infer<typeof formSchema>

// Computed property to check if the form is valid
const isFormValid = computed(() => {
    try {
        formSchema.parse(formState); // This will throw if validation fails
        return true; // If parsing is successful, the form is valid
    } catch (e) {
        return false; // If there's an error, the form is invalid
    }
});

// Initialize the router
const router = useRouter();

// Reactive state for loading
const isSubmitting = ref(false);

async function onSubmit(event: FormSubmitEvent<Schema>) {

    // Check if the form is valid using the computed property
    if (!isFormValid.value) {
        console.error('Form is invalid. Please correct the errors before submitting.');
        return; // Exit the function if the form is not valid
    }

    // Set loading state
    isSubmitting.value = true;

    // Capture the current URL and referrer
    const currentUrl = window.location.href; // Current URL
    const referrerUrl = document.referrer; // Previous URL

    // Submit the form data to the server API
    try {
        const response = await $fetch('/api/commercial-cleaning/form-submit', {
            method: 'POST',
            body: {
                ...formState, // Send the form state as the request body
                currentUrl,
                referrerUrl
            },
        });

        // Handle the response from the server
        if (response.status === 'success') {
            console.log('Form submitted successfully:', response.message);

            // Optionally, reset the form or show a success message

            // Navigate to the success page
            router.push({ path: `${router.currentRoute.value.path}/success` }); // Append /success to the current path

        } else {
            console.error('Error submitting form:', response.message);
            // Handle error response
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        // Handle submission errors
    }

    // Do something with event.data
    console.log(event.data); // Log the event data
}

</script>

<template>
    <UForm :schema="formSchema" :state="formState" class="space-y-7" @submit="onSubmit">

        <p class="pt-10 text-2xl font-bold">Cleaning requirements</p>

        <UFormGroup size="xl" name="commercialPropertyOptionsInput" label="What kind of property is this for?" required>
            <USelect v-model="formState.commercialPropertyOptionsInput" :options="propertyOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup size="xl" name="daysOptionsInput" label="Which days of the week do you require a cleaning visit?"
            required>
            <USelectMenu v-model="formState.daysOptionsInput" :options="daysOptions" multiple placeholder="" />
        </UFormGroup>

        <UFormGroup size="xl" name="commercialFrequencyOptionsInput"
            label="How frequently do you require a cleaning visit?" required>
            <USelect v-model="formState.commercialFrequencyOptionsInput" :options="frequencyOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup size="xl" name="unitHoursOptionsInput" label="Duration of each cleaning session?" required>
            <USelect v-model="formState.unitHoursOptionsInput" :options="unitHoursOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup size="xl" name="commercialTimeOptionsInput"
            label="Morning, afternoon or evening — what suits you best?" required>
            <USelect v-model="formState.commercialTimeOptionsInput" :options="timeOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup size="xl" name="startDateInput" label="What's your ideal cleaning start date?" required>
            <UInput v-model="formState.startDateInput" type="date" />
        </UFormGroup>

        <UFormGroup size="xl" name="requirementsInput" label="Anything else we should know?" hint="Optional">
            <UTextarea v-model="formState.requirementsInput"
                placeholder="Let us know about any specific requirements..." />
        </UFormGroup>

        <p class="pt-10 text-2xl font-bold">Contact details</p>

        <UFormGroup size="xl" name="fullNameInput" label="Full name" required>
            <UInput v-model="formState.fullNameInput" />
        </UFormGroup>

        <UFormGroup size="xl" name="companyNameInput" label="Company name" hint="Optional">
            <UInput v-model="formState.companyNameInput" />
        </UFormGroup>

        <UFormGroup size="xl" name="postCodeInput" label="Postcode" required>
            <UInput v-model="formState.postCodeInput" />
        </UFormGroup>

        <UFormGroup size="xl" name="phoneNumberInput" label="Phone number" required>
            <UInput v-model="formState.phoneNumberInput" />
        </UFormGroup>

        <UFormGroup size="xl" name="emailInput" label="Email" required>
            <UInput v-model="formState.emailInput" />
        </UFormGroup>

        <UFormGroup size="xl" name="termsInput" class="py-3">
            <UCheckbox v-model="formState.termsInput" required>
                <template #label>
                    <span class="ml-2 text-base font-semibold">I accept the
                        <a href="/legal/terms-of-service" target="_blank" class="text-green-500 underline">terms
                            of
                            service</a>
                        and have read the
                        <a href="/legal/privacy-policy" target="_blank" class="text-green-500 underline">privacy
                            policy</a>
                    </span>
                </template>
            </UCheckbox>
        </UFormGroup>

        <p>Hit submit and we'll take it from there. You'll get a tailored quote straight to your inbox and we'll give
            you a quick call to iron out the details.</p>

        <!-- <div class="flex flex-col md:flex-row w-full py-3"> -->

        <UButton block type="submit" icon="i-heroicons-paper-airplane"
            class="md:flex-1 mr-0 md:mr-2 mb-2 md:mb-0 font-semibold" :disabled="!isFormValid || isSubmitting"
            :loading="isSubmitting">
            <template v-if="isSubmitting">
                <span>Sending...</span>
            </template>
            <template v-else>
                <span>Submit request</span>
            </template>
        </UButton>

    </UForm>
</template>