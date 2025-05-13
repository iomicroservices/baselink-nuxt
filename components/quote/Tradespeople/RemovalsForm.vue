<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import { generateDynamicSchema } from '~/utils/forms/dynamicSchema'
import { parseFormConfig } from '~/utils/forms/parseFormConfig'

interface Props {
    task?: string
}
const props = defineProps<Props>()

// 1️⃣ Centralised form config object
const formConfig = {
    taskOptions: {
        default: 'furniture-removals',
        type: 'objectSelect',
        label: 'Task',
        options: [
            { label: 'Appliance removals', value: 'appliance-removals' },
            { label: 'Furniture removals', value: 'furniture-removals' },
            { label: 'Home removals', value: 'home-removals' },
            { label: 'Office/commercial removals', value: 'office-commercial-removals' },
            { label: 'Specialist removals', value: 'specialist-removals' },
            { label: 'Vehicle transport', value: 'vehicle-transport' }
        ]
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
    marketingCheckbox: {
        default: true,
        type: 'marketingCheckbox'
    }
}

// 2️⃣ Extract defaults, meta, options from config and parse
const { defaults, meta, options } = parseFormConfig(formConfig)

// 3️⃣ Reactive state
const formState = reactive({ ...defaults })
// If task is passed and matches a known option, set it
if (props.task && 'taskOptions' in formState) {
    formState.taskOptions = props.task
}

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
const { totalPrice, bookingBreakdown } = useBookingFormState();
onMounted(() => {
    totalPrice.value = 0
    bookingBreakdown.value = []
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
                ...formState,
                category: 'Tradespeople',
                subcategory: 'Removals',
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
    <UForm :schema="formSchema" :state="formState" class="space-y-7 mt-7" @submit="onSubmit">

        <UFormGroup size="xl" name="taskOptions" label="Select a task" required>
            <USelect v-model="formState.taskOptions" :options="options.taskOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup size="xl" name="requirementsNote" label="Any additional requirements?" hint="Optional">
            <UTextarea v-model="formState.requirementsNote"
                placeholder="E.g. sofa and boxes from 2-bed flat, 1st floor" />
        </UFormGroup>

        <UFormGroup size="xl" name="startDate" label="What date do you need the job?" required>
            <UInput v-model="formState.startDate" type="date" />
        </UFormGroup>

        <UFormGroup size="xl" name="timeOptions" label="Morning, afternoon or evening — what suits you best?" required>
            <USelect v-model="formState.timeOptions" :options="options.timeOptions" placeholder="" />
        </UFormGroup>

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

        <UFormGroup size="xl" name="marketingCheckbox" class="py-5">
            <div class="flex items-start">
                <UToggle on-icon="i-heroicons-check-20-solid" off-icon="i-heroicons-x-mark-20-solid" color="green"
                    v-model="formState.marketingCheckbox">
                </UToggle>
                <p class="ml-2 mb-0 text-sm font-semibold text-left">Send me relevant offers and special discounts</p>
            </div>
        </UFormGroup>

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