<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

// Property type input selections
const propertyOptions = [
    { label: 'Apartment', value: 'apartment' },
    { label: 'House', value: 'house' },
    { label: 'Cottage', value: 'cottage' },
    { label: 'Bungalow', value: 'bungalow' }
]

// Property type input selections
const accessOptions = [
    { label: 'Meet in person', value: 'in-person' },
    { label: 'Concierge', value: 'concierge' },
    { label: 'Lock box', value: 'lock-box' },
    { label: 'Pin code', value: 'pin-code' },
    { label: 'Key with neighbour', value: 'neighbour' }
]

// Days input selections
const extraOptions = [
    { label: 'Cleaning products (+4.80)', value: 'cleaning-products' },
    { label: 'Dishwashing', value: 'dishwashing' },
    { label: 'Laundry', value: 'laundry' },
    { label: 'Ironing', value: 'ironing' },
    { label: 'Inside fridge', value: 'inside-fridge' },
    { label: 'Inside oven', value: 'inside-oven' }
]

// Frequency input selections
const frequencyOptions = [
    { label: 'Monthly', value: 'monthly' },
    { label: 'Fortnightly', value: 'fortnightly' },
    { label: 'Weekly', value: 'weekly' },
    { label: 'Varies', value: 'varies' },
    { label: 'One-off', value: 'one-off' }
]

// Step 2: Annotate the hoursOptions constant with the defined interface
const hoursOptions = [
    { label: '2 hours', value: 2 },
    { label: '2.5 hours', value: 2.5 },
    { label: '3 hours', value: 3 },
    { label: '3.5 hours', value: 3.5 },
    { label: '4 hours', value: 4 },
    { label: '4.5 hours', value: 4.5 },
    { label: '5 hours', value: 5 },
    { label: '5.5 hours', value: 5.5 },
    { label: '6 hours', value: 6 },
    { label: '6.5 hours', value: 6.5 },
    { label: '7 hours', value: 7 },
    { label: '7.5 hours', value: 7.5 },
    { label: '8 hours', value: 8 },
    { label: '8.5 hours', value: 8.5 },
    { label: '9 hours', value: 9 },
    { label: '9.5 hours', value: 9.5 },
    { label: '10 hours', value: 10 }
]

// Time input selections
const timeOptions = [
    { label: 'Flexible', value: 'flexible' },
    { label: 'Morning 8am - 12pm', value: 'morning' },
    { label: 'Afternoon 12pm - 5pm', value: 'afternoon' },
    { label: 'Evening 5pm - 8pm', value: 'evening' }
]

const formState = reactive({
    bedroomsInput: 1,
    toiletsInput: 1,
    extraOptionsInput: [],
    frequencyOptionsInput: 'monthly',
    hoursOptionsInput: 2,
    startDateInput: undefined,
    timeOptionsInput: 'flexible',
    propertyOptionsInput: 'apartment',
    accessOptionsInput: 'in-person',
    requirementsInput: '',
    fullNameInput: undefined,
    addressOneInput: undefined,
    addressTwoInput: '',
    addressCityInput: undefined,
    postCodeInput: undefined,
    phoneNumberInput: undefined,
    emailInput: undefined,
    marketingInput: true
});

const bedroomSpelling = computed(() => {
    return formState.bedroomsInput === 1 ? 'bedroom' : 'bedrooms';
});

const toiletSpelling = computed(() => {
    return formState.toiletsInput === 1 ? 'toilet' : 'toilets';
});

// Computed property to calculate recommended cleaning hours
const recommendedCleaningHours = computed(() => {
    // Start with a base of 1 hour
    let hours = 1;
    // Add 0.5 hours for each bedroom
    hours += 0.5 * formState.bedroomsInput;
    // Add 0.5 hours for each toilet
    hours += 0.5 * formState.toiletsInput;
    // Add 0.5 hours for each extra option selected, except for 'cleaning-products'
    const extraHours = formState.extraOptionsInput.filter(option => option !== 'cleaning-products').length * 0.5;
    hours += extraHours;
    // Ensure the minimum is 2 hours and maximum is 10 hours
    return Math.min(Math.max(hours, 2), 10);
});

const formSchema = z.object({

    bedroomsInput: z.number({
        required_error: "Select number of bedrooms",
        invalid_type_error: "Must be a number",
    }),

    toiletsInput: z.number({
        required_error: "Select number of toilets",
        invalid_type_error: "Must be a number",
    }),

    propertyOptionsInput: z.string({ message: "Select a property type" }).refine(value => propertyOptions.some(option => option.value === value), { message: "Select a valid property type" }),

    accessOptionsInput: z.string({ message: "Select a property type" }).refine(value => accessOptions.some(option => option.value === value), { message: "Select a valid property type" }),

    extraOptionsInput: z.array(z.string()).refine(values => values.every(value => extraOptions.some(option => option.value === value)), { message: "Select valid days" }),

    frequencyOptionsInput: z.string({ message: "Select frequency of cleans" }).refine(value => frequencyOptions.some(option => option.value === value), { message: "Select a valid frequency of cleans" }),

    hoursOptionsInput: z.coerce.number({
        required_error: "Select cleaning hours needed",
        invalid_type_error: "Must be a number",
    }).refine(value => hoursOptions.some(option => option.value === value), { message: "Select valid cleaning hours" }),

    timeOptionsInput: z.string({ message: "Select preferred time of day for cleaning" }).refine(value => timeOptions.some(option => option.value === value), { message: "Select valid preferred time of day for cleaning" }),

    requirementsInput: z.string().max(500, "500 character limit"),

    fullNameInput: z.string({ message: "Name required" }).min(3, { message: "Must be a valid name" }).max(100, { message: "Max 100 characters allowed" }),

    addressOneInput: z.string({ message: "Address required" }).min(3, { message: "Must be a valid address" }).max(100, { message: "Max 100 characters allowed" }),

    addressTwoInput: z.string({ message: "Address required" }).max(100, { message: "Max 100 characters allowed" }),

    addressCityInput: z.string({ message: "City required" }).min(3, { message: "Must be a valid city" }).max(100, { message: "Max 100 characters allowed" }),

    startDateInput: z.string({ message: "Date required" }).date("Must be a valid date").refine(date => {
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return selectedDate >= today;
    }, { message: "Cleaning date cannot be in the past" }),

    postCodeInput: z.string({ message: "Postcode required" }).min(5, { message: "Must be a valid postcode" }),

    phoneNumberInput: z.string({ message: "Phone number required" }).min(11, { message: "Must be a valid UK phone or mobile number" }),

    emailInput: z.string().min(1, { message: "Email required" }).email({ message: "Must be a valid email" }),

    marketingInput: z.boolean(),
});

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
        const response = await $fetch('/api/home-cleaning/form-submit', {
            method: 'POST',
            body: {
                ...formState, // Send the form state as the request body
                recommendedCleaningHours: recommendedCleaningHours.value,
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
    <UForm :schema="formSchema" :state="formState" class="space-y-4" @submit="onSubmit">

        <p class="pt-10 text-2xl font-bold">Cleaning requirements</p>

        <UFormGroup size="md" name="bedroomsInput">
            <template #label>
                <p class="mb-1">I need <span class="text-primary font-bold">{{ formState.bedroomsInput }} {{
                        bedroomSpelling }}</span>
                    cleaned</p>
            </template>
            <URange :min="0" :max="10" :model-value="formState.bedroomsInput"
                @update:model-value="formState.bedroomsInput = $event" />
        </UFormGroup>

        <UFormGroup size="md" name="toiletsInput">
            <template #label>
                <p class="mb-1">I need <span class="text-primary font-bold">{{ formState.toiletsInput }} {{
                        toiletSpelling }}</span>
                    cleaned</p>
            </template>
            <URange :min="0" :max="10" :model-value="formState.toiletsInput"
                @update:model-value="formState.toiletsInput = $event" />
        </UFormGroup>

        <UFormGroup size="lg" name="extraOptionsInput" label="Add optional extras" hint="Optional">
            <USelectMenu v-model="formState.extraOptionsInput" :options="extraOptions" multiple value-attribute="value"
                placeholder="" />
        </UFormGroup>

        <UFormGroup size="lg" name="frequencyOptionsInput" label="How frequently do you require cleaning?" required>
            <USelect v-model="formState.frequencyOptionsInput" :options="frequencyOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup size="lg" name="hoursOptionsInput" label="Select duration of your clean" required>
            <template #description>
                <ClientOnly>
                    <p class="-mb-1">
                        We recommend selecting <span class="text-primary font-bold">{{ recommendedCleaningHours }}
                            hours</span>
                    </p>
                </ClientOnly>
            </template>
            <USelect v-model="formState.hoursOptionsInput" :options="hoursOptions" />
        </UFormGroup>

        <UFormGroup size="lg" name="startDateInput" label="What's your ideal cleaning date?" required>
            <UInput v-model="formState.startDateInput" type="date" />
        </UFormGroup>

        <UFormGroup size="lg" name="timeOptionsInput" label="Morning, afternoon or evening — what suits you best?"
            required>
            <USelect v-model="formState.timeOptionsInput" :options="timeOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup size="lg" name="propertyOptionsInput" label="What kind of property is this for?" required>
            <USelect v-model="formState.propertyOptionsInput" :options="propertyOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup size="lg" name="accessOptionsInput" label="How will the cleaner access your home?" required>
            <USelect v-model="formState.accessOptionsInput" :options="accessOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup size="lg" name="requirementsInput" label="Anything else we should know?" hint="Optional">
            <UTextarea v-model="formState.requirementsInput"
                placeholder="e.g. lock box code, access PIN, additional requirements..." />
        </UFormGroup>

        <p class="pt-10 text-2xl font-bold">Contact details</p>

        <UFormGroup size="lg" name="fullNameInput" label="Full name" required>
            <UInput v-model="formState.fullNameInput" />
        </UFormGroup>

        <UFormGroup size="lg" name="addressOneInput" label="Address line 1" required>
            <UInput v-model="formState.addressOneInput" />
        </UFormGroup>

        <UFormGroup size="lg" name="addressTwoInput" label="Address line 2" hint="Optional">
            <UInput v-model="formState.addressTwoInput" />
        </UFormGroup>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <UFormGroup size="lg" name="addressCityInput" label="City" required>
                <UInput v-model="formState.addressCityInput" />
            </UFormGroup>

            <UFormGroup size="lg" name="postCodeInput" label="Postcode" required>
                <UInput v-model="formState.postCodeInput" />
            </UFormGroup>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <UFormGroup size="lg" name="phoneNumberInput" label="Phone number" required>
                <UInput v-model="formState.phoneNumberInput" />
            </UFormGroup>

            <UFormGroup size="lg" name="emailInput" label="Email" required>
                <UInput v-model="formState.emailInput" />
            </UFormGroup>
        </div>

        <UFormGroup size="xl" name="marketingInput" class="py-3">
            <UCheckbox v-model="formState.marketingInput">
                <template #label>
                    <p class="ml-2 text-base font-semibold">Send me updates and special offers</p>
                </template>
            </UCheckbox>
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