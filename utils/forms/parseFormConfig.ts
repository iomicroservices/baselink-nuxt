export function parseFormConfig(formConfig: Record<string, any>) {
    const defaults: Record<string, any> = {}
    const meta: Record<string, any> = {}
    const options: Record<string, any> = {}

    for (const key in formConfig) {
        const item = formConfig[key]
        defaults[key] = item.default
        meta[key] = {
            type: item.type,
            label: item.label,
            optional: item.optional,
            optionsKey: item.options ? key : undefined  // ✅ Add this line
        }
        if (item.options) {
            options[key] = item.options
        }
    }

    return { defaults, meta, options }
}