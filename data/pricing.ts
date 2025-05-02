export const defaultPrices = {
    parkingPrice: 12,
    cleaningPrices: {
        hourlyPrice: 18,
        basePrice: 192,
        minimalPrice: 84,
        roomPrice: 24,
        balconyPrice: 30,
        extrasPrice: 12,
        carpetPrice: 36,
        houseSurcharge: 60,
        weekendSurcharge: 12,
        morningSurcharge: 12,
        eveningSurcharge: 12,
    },
    handymanPrices: {
        hourlyRate: 72,
        weekendSurcharge: 15,
        morningSurcharge: 5,
        eveningSurcharge: 24,
    },
    plumberPrices: {
        hourlyRate: 90,
        weekendSurcharge: 18,
        morningSurcharge: 9,
        eveningSurcharge: 24,
    },
}

// 👇 Types automatically derived
export type Pricing = typeof defaultPrices
// Optional convenience types (only if you want to use them elsewhere)
// export type CleaningPrices = Pricing['cleaningPrices']
// export type TradespersonPrices = Pricing['handymanPrices']