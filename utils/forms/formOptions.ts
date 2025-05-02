export const homeCleaningOptions = {
    homeOptions: ['Apartment', 'House', 'Cottage', 'Bungalow'],
    accessOptions: ['Meet in person', 'Concierge', 'Lock box', 'Pin code', 'Key with neighbour'],
    extraHomeOptions: [
            { label: 'Cleaning products (+£4.80)', value: 'cleaning-products' },
            { label: 'Dishwashing', value: 'dishwashing' },
            { label: 'Laundry', value: 'laundry' },
            { label: 'Ironing', value: 'ironing' },
            { label: 'Inside fridge', value: 'inside-fridge' },
            { label: 'Inside oven', value: 'inside-oven' }
        ],
    frequencyOptions: ['Monthly', 'Fortnightly', 'Weekly', 'One-off'],
    hoursOptions: [
            { label: '2 hours', value: 2 },
            { label: '2.5 hours', value: 2.5 },
            { label: '3 hours', value: 3 },
            { label: '3.5 hours', value: 3.5 },
            { label: '4 hours', value: 4 },
            { label: '4.5 hours', value: 4.5 },
            { label: '5 hours', value: 5 },
            { label: '5.5 hours', value: 5.5 },
            { label: '6 hours', value: 6 },
            { label: '6.5 hours', value: 6.5 },
            { label: '7 hours', value: 7 },
            { label: '7.5 hours', value: 7.5 },
            { label: '8 hours', value: 8 },
            { label: '8.5 hours', value: 8.5 },
            { label: '9 hours', value: 9 },
            { label: '9.5 hours', value: 9.5 },
            { label: '10 hours', value: 10 }
        ],
    timeOptions: ['Flexible', 'Morning 8am - 12pm', 'Afternoon 12pm - 5pm', 'Evening 5pm - 8pm', 'Overnight', 'Not sure'],

};

export const singleCleaningOptions = {
    typeOptions: ['Deep cleaning', 'End of tenancy cleaning', 'After builders cleaning', 'Carpet cleaning', 'Upholstery cleaning'],
    propertyOptions: ['Apartment', 'House', 'Cottage', 'Bungalow'],
    accessOptions: ['Meet in person', 'Concierge', 'Lock box', 'Pin code', 'Key with neighbour'],
    parkingOptions: ['Free parking', 'Paid parking'],
    extraOptions: ['Dishwashing', 'Inside windows', 'Inside fridge', 'Inside freezer', 'Inside oven', 'Laundry', 'Ironing'],
    timeOptions: ['Flexible', 'Morning 8am - 12pm', 'Afternoon 12pm - 5pm', 'Evening 5pm - 8pm', 'Overnight', 'Not sure']

};

export const commercialCleaningOptions = {
    propertyOptions: ['Office', 'Airbnb rental', 'Holiday rental', 'Residential block', 'Serviced apartment', 'Retail unit', 'Restaurant or Cafe', 'Bar or Pub', 'School or Nursery', 'Warehouse', 'Light industrial', 'Hotel', 'Other'],
    daysOptions: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    frequencyOptions: ['Daily', 'Weekly', 'Fortnightly', 'Monthly', 'One-off', 'Not sure'],
    unitHoursOptions: ['2 hours', '3 hours', '4+ hours', 'Varies', 'Not sure'],
    timeOptions: ['Flexible', 'Morning 8am - 12pm', 'Afternoon 12pm - 5pm', 'Evening 5pm - 8pm', 'Overnight', 'Not sure']

};

export const mobileCarWashOptions = {
    serviceOptions: ['Full valet', 'Mini valet', 'Exterior wash', 'Interior clean', 'Engine bay clean', 'Headlight restoration', 'Odour removal', 'Rim refurbishment', 'Other'],
    vehicleOptions: ['Small - hatchback ', 'Medium - saloon', 'Large - SUV', 'Small commercial', 'Medium commercial', 'Large commercial'],
    frequencyOptions: ['Weekly', 'Fortnightly', 'Monthly', 'One-off', 'Not sure'],
    timeOptions: ['Flexible', 'Morning 8am - 12pm', 'Afternoon 12pm - 5pm', 'Evening 5pm - 8pm', 'Overnight', 'Not sure']
};
