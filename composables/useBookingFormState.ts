// composables/useBookingFormState.ts

// const bookingStateMap = new Map<string, {
//   bookingBreakdown: Ref<{ label: string; price: number; units: number }[]>,
//   totalPrice: Ref<number>,
//   bookingDate: Ref<string>,
//   bookingTime: Ref<string>
// }>()

// export function useBookingFormState(key?: string) {
//   const route = useRoute()
//   const resolvedKey = key || route.params.subcategory?.toString() || route.params.category?.toString() || 'default';

//   if (!bookingStateMap.has(resolvedKey)) {
//     bookingStateMap.set(resolvedKey, {
//       bookingBreakdown: ref([]),
//       totalPrice: ref(0),
//       bookingDate: ref(''),
//       bookingTime: ref('')
//     })
//   }

//   return bookingStateMap.get(resolvedKey)!
// }

// The below legacy code was leaking states across forms
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
