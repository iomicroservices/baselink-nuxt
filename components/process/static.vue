<script setup lang="ts">
interface Props {
    title?: string
    step1?: string
    step2?: string
    step3?: string
    step1text?: string
    step2text?: string
    step3text?: string
}

withDefaults(defineProps<Props>(), {
    title: 'Get connected and give your business superpowers',
    step1: 'Select your number',
    step2: 'Complete payment',
    step3: 'Start taking calls',
    step1text: 'Choose your ideal area code and provide us with a forwarding number.',
    step2text: 'Pay with confidence through our secure payment portal to subscribe.',
    step3text: 'You`re all set up and ready to connect with customers wherever you are.',
})
</script>

<template>
    <section class="section">
        <div class="mx-auto">
            <h2 class="heading2">
                {{ title }}
            </h2>
            <div class="flex flex-wrap">
                <div class="w-auto md:w-1/2 lg:w-1/3 pb-5 md:pb-0">
                    <div class="flex flex-wrap items-center mb-2">
                        <div class="w-auto p-3">
                            <div
                                class="flex items-center justify-center w-16 h-16 text-xl text-gray-900 dark:text-gray-200 font-black bg-white dark:bg-slate-800 border-4 border-primary-200 rounded-full">
                                1
                            </div>
                        </div>
                        <div class="md:flex-1 py-3">
                            <div class="bg-gray-300 h-px" />
                        </div>
                    </div>
                    <div class="md:w-3/4">
                        <h3 class="font-heading mb-4 text-2xl text-gray-900 dark:text-gray-200 font-bold">
                            {{ step1 }}
                        </h3>
                        <p class="text-gray-700 dark:text-slate-300 font-bold">
                            {{ step1text }}
                        </p>
                    </div>
                </div>
                <div class="w-auto md:w-1/2 lg:w-1/3 pb-5 md:pb-0">
                    <div class="flex flex-wrap items-center mb-2">
                        <div class="w-auto p-3">
                            <div
                                class="flex items-center justify-center w-16 h-16 text-xl text-gray-900 dark:text-gray-200 font-black bg-white dark:bg-slate-800 border-4 border-primary-400 rounded-full">
                                2
                            </div>
                        </div>
                        <div class="md:flex-1 py-3">
                            <div class="bg-gray-300 h-px" />
                        </div>
                    </div>
                    <div class="md:w-3/4">
                        <h3 class="font-heading mb-4 text-2xl text-gray-900 dark:text-gray-200 font-bold">
                            {{ step2 }}
                        </h3>
                        <p class="text-gray-700 dark:text-slate-300 font-bold">
                            {{ step2text }}
                        </p>
                    </div>
                </div>
                <div class="w-auto md:w-1/2 lg:w-1/3 pb-5 md:pb-0">
                    <div class="flex flex-wrap items-center mb-2">
                        <div class="w-auto p-3">
                            <div
                                class="flex items-center justify-center w-16 h-16 text-xl text-gray-900 dark:text-gray-200 font-black bg-white dark:bg-slate-800 border-4 border-primary-600 rounded-full">
                                3
                            </div>
                        </div>
                        <div class="md:flex-1 py-3" />
                    </div>
                    <div class="md:w-3/4">
                        <h3 class="font-heading mb-4 text-2xl text-gray-900 dark:text-gray-200 font-bold">
                            {{ step3 }}
                        </h3>
                        <p class="text-gray-700 dark:text-slate-300 font-bold">
                            {{ step3text }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
