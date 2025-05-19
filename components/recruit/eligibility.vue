<script setup lang="ts">

const form = reactive({
    conditions: {
        ukResident: false,
        hasBankAccount: false,
        selfEmployed: false,
        noConvictions: false,
        backgroundConsent: false
    }
})

const isEligible = computed(() =>
    Object.values(form.conditions).every(Boolean)
)

</script>

<template>
    <section class="section max-w-[75%]">
        <div>
            <h2 id="eligibility" class="heading2">
                Check if you're eligible
            </h2>
            <p class="pb-3">
                You need to meet the following criteria to join BaseLink.
            </p>
        </div>

        <UForm :state="form" class="space-y-4">
            <UCheckbox v-model="form.conditions.selfEmployed" label="I understand I will be self-employed" />
            <UCheckbox v-model="form.conditions.ukResident"
                label="I am resident in the UK and have the right to work" />
            <UCheckbox v-model="form.conditions.hasBankAccount" label="I have a UK bank account" />
            <UCheckbox v-model="form.conditions.noConvictions" label="I do not have any unspent convictions" />
            <UCheckbox v-model="form.conditions.backgroundConsent" label="I consent to a background check" />

            <div class="pt-5">
                <UButton
                    class="font-semibold"
                    type="submit"
                    :disabled="!isEligible"
                    :label="isEligible ? 'Eligible to apply' : 'Confirm eligibility'"
                    to="/work-with-us/apply"
                    size="xl" />
            </div>
        </UForm>
    </section>
</template>