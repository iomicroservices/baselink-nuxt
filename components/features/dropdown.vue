<template>
  <div class="w-3/4 text-left">
    <details class="group border-s-4 border-green-500 bg-gray-50 dark:bg-slate-900 py-2 px-4">
      <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
        <h2 class="text-sm font-semibold dark:text-slate-300">
          Free call features 👀
        </h2>

        <span class="relative size-5 shrink-0">
          <LogoPlus />
          <LogoMinus />
        </span>
      </summary>

      <div class="space-y-4 mt-4 leading-relaxed text-gray-700 dark:text-gray-200">

        <slot name='custom-content' />

        <!-- List item 1 -->
        <div class="flex items-start">
          <span class="mr-2">🏠</span>
          <p>Bring your number home: Effortlessly transfer your existing number to BaseLink.</p>
        </div>

        <!-- Add more list items as needed -->
      </div>
    </details>
  </div>
</template>
