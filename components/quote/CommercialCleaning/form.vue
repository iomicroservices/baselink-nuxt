<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

// Property type input selections
const propertyOptions = [
    { label: 'Office', value: 'office' },
    { label: 'Airbnb rental', value: 'airbnb-rental' },
    { label: 'Holiday rental', value: 'holiday-rental' },
    { label: 'Residential block', value: 'residential-block' },
    { label: 'Serviced apartment', value: 'serviced-apartment' },
    { label: 'Retail unit', value: 'retail-unit' },
    { label: 'Restaurant or Cafe', value: 'restaurant-cafe' },
    { label: 'Bar or Pub', value: 'bar-pub' },
    { label: 'School or Nursery', value: 'school-nursery' },
    { label: 'Warehouse', value: 'warehouse' },
    { label: 'Light industrial', value: 'light-industrial' },
    { label: 'Hotel', value: 'hotel' },
    { label: 'Other', value: 'other' }
]

// Days input selections
const daysOptions = [
    { label: 'Monday', value: 'monday' },
    { label: 'Tuesday', value: 'tuesday' },
    { label: 'Wednesday', value: 'wednesday' },
    { label: 'Thursday', value: 'thursday' },
    { label: 'Friday', value: 'friday' },
    { label: 'Saturday', value: 'saturday' },
    { label: 'Sunday', value: 'sunday' }
]

// Frequency input selections
const frequencyOptions = [
    { label: 'Daily', value: 'daily' },
    { label: 'Weekly', value: 'weekly' },
    { label: 'Fortnightly', value: 'fortnightly' },
    { label: 'Monthly', value: 'monthly' },
    { label: 'One-off', value: 'one-off' },
    { label: 'Not sure', value: 'not-sure' }
]

// Hours input selections
const hoursOptions = [
    { label: '2 hours', value: '2' },
    { label: '3 hours', value: '3' },
    { label: '4+ hours', value: '4' },
    { label: 'Varies', value: 'varies' },
    { label: 'Not sure', value: 'not-sure' }
]

// Time input selections
const timeOptions = [
    { label: 'Flexible', value: 'flexible' },
    { label: 'Morning', value: 'morning' },
    { label: 'Afternoon', value: 'afternoon' },
    { label: 'Evening', value: 'evening' },
    { label: 'Overnight', value: 'overnight' },
    { label: 'Not sure', value: 'not-sure' }
]

const formState = reactive({
    propertyOptionsInput: 'office',
    daysOptionsInput: [],
    frequencyOptionsInput: 'daily',
    hoursOptionsInput: '2',
    timeOptionsInput: 'flexible',
    startDateInput: undefined,
    requirementsInput: '',
    fullNameInput: undefined,
    companyNameInput: undefined,
    postCodeInput: undefined,
    phoneNumberInput: undefined,
    emailInput: undefined,
    termsInput: false
})

const formSchema = z.object({
    propertyOptionsInput: z.string({ message: "Select a property type" }).refine(value => propertyOptions.some(option => option.value === value), { message: "Select a valid property type" }),

    daysOptionsInput: z.array(z.object({
        value: z.string(),
        label: z.string()
    })).nonempty("Select at least one day").refine(values => values.every(value => daysOptions.some(option => option.value === value.value)), { message: "Select valid days" }),

    // daysOptionsInput: z.array(z.string()).nonempty("Select at least one day").refine(values => values.every(value => daysOptions.some(option => option.value === value)), { message: "Select valid days" }), -- this is for non-object arrays

    frequencyOptionsInput: z.string({ message: "Select frequency of cleans" }).refine(value => frequencyOptions.some(option => option.value === value), { message: "Select a valid frequency of cleans" }),

    hoursOptionsInput: z.string({ message: "Select your preferred cleaning hours" }).refine(value => hoursOptions.some(option => option.value === value), { message: "Select valid cleaning hours" }),

    timeOptionsInput: z.string({ message: "Select preferred time of day for cleaning" }).refine(value => timeOptions.some(option => option.value === value), { message: "Select valid preferred time of day for cleaning" }),

    requirementsInput: z.string().max(500, "500 character limit"),

    fullNameInput: z.string({ message: "Name required" }).min(3, { message: "Must be a valid name" }),

    startDateInput: z.string({ message: "Enter a start date" }).date("Must be a valid date").refine(date => {
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return selectedDate >= today;
    }, { message: "Start date cannot be in the past" }),

    companyNameInput: z.string({ message: "Company name required" }).min(3, { message: "Must be a valid company name" }),

    postCodeInput: z.string({ message: "Postcode required" }).min(5, { message: "Must be a valid postcode" }),

    phoneNumberInput: z.string({ message: "Phone number required" }).min(11, { message: "Must be a valid UK phone or mobile number" }),

    emailInput: z.string().min(1, { message: "Email required" }).email({ message: "Must be a valid email" }),

    termsInput: z.boolean().refine(value => value === true, {
        message: "Please read and accept our terms of service and privacy policy to continue"
    })
})

type Schema = z.infer<typeof formSchema>

// const form = ref()

// Computed property to check if the form is valid
const isFormValid = computed(() => {
    try {
        formSchema.parse(formState); // This will throw if validation fails
        return true; // If parsing is successful, the form is valid
    } catch (e) {
        return false; // If there's an error, the form is invalid
    }
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
    // Do something with event.data
    console.log(event.data); // Log the event data
}

</script>

<template>
    <UForm :schema="formSchema" :state="formState" class="space-y-4" @submit="onSubmit">

        <p class="pt-10 text-2xl font-bold">Cleaning requirements</p>

        <UFormGroup size="lg" name="propertyOptionsInput" label="What kind of property is this for?" required>
            <USelect v-model="formState.propertyOptionsInput" :options="propertyOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup size="lg" name="daysOptionsInput" label="Which days of the week do you require a cleaning visit?"
            required>
            <USelectMenu v-model="formState.daysOptionsInput" :options="daysOptions" multiple placeholder="" />
        </UFormGroup>

        <UFormGroup size="lg" name="frequencyOptionsInput" label="How frequently do you require a cleaning visit?"
            required>
            <USelect v-model="formState.frequencyOptionsInput" :options="frequencyOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup size="lg" name="hoursOptionsInput" label="Duration of each cleaning session?" required>
            <USelect v-model="formState.hoursOptionsInput" :options="hoursOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup size="lg" name="timeOptionsInput" label="Morning, afternoon or evening — what suits you best?"
            required>
            <USelect v-model="formState.timeOptionsInput" :options="timeOptions" placeholder="" />
        </UFormGroup>

        <UFormGroup size="lg" name="startDateInput" label="What's your ideal cleaning start date?" required>
            <UInput v-model="formState.startDateInput" type="date" />
        </UFormGroup>

        <UFormGroup size="lg" name="requirementsInput" label="Anything else we should know?" hint="Optional">
            <UTextarea v-model="formState.requirementsInput"
                placeholder="Let us know about any specific requirements..." />
        </UFormGroup>

        <p class="pt-10 text-2xl font-bold">Contact details</p>

        <UFormGroup size="lg" name="fullNameInput" label="Full name" required>
            <UInput v-model="formState.fullNameInput" />
        </UFormGroup>

        <UFormGroup size="lg" name="companyNameInput" label="Company name" hint="Optional" required>
            <UInput v-model="formState.companyNameInput" />
        </UFormGroup>

        <UFormGroup size="lg" name="postCodeInput" label="Postcode" required>
            <UInput v-model="formState.postCodeInput" />
        </UFormGroup>

        <UFormGroup size="lg" name="phoneNumberInput" label="Phone number" required>
            <UInput v-model="formState.phoneNumberInput" />
        </UFormGroup>

        <UFormGroup size="lg" name="emailInput" label="Email" required>
            <UInput v-model="formState.emailInput" />
        </UFormGroup>

        <UFormGroup size="xl" name="termsInput" class="py-3">
            <UCheckbox v-model="formState.termsInput" required>
                <template #label>
                    <span class="ml-2 text-base font-semibold">I accept the
                        <a href="/legal/terms-of-service" target="_blank" class="text-primary-500 underline">terms
                            of
                            service</a>
                        and have read the
                        <a href="/legal/privacy-policy" target="_blank" class="text-primary-500 underline">privacy
                            policy</a>
                    </span>
                </template>
            </UCheckbox>
        </UFormGroup>

        <p>Once you submit this quote form, we will contact you to provide a detailed quote and to set up your
            payment details.</p>

        <!-- <div class="flex flex-col md:flex-row w-full py-3"> -->

        <UButton block type="submit" icon="i-heroicons-paper-airplane"
            class="md:flex-1 mr-0 md:mr-2 mb-2 md:mb-0 font-semibold" :disabled="!isFormValid">
            Submit enquiry
        </UButton>

        <!-- <UButton block variant="outline" class="w-full md:w-1/5 font-semibold" @click="form.clear()">
                Clear form
            </UButton> -->

        <!-- </div> -->

    </UForm>
</template>