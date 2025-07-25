export default defineEventHandler(async (event) => {
    // Retrieve the body (form data) of the POST request
    const formData = await readBody(event);

    // Retrieve environment variables securely
    const config = useRuntimeConfig();
    const DATABASE_TOKEN = config.DATABASE_TOKEN;
    const DATABASE_BASE_ID = config.DATABASE_BASE_ID;
    const DATABASE_APPLICANTS_TABLE = config.DATABASE_APPLICANTS_TABLE;
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
        
    }

    // Get the user's IP address
    const ipAddress = event.node.req.headers['x-forwarded-for'] || event.node.req.socket.remoteAddress;

    // Define the Airtable API endpoint URL
    const url = `${DATABASE_URL}${DATABASE_BASE_ID}/${DATABASE_APPLICANTS_TABLE}`;

    // Prepare the payload for Airtable API
    const payload = {
        fields: {
            Email: formData.emailAddress,
            FullName: formData.fullName,
            PostCode: formData.postCode,
            PhoneNumber: formData.phoneNumber,
            SelfEmployedEligibility: formData.selfEmployed,
            UKResidentEligibility: formData.ukResident,
            UKBankEligibility: formData.hasBankAccount,
            ConvictionsEligibility: formData.noConvictions,
            DBSConsentEligibility: formData.backgroundConsent,
            Trade: formData.skillsOptions,
            Experience: formData.experienceOptions,
            ExperienceDetails: formData.requirementsNote,
            WorkingDays: JSON.stringify(formData.availabilityDaysOptions),
            WorkingHours: formData.hoursOptions,
            WorkingTimes: formData.timeOptions,
            tos: formData.termsCheckbox,
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
