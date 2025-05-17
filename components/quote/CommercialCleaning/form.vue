<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import { generateDynamicSchema } from '~/utils/forms/dynamicSchema'
import { parseFormConfig } from '~/utils/forms/parseFormConfig'

// 1️⃣ Centralised form config object
const formConfig = {
    propertyOptions: {
        default: 'Office',
        type: 'stringSelect',
        label: 'Property',
        options: ['Office', 'Airbnb rental', 'Holiday rental', 'Residential block', 'Serviced apartment', 'Retail unit', 'Restaurant or Cafe', 'Bar or Pub', 'School or Nursery', 'Warehouse', 'Light industrial', 'Hotel', 'Other']
    },
    daysOptions: {
        default: [],
        type: 'stringMultiSelect',
        label: 'Day',
        options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    frequencyOptions: {
        default: 'Daily',
        type: 'stringSelect',
        label: 'Frequency',
        options: ['Daily', 'Weekly', 'Fortnightly', 'Monthly', 'One-off', 'Not sure']
    },
    hoursOptions: {
        default: '2 hours',
        type: 'stringSelect',
        label: 'Hours',
        options: ['2 hours', '3 hours', '4+ hours', 'Varies', 'Not sure']
    },
    timeOptions: {
        default: 'Flexible',
        type: 'stringSelect',
        label: 'Time',
        options: ['Flexible', 'Morning 8am - 12pm', 'Afternoon 12pm - 5pm', 'Evening 5pm - 8pm', 'Overnight', 'Not sure']
    },
    startDate: {
        default: undefined,
        type: 'dateInput'
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
    companyName: {
        default: '',
        type: 'textInput',
        label: 'Company',
        optional: true
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
    termsCheckbox: {
        default: false,
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

// 6️⃣ Pricing logic
// Form component updates this data using composable to render booking summary
const { totalPrice } = useBookingFormState();
onMounted(() => {
    totalPrice.value = 0
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
                category: 'Commercial cleaning',
                task: `${formState.propertyOptions} cleaning`,
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

        <p class="pt-10 text-2xl font-bold">Cleaning requirements</p>

        <UFormGroup size="xl" name="propertyOptions" label="What kind of property is this for?" required>
            <USelect v-model="formState.propertyOptions" :options="options.propertyOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup size="xl" name="daysOptions" label="Which days of the week do you require a cleaning visit?"
            required>
            <USelectMenu v-model="formState.daysOptions" :options="options.daysOptions" multiple placeholder="" />
        </UFormGroup>

        <UFormGroup size="xl" name="frequencyOptions" label="How frequently do you require a cleaning visit?" required>
            <USelect v-model="formState.frequencyOptions" :options="options.frequencyOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup size="xl" name="hoursOptions" label="Duration of each cleaning session?" required>
            <USelect v-model="formState.hoursOptions" :options="options.hoursOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup size="xl" name="timeOptions" label="Morning, afternoon or evening — what suits you best?" required>
            <USelect v-model="formState.timeOptions" :options="options.timeOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup size="xl" name="startDate" label="What's your ideal cleaning start date?" required>
            <UInput v-model="formState.startDate" type="date" />
        </UFormGroup>

        <UFormGroup size="xl" name="requirementsNote" label="Anything else we should know?" hint="Optional">
            <UTextarea v-model="formState.requirementsNote"
                placeholder="Let us know about any specific requirements..." />
        </UFormGroup>

        <p class="pt-10 text-2xl font-bold">Contact details</p>

        <UFormGroup size="xl" name="fullName" label="Full name" required>
            <UInput v-model="formState.fullName" />
        </UFormGroup>

        <UFormGroup size="xl" name="companyName" label="Company name" hint="Optional">
            <UInput v-model="formState.companyName" />
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

        <UFormGroup size="xl" name="termsCheckbox" class="py-3">
            <UCheckbox v-model="formState.termsCheckbox" required>
                <template #label>
                    <span class="ml-2 text-base font-semibold">I accept the
                        <NuxtLink to="/legal/terms-of-service" target="_blank" class="text-green-500 underline">terms
                            of
                            service</NuxtLink>
                        and have read the
                        <NuxtLink to="/legal/privacy-policy" target="_blank" class="text-green-500 underline">privacy
                            policy</NuxtLink>
                    </span>
                </template>
            </UCheckbox>
        </UFormGroup>

        <p>Hit submit and we'll take it from there. You'll get a tailored quote straight to your inbox and we'll give
            you a quick call to iron out the details.</p>

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