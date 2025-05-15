<template>
  <div>
    <NuxtLink
      class="text-primary-700 dark:text-white flex-none font-semibold text-xl focus:outline-hidden focus:opacity-80"
      to="/" aria-label="Brand">
      BaseLink
    </NuxtLink>
    <p class="mt-1 text-sm text-gray-700 dark:text-neutral-300">
      <NuxtLink to="https://find-and-update.company-information.service.gov.uk/company/14430827" target="_blank"
        rel="nofollow noopener noreferrer">Mohana Ltd</NuxtLink> © {{ new
      Date().getFullYear() }}
    </p>
  </div>
</template>
