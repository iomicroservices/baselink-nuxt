// composables/usePricing.ts

// 1️⃣ First: Add the interfaces at the top
interface CleaningPrices {
    hourlyPrice: number;
    basePrice: number;
    minimalPrice: number;
    roomPrice: number;
    balconyPrice: number;
    extrasPrice: number;
    carpetPrice: number;
    houseSurcharge: number;
    weekendSurcharge: number;
    morningSurcharge: number;
    eveningSurcharge: number;
}

interface TradespersonPrices {
    hourlyRate: number;
    weekendSurcharge: number;
    morningSurcharge: number;
    eveningSurcharge: number;
}

// 2️⃣ Then: Your actual usePricing function
export function usePricing(): {
    parkingPrice: number;
    cleaningPrices: CleaningPrices;
    handymanPrices: TradespersonPrices;
    plumberPrices: TradespersonPrices;
} {

    const parkingPrice = 12

    const cleaningPrices = {
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
    }

    const handymanPrices = {
        hourlyRate: 72,
        weekendSurcharge: 15,
        morningSurcharge: 5,
        eveningSurcharge: 24,
    }

    const plumberPrices = {
        hourlyRate: 90,
        weekendSurcharge: 18,
        morningSurcharge: 9,
        eveningSurcharge: 24,
    }

    return {
        parkingPrice,
        cleaningPrices,
        handymanPrices,
        plumberPrices
    }
}