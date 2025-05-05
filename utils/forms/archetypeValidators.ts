import { z } from 'zod'

export type ValidatorType =
    | 'textInput'
    | 'stringSelect'
    | 'stringMultiSelect'
    | 'objectSelect'
    | 'objectNumberSelect'
    | 'objectMultiSelect'
    | 'numberInput'
    | 'emailInput'
    | 'phoneInput'
    | 'dateInput'
    | 'termsCheckbox'
    | 'marketingCheckbox'

export interface ValidatorParams {
    key?: string
    label?: string
    options?: string[] | { value: string }[] | { value: number} []
    optional?: boolean
}

export const archetypeValidators: Record<
    ValidatorType,
    (params: ValidatorParams) => z.ZodTypeAny
> = {
    textInput: ({ label = 'Field', optional }) => {
        const base = z.string().max(500, `500 character limit`)

        if (optional) {
            // Optional field: allow empty or undefined, but still enforce max length if present
            return base.optional()
        }

        // Required field: must have value and meet min/max
        return base
            .min(3, `Must be a valid ${label.toLowerCase()}`)
            .refine(val => val.trim().length > 0, { message: `${label} required` })
    },

    stringSelect: ({ label = 'Option', options = [] }) =>
        z.string({ message: `Select ${label}` })
            .refine(value => (options as string[]).includes(value), {
                message: `Select a valid ${label.toLowerCase()}`
            }),
    
    stringMultiSelect: ({ label = 'Option', options = [], optional }) => {
        const base = optional
            ? z.array(z.string())
            : z.array(z.string()).nonempty(`Select at least one ${label.toLowerCase()}`);

        return base.refine(
            values => values.every(val => (options as string[]).includes(val)),
            { message: `Select valid ${label.toLowerCase()}` }
        );
    },

    objectSelect: ({ label = 'Option', options = [] }) =>
        z.string({ message: `Select ${label}` })
            .refine(value => (options as { value: string }[]).some(opt => opt.value === value), {
                message: `Select a valid ${label.toLowerCase()}`
            }),
    
    objectNumberSelect: ({ label = 'Option', options = [] }) =>
        z.coerce.number({
            required_error: `Select ${label.toLowerCase()}`,
            invalid_type_error: 'Must be a number'
        }).refine(
            value => (options as { value: number }[]).some(opt => opt.value === value),
            {
                message: `Select valid ${label.toLowerCase()}`
            }
        ),

    objectMultiSelect: ({ label = 'Option', options = [], optional }) => {
        const base = optional
            ? z.array(z.string())
            : z.array(z.string()).nonempty(`Select at least one ${label.toLowerCase()}`);

        return base.refine(
            values => values.every(val => (options as { value: string }[]).some(opt => opt.value === val)),
            { message: `Select valid ${label.toLowerCase()}` }
        );
    },

    numberInput: ({ label = 'Number' }) =>
        z.number({
            required_error: `Select ${label.toLowerCase()}`,
            invalid_type_error: "Must be a number"
        }),

    emailInput: () =>
        z.string({ message: "Email required" })
            .email("Must be a valid email")
            .min(5)
            .max(100),

    phoneInput: () =>
        z.string({ message: "Phone number required" })
            .min(11, "Must be a valid phone number")
            .max(15, "Must not exceed 15 digits"),

    dateInput: () =>
        z.string({ message: "Date required" })
            .date("Must be a valid date")
            .refine(date => {
                const selected = new Date(date)
                const today = new Date()
                today.setHours(0, 0, 0, 0)
                return selected >= today
            }, { message: "Date cannot be in the past" }),

    termsCheckbox: () =>
        z.boolean().refine(val => val === true, { message: "Please accept terms to continue" }),

    marketingCheckbox: () => z.boolean(),
}