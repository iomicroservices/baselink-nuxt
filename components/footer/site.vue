<template>
  <div>
    <NuxtLink class="text-primary-700 dark:text-white flex-none font-semibold text-xl focus:outline-hidden focus:opacity-80"
      to="/" aria-label="Brand">
      BaseLink
    </NuxtLink>
    <p class="mt-1 text-xs sm text-gray-600 dark:text-neutral-400">
      Mohana Ltd t/a BaseLink © {{ new Date().getFullYear() }}
    </p>
  </div>
</template>
