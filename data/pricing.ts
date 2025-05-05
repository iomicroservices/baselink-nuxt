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
    carwashPrices: {
        fullValet: 10,
        miniValet: 10,
        engine: 10,
        exterior: 10,
        interior: 10,
        headlight: 10,
        odour: 10,
        rim: 10,
        small: 10,
        medium: 10,
        large: 10,
        smallcom: 10,
        mediumcom: 10,
        largecom: 10,
        weekendSurcharge: 15,
        morningSurcharge: 5,
        eveningSurcharge: 21,       
    },
    handymanPrices: {
        hourlyRate: 72,
        weekendSurcharge: 15,
        morningSurcharge: 5,
        eveningSurcharge: 21,
    },
    carpenterPrices: {
        hourlyRate: 90,
        weekendSurcharge: 18,
        morningSurcharge: 9,
        eveningSurcharge: 24,
    },
    plumberPrices: {
        hourlyRate: 90,
        weekendSurcharge: 18,
        morningSurcharge: 9,
        eveningSurcharge: 24,
    },
    locksmithPrices: {
        hourlyRate: 72,
        weekendSurcharge: 15,
        morningSurcharge: 5,
        eveningSurcharge: 21,
    },
    gardenerPrices: {
        hourlyRate: 39,
        weekendSurcharge: 5,
        morningSurcharge: 5,
        eveningSurcharge: 5,
    },
    certification: {
        pat: {
            fixed: 0,
            unit: 90,
            weekendSurcharge: 15,
            morningSurcharge: 30,
            eveningSurcharge: 30,
        },
        cp12: {
            fixed: 0,
            unit: 90,
            weekendSurcharge: 15,
            morningSurcharge: 30,
            eveningSurcharge: 30,
        },
        firedom: {
            fixed: 0,
            unit: 285,
            weekendSurcharge: 15,
            morningSurcharge: 30,
            eveningSurcharge: 30,
        },
        firecom: {
            fixed: 0,
            unit: 345,
            weekendSurcharge: 15,
            morningSurcharge: 30,
            eveningSurcharge: 30,
        },
        epc: {
            fixed: 50,
            unit: 5,
            weekendSurcharge: 15,
            morningSurcharge: 5,
            eveningSurcharge: 25,
        },
        eicr: {
            fixed: 75,
            unit: 9,
            weekendSurcharge: 15,
            morningSurcharge: 5,
            eveningSurcharge: 25,
        },
    },

}

// 👇 Types automatically derived
export type Pricing = typeof defaultPrices
// Optional convenience types (only if you want to use them elsewhere)
// export type CleaningPrices = Pricing['cleaningPrices']
// export type TradespersonPrices = Pricing['handymanPrices']