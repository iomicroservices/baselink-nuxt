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
        //Mobile car wash
        serviceOptions: formData.serviceOptionsInput,
        vehicleOptions: formData.vehicleOptionsInput,
        washFrequencyOptions: formData.washFrequencyOptionsInput,
        washTimeOptions: formData.washTimeOptionsInput,
        //Commercial cleaning
        propertyType: formData.commercialPropertyOptionsInput,
        cleaningDays: formData.daysOptionsInput,
        cleaningFrequency: formData.commercialFrequencyOptionsInput,
        cleaningHours: formData.unitHoursOptionsInput,
        cleaningTime: formData.commercialTimeOptionsInput,
        //Shared
        startDate: formData.startDateInput,
        tos: formData.termsInput,
    }

    // Prepare the Requirements payload
    const contactDetailsPayload = {
        FullName: formData.fullNameInput,
        CompanyName: formData.companyNameInput,
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
            Email: formData.emailInput,
            Category: formData.category,
            startDate: formData.startDateInput,
            Requirements: JSON.stringify(requirementsPayload),
            customerNote: formData.requirementsInput,
            contactDetails: JSON.stringify(contactDetailsPayload),
            Marketing: formData.category === 'Commercial cleaning' ? true : formData.marketingInput,
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
