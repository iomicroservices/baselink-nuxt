<template>
  <div class="w-full md:w-3/4 text-left">
    <details class="group border-s-4 border-indigo-500 bg-gray-50 dark:bg-slate-900 py-2 px-4">
      <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
        <h2 class="text-sm font-semibold dark:text-slate-300">
          Why choose BaseLink 🤔
        </h2>

        <span class="relative size-5 shrink-0">
          <LogoPlus />
          <LogoMinus />
        </span>
      </summary>

      <div class="space-y-0 mt-4 leading-relaxed text-gray-700 dark:text-gray-200">

        <!-- dynamic list items from content file -->
        <slot name='custom-content' />
        
      </div>
    </details>
  </div>
</template>
