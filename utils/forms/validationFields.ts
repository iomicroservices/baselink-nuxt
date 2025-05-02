// utils/validation-fields.ts
import { z } from 'zod'
import { homeCleaningOptions, singleCleaningOptions, commercialCleaningOptions } from '~/utils/forms/formOptions'

export const sharedValidationFields = {
    // Common fields
    fullNameInput: z.string({ message: "Name required" }).min(3, "Must be a valid name").max(100, "100 character limit"),
    addressOneInput: z.string({ message: "Address required" }).min(3, "Must be a valid address").max(100, "100 character limit"),
    addressTwoInput: z.string().max(100),
    addressCityInput: z.string({ message: "City required" }).min(3, "Must be a valid city").max(100, "100 character limit"),
    postCodeInput: z.string({ message: "Postcode required" }).min(5, "Must be a valid post code").max(10, "10 character limit"),
    phoneNumberInput: z.string({ message: "Phone number required" }).min(11, "Must be a valid phone number").max(15, "15 character limit"),
    emailInput: z.string({ message: "Email required" }).email().min(5, "Must be a valid email").max(100, "100 character limit"),
    requirementsInput: z.string().max(500, "500 character limit"),
    marketingInput: z.boolean(),
    companyNameInput: z.string().min(3, "Must be a valid company name").max(100, "100 character limit"),
    termsInput: z.boolean().refine(value => value === true, {
        message: "Please accept terms to continue"
    }),
    startDateInput: z.string({ message: "Date required" })
        .date("Must be a valid date")
        .refine(date => {
            const selectedDate = new Date(date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            return selectedDate >= today;
        }, { message: "Date cannot be in the past" }),

    // Home cleaning fields
    bedroomsInput: z.number({
        required_error: "Select number of bedrooms",
        invalid_type_error: "Must be a number",
    }),
    toiletsInput: z.number({
        required_error: "Select number of toilets",
        invalid_type_error: "Must be a number",
    }),
    homeOptionsInput: z.string({ message: "Select property type" })
        .refine(value => homeCleaningOptions.homeOptions.includes(value), { message: "Select a valid property" }),
    accessOptionsInput: z.string({ message: "Select access option" })
        .refine(value => homeCleaningOptions.accessOptions.includes(value), { message: "Select a valid access option" }),
    extraHomeOptionsInput: z.array(z.string())
        .refine(values => values.every(value => homeCleaningOptions.extraHomeOptions.some(opt => opt.value === value)), { message: "Select valid extras" }),
    frequencyOptionsInput: z.string({ message: "Select frequency" })
        .refine(value => homeCleaningOptions.frequencyOptions.includes(value), { message: "Select a valid frequency" }),
    hoursOptionsInput: z.coerce.number({
        required_error: "Select cleaning hours",
        invalid_type_error: "Must be a number",
    }).refine(value => homeCleaningOptions.hoursOptions.some(opt => opt.value === value), { message: "Select valid cleaning hours" }),
    timeOptionsInput: z.string({ message: "Select time" })
        .refine(value => homeCleaningOptions.timeOptions.includes(value), { message: "Select a valid time" }),

    // Single visit cleaning fields
    typeOptionsInput: z.string({ message: "Select type of clean" })
        .refine(value => singleCleaningOptions.typeOptions.includes(value), { message: "Select a valid type" }),
    propertyOptionsInput: z.string({ message: "Select property type" })
        .refine(value => singleCleaningOptions.propertyOptions.includes(value), { message: "Select a valid property" }),
    parkingOptionsInput: z.string({ message: "Select parking option" })
        .refine(value => singleCleaningOptions.parkingOptions.includes(value), { message: "Select valid parking option" }),
    roomInput: z.number({
        required_error: "Select number of rooms",
        invalid_type_error: "Must be a number",
    }),
    extraOptionsInput: z.array(z.string())
        .refine(values => values.every(value => singleCleaningOptions.extraOptions.includes(value)), { message: "Select valid days" }),
    balconyInput: z.number({
        required_error: "Select number of balconies/terraces",
        invalid_type_error: "Must be a number",
    }),
    carpetInput: z.number({
        required_error: "Select number of carpets",
        invalid_type_error: "Must be a number",
    }),

    // Commercial cleaning fields
    commercialPropertyOptionsInput: z.string({ message: "Select property type" })
        .refine(value => commercialCleaningOptions.propertyOptions.includes(value), { message: "Select a valid property" }),
    daysOptionsInput: z.array(z.string())
        .nonempty("Select at least one day")
        .refine(values => values.every(value => commercialCleaningOptions.daysOptions.includes(value)), { message: "Select valid days" }),
    commercialFrequencyOptionsInput: z.string({ message: "Select frequency" })
        .refine(value => commercialCleaningOptions.frequencyOptions.includes(value), { message: "Select a valid frequency" }),
    unitHoursOptionsInput: z.string({ message: "Select preferred hours" })
        .refine(value => commercialCleaningOptions.unitHoursOptions.includes(value), { message: "Select valid cleaning hours" }),
    commercialTimeOptionsInput: z.string({ message: "Select time" })
        .refine(value => commercialCleaningOptions.timeOptions.includes(value), { message: "Select a valid time" }),
};
