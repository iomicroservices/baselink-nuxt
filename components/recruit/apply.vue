<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import { generateDynamicSchema } from '~/utils/forms/dynamicSchema'
import { parseFormConfig } from '~/utils/forms/parseFormConfig'

// 1️⃣ Centralised form config object
const formConfig = {
    skillsOptions: {
        default: 'Cleaner',
        type: 'stringSelect',
        label: 'Skill',
        options: ['Cleaner', 'Mobile car wash', 'Carpenter', 'Gardener', 'Handyman', 'Gas Engineer', 'Electrician', 'Locksmith', 'Network Engineer', 'Painter', 'Plumber', 'Removals', 'Other']
    },
    experienceOptions: {
        default: '1 to 2 years',
        type: 'stringSelect',
        label: 'Experience',
        options: ['No experience', 'Less than 1 year', '1 to 2 years', '3 to 5 years', 'More than 5 years']
    },
    availableDaysOptions: {
        default: [],
        type: 'objectMultiSelect',
        label: 'Days',
        options: [
            { label: 'Monday', value: 'monday' },
            { label: 'Tuesday', value: 'tuesday' },
            { label: 'Wednesday', value: 'wednesday' },
            { label: 'Thursday', value: 'thursday' },
            { label: 'Friday', value: 'friday' },
            { label: 'Saturday', value: 'saturday' },
            { label: 'Sunday', value: 'sunday' }
        ],
    },
    hoursOptions: {
        default: 'Full-time',
        type: 'stringSelect',
        label: 'Working Hours',
        options: ['Full-time', 'Part-time', 'Occassional', 'Variable']
    },
    timeOptions: {
        default: 'Flexible',
        type: 'stringSelect',
        label: 'Available Time',
        options: ['Flexible', 'Mornings 8am - 12pm', 'Afternoons 12pm - 5pm', 'Evenings 5pm - 8pm', 'Overnight', 'Not sure']
    },
    requirementsNote: {
        default: '',
        type: 'textInput',
        label: 'Notes',
        optional: true
    },
    fullName: {
        default: undefined,
        type: 'textInput',
        label: 'Name'
    },
    addressOne: {
        default: undefined,
        type: 'textInput',
        label: 'Address'
    },
    addressTwo: {
        default: '',
        type: 'textInput',
        label: 'Address 2',
        optional: true
    },
    addressCity: {
        default: undefined,
        type: 'textInput',
        label: 'City'
    },
    postCode: {
        default: undefined,
        type: 'textInput',
        label: 'Postcode'
    },
    phoneNumber: {
        default: undefined,
        type: 'phoneInput'
    },
    emailAddress: {
        default: undefined,
        type: 'emailInput'
    },
    ukResident: {
        default: false,
        type: 'termsCheckbox'
    },
    hasBankAccount: {
        default: false,
        type: 'termsCheckbox'
    },
    selfEmployed: {
        default: false,
        type: 'termsCheckbox'
    },
    noConvictions: {
        default: false,
        type: 'termsCheckbox'
    },
    backgroundConsent: {
        default: false,
        type: 'termsCheckbox'
    },
    termsCheckbox: {
        default: true,
        type: 'termsCheckbox'
    }
}

// 2️⃣ Extract defaults, meta, options from config and parse
const { defaults, meta, options } = parseFormConfig(formConfig)

// 3️⃣ Reactive state
const formState = reactive({ ...defaults })

// 4️⃣ Generate validation schema
const formSchema = generateDynamicSchema(defaults, options, meta)
type Schema = z.infer<typeof formSchema>

// 5️⃣ Computed validation check
const isFormValid = computed(() => {
    try {
        formSchema.parse(formState); // This will throw if validation fails
        return true; // If parsing is successful, the form is valid
    } catch (e) {
        return false; // If there's an error, the form is invalid
    }
});

// 7️⃣ Submission logic
const isSubmitting = ref(false); // Reactive state for loading
const router = useRouter(); // Initialize the router

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
        const response = await $fetch('/api/quote/form-submit', {
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
            await navigateTo({ path: `${router.currentRoute.value.path}/success` }); // Append /success to the current path
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


        <p class="pt-10 text-2xl font-bold">Contact details</p>

        <UFormGroup size="xl" name="fullName" label="Full name" required>
            <UInput v-model="formState.fullName" />
        </UFormGroup>

        <UFormGroup size="xl" name="addressOne" label="Address line 1" required>
            <UInput v-model="formState.addressOne" />
        </UFormGroup>

        <UFormGroup size="xl" name="addressTwo" label="Address line 2" hint="Optional">
            <UInput v-model="formState.addressTwo" />
        </UFormGroup>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <UFormGroup size="xl" name="addressCity" label="City" required>
                <UInput v-model="formState.addressCity" />
            </UFormGroup>

            <UFormGroup size="xl" name="postCode" label="Postcode" required>
                <UInput v-model="formState.postCode" />
            </UFormGroup>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <UFormGroup size="xl" name="phoneNumber" label="Phone number" required>
                <UInput v-model="formState.phoneNumber" />
            </UFormGroup>

            <UFormGroup size="xl" name="emailAddress" label="Email" required>
                <UInput v-model="formState.emailAddress" />
            </UFormGroup>
        </div>


        <p class="pt-10 text-2xl font-bold">Eligibility criteria</p>

        <UFormGroup name="selfEmployed">
            <UCheckbox size="lg" color="green" v-model="formState.selfEmployed"
                label="I understand I will be self-employed" />
        </UFormGroup>

        <UFormGroup name="ukResident" class="!mt-3">
            <UCheckbox color="green" v-model="formState.ukResident"
                label="I am resident in the UK and have the right to work" />
        </UFormGroup>

        <UFormGroup name="hasBankAccount" class="!mt-3">
            <UCheckbox color="green" v-model="formState.hasBankAccount" label="I have a UK bank account" />
        </UFormGroup>

        <UFormGroup name="noConvictions" class="!mt-3">
            <UCheckbox color="green" v-model="formState.noConvictions" label="I do not have any unspent convictions" />
        </UFormGroup>

        <UFormGroup name="backgroundConsent" class="!mt-3">
            <UCheckbox color="green" v-model="formState.backgroundConsent" label="I consent to a background check" />
        </UFormGroup>


        <p class="pt-10 text-2xl font-bold">Experience and availability</p>

        <UFormGroup size="xl" name="skillsOptions" label="What is your main skill or trade?" required>
            <USelect v-model="formState.skillsOptions" :options="options.skillsOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup size="xl" name="experienceOptions" label="How much experience do you have?" required>
            <USelect v-model="formState.experienceOptions" :options="options.experienceOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup size="xl" name="requirementsNote" label="Tell us a bit about your experience and background"
            hint="Optional">
            <UTextarea v-model="formState.requirementsNote"
                placeholder="e.g. I have been self-employed full-time for 5 years..." />
        </UFormGroup>

        <UFormGroup size="xl" name="availableDaysOptions" label="Which days are you available to work?" required>
            <USelectMenu v-model="formState.availableDaysOptions" :options="options.availableDaysOptions" multiple
                value-attribute="value" />
        </UFormGroup>

        <UFormGroup size="xl" name="hoursOptions" label="How many hours do you want to work?" required>
            <USelect v-model="formState.hoursOptions" :options="options.hoursOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup size="xl" name="timeOptions" label="What time of the day suits you best?" required>
            <USelect v-model="formState.timeOptions" :options="options.timeOptions" placeholder="" />
        </UFormGroup>


        <UFormGroup size="xl" name="termsCheckbox" class="py-5" required>
            <div class="flex items-start">
                <UToggle on-icon="mdi:check" off-icon="mdi:close" color="green" v-model="formState.termsCheckbox">
                </UToggle>
                <span class="ml-2 text-base font-semibold">I accept the
                    <NuxtLink to="/legal/terms-of-service" target="_blank" class="text-green-500 underline">terms of service</NuxtLink> and have read the <NuxtLink to="/legal/privacy-policy" target="_blank" class="text-green-500 underline">privacy policy</NuxtLink>
                </span>
            </div>
        </UFormGroup>

        <!-- <div class="flex flex-col md:flex-row w-full py-3"> -->

        <UButton block type="submit" icon="mdi:send-variant-outline"
            class="h-10 text-lg text-white dark:text-white disabled:dark:text-gray-100 md:flex-1 mr-0 md:mr-2 mb-2 md:mb-0 font-semibold"
            :disabled="!isFormValid || isSubmitting" :loading="isSubmitting">
            <template v-if="isSubmitting">
                <span>Sending...</span>
            </template>
            <template v-else>
                <span>Submit request</span>
            </template>
        </UButton>

    </UForm>
</template>