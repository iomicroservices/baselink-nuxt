export default defineEventHandler(async (event) => {
    // Retrieve the body (form data) of the POST request
    const formData = await readBody(event);

    // Retrieve environment variables securely
    const config = useRuntimeConfig();
    const DATABASE_TOKEN = config.DATABASE_TOKEN;
    const DATABASE_BASE_ID = config.DATABASE_BASE_ID;
    const DATABASE_TABLE_ID = config.DATABASE_TABLE_ID;
    const DATABASE_URL = config.DATABASE_URL;

    // Prepare the Source payload
    const sourcePayload = {
        Channel: "BaseLink Website",
        currentUrl: formData.currentUrl,
        referrerUrl: formData.referrerUrl,
    };

    // Prepare the Requirements payload
    const requirementsPayload = {
        //Home cleaning
        bedrooms: formData.bedroomsInput,
        toilets: formData.toiletsInput,
        recommendedHours: formData.recommendedCleaningHours,
        //Single cleaning
        rooms: formData.roomInput,
        balconies: formData.balconyInput,
        carpets: formData.carpetInput,
        //Mobile car wash
        vehicle: formData.vehicleOptions,
        //Commercial cleaning
        selectedDays: formData.daysOptions,
        //Shared
        task: formData.taskOptions,
        propertyType: formData.propertyOptions,
        extras: formData.extraOptions,
        frequency: formData.frequencyOptions,
        selectedHours: formData.hoursOptions,
        startDate: formData.startDate,
        visitTime: formData.timeOptions,
        access: formData.accessOptions,
        parking: formData.parkingOptions,
        basket: formData.basket,
        tos: formData.termsCheckbox,
    }

    // Prepare the Requirements payload
    const contactDetailsPayload = {
        FullName: formData.fullName,
        CompanyName: formData.companyName,
        AddressOne: formData.addressOne,
        AddressTwo: formData.addressTwo,
        City: formData.addressCity,
        PostCode: formData.postCode,
        PhoneNumber: formData.phoneNumber,
        Email: formData.emailAddress,
    }

    // Get the user's IP address
    const ipAddress = event.node.req.headers['x-forwarded-for'] || event.node.req.socket.remoteAddress;

    // Define the Airtable API endpoint URL
    const url = `${DATABASE_URL}${DATABASE_BASE_ID}/${DATABASE_TABLE_ID}`;

    // Prepare the payload for Airtable API
    const payload = {
        fields: {
            Category: formData.category,
            Subcategory: formData.subcategory,
            Task: formData.taskOptions,
            Email: formData.emailAddress,
            Quote: formData.quote,
            startDate: formData.startDate,
            Requirements: JSON.stringify(requirementsPayload),
            contactDetails: JSON.stringify(contactDetailsPayload),
            customerNote: formData.requirementsNote,
            Marketing: formData.category === 'Commercial cleaning' ? true : formData.marketingCheckbox,
            Source: JSON.stringify(sourcePayload),
            ipAddress: ipAddress,
            // Add more fields here as needed
        }
    };

    // Make the API request to Airtable
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `${DATABASE_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        // Handle the response from Airtable
        if (response.ok) {
            const data = await response.json();
            return {
                status: 'success',
                message: 'Form submitted successfully!',
                data,
            };
        } else {
            throw new Error('Failed to submit form data');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        return {
            status: 'error',
            message: 'An error occurred while submitting the form.',
        };
    }
});
