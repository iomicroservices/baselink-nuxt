<script setup lang="ts">
interface Props {
  title: string
  description: string
  feature1: string
  feature2: string
  feature3: string
  feature4: string
  plan: string
  amount: string
  benefit1: string
  benefit2: string
  benefit3: string
  benefit4: string
  button: string
  path: string
}

withDefaults(defineProps<Props>(), {
  title: 'The ideal plan for small business',
  description: 'Choose from Local, National or Freephone numbers, and easily direct calls to your existing phone. Enjoy tonnes of call features included as standard that deliver the bang for your buck.',
  feature1: 'Made for small business',
  feature2: '12+ free features',
  feature3: 'Smart call divert',
  feature4: 'Self-service console',
  plan: 'Unlimited Minutes',
  amount: '11',
  benefit1: 'Monthly rolling plan',
  benefit2: 'Cancel at any time',
  benefit3: 'Competitive pricing',
  benefit4: 'Satisfaction guarantee',
  button: 'Subscribe now',
  path: '/',
})
</script>

<template>
  <section class="container relative py-20">
    <div class="px-4">
      <div class="flex flex-wrap md:-m-8">
        <!-- pricing content START -->
        <div class="w-full md:w-3/5 md:p-8">
          <div class="py-9 md:max-w-md">
            <h2 class="heading2">
              {{ title }}
            </h2>
            <p class="dark:text-zinc-300 mx-auto mb-5">
              {{ description }}
            </p>
            <div class="flex flex-wrap md:-m-2">
              <div class="w-auto p-2">
                <div class="flex flex-wrap px-3 py-2 bg-white dark:bg-slate-800 rounded-full">
                  <div class="w-auto mr-2 pt-1">
                    <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z" fill="#27a745" />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p class="text-sm text-gray-900 dark:text-gray-200 font-bold">
                      {{ feature1 }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-auto p-2">
                <div class="flex flex-wrap px-3 py-2 bg-white dark:bg-slate-800 rounded-full">
                  <div class="w-auto mr-2 pt-1">
                    <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z" fill="#27a745" />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p class="text-sm text-gray-900 dark:text-gray-200 font-bold">
                      {{ feature2 }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-auto p-2">
                <div class="flex flex-wrap px-3 py-2 bg-white dark:bg-slate-800 rounded-full">
                  <div class="w-auto mr-2 pt-1">
                    <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z" fill="#27a745" />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p class="text-sm text-gray-900 dark:text-gray-200 font-bold">
                      {{ feature3 }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-auto p-2">
                <div class="flex flex-wrap px-3 py-2 bg-white dark:bg-slate-800 rounded-full">
                  <div class="w-auto mr-2 pt-1">
                    <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z" fill="#27a745" />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p class="text-sm text-gray-900 dark:text-gray-200 font-bold">
                      {{ feature4 }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- pricing content END -->

        <!-- price card START -->
        <div class="w-full md:w-2/5 p4 md:p-8">
          <!-- Start Middle Plan -->
          <div>
            <div class="relative p-8 lg:p-6 xl:p-8 rounded-2xl dark:bg-slate-800">
              <div class="absolute inset-0 w-full h-full transform translate-x-2 translate-y-2 bg-primary-400/20 rounded-2xl" />
              <div class="absolute inset-0 w-full h-full border-2 border-slate-800 rounded-2xl" />
              <div class="relative flex pb-5 space-x-5 border-b border-gray-200 lg:space-x-3 xl:space-x-5">
                <svg class="w-16 h-16 text-indigo-400 rounded-2xl" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><rect x="0" y="0" width="150" height="150" rx="15" /></defs><g fill="none" fill-rule="evenodd"><mask fill="#fff"><use xlink:href="#plan1" /></mask><use fill="currentColor" xlink:href="#plan1" /><circle fill-opacity=".3" fill="#FFF" mask="url(#plan1)" cx="125" cy="25" r="50" /><path fill-opacity=".3" fill="#FFF" mask="url(#plan1)" d="M-33 83H67v100H-33z" /></g></svg>
                <div class="relative flex flex-col items-start">
                  <h3 class="text-xl font-bold dark:text-gray-300">
                    {{ plan }}
                  </h3>
                  <p class="tracking-tight text-gray-500">
                    <span class="text-sm transform inline-block -translate-y-2.5 relative">£</span>
                    <span class="text-3xl font-bold text-gray-800 dark:text-white">{{ amount }}</span>
                    <span class="text-sm -translate-y-0.5 inline-block transform dark:text-gray-300">/ month</span>
                  </p>
                </div>
              </div>

              <ul class="relative py-12 space-y-3">
                <li class="flex items-center space-x-2 text-sm font-medium text-gray-700">
                  <svg class="w-6 h-6 text-primary-500/50 dark:text-slate-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                  <span class="text-gray-800 dark:text-gray-200">{{ benefit1 }}</span>
                </li>
                <li class="flex items-center space-x-2 text-sm font-medium text-gray-700">
                  <svg class="w-6 h-6 text-primary-500/50 dark:text-slate-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                  <span class="text-gray-800 dark:text-gray-200">{{ benefit2 }}</span>
                </li>
                <li class="flex items-center space-x-2 text-sm font-medium text-gray-700">
                  <svg class="w-6 h-6 text-primary-500/50 dark:text-slate-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                  <span class="text-gray-800 dark:text-gray-200">{{ benefit3 }}</span>
                </li>
                <li class="flex items-center space-x-2 text-sm font-medium text-gray-700">
                  <svg class="w-6 h-6 text-primary-500/50 dark:text-slate-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                  <span class="text-gray-800 dark:text-gray-200">{{ benefit4 }}</span>
                </li>
              </ul>

              <NuxtLink :to="path" class="relative flex items-center justify-center w-full px-5 py-5 text-lg font-medium text-white rounded-xl group">
                <span class="w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-out duration-200 rounded-xl bg-primary-600" />
                <span class="absolute inset-0 w-full h-full border-2 border-slate-800 dark:border-slate-500 rounded-xl" />
                <span class="relative">{{ button }}</span>
                <svg class="w-5 h-5 ml-2 transition-all duration-200 ease-out transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </NuxtLink>
            </div>
          </div>
          <!-- End Middle Plan -->
        </div>
        <!-- pricing card END -->
      </div>
    </div>
  </section>
</template>
