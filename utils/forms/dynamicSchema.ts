// utils/forms/dynamicSchema.ts
import { z } from 'zod'
import { archetypeValidators } from '~/utils/forms/archetypeValidators'

type ValidatorType =
    | 'textInput'
    | 'stringSelect'
    | 'stringMultiSelect'
    | 'objectSelect'
    | 'objectMultiSelect'
    | 'numberInput'
    | 'emailInput'
    | 'phoneInput'
    | 'dateInput'
    | 'termsCheckbox'
    | 'marketingCheckbox'

export function generateDynamicSchema(
    defaults: Record<string, any>,
    options: Record<string, any>,
    fieldMeta: Record<string, {
        type: ValidatorType
        label?: string
        optionsKey?: string
        optional?: boolean
    }>
) {
    const shape: Record<string, z.ZodTypeAny> = {}

    for (const key in defaults) {
        const meta = fieldMeta[key]
        if (!meta) continue

        const validatorFn = archetypeValidators[meta.type]
        if (!validatorFn) continue

        shape[key] = validatorFn({
            key,
            options: meta.optionsKey ? options[meta.optionsKey] : undefined,
            label: meta.label,
            optional: meta.optional
        })
    }

    return z.object(shape)
}
