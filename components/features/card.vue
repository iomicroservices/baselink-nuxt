<script lang="ts" setup>
interface Props {
  description?: string
  colour?: string
  path?: string
  published?: boolean
}
withDefaults(defineProps<Props>(), {
  description: '',
  colour: 'gray',
  path: '/',
  published: false,
})
</script>

<template>
  <NuxtLink :to="path"
    class="relative group overflow-hidden px-4 pt-4 sm:px-6 sm:pt-6 rounded-xl bg-white border dark:bg-gray-900 border-gray-200 dark:border-gray-800 h-full flex flex-col hover:dark:border-indigo-400">
    <div aria-hidden="true"
      :class="`inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-${colour}-500 to-white dark:from-${colour}-500 dark:to-white blur-2xl opacity-35 group-hover:opacity-50 dark:opacity-10 dark:group-hover:opacity-15`" />
    <div class="relative flex-1 flex flex-col">

      <slot name="card-image" />

      <slot name="card-title" />

      <div v-if="description" class="my-6 grow rounded-b-[--card-border-radius]">
        <p class="text-gray-800 dark:text-slate-200 -mb-3">
          {{ description }}
        </p>
      </div>
      <div>
        <slot name="card-link" />
      </div>

    </div>
  </NuxtLink>
</template>
