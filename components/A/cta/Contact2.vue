<script setup lang="ts">
interface Props {
  title: string
  image: string
  alt: string
  ogImage: string
  link1: string
  contact1: string
  desc1: string
  link2: string
  contact2: string
  desc2: string
  link3: string
  contact3: string
  desc3: string
}

withDefaults(defineProps<Props>(), {
  title: 'Looking for more info?',
  image: 'https://shuffle.dev/aurora-assets/headers/header-dark-theme-center.png',
  alt: 'Get a virtual landline number for your business in the UK',
  ogImage: 'https://shuffle.dev/aurora-assets/headers/header-dark-theme-center.png',
  link1: '/',
  contact1: 'Visit the Help Centre',
  desc1: 'Find answers and support quickly',
  link2: '/',
  contact2: 'Get help in the app',
  desc2: 'Just head to «Help» in the app',
  link3: '/',
  contact3: 'Email us',
  desc3: 'Reach us at info@elandline.co.uk',

})
</script>

<template>
  <section class="container relative py-20 mx-auto">
    <div class="px-4">
      <h2 class="heading2">
        {{ title }}
      </h2>
      <!-- Card Section -->
      <div class="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
        <!-- Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          <!-- Card 1 -->
          <NuxtLink
            class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
            :to="link1"
          >
            <div class="p-4 md:p-5">
              <div class="flex">
                <svg class="mt-1 flex-shrink-0 size-5 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <div class="grow ms-5">
                  <h3 class="group-hover:text-primary-600 font-semibold text-gray-800 dark:group-hover:text-primary-300 dark:text-gray-200">
                    {{ contact1 }}
                  </h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    {{ desc1 }}
                  </p>
                </div>
              </div>
            </div>
          </NuxtLink>
          <!-- End Card 1 -->

          <!-- Card 2 -->
          <NuxtLink
            class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
            :to="link2"
          >
            <div class="p-4 md:p-5">
              <div class="flex">
                <svg class="mt-1 flex-shrink-0 size-5 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <div class="grow ms-5">
                  <h3 class="group-hover:text-primary-600 font-semibold text-gray-800 dark:group-hover:text-primary-300 dark:text-gray-200">
                    {{ contact2 }}
                  </h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    {{ desc2 }}
                  </p>
                </div>
              </div>
            </div>
          </NuxtLink>
          <!-- End Card 2 -->

          <!-- Card 3 -->
          <NuxtLink
            class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
            :to="link3"
          >
            <div class="p-4 md:p-5">
              <div class="flex">
                <svg class="mt-1 flex-shrink-0 size-5 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <div class="grow ms-5">
                  <h3 class="group-hover:text-primary-600 font-semibold text-gray-800 dark:group-hover:text-primary-300 dark:text-gray-200">
                    {{ contact3 }}
                  </h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    {{ desc3 }}
                  </p>
                </div>
              </div>
            </div>
          </NuxtLink>
          <!-- End Card 3 -->
        </div>
        <!-- End Grid -->
      </div>
      <!-- End Card Section -->
    </div>
  </section>
</template>
