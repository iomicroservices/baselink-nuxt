<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import { isClient } from '@vueuse/core'
import { homeCleaningOptions } from '~/utils/forms/formOptions'
import { generateSchema } from '~/utils/forms/generateSchema'
import { homeCleaningDefaults } from '@/utils/forms/formDefaults'

// Pricing data using composable
const { cleaningPrices } = usePricing();
// Form component updates this data using composable to render booking summary
const { bookingBreakdown, totalPrice, bookingDate, bookingTime } = useBookingFormState();

// Form options data stored in utils
const {
    homeOptions,
    accessOptions,
    extraHomeOptions,
    frequencyOptions,
    hoursOptions,
    timeOptions,
} = homeCleaningOptions;

const formSchema = generateSchema(
    Object.keys(homeCleaningDefaults) as (keyof typeof homeCleaningDefaults)[]);
    // alternatively, manually construct: generateSchema([field1, field2,])

type Schema = z.infer<typeof formSchema>

//Store data from user inputs to form
const formState = reactive({
    ...homeCleaningDefaults
});

// Computed property to check if the form is valid
const isFormValid = computed(() => {
    try {
        formSchema.parse(formState); // This will throw if validation fails
        return true; // If parsing is successful, the form is valid
    } catch (e) {
        return false; // If there's an error, the form is invalid
    }
});


// Computed property to calculate recommended cleaning hours
const recommendedCleaningHours = computed(() => {
    if (!isClient) return 2; // Safe default during SSR
    // Start with a base of 1 hour
    let hours = 1;
    // Add 0.5 hours for each bedroom
    hours += 0.5 * formState.bedroomsInput;
    // Add 0.5 hours for each toilet
    hours += 0.5 * formState.toiletsInput;
    // Add 0.5 hours for each extra option selected, except for 'cleaning-products'
    const extraHours = Array.isArray(formState.extraHomeOptionsInput)
        ? formState.extraHomeOptionsInput.filter(option => typeof option === 'string' && option !== 'cleaning-products').length * 0.5
        : 0;
    hours += extraHours;
    // Ensure the minimum is 2 hours and maximum is 10 hours
    return Math.min(Math.max(hours, 2), 10);
});

// Pricing
const calculatedPrice = computed(() => {
    const items = [
        {
            label: formState.hoursOptionsInput + ' hours at £18/hour', // Base cleaning type
            price: formState.hoursOptionsInput * cleaningPrices.hourlyPrice,
            units: formState.hoursOptionsInput,
        },
        {
            label: 'Cleaning products',
            price: formState.extraHomeOptionsInput.includes('cleaning-products') ? 4.8 : 0,
            units: formState.extraHomeOptionsInput.includes('cleaning-products') ? 1 : 0,
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


watch(() => formState.startDateInput, (newDate) => {
    bookingDate.value = newDate || '';
}, { immediate: true });

watch(() => formState.timeOptionsInput, (newTime) => {
    bookingTime.value = newTime || '';
}, { immediate: true });

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

        <UFormGroup size="xl" name="bedroomsInput">
            <template #label>
                <p class="mb-1">I need 
                    <span class="text-primary font-bold">
                        {{ formState.bedroomsInput }} 
                        {{ formatPlural(formState.bedroomsInput, 'bedroom', 'bedrooms') }}
                    </span>
                    cleaned</p>
            </template>
            <URange :min="0" :max="10" :model-value="formState.bedroomsInput"
                @update:model-value="formState.bedroomsInput = $event" />
        </UFormGroup>

        <UFormGroup size="xl" name="toiletsInput">
            <template #label>
                <p class="mb-1">I need 
                    <span class="text-primary font-bold">
                        {{ formState.toiletsInput }} 
                        {{ formatPlural(formState.toiletsInput, 'toilet') }}</span>
                    cleaned</p>
            </template>
            <URange :min="0" :max="10" :model-value="formState.toiletsInput"
                @update:model-value="formState.toiletsInput = $event" />
        </UFormGroup>

        <UFormGroup size="xl" name="extraHomeOptionsInput" label="Add optional extras" hint="Optional">
            <USelectMenu v-model="formState.extraHomeOptionsInput" :options="extraHomeOptions" multiple
                value-attribute="value" />
        </UFormGroup>

        <UFormGroup size="xl" name="frequencyOptionsInput" label="How frequently do you require cleaning?" required>
            <USelect v-model="formState.frequencyOptionsInput" :options="frequencyOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup size="xl" name="hoursOptionsInput" label="Select duration of your clean" required>
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

        <UFormGroup size="xl" name="startDateInput" label="What's your ideal cleaning date?" required>
            <UInput v-model="formState.startDateInput" type="date" />
        </UFormGroup>

        <UFormGroup size="xl" name="timeOptionsInput" label="Morning, afternoon or evening — what suits you best?"
            required>
            <USelect v-model="formState.timeOptionsInput" :options="timeOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup size="xl" name="homeOptionsInput" label="What kind of property is this for?" required>
            <USelect v-model="formState.homeOptionsInput" :options="homeOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup size="xl" name="accessOptionsInput" label="How will the cleaner access your home?" required>
            <USelect v-model="formState.accessOptionsInput" :options="accessOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup size="xl" name="requirementsInput" label="Anything else we should know?" hint="Optional">
            <UTextarea v-model="formState.requirementsInput"
                placeholder="e.g. lock box code, access PIN, additional requirements..." />
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