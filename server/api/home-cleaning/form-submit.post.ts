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
        //home cleaning
        bedrooms: formData.bedroomsInput,
        toilets: formData.toiletsInput,
        cleaningFrequency: formData.frequencyOptionsInput,
        selectedHours: formData.hoursOptionsInput,
        recommendedHours: formData.recommendedCleaningHours,
        //single cleaning
        rooms: formData.roomInput,
        balconies: formData.balconyInput,
        carpets: formData.carpetInput,
        cleaningType: formData.typeOptionsInput,
        parking: formData.parkingOptionsInput,
        //shared
        propertyType: formData.homeOptionsInput || formData.propertyOptionsInput,
        extras: formData.extraHomeOptionsInput || formData.extraOptionsInput,
        startDate: formData.startDateInput,
        cleaningTime: formData.timeOptionsInput,
        access: formData.accessOptionsInput,
        basket: formData.basket,
    }

    // Prepare the Requirements payload
    const contactDetailsPayload = {
        FullName: formData.fullNameInput,
        addressOne: formData.addressOneInput,
        addressTwo: formData.addressTwoInput,
        addressCity: formData.addressCityInput,
        PostCode: formData.postCodeInput,
        PhoneNumber: formData.phoneNumberInput,
        Email: formData.emailInput,
    }

    // Get the user's IP address
    const ipAddress = event.node.req.headers['x-forwarded-for'] || event.node.req.socket.remoteAddress;

    // Define the Airtable API endpoint URL
    const url = `${DATABASE_URL}${DATABASE_BASE_ID}/${DATABASE_TABLE_ID}`;

    // Prepare the payload for Airtable API
    const payload = {
        fields: {
            Category: "Home cleaning",
            Email: formData.emailInput,
            Quote: formData.quote,
            startDate: formData.startDateInput,
            Requirements: JSON.stringify(requirementsPayload),
            customerNote: formData.requirementsInput,
            contactDetails: JSON.stringify(contactDetailsPayload),
            Marketing: formData.marketingInput,
            Source: JSON.stringify(sourcePayload),
            ipAddress: ipAddress,
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
