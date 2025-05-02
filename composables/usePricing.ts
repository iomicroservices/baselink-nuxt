// composables/usePricing.ts

// import pricing from data > pricing.ts with explicit Pricing type (optional)
import { defaultPrices, type Pricing } from '@/data/pricing'

// 3️⃣ Export your composable with explicit Pricing type (optional)
export function usePricing(): Pricing {
    return defaultPrices
}