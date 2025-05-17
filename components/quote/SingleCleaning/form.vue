<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import { generateDynamicSchema } from '~/utils/forms/dynamicSchema'
import { parseFormConfig } from '~/utils/forms/parseFormConfig'

// 1️⃣ Centralised form config object
const formConfig = {
    roomInput: {
        default: 2,
        type: 'numberInput',
        label: 'Rooms'
    },
    balconyInput: {
        default: 0,
        type: 'numberInput',
        label: 'Balconies'
    },
    carpetInput: {
        default: 0,
        type: 'numberInput',
        label: 'Carpets'
    },
    taskOptions: {
        default: 'Deep cleaning',
        type: 'stringSelect',
        label: 'Cleaning type',
        options: ['Deep cleaning', 'End of tenancy cleaning', 'After builders cleaning', 'Carpet cleaning', 'Upholstery cleaning']
    },
    propertyOptions: {
        default: 'Apartment',
        type: 'stringSelect',
        label: 'Property type',
        options: ['Apartment', 'House', 'Cottage', 'Bungalow']
    },
    accessOptions: {
        default: 'Meet in person',
        type: 'stringSelect',
        label: 'Access',
        options: ['Meet in person', 'Concierge', 'Lock box', 'Pin code', 'Key with neighbour']
    },
    parkingOptions: {
        default: 'Free parking',
        type: 'stringSelect',
        label: 'Parking',
        options: ['Free parking', 'Paid parking']
    },
    extraOptions: {
        default: [],
        type: 'stringMultiSelect',
        label: 'Extras',
        options: ['Dishwashing', 'Inside windows', 'Inside fridge', 'Inside freezer', 'Inside oven', 'Laundry', 'Ironing'],
        optional: true
    },
    timeOptions: {
        default: 'Flexible',
        type: 'stringSelect',
        label: 'Time',
        options: ['Flexible', 'Morning 8am - 12pm', 'Afternoon 12pm - 5pm', 'Evening 5pm - 8pm', 'Overnight', 'Not sure']
    },
    requirementsNote: {
        default: '',
        type: 'textInput',
        label: 'Notes',
        optional: true
    },
    startDate: {
        default: undefined,
        type: 'dateInput'
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
const { parkingPrice, cleaningPrices } = usePricing(); // Pricing data using composable
const { bookingBreakdown, totalPrice, bookingDate, bookingTime } = useBookingFormState(); // Form component updates this data using composable to render booking summary
const minimalCleaningTypes = ['Carpet cleaning', 'Upholstery cleaning'];
const isMinimalCleaningType = computed(() =>
    minimalCleaningTypes.includes(formState.taskOptions)
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
            label: formState.taskOptions, // Base cleaning type
            price:
                (isMinimalCleaningType.value ? cleaningPrices.minimalPrice : cleaningPrices.basePrice)
                + (formState.propertyOptions !== 'Apartment' ? cleaningPrices.houseSurcharge : 0)
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
            price: !isMinimalCleaningType.value ? formState.extraOptions.length * cleaningPrices.extrasPrice : 0,
            units: !isMinimalCleaningType.value ? formState.extraOptions.length : 0,
        },
        {
            label: 'Carpet',
            price: !isMinimalCleaningType.value ? formState.carpetInput * cleaningPrices.carpetPrice : 0, // Carpet line only if not minimal
            units: !isMinimalCleaningType.value ? formState.carpetInput : 0,
        },
        {
            label: 'Parking',
            price: formState.parkingOptions === 'Paid parking' ? parkingPrice : 0,
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

// Create the breakdown array
watch(calculatedPrice, (newPrice) => {
    bookingBreakdown.value = newPrice.items.filter(item => item.price > 0);
    totalPrice.value = newPrice.totalPrice;
}, { immediate: true });

watch(() => formState.startDate, (newDate) => {
    bookingDate.value = newDate || '';
}, { immediate: true });

watch(() => formState.timeOptions, (newTime) => {
    bookingTime.value = newTime || '';
    // const selectedOption = timeOptions.find(option => option.value === newTime);
    // bookingTime.value = selectedOption ? selectedOption.label : '';
}, { immediate: true });

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
                category: 'Home cleaning',
                subcategory: 'Single visit cleaning',
                // recommendedCleaningHours: recommendedCleaningHours.value,
                quote: calculatedPrice.value.totalPrice,
                basket: calculatedPrice.value.items,
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
    <UForm :schema="formSchema" :state="formState" class="space-y-6" @submit="onSubmit">

        <p class="pt-10 text-2xl font-bold">Cleaning requirements</p>

        <UFormGroup size="xl" name="taskOptions" label="Type of cleaning required" required>
            <USelect v-model="formState.taskOptions" :options="options.taskOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup v-if="!isMinimalCleaningType" size="xl" name="propertyOptions"
            label="What kind of property is this for?" required>
            <USelect v-model="formState.propertyOptions" :options="options.propertyOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup v-if="!isMinimalCleaningType" size="xl" name="roomInput"
            description="Include all spaces such as the kitchen, bathrooms, toilets, living rooms and bedrooms">
            <template #label>
                <p class="mb-1">My property contains
                    <span class="text-primary font-bold">
                        {{ formState.roomInput }}
                        {{ formatPlural(formState.roomInput, 'room') }}
                    </span>
                </p>
            </template>
            <URange :min="0" :max="20" :model-value="formState.roomInput"
                @update:model-value="formState.roomInput = $event" />
        </UFormGroup>

        <UFormGroup v-if="!isMinimalCleaningType" size="xl" name="balconyInput"
            description="Only include if cleaning is required">
            <template #label>
                <p class="mb-1">I need cleaning for
                    <span class="text-primary font-bold">
                        {{ formState.balconyInput }}
                        {{ formatPlural(formState.balconyInput, 'balcony', 'balconies') }}
                    </span>
                </p>
            </template>
            <URange :min="0" :max="5" :model-value="formState.balconyInput"
                @update:model-value="formState.balconyInput = $event" />
        </UFormGroup>

        <UFormGroup v-if="!isMinimalCleaningType" size="xl" name="extraOptions" label="Add optional extras"
            hint="Optional">
            <USelectMenu v-model="formState.extraOptions" :options="options.extraOptions" multiple />
        </UFormGroup>

        <UFormGroup size="xl" name="carpetInput" description="Add one carpet for every room, hallway or staircase">
            <template #label>
                <p class="mb-1">I need
                    <span class="text-primary font-bold">steam cleaning for
                        {{ formState.carpetInput }}
                        {{ formatPlural(formState.carpetInput, 'carpet', 'carpets') }}
                    </span>
                </p>
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

        <UFormGroup size="xl" name="requirementsNote" label="Anything else we should know?" hint="Optional">
            <UTextarea v-model="formState.requirementsNote"
                placeholder="e.g. lock box code, access PIN, additional requirements..." />
        </UFormGroup>

        <UFormGroup size="xl" name="startDate" label="What's your ideal cleaning date?" required>
            <UInput v-model="formState.startDate" type="date" />
        </UFormGroup>

        <UFormGroup size="xl" name="timeOptions" label="Morning, afternoon or evening — what suits you best?" required>
            <USelect v-model="formState.timeOptions" :options="options.timeOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup size="xl" name="accessOptions" label="How will the cleaner access your home?" required>
            <USelect v-model="formState.accessOptions" :options="options.accessOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup size="xl" name="parkingOptions" label="What kind of parking is available?" required>
            <USelect v-model="formState.parkingOptions" :options="options.parkingOptions" placeholder="" />
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
                <UToggle on-icon="mdi:check" off-icon="mdi:close" color="green" v-model="formState.marketingCheckbox">
                </UToggle>
                <p class="ml-3 mb-0 font-semibold text-left">Send me relevant offers and special discounts</p>
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