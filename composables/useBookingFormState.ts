// composables/useBookingFormState.ts

const bookingBreakdown = ref<{ label: string; price: number; units: number }[]>([]);
const totalPrice = ref<number>(0);
const bookingDate = ref<string>('');
const bookingTime = ref<string>('');

export function useBookingFormState() {
  return {
    bookingBreakdown,
    totalPrice,
    bookingDate,
    bookingTime
  };
}
