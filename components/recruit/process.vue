<script setup lang="ts">

const process = [
    { title: "Submit application", description: "Tell us a little about yourself and your experience — it only takes a few minutes.", icon: "mdi:form-select" },
    { title: "Background check", description: "We verify your details to keep the platform safe for everyone — it's fast and straightforward.", icon: "mdi:account-check-outline" },
    { title: "Orientation call", description: "We'll discuss your application, walk you through the platform, answer questions, and help you hit the ground running.", icon: "mdi:forum-outline" },
    { title: "Start earning", description: "Once you're approved, you'll be ready to pick up jobs near you and start earning straight away.", icon: "mdi:movie-open-star-outline" }
]

</script>

<template>
    <section class="section relative mx-auto">
        <!-- Grid -->
        <div class="grid md:grid-cols-2 gap-12">
            <div class="lg:w-3/4">
                <h2 id="how-to-join" class="heading2">
                    Joining BaseLink is super easy
                </h2>
                <p class="mt-3">
                    We've made joining BaseLink as smooth as possible — no long forms, no red tape. Just a quick
                    onboarding and you're ready to start earning with local jobs that fit your schedule.
                </p>
                <div class="flex space-x-5 pt-3">
                    <NuxtLink class="btn-primary" to="/work-with-us/apply">
                        Start application
                    </NuxtLink>
                    <NuxtLink class="btn-secondary" to="/work-with-us/jobs">
                        Search jobs
                    </NuxtLink>
                </div>
            </div>
            <!-- End Col -->

            <div class="space-y-6">

                <!-- Icon Block -->
                <div v-for="item in process" :key="item.title" class="flex gap-x-5 sm:gap-x-8">
                    <!-- Icon -->
                    <span
                        class="shrink-0 inline-flex justify-center items-center size-11 rounded-full border border-blue-200 bg-indigo-100 text-indigo-600 shadow-2xs mx-auto dark:bg-indigo-900/50 dark:border-gray-800 dark:text-indigo-100">
                        <UIcon :name="item.icon" class="shrink-0 size-6" />
                    </span>
                    <div class="grow">
                        <h3 class="text-lg font-semibold">
                            {{ item.title }}
                        </h3>
                        <p class="mt-1">
                            {{ item.description }}
                        </p>
                    </div>
                </div>
                <!-- End Icon Block -->
            </div>
            <!-- End Col -->
        </div>
        <!-- End Grid -->
    </section>
</template>