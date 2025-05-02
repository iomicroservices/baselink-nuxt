// utils/generateSchema.ts
import { z } from 'zod'
import { sharedValidationFields } from '~/utils/forms/validationFields'

export function generateSchema(fields: Array<keyof typeof sharedValidationFields>) {
    const picked = fields.reduce((acc, field) => {
        acc[field] = sharedValidationFields[field];
        return acc;
    }, {} as Record<string, z.ZodTypeAny>);

    return z.object(picked);
}