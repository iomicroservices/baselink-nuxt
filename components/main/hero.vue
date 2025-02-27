<script setup lang="ts">
interface Props {
  badge: string
  title: string
  description: string
  alt: string
  ogImage: string
  button1: string
  button2: string
}

withDefaults(defineProps<Props>(), {
  badge: 'Only £11/month • Unlimited minutes',
  title: 'Handle customer calls like a pro with your virtual business number',
  description: 'It takes a couple of clicks to get connected, just like magic! We`ll shoot across your new business number by email, professionally configured and ready to take calls. Choose from Local, National or Freephone numbers, and easily direct calls to your existing phone. Plus, enjoy free call features for superior customer engagement.',
  alt: 'Get a virtual landline number for your business in the UK',
  ogImage: 'https://shuffle.dev/aurora-assets/headers/header-dark-theme-center.png',
  button1: '/',
  button2: '/',
})
</script>

<template>
  <header class="section">
    <div class="relative mx-auto">
      <div class="container px-4 mx-auto">
        <div class="max-w-2xl mb-14 mx-auto text-center">
          <!-- badge section START -->
          <div class="group relative inline-flex items-center rounded-full overflow-hidden shadow-3xl">
            <div
              class="animate-showLine absolute bottom-0 left-1/2 transform -translate-x-1/2 p-px mx-auto w-auto bg-gradient-to-r from-transparent via-yellowGreen-500 to-transparent" />
            <div
              class="flex flex-wrap sm:flex-nowrap items-center px-4 py-2 bg-primary-100 dark:bg-primary-200/20 rounded-full transition duration-300">
              <span class="text-xs text-primary-600 dark:text-primary-200 font-semibold">{{ badge }}</span>
            </div>
          </div>
          <!-- badge section END -->

          <!-- main hero section START -->
          <div class="max-w-lg sm:max-w-xl lg:max-w-none mx-auto">
            <h1 class="heading1">
              {{ title }}
            </h1>
            <p class="dark:text-zinc-300 mx-auto mb-5">
              {{ description }}
            </p>

            <FeaturesDropdown />

            <!-- Buttons container -->
            <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">

              <!-- Button 1 -->
              <NuxtLink :to="button1"
                class="px-5 h-12 font-bold text-white inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-primary-600 to-violet-600 hover:from-violet-600 hover:to-primary-600 border border-transparent rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 dark:focus:ring-offset-gray-800">
                Get connected 🚀
              </NuxtLink>

              <!-- Button 2 -->
              <NuxtLink :to="button2"
                class="px-5 h-12 font-bold text-gray-900 dark:text-gray-100 bg-slate-200 dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-lg flex items-center justify-center hover:bg-slate-300 hover:dark:bg-slate-800 transition-colors duration-300">
                Find out more 👇
              </NuxtLink>
            </div>
          </div>
          <!-- main hero section END -->
        </div>

        <!-- hero image section START -->
        <NuxtImg :src="ogImage" :alt="alt" class="w-full" format="webp" />
        <!-- hero image section END -->
      </div>
    </div>
  </header>
</template>
