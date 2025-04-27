<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import { isClient } from '@vueuse/core'
const { parkingPrice, cleaningPrices } = usePricing();
const { bookingBreakdown, totalPrice, bookingDate, bookingTime } = useBookingFormState();


// Property type input selections
const typeOptions = [ 'Deep cleaning', 'End of tenancy cleaning', 'After builders cleaning', 'Carpet cleaning', 'Upholstery cleaning' ]

// Property type input selections
const propertyOptions = ['Apartment', 'House', 'Cottage', 'Bungalow']

// Property type input selections
const accessOptions = ['Meet in person', 'Concierge', 'Lock box', 'Pin code', 'Key with neighbour']

// Property type input selections
const parkingOptions = ['Free parking', 'Paid parking']

// Days input selections
const extraOptions = ['Dishwashing', 'Inside windows', 'Inside fridge', 'Inside freezer', 'Inside oven', 'Laundry', 'Ironing']

// Time input selections
const timeOptions = [
    { label: 'Flexible', value: 'flexible' },
    { label: 'Morning 8am - 12pm', value: 'morning' },
    { label: 'Afternoon 12pm - 5pm', value: 'afternoon' },
    { label: 'Evening 5pm - 8pm', value: 'evening' }
]

const formState = reactive({
    typeOptionsInput: 'Deep cleaning',
    propertyOptionsInput: 'Apartment',
    roomInput: 2,
    balconyInput: 0,
    carpetInput: 0,
    extraOptionsInput: [],
    startDateInput: undefined,
    timeOptionsInput: 'flexible',
    accessOptionsInput: 'Meet in person',
    parkingOptionsInput: 'Free parking',
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

const roomSpelling = computed(() => {
    return formState.roomInput === 1 ? 'room' : 'rooms';
});

const balconySpelling = computed(() => {
    return formState.balconyInput === 1 ? 'balcony/terrace' : 'balconies/terraces';
});

const carpetSpelling = computed(() => {
    return formState.carpetInput === 1 ? 'carpet' : 'carpets';
});

const formSchema = z.object({

    typeOptionsInput: z.string({ message: "Select type of clean" }).refine(value => typeOptions.includes(value), { message: "Select a valid type of clean" }),

    roomInput: z.number({
        required_error: "Select number of rooms",
        invalid_type_error: "Must be a number",
    }),

    balconyInput: z.number({
        required_error: "Select number of balconies/terraces",
        invalid_type_error: "Must be a number",
    }),

    carpetInput: z.number({
        required_error: "Select number of carpets",
        invalid_type_error: "Must be a number",
    }),

    propertyOptionsInput: z.string({ message: "Select a property type" }).refine(value => propertyOptions.includes(value), { message: "Select a valid property of clean" }),

    accessOptionsInput: z.string({ message: "Select a property type" }).refine(value => accessOptions.includes(value), { message: "Select a valid property type" }),

    parkingOptionsInput: z.string({ message: "Select a property type" }).refine(value => parkingOptions.includes(value), { message: "Select a valid property type" }),

    extraOptionsInput: z.array(z.string()).refine(values => values.every(value => extraOptions.includes(value)), { message: "Select valid days" }),

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


const minimalCleaningTypes = ['Carpet cleaning', 'Upholstery cleaning'];

const isMinimalCleaningType = computed(() =>
    minimalCleaningTypes.includes(formState.typeOptionsInput)
);

let wasMinimal = isMinimalCleaningType.value; // Track previous minimal state

watch(
    () => isMinimalCleaningType.value,
    (isNowMinimal) => {
        if (wasMinimal && !isNowMinimal) {
            // Switching FROM minimal TO non-minimal
            formState.carpetInput = 0;
        } else if (!wasMinimal && isNowMinimal) {
            // Switching FROM non-minimal TO minimal
            if (formState.carpetInput < 2) {
                formState.carpetInput = 2;
            }
        }
        wasMinimal = isNowMinimal; // Update tracker
    },
    { immediate: true }
);


// Pricing
const calculatedPrice = computed(() => {
    const items = [
        {
            label: formState.typeOptionsInput, // Base cleaning type
            price:
                (isMinimalCleaningType.value ? cleaningPrices.minimalPrice : cleaningPrices.basePrice)
                + (formState.propertyOptionsInput !== 'Apartment' ? cleaningPrices.houseSurcharge : 0)
                + (!isMinimalCleaningType.value ? Math.max(0, formState.roomInput - 2) * cleaningPrices.roomPrice : 0)
                + (isMinimalCleaningType.value ? Math.max(0, formState.carpetInput - 2) * cleaningPrices.carpetPrice : 0), // Add carpets to base if minimal
            units: 1,
        },
        {
            label: 'Balcony',
            price: !isMinimalCleaningType.value ? formState.balconyInput * cleaningPrices.balconyPrice : 0,
            units: !isMinimalCleaningType.value ? formState.balconyInput : 0,
        },
        {
            label: 'Extras',
            price: !isMinimalCleaningType.value ? formState.extraOptionsInput.length * cleaningPrices.extrasPrice : 0,
            units: !isMinimalCleaningType.value ? formState.extraOptionsInput.length : 0,
        },
        {
            label: 'Carpet',
            price: !isMinimalCleaningType.value ? formState.carpetInput * cleaningPrices.carpetPrice : 0, // Carpet line only if not minimal
            units: !isMinimalCleaningType.value ? formState.carpetInput : 0,
        },
        {
            label: 'Parking',
            price: formState.parkingOptionsInput === 'Paid parking' ? parkingPrice : 0,
            units: 1,
        },
    ];

    // Calculate total
    const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

    return {
        items,
        totalPrice
    };
});

// const calculatedPrice = computed(() => {
//     // Set base price depending on the cleaning type
//     const basePrice = isMinimalCleaningType.value
//         ? cleaningPrices.minimalPrice
//         : cleaningPrices.basePrice;
//     // non-flat surcharge price
//     const houseSurcharge = formState.propertyOptionsInput === 'Apartment'
//         ? 0
//         : cleaningPrices.houseSurcharge;
//     // Add price based on number of rooms (only if not minimal type)
//     const extraRooms = !isMinimalCleaningType.value
//         ? Math.max(0, formState.roomInput - 2)
//         : 0;
//     const roomPrice = extraRooms * cleaningPrices.roomPrice;
//     // Add price based on number of rooms (only if not minimal type)
//     const balconyPrice = !isMinimalCleaningType.value
//         ? formState.balconyInput * cleaningPrices.balconyPrice
//         : 0;
//     // Add price for extras (only if not minimal type)
//     const extrasPrice = !isMinimalCleaningType.value && Array.isArray(formState.extraOptionsInput)
//         ? formState.extraOptionsInput.length * cleaningPrices.extrasPrice
//         : 0;
//     // Add price for carpets (only if minimal type, e.g. carpet/upholstery cleaning)
//     const carpetPrice = isMinimalCleaningType.value
//         ? Math.max(0, formState.carpetInput - 2) * cleaningPrices.carpetPrice
//         : formState.carpetInput * cleaningPrices.carpetPrice;
//     // Parking price
//     const parkingSurcharge = formState.parkingOptionsInput === 'Paid parking'
//         ? parkingPrice
//         : 0;
//     // Add all prices for total
//     const totalPrice = basePrice + houseSurcharge + roomPrice + balconyPrice + extrasPrice + carpetPrice + parkingSurcharge;

//     return {
//         basePrice,
//         houseSurcharge,
//         roomPrice,
//         balconyPrice,
//         extrasPrice,
//         carpetPrice,
//         parkingSurcharge,
//         totalPrice
//     };
// });

// // Create the breakdown array
watch(calculatedPrice, (newPrice) => {
    bookingBreakdown.value = newPrice.items.filter(item => item.price > 0);
    totalPrice.value = newPrice.totalPrice;
}, { immediate: true });

// watch(calculatedPrice, (newPrice) => {
//     bookingBreakdown.value = [
//         { label: formState.typeOptionsInput, price: newPrice.basePrice, units: 1 },
//         { label: 'Property Surcharge', price: newPrice.houseSurcharge, units: 1 },
//         { label: 'Extra Room', price: newPrice.roomPrice, units: Math.max(0, formState.roomInput - 2) },
//         { label: 'Balcony', price: newPrice.balconyPrice, units: formState.balconyInput },
//         { label: 'Extras', price: newPrice.extrasPrice, units: formState.extraOptionsInput.length },
//         { label: 'Carpet', price: newPrice.carpetPrice, units: formState.carpetInput },
//         { label: 'Parking', price: newPrice.parkingSurcharge, units: 1 },
//     ].filter(item => item.price > 0); // Only show if > £0

//     totalPrice.value = newPrice.totalPrice;
// }, { immediate: true });

watch(() => formState.startDateInput, (newDate) => {
    bookingDate.value = newDate || '';
});

watch(() => formState.timeOptionsInput, (newTime) => {
    const selectedOption = timeOptions.find(option => option.value === newTime);
    bookingTime.value = selectedOption ? selectedOption.label : '';
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
                // recommendedCleaningHours: recommendedCleaningHours.value,
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
    <UForm :schema="formSchema" :state="formState" class="space-y-6" @submit="onSubmit">

        <p class="pt-10 text-2xl font-bold">Cleaning requirements</p>

        <UFormGroup size="xl" name="typeOptionsInput" label="Type of cleaning required" required>
            <USelect v-model="formState.typeOptionsInput" :options="typeOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup v-if="!isMinimalCleaningType" size="xl" name="propertyOptionsInput"
            label="What kind of property is this for?" required>
            <USelect v-model="formState.propertyOptionsInput" :options="propertyOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup v-if="!isMinimalCleaningType" size="xl" name="roomInput"
            description="Include all spaces such as the kitchen, bathrooms, toilets, living rooms and bedrooms">
            <template #label>
                <p class="mb-1">My property contains <span class="text-primary font-bold">{{ formState.roomInput }} {{
                        roomSpelling }}</span></p>
            </template>
            <URange :min="1" :max="20" :model-value="formState.roomInput"
                @update:model-value="formState.roomInput = $event" />
        </UFormGroup>

        <UFormGroup v-if="!isMinimalCleaningType" size="xl" name="balconyInput"
            description="Only include if cleaning is required">
            <template #label>
                <p class="mb-1">I need cleaning for <span class="text-primary font-bold">{{ formState.balconyInput }} {{
                        balconySpelling }}</span></p>
            </template>
            <URange :min="0" :max="5" :model-value="formState.balconyInput"
                @update:model-value="formState.balconyInput = $event" />
        </UFormGroup>

        <UFormGroup v-if="!isMinimalCleaningType" size="xl" name="extraOptionsInput" label="Add optional extras"
            hint="Optional">
            <USelectMenu v-model="formState.extraOptionsInput" :options="extraOptions" multiple />
        </UFormGroup>

        <UFormGroup size="xl" name="carpetInput" description="Add one carpet for every room, hallway or staircase">
            <template #label>
                <p class="mb-1">I need <span class="text-primary font-bold">steam cleaning for {{ formState.carpetInput
                        }} {{ carpetSpelling }}</span></p>
            </template>
            <URange :min="0" :max="10" :model-value="formState.carpetInput"
                @update:model-value="formState.carpetInput = $event" />
        </UFormGroup>

        <!-- upholstery section, make sure to add validation and reactivity etc...
         <UFormGroup size="xl">
            <template #label>
                <p class="mb-1">I need the following <span class="text-primary font-bold">upholstery</span> cleaned</p>
            </template>
            <div class="flex items-center">
                <UInput type="checkbox" class="py-3 !w-10" />
                <p class="ml-3 mb-0 text-left">Sofas</p>
            </div>
            <div class="flex items-center">
                <UInput type="checkbox" class="py-3 !w-10" />
                <p class="ml-3 mb-0 text-left">Curtains</p>
            </div>
            <div class="flex items-center">
                <UInput type="checkbox" class="py-3 !w-10" />
                <p class="ml-3 mb-0 text-left">Mattresses</p>
            </div>
        </UFormGroup>-->

        <UFormGroup size="xl" name="requirementsInput" label="Anything else we should know?" hint="Optional">
            <UTextarea v-model="formState.requirementsInput"
                placeholder="e.g. lock box code, access PIN, additional requirements..." />
        </UFormGroup>

        <UFormGroup size="xl" name="startDateInput" label="What's your ideal cleaning date?" required>
            <UInput v-model="formState.startDateInput" type="date" />
        </UFormGroup>

        <UFormGroup size="xl" name="timeOptionsInput" label="Morning, afternoon or evening — what suits you best?"
            required>
            <USelect v-model="formState.timeOptionsInput" :options="timeOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup size="xl" name="accessOptionsInput" label="How will the cleaner access your home?" required>
            <USelect v-model="formState.accessOptionsInput" :options="accessOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup size="xl" name="parkingOptionsInput" label="What kind of parking is available?" required>
            <USelect v-model="formState.parkingOptionsInput" :options="parkingOptions" placeholder="" />
        </UFormGroup>

        <p class="pt-10 text-2xl font-bold">Contact details</p>

        <UFormGroup size="xl" name="fullNameInput" label="Full name" required>
            <UInput v-model="formState.fullNameInput" />
        </UFormGroup>

        <UFormGroup size="xl" name="addressOneInput" label="Address line 1" required>
            <UInput v-model="formState.addressOneInput" />
        </UFormGroup>

        <UFormGroup size="xl" name="addressTwoInput" label="Address line 2" hint="Optional">
            <UInput v-model="formState.addressTwoInput" />
        </UFormGroup>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <UFormGroup size="xl" name="addressCityInput" label="City" required>
                <UInput v-model="formState.addressCityInput" />
            </UFormGroup>

            <UFormGroup size="xl" name="postCodeInput" label="Postcode" required>
                <UInput v-model="formState.postCodeInput" />
            </UFormGroup>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <UFormGroup size="xl" name="phoneNumberInput" label="Phone number" required>
                <UInput v-model="formState.phoneNumberInput" />
            </UFormGroup>

            <UFormGroup size="xl" name="emailInput" label="Email" required>
                <UInput v-model="formState.emailInput" />
            </UFormGroup>
        </div>

        <UFormGroup size="xl" name="marketingInput" class="py-5">
            <div class="flex items-start">
                <UToggle on-icon="i-heroicons-check-20-solid" off-icon="i-heroicons-x-mark-20-solid" color="green"
                    v-model="formState.marketingInput">
                </UToggle>
                <p class="ml-3 mb-0 font-semibold text-left">Send me relevant offers and special discounts</p>
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